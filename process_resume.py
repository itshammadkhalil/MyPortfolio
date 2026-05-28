import re

with open("raw_resume.html", "r", encoding="utf-8") as f:
    html = f.read()

# Extract styles
style_match = re.search(r'<style>(.*?)</style>', html, re.DOTALL)
styles = style_match.group(1) if style_match else ""

lines = styles.split('\n')
scoped_lines = []
for line in lines:
    line_stripped = line.strip()
    if line_stripped.startswith('@') or not '{' in line_stripped or line_stripped.startswith('/*'):
        scoped_lines.append(line)
        continue
    
    if '{' in line:
        parts = line.split('{')
        selectors = parts[0]
        body = '{'.join(parts[1:])
        
        scoped_selectors = []
        for sel in selectors.split(','):
            sel = sel.strip()
            if not sel: continue
            if sel == "body":
                scoped_selectors.append("body")
                scoped_selectors.append("#resume-wrapper")
            else:
                scoped_selectors.append(f"#resume-wrapper {sel}")
        scoped_lines.append(", ".join(scoped_selectors) + " {" + body)
    else:
        scoped_lines.append(line)

new_styles = "\n".join(scoped_lines)
new_styles = new_styles.replace('body { background: #ffffff; padding: 0; }', '#resume-wrapper { background: #ffffff; padding: 0; }')
new_styles = new_styles.replace('body { background: white; }', '#resume-wrapper { background: white; }')

# Extract body
body_match = re.search(r'<body>(.*?)</body>', html, re.DOTALL)
body_html = body_match.group(1).strip() if body_match else ""

# Escape backticks
new_styles = new_styles.replace('`', '\\`')
body_html = body_html.replace('`', '\\`')

page_tsx_content = f"""import {{ Metadata }} from 'next';
import DownloadButton from './DownloadButton';

export const metadata: Metadata = {{
  title: 'Hammad Khalil — CV',
}};

const htmlContent = `
<style>
{new_styles}
</style>

<div id="resume-wrapper">
{body_html}
</div>
`;

export default function ResumePage() {{
  return (
    <>
      <DownloadButton />
      <div 
        id="resume-root" 
        dangerouslySetInnerHTML={{{{ __html: htmlContent }}}} 
      />
    </>
  );
}}
"""

with open("src/app/resume/page.tsx", "w", encoding="utf-8") as f:
    f.write(page_tsx_content)

print("Resume page updated successfully!")
