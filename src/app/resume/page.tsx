import { Metadata } from 'next';
import DownloadButton from './DownloadButton';

export const metadata: Metadata = {
  title: 'Hammad Khalil — CV',
};

const htmlContent = `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap');

  #resume-wrapper * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #f8f9fa !important;
  }

  #resume-wrapper {
    font-family: 'Inter', sans-serif;
    background: #f8f9fa;
    color: #1a1a2e;
    font-size: 14px;
    line-height: 1.6;
    min-height: 100vh;
    padding: 1px;
  }

  #resume-wrapper .page {
    max-width: 850px;
    margin: 30px auto;
    background: #ffffff;
    box-shadow: 0 20px 60px rgba(0,0,0,0.12);
    border-radius: 4px;
    overflow: hidden;
  }

  /* HEADER */
  #resume-wrapper .header {
    background: #0A192F;
    padding: 44px 50px 36px;
    position: relative;
    overflow: hidden;
  }

  #resume-wrapper .header::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 220px; height: 220px;
    border-radius: 50%;
    background: rgba(100,255,218,0.06);
  }

  #resume-wrapper .header::after {
    content: '';
    position: absolute;
    bottom: -40px; left: 30%;
    width: 140px; height: 140px;
    border-radius: 50%;
    background: rgba(100,255,218,0.04);
  }

  #resume-wrapper .header-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 30px;
  }

  #resume-wrapper .name-block h1 {
    font-size: 36px;
    font-weight: 700;
    color: #CCD6F6;
    letter-spacing: -0.5px;
    line-height: 1.1;
  }

  #resume-wrapper .name-block h1 span {
    color: #64FFDA;
  }

  #resume-wrapper .name-block .title {
    font-family: 'Fira Code', monospace;
    font-size: 13px;
    color: #64FFDA;
    margin-top: 8px;
    opacity: 0.9;
  }

  #resume-wrapper .contact-block {
    text-align: right;
    flex-shrink: 0;
  }

  #resume-wrapper .contact-block a,
  #resume-wrapper .contact-block span {
    display: block;
    color: #8892b0;
    font-size: 12.5px;
    text-decoration: none;
    margin-bottom: 4px;
    transition: color 0.2s;
  }

  #resume-wrapper .contact-block a:hover { color: #64FFDA; }

  #resume-wrapper .contact-block .icon {
    display: inline-block;
    width: 14px;
    margin-right: 5px;
    color: #64FFDA;
  }

  #resume-wrapper .tagline {
    margin-top: 18px;
    padding-top: 18px;
    border-top: 1px solid rgba(100,255,218,0.15);
    color: #8892b0;
    font-size: 13px;
    max-width: 580px;
    line-height: 1.7;
  }

  /* BODY */
  #resume-wrapper .body {
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 0;
  }

  #resume-wrapper .main-col {
    padding: 36px 40px 40px 50px;
    border-right: 1px solid #f0f0f0;
  }

  #resume-wrapper .side-col {
    padding: 36px 30px 40px;
    background: #fafbfc;
  }

  /* SECTION */
  #resume-wrapper .section { margin-bottom: 32px; }

  #resume-wrapper .section-title {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #64FFDA;
    background: #0A192F;
    display: inline-block;
    padding: 3px 10px;
    border-radius: 2px;
    margin-bottom: 16px;
  }

  /* EXPERIENCE ITEM */
  #resume-wrapper .exp-item {
    margin-bottom: 22px;
    padding-bottom: 22px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    padding-left: 16px;
  }

  #resume-wrapper .exp-item::before {
    content: '';
    position: absolute;
    left: 0; top: 6px;
    width: 3px; height: calc(100% - 22px);
    background: linear-gradient(to bottom, #64FFDA, transparent);
    border-radius: 2px;
  }

  #resume-wrapper .exp-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  #resume-wrapper .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 4px;
  }

  #resume-wrapper .exp-title {
    font-size: 15px;
    font-weight: 600;
    color: #1a1a2e;
  }

  #resume-wrapper .exp-date {
    font-family: 'Fira Code', monospace;
    font-size: 11px;
    color: #0A192F;
    background: rgba(100,255,218,0.25);
    padding: 2px 8px;
    border-radius: 3px;
    white-space: nowrap;
    flex-shrink: 0;
    margin-left: 10px;
    margin-top: 2px;
    font-weight: 600;
  }

  #resume-wrapper .exp-company {
    font-size: 12.5px;
    color: #0A192F;
    font-weight: 500;
    margin-bottom: 8px;
    opacity: 0.7;
  }

  #resume-wrapper .exp-company .badge {
    display: inline-block;
    background: rgba(10,25,47,0.07);
    font-size: 10px;
    padding: 1px 7px;
    border-radius: 10px;
    margin-left: 6px;
    font-weight: 600;
    color: #0A192F;
    opacity: 1;
  }

  #resume-wrapper .exp-list {
    list-style: none;
    padding: 0;
  }

  #resume-wrapper .exp-list li {
    font-size: 13px;
    color: #4a4a6a;
    margin-bottom: 5px;
    padding-left: 14px;
    position: relative;
    line-height: 1.55;
  }

  #resume-wrapper .exp-list li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #64FFDA;
    font-size: 10px;
    top: 2px;
  }

  /* CERT ITEM */
  #resume-wrapper .cert-item {
    margin-bottom: 14px;
    padding: 12px 14px;
    background: #fff;
    border-radius: 6px;
    border: 1px solid #eef0f3;
    border-left: 3px solid #64FFDA;
  }

  #resume-wrapper .cert-name {
    font-size: 12.5px;
    font-weight: 600;
    color: #1a1a2e;
    margin-bottom: 3px;
    line-height: 1.4;
  }

  #resume-wrapper .cert-meta {
    font-size: 11px;
    color: #8892b0;
    display: grid;
    grid-template-columns: 140px 70px 1fr;
    align-items: center;
    gap: 4px;
    margin-top: 4px;
  }

  #resume-wrapper .cert-issuer { color: #0A192F; font-weight: 500; }

  #resume-wrapper .cert-grade {
    font-family: 'Fira Code', monospace;
    color: #0A192F;
    background: rgba(100,255,218,0.3);
    padding: 1px 6px;
    border-radius: 3px;
    font-size: 10.5px;
    font-weight: 600;
  }

  /* SKILLS */
  #resume-wrapper .skill-group { margin-bottom: 16px; }

  #resume-wrapper .skill-group-title {
    font-size: 11px;
    font-weight: 600;
    color: #0A192F;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
    opacity: 0.6;
  }

  #resume-wrapper .skill-bar-wrap {
    margin-bottom: 7px;
  }

  #resume-wrapper .skill-bar-label {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #4a4a6a;
    margin-bottom: 3px;
  }

  #resume-wrapper .skill-bar-label span:last-child {
    font-family: 'Fira Code', monospace;
    font-size: 10px;
    color: #0A192F;
    font-weight: 700;
  }

  #resume-wrapper .skill-bar-track {
    height: 4px;
    background: #eef0f3;
    border-radius: 2px;
    overflow: hidden;
  }

  #resume-wrapper .skill-bar-fill {
    height: 100%;
    background: linear-gradient(to right, #64FFDA, #0A192F);
    border-radius: 2px;
  }

  /* TAGS */
  #resume-wrapper .tags { display: flex; flex-wrap: wrap; gap: 6px; }

  #resume-wrapper .tag {
    font-size: 11px;
    padding: 3px 9px;
    background: rgba(10,25,47,0.06);
    color: #0A192F;
    border-radius: 3px;
    font-weight: 500;
    border: 1px solid rgba(10,25,47,0.1);
  }

  /* EDUCATION */
  #resume-wrapper .edu-item {
    padding: 12px 14px;
    background: #fff;
    border-radius: 6px;
    border: 1px solid #eef0f3;
    border-left: 3px solid #0A192F;
    margin-bottom: 10px;
  }

  #resume-wrapper .edu-degree {
    font-size: 13px;
    font-weight: 600;
    color: #1a1a2e;
    margin-bottom: 2px;
  }

  #resume-wrapper .edu-school {
    font-size: 12px;
    color: #8892b0;
    margin-bottom: 4px;
  }

  #resume-wrapper .edu-meta {
    display: flex;
    gap: 10px;
    font-size: 11px;
  }

  #resume-wrapper .edu-meta span {
    font-family: 'Fira Code', monospace;
    color: #0A192F;
    background: rgba(100,255,218,0.25);
    padding: 1px 7px;
    border-radius: 3px;
    font-weight: 600;
  }

  /* LINKS */
  #resume-wrapper .links-list { list-style: none; }

  #resume-wrapper .links-list li {
    margin-bottom: 8px;
    font-size: 12.5px;
  }

  #resume-wrapper .links-list a {
    color: #0A192F;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 6px;
    word-break: break-all;
  }

  #resume-wrapper .links-list .licon {
    color: #64FFDA;
    font-size: 13px;
    flex-shrink: 0;
  }

  /* DIVIDER */
  #resume-wrapper hr.side-div {
    border: none;
    border-top: 1px solid #eef0f3;
    margin: 20px 0;
  }

  /* PRINT */
  @media print {
    body { background: white !important; }
    #resume-wrapper .page { box-shadow: none; margin: 0; border-radius: 0; }
  }
</style>

<div id="resume-wrapper">
  <div class="page">
    <!-- HEADER -->
    <div class="header">
      <div class="header-top">
        <div class="name-block">
          <h1>Hammad <span>Khalil.</span></h1>
          <div class="title">Founder & CEO @ NovaStack · AI & Web Architect</div>
        </div>
      </div>
      <div class="tagline">
        Digital entrepreneur and AI systems builder with hands-on expertise in web development, AI automation, chatbots, and calling agents. Founder of NovaStack — helping businesses scale through intelligent digital products and streamlined workflows.
      </div>
    </div>

    <!-- BODY -->
    <div class="body">

      <!-- MAIN COLUMN -->
      <div class="main-col">

        <!-- EXPERIENCE -->
        <div class="section">
          <div class="section-title">Experience</div>

          <div class="exp-item">
            <div class="exp-header">
              <div class="exp-title">Founder & CEO</div>
              <div class="exp-date">2026 — Present</div>
            </div>
            <div class="exp-company">NovaStack <span class="badge">Full-time</span></div>
            <ul class="exp-list">
              <li>Founded a digital solutions agency delivering web apps, AI automation, and smart digital systems for clients across multiple industries.</li>
              <li>Built and deployed AI chatbots, calling agents, and n8n workflow automations reducing client operational overhead by up to 40%.</li>
              <li>Led end-to-end development of Shopify stores, WordPress sites, and custom web applications for early-stage clients.</li>
              <li>Managed client relationships, project scoping, delivery timelines, and post-launch support across all active engagements.</li>
            </ul>
          </div>

          <div class="exp-item">
            <div class="exp-header">
              <div class="exp-title">Freelance Web Developer & AI Consultant</div>
              <div class="exp-date">2024 — 2026</div>
            </div>
            <div class="exp-company">Self-Employed <span class="badge">Freelance</span></div>
            <ul class="exp-list">
              <li>Delivered custom websites, e-commerce stores, and landing pages for 10+ clients across Pakistan and internationally.</li>
              <li>Integrated third-party APIs, payment gateways, and automation workflows into client projects.</li>
              <li>Consulted businesses on AI tools and automation strategies to improve productivity and reduce manual workload.</li>
              <li>Maintained 100% client satisfaction with on-time delivery on all freelance engagements.</li>
            </ul>
          </div>

          <div class="exp-item">
            <div class="exp-header">
              <div class="exp-title">Junior Web Developer</div>
              <div class="exp-date">2023 — 2024</div>
            </div>
            <div class="exp-company">Independent Projects <span class="badge">Self-led</span></div>
            <ul class="exp-list">
              <li>Built personal projects to sharpen React.js, HTML/CSS, Bootstrap, and JavaScript skills through hands-on development.</li>
              <li>Developed and deployed multiple web interfaces, focusing on responsive design and clean UI patterns.</li>
              <li>Explored REST API integrations and frontend state management using Redux.</li>
            </ul>
          </div>

        </div>

        <!-- CERTIFICATIONS -->
        <div class="section">
          <div class="section-title">Certifications</div>

          <div class="cert-item">
            <div class="cert-name">Generative AI and Large Language Models</div>
            <div class="cert-meta">
              <span class="cert-issuer">Coursera</span>
              <span>May 25, 2026</span>
              <span>ID: DXCID4OY1SRG</span>
            </div>
          </div>

          <div class="cert-item">
            <div class="cert-name">Build Intelligent Agents Using DeepSeek & N8N</div>
            <div class="cert-meta">
              <span class="cert-issuer">Board Infinity · Coursera</span>
              <span>May 24, 2026</span>
              <span>ID: 1PJ4OSBQSQPD</span>
            </div>
          </div>

          <div class="cert-item">
            <div class="cert-name">AI Agents and Agentic AI with Python & Generative AI</div>
            <div class="cert-meta">
              <span class="cert-issuer">Vanderbilt University · Coursera</span>
              <span>May 20, 2026</span>
              <span>ID: 5YG24FFJGVWK</span>
            </div>
          </div>

          <div class="cert-item">
            <div class="cert-name">Fundamentals of Building AI Agents</div>
            <div class="cert-meta">
              <span class="cert-issuer">IBM · Coursera</span>
              <span>May 20, 2026</span>
              <span>ID: 5AL5AP7ZVEE5</span>
            </div>
          </div>

        </div>

      </div>

      <!-- SIDE COLUMN -->
      <div class="side-col">

        <!-- EDUCATION -->
        <div class="section">
          <div class="section-title">Education</div>
          <div class="edu-item">
            <div class="edu-degree">ADP in Computer Science</div>
            <div class="edu-school">NCBA&E, Multan</div>
            <div class="edu-meta">
              <span>2025 — Present</span>
              <span>CGPA 3.7</span>
            </div>
          </div>
        </div>

        <hr class="side-div">

        <!-- TECHNICAL SKILLS -->
        <div class="section">
          <div class="section-title">Technical Skills</div>

          <div class="skill-group">
            <div class="skill-group-title">Core Stack</div>

            <div class="skill-bar-wrap">
              <div class="skill-bar-label"><span>HTML5 & CSS3</span><span>90%</span></div>
              <div class="skill-bar-track"><div class="skill-bar-fill" style="width:90%"></div></div>
            </div>
            <div class="skill-bar-wrap">
              <div class="skill-bar-label"><span>JavaScript</span><span>80%</span></div>
              <div class="skill-bar-track"><div class="skill-bar-fill" style="width:80%"></div></div>
            </div>
            <div class="skill-bar-wrap">
              <div class="skill-bar-label"><span>React.js</span><span>85%</span></div>
              <div class="skill-bar-track"><div class="skill-bar-fill" style="width:85%"></div></div>
            </div>
            <div class="skill-bar-wrap">
              <div class="skill-bar-label"><span>Next.js</span><span>80%</span></div>
              <div class="skill-bar-track"><div class="skill-bar-fill" style="width:80%"></div></div>
            </div>
          </div>

          <div class="skill-group">
            <div class="skill-group-title">AI & Automation</div>
            <div class="skill-bar-wrap">
              <div class="skill-bar-label"><span>AI Chatbot Dev</span><span>88%</span></div>
              <div class="skill-bar-track"><div class="skill-bar-fill" style="width:88%"></div></div>
            </div>
            <div class="skill-bar-wrap">
              <div class="skill-bar-label"><span>AI Calling Agents</span><span>85%</span></div>
              <div class="skill-bar-track"><div class="skill-bar-fill" style="width:85%"></div></div>
            </div>
            <div class="skill-bar-wrap">
              <div class="skill-bar-label"><span>n8n Workflows</span><span>90%</span></div>
              <div class="skill-bar-track"><div class="skill-bar-fill" style="width:90%"></div></div>
            </div>
          </div>

          <div class="skill-group">
            <div class="skill-group-title">Platforms & Tools</div>
            <div class="tags">
              <span class="tag">n8n</span>
              <span class="tag">GitHub</span>
              <span class="tag">VS Code</span>
              <span class="tag">Shopify</span>
              <span class="tag">WordPress</span>
              <span class="tag">Vercel</span>
              <span class="tag">Node.js</span>
              <span class="tag">REST APIs</span>
              <span class="tag">Bootstrap</span>
              <span class="tag">Redux</span>
              <span class="tag">npm</span>
              <span class="tag">Antigravity</span>
            </div>
          </div>
        </div>

        <hr class="side-div">

        <!-- SOFT SKILLS -->
        <div class="section">
          <div class="section-title">Soft Skills</div>
          <div class="tags">
            <span class="tag">Leadership</span>
            <span class="tag">Strategic Planning</span>
            <span class="tag">Client Communication</span>
            <span class="tag">Problem Solving</span>
            <span class="tag">Time Management</span>
            <span class="tag">Agile Mindset</span>
          </div>
        </div>

        <hr class="side-div">

        <!-- LINKS -->
        <div class="section">
          <div class="section-title">Contact & Links</div>
          <ul class="links-list">
            <li><a href="mailto:Hello@HammadKhalil.me"><span class="licon">✉</span>Hello@HammadKhalil.me</a></li>
            <li><a href="https://wa.me/923393887766"><span class="licon">◎</span>+92 339 3887766</a></li>
            <li><a href="https://HammadKhalil.me"><span class="licon">◉</span>HammadKhalil.me</a></li>
            <li><a href="https://github.com/itshammadkhalil"><span class="licon">◉</span>github.com/itshammadkhalil</a></li>
            <li><a href="https://linkedin.com/in/muhammad-hammad-khalil"><span class="licon">◉</span>linkedin/muhammad-hammad-khalil</a></li>
            <li><a href="https://instagram.com/hammadkhalil.me"><span class="licon">◉</span>instagram/hammadkhalil.me</a></li>
          </ul>
        </div>

      </div>
    </div>
  </div>

  <!-- PAGE 2 -->
  <div class="page" style="margin-top: 30px;">
    <div class="header" style="padding: 30px 50px;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <h2 style="color:#CCD6F6; font-size:22px; font-weight:700;">Hammad <span style="color:#64FFDA;">Khalil.</span></h2>
          <div style="font-family:'Fira Code',monospace; font-size:11px; color:#64FFDA; margin-top:4px;">Continued — Certifications & Additional Info</div>
        </div>
        <div style="font-family:'Fira Code',monospace; font-size:11px; color:#8892b0;">Page 2 of 2</div>
      </div>
    </div>

    <div style="padding: 36px 50px 50px;">

      <div class="section-title" style="margin-bottom:20px;">Additional Certifications</div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:32px;">

        <div class="cert-item">
          <div class="cert-name">Front-end Development with React V2</div>
          <div class="cert-meta" style="display:block;">
            <span class="cert-issuer">IBM · Coursera</span><br>
            <span style="font-size:11px; color:#8892b0;">May 14, 2026 &nbsp;·&nbsp; ID: f2d2e15e-728d-49d8-9b49-a369df6be4d6</span>
          </div>
        </div>

        <div class="cert-item">
          <div class="cert-name">Developing Front-End Apps with React</div>
          <div class="cert-meta" style="display:block;">
            <span class="cert-issuer">IBM · Coursera</span><br>
            <span style="font-size:11px; color:#8892b0;">May 14, 2026 &nbsp;·&nbsp; ID: RGXQ07HO4TLF</span>
          </div>
        </div>

        <div class="cert-item">
          <div class="cert-name">Web Development Mastery: HTML, CSS & JS Fundamentals</div>
          <div class="cert-meta" style="display:block;">
            <span class="cert-issuer">Board Infinity · Coursera</span><br>
            <span style="font-size:11px; color:#8892b0;">Apr 29, 2026 &nbsp;·&nbsp; ID: ODKCLLT34MFP</span>
          </div>
        </div>

      </div>

      <div class="section-title" style="margin-bottom:16px;">Currently Learning</div>
      <div class="tags" style="margin-bottom:32px;">
        <span class="tag">Python for Data Science</span>
        <span class="tag">Prompt Engineering</span>
        <span class="tag">Backend Development</span>
        <span class="tag">Advanced AI Agents</span>
      </div>

      <div class="section-title" style="margin-bottom:16px;">Languages</div>
      <div class="tags">
        <span class="tag">Urdu — Native</span>
        <span class="tag">English — Professional</span>
        <span class="tag">Punjabi — Native</span>
      </div>

    </div>
  </div>
</div>
`;

export default function ResumePage() {
  return (
    <>
      <DownloadButton />
      <div 
        id="resume-root" 
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />
    </>
  );
}
