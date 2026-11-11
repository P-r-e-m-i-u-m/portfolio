import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, BrainCircuit, Database, Workflow, Terminal, Sparkles, GitPullRequest, ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    name: "RepoDoctor",
    category: "Developer tooling",
    status: "Early development",
    description: "A local-first Go CLI that connects terminal failures to the project files and configuration that can explain them. It offers practical next steps while keeping the developer in control.",
    stack: ["Go", "CLI", "Diagnostics", "Testing"],
    href: "https://github.com/P-r-e-m-i-u-m/RepoDoctor",
    number: "01",
  },
  {
    name: "Worktrail",
    category: "Developer productivity",
    status: "Open source",
    description: "A local-first CLI for saving work sessions, Git context, notes, and next steps so developers can return to a project without rebuilding the whole thread.",
    stack: ["Python", "CLI", "Git", "JSON"],
    href: "https://github.com/P-r-e-m-i-u-m/worktrail",
    number: "02",
  },
  {
    name: "Open Source Starter Lab",
    category: "Open-source community",
    status: "Maintained in public",
    description: "A beginner-friendly contribution lab with scoped issues, clear acceptance criteria, CI checks, and a path from a first issue to a first clean merge.",
    stack: ["JavaScript", "GitHub Actions", "Automation", "Docs"],
    href: "https://github.com/P-r-e-m-i-u-m/open-source-starter-lab",
    number: "03",
  },
  {
    name: "OpenAI-compatible API Gateway",
    category: "AI infrastructure",
    status: "Open source",
    description: "A self-hosted gateway for routing OpenAI-compatible traffic across providers, with model-based routing, streaming, retries, health checks, and metrics.",
    stack: ["TypeScript", "Node.js", "Docker", "APIs"],
    href: "https://github.com/P-r-e-m-i-u-m/PROXY",
    number: "04",
  },
  {
    name: "AI Coding Assistant",
    category: "Applied AI",
    status: "Prototype",
    description: "A Qwen-powered coding and learning assistant exploring streamed responses, chat history, code explanations, and lightweight personalization.",
    stack: ["Next.js", "TypeScript", "Qwen", "Streaming"],
    href: "https://github.com/P-r-e-m-i-u-m/humanAI",
    number: "05",
  },
];

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Applied AI",
    description: "LLM applications, retrieval-augmented generation, prompt design, model APIs, and agent workflows.",
    tags: ["LLMs", "RAG", "AI APIs", "Agents"],
  },
  {
    icon: Code2,
    title: "Python engineering",
    description: "Practical application code, API integrations, automation, data processing, and backend services.",
    tags: ["Python", "FastAPI", "Flask", "Testing"],
  },
  {
    icon: Database,
    title: "Data systems",
    description: "Turning raw data into dependable datasets, useful analysis, and clear reporting.",
    tags: ["SQL", "ETL", "Excel", "Analytics"],
  },
  {
    icon: Workflow,
    title: "Engineering practice",
    description: "Building in public, writing useful documentation, shipping focused changes, and improving developer workflows.",
    tags: ["Git", "Docker", "CI/CD", "Open source"],
  },
];

