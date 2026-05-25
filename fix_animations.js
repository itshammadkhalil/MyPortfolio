const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'src/components/sections');
const files = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Global replacements for all sections
  content = content.replace(/margin:\s*"-100px"/g, 'margin: "-20px"');
  content = content.replace(/duration:\s*0\.6/g, 'duration: 0.4');
  content = content.replace(/y:\s*30/g, 'y: 15');

  // Specific replacements for Projects and Testimonials
  if (file === 'ProjectsSection.tsx' || file === 'TestimonialsSection.tsx') {
    content = content.replace(/initial=\{\{\s*opacity:\s*0,\s*y:\s*20\s*\}\}/g, 'initial={{ opacity: 0 }}');
    content = content.replace(/whileInView=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}/g, 'whileInView={{ opacity: 1 }}');
    content = content.replace(/transition=\{\{\s*duration:\s*0\.5,\s*delay:\s*index\s*\*\s*0\.1\s*\}\}/g, 'transition={{ duration: 0.4 }}');
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

// Add smooth scrolling to globals.css
const globalsPath = path.join(__dirname, 'src/app/globals.css');
if (fs.existsSync(globalsPath)) {
  let globals = fs.readFileSync(globalsPath, 'utf8');
  if (!globals.includes('scroll-behavior: smooth;')) {
    // find html { block or append it
    if (globals.includes('html {')) {
      globals = globals.replace('html {', 'html {\n  scroll-behavior: smooth;');
    } else {
      globals = 'html {\n  scroll-behavior: smooth;\n}\n\n' + globals;
    }
    fs.writeFileSync(globalsPath, globals, 'utf8');
  }
}

console.log('Animations fixed!');