const principles = [
  ["Start with the problem", "Choose the simplest approach that solves the real need."],
  ["Make the work inspectable", "Prefer clear interfaces, useful tests, and documentation that helps the next developer."],
  ["Keep humans in control", "AI should make a workflow more useful, not make it harder to understand."],
];

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="section-label"><span />{children}</p>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Syed Abdul Aman, home" onClick={closeMenu}>
          <span className="brand-mark">A.</span>
          <span className="brand-name">Syed Abdul Aman<span className="brand-dot">.</span></span>
        </a>

        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#open-source" onClick={closeMenu}>Open source</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-grid" />
        <div className="hero-content" id="main-content">
          <SectionLabel>Independent developer · Building in public</SectionLabel>
          <h1 id="hero-title">I build useful things<br /><em>with AI and code.</em></h1>
          <p className="hero-copy">I'm Syed Abdul Aman, an independent developer focused on applied AI, Python engineering, and open-source tools. I like turning rough ideas into practical software people can inspect, use, and improve.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore selected work <ArrowUpRight size={16} /></a>
            <a className="button button-quiet" href="https://github.com/P-r-e-m-i-u-m" target="_blank" rel="noreferrer">GitHub profile <Github size={16} /></a>
          </div>
          <div className="hero-footnote"><span className="status-dot" /> Open to thoughtful collaborations and remote opportunities</div>
        </div>
        <div className="hero-aside" aria-label="Areas of focus">
          <span className="aside-kicker">CURRENT FOCUS</span>
          <div className="focus-line"><span>01</span> Applied AI systems</div>
          <div className="focus-line"><span>02</span> Python & developer tools</div>
          <div className="focus-line"><span>03</span> Open-source software</div>
          <div className="aside-note">Build carefully.<br />Share what works.</div>
        </div>
        <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2>Projects with a<br /><em>purpose behind them.</em></h2>
          </div>
          <p className="section-intro">A few things I've been building and maintaining. Each card links to its source so you can explore the implementation, decisions, and current state.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-main">
                <div className="project-meta"><span>{project.category}</span><span className="project-status">{project.status}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
              <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={21} /></span>
            </a>
          ))}
        </div>
        <div className="all-work-link"><a href="https://github.com/P-r-e-m-i-u-m?tab=repositories" target="_blank" rel="noreferrer">Browse all public repositories <ArrowUpRight size={15} /></a></div>
      </section>

      <section className="about-section" id="about">
        <div className="section-wrap about-grid">
          <div className="about-heading">
            <SectionLabel>A little about how I work</SectionLabel>
            <h2>Curiosity first.<br /><em>Useful software next.</em></h2>
          </div>
          <div className="about-copy">
            <p className="about-lede">I learn by building, testing, reading other people's code, and contributing in the open.</p>
            <p>My work sits around the practical side of AI engineering: connecting models to real workflows, building the APIs and tools around them, and making sure the result is understandable and maintainable. I also enjoy developer tooling and the small details that make open-source projects easier to use.</p>
            <p>I'm self-taught and continuing my formal learning journey. I care more about showing the work clearly than making big claims about it.</p>
            <a className="text-link" href="https://www.linkedin.com/in/syedabdul-aman-genai-developer/" target="_blank" rel="noreferrer">More about my journey on LinkedIn <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="principles section-wrap">
          {principles.map(([title, description], index) => (
            <div className="principle" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="capabilities-section section-wrap" id="capabilities">
        <div className="section-heading">
          <div>
            <SectionLabel>What I work with</SectionLabel>
            <h2>Tools are useful.<br /><em>Judgement matters more.</em></h2>
          </div>
          <p className="section-intro">A practical toolkit that keeps evolving through projects, experiments, and open-source work.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map(({ icon: Icon, title, description, tags }, index) => (
            <article className="capability-card" key={title}>
              <div className="capability-top"><span>0{index + 1}</span><Icon size={22} strokeWidth={1.5} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="open-source-section" id="open-source">
        <div className="section-wrap open-source-inner">
          <div className="oss-icon"><GitPullRequest size={25} /></div>
          <div className="oss-copy">
            <SectionLabel>Open source</SectionLabel>
            <h2>Good software gets<br /><em>better in the open.</em></h2>
            <p>I maintain and contribute to projects that make it easier for developers to learn, build, and collaborate. Open Source Starter Lab is one way I try to make a first contribution feel less intimidating and more practical.</p>
            <a className="button button-primary" href="https://github.com/P-r-e-m-i-u-m/open-source-starter-lab" target="_blank" rel="noreferrer">Visit the community project <ArrowUpRight size={16} /></a>
          </div>
          <div className="oss-aside">
            <span className="aside-kicker">MY APPROACH</span>
            <p>Small, reviewable changes.</p>
            <p>Clear issues and documentation.</p>
            <p>Respect for contributors' time.</p>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="section-wrap footer-inner">
          <div className="footer-top">
            <div>
              <SectionLabel>Have something worth building?</SectionLabel>
              <h2>Let's make it<br /><em>work in the real world.</em></h2>
            </div>
            <a className="footer-email" href="mailto:amanbaba9404522@gmail.com">amanbaba9404522@gmail.com <ArrowUpRight size={18} /></a>
          </div>
          <div className="footer-bottom">
            <a className="footer-brand" href="#home">A<span>.</span></a>
            <p>Independent developer focused on AI, Python, and open source.</p>
            <div className="social-links">
              <a href="https://github.com/P-r-e-m-i-u-m" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/syedabdul-aman-genai-developer/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="mailto:amanbaba9404522@gmail.com" aria-label="Email"><Mail size={18} /></a>
            </div>
            <span className="copyright">© {new Date().getFullYear()} Syed Abdul Aman</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
