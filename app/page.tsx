"use client"

import { Marquee } from "@/components/ui/marquee";
import { BorderBeam } from "@/components/ui/border-beam";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Button } from "@/components/ui/button";
import { WeChatButton } from "@/components/wechat-button";
import Image from "next/image";
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon, ArrowRightIcon, CodeIcon, MixIcon, LayersIcon } from "@radix-ui/react-icons";
import { AuroraText } from "@/components/ui/aurora-text";
import { GlobeSection } from "@/components/globe-section";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { ThemeAwareFlickeringGrid } from "@/components/theme-aware-flickering-grid";

// Tech icons for the cloud
const techSlugs = [
  "amazonaws",
  "react",
  "nextdotjs",
  "typescript",
  "javascript",
  "python",
  "csharp",
  "dotnet",
  "postgresql",
  "firebase",
  "docker",
  "git",
  "github",
  "linux",
  "openai",
];

const techImages = techSlugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}`
);

// Backend & Infrastructure technologies for marquee
const backendTech = ["C#", "ASP.NET", "Python", "SQL", "PostgreSQL", "Firebase", "COBOL", "Mainframe"];

// Frontend & Tools for second marquee
const frontendTech = ["React", "React Native", "Vue.js", "Next.js", "TypeScript", "JavaScript", "Git", "DevOps"];

// Technical expertise for marquee
const expertiseTips = [
  { title: "Enterprise Banking Systems", desc: "1.5+ Years experience with BORG : Europe's leading banking database infrastructure, handling billions of transactions securely." },
  { title: "AI & LLM Integration", desc: "Integrating Large Language Models into existing systems for intelligent automation and enhanced user experiences." },
  { title: "Agile Development", desc: "SCRUM methodology for efficient team collaboration, sprint planning, and continuous delivery." },
  { title: "Full-Stack Development", desc: "From React frontends to ASP.NET backends, building complete solutions that scale." },
  { title: "IoT & Embedded Systems", desc: "Enterprise Experience with IoT, LoRaWAN, Arduino, Raspberry Pi for monitoring systems and new-gen factories." },
  { title: "Cloud Infrastructure", desc: "AWS certified architect designing scalable, secure cloud solutions with modern DevOps practices, reducing overall infrastructure costs." },
];

// Projects/Experience data
const projects = [
  {
    logos: ["/assets/CMCIC.png", "/assets/cgi.png"],
    title: "Secure Core Banking Infrastructure",
    description: "Enterprise-grade banking database serving one of Europe's largest financial groups (CMCIC).",
    features: [
      "Core banking system handling millions of accounts",
      "Mainframe & COBOL modernization initiatives",
      "SQL optimization for high-performance queries",
      "C# & ASP.NET microservices development"
    ],
    tech: ["COBOL", "SQL", "C#", "ASP.NET", "Mainframe", "PCI-DSS", "IBM Watson AI"],
    liveUrl: "",
  },
  {
    logos: ["/assets/lp.png"],
    title: "LLM Cognitive Client Relationship Management",
    description: "Complete AI-powered solution for intelligent client relationship management at Leedpulse.",
    features: [
      "Large Language Model integration with existing databases",
      "Automated client insights and recommendations",
      "React frontend with real-time AI responses",
      "PostgreSQL & Google Firebase backend infrastructure"
    ],
    tech: ["Python", "React", "PostgreSQL", "Google Firebase", "OpenAI", "Agile"],
    liveUrl: "",
    codeUrl: "",
  },
  {
    logos: ["/assets/pb.png"],
    title: "AI-Powered Mobile App Platform",
    description: "Part-time CTO at Positive Button, bringing innovative ideas from concept to production.",
    features: [
      "Mobile app with integrated LLM capabilities",
      "Full product lifecycle from ideation to launch",
      "Strategic technical leadership and architecture",
      "AI-enhanced user experience and automation"
    ],
    tech: ["React Native", "Mobile Development", "LLM", "AI Integration", "Google Firebase", "iOS", "Android"],
    liveUrl: "",
    codeUrl: "",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Theme Toggler */}
      <div className="fixed top-4 right-4 z-[100]">
        <AnimatedThemeToggler className="h-10 w-10 rounded-full bg-card border border-border shadow-lg hover:shadow-xl transition-shadow" />
      </div>

      {/* Background Flickering Grid */}
      <ThemeAwareFlickeringGrid />

      {/* Hero Section - Bento Style */}
      <section className="relative z-50 px-4 py-8 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Main intro card - spans 2 columns */}
            <div className="relative md:col-span-2 overflow-hidden rounded-xl border border-border/50 bg-card p-8 hover:border-border transition-colors">
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-600 dark:text-orange-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l6.9 3.82L12 11.82 5.1 8 12 4.18zM5 16.54V9.09l6 3.33v7.45l-6-3.33zm14 0l-6 3.33v-7.45l6-3.33v7.45z"/></svg>
                  <span className="text-xs font-medium">AWS Certified</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-600 dark:text-red-400">
                  <span className="text-xs font-medium">🇨🇳 GBA based Company (Zhuhai Hengqin)</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-600 dark:text-teal-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v2h20V7l-10-5zM4 11v9h3v-6h10v6h3v-9H4zm6 9v-4h4v4h-4z"/></svg>
                  <span className="text-xs font-medium">Bank-Grade Security Standards</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
                Mathieu Voyer
              </h1>
              <h2 className="text-xl md:text-2xl text-primary mb-6">
                Fractional CTO & Cloud Architect for the Greater Bay Area
              </h2>
              <p className="text-muted-foreground">
                Bridging the gap between enterprise-grade stability and AI innovation. Based in Zhuhai, serving Hong Kong and global markets with compliant, high-performance tech leadership.
              </p>
            </div>

            {/* Contact card */}
            <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 hover:border-border transition-colors flex flex-col gap-4">
              <h3 className="text-lg font-semibold">Get in Touch</h3>
              <div className="flex flex-col gap-2">
                <Button asChild size="lg" className="gap-2 w-full">
                  <a href="mailto:dev@mathieuv.pro">
                    <EnvelopeClosedIcon className="w-4 h-4" />
                    Request a Quote
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 w-full">
                  <a href="https://github.com/mathieu900v" target="_blank" rel="noopener noreferrer">
                    <GitHubLogoIcon className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 w-full border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2]/10">
                  <a href="https://linkedin.com/in/mvoyer" target="_blank" rel="noopener noreferrer">
                    <LinkedInLogoIcon className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
                <WeChatButton wechatId="mathieu900v" />
              </div>
              <BorderBeam size={200} duration={12} />
            </div>

            {/* Experience highlight card */}
            <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 hover:border-border transition-colors">
                <div>
                  <div className="text-sm text-primary font-semibold mb-1">Scale & Reliability</div>
                  <div className="text-3xl font-bold tracking-tighter">141M Transac./Year</div>
                  <div className="text-xs text-muted-foreground mt-1">Enterprise Banking Core Infrastructure</div>
                </div>
            </div>

            {/* Expertise Tips card with Marquee - spans 2 columns */}
            <div className="relative md:col-span-2 min-h-[140px] flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card hover:border-border transition-colors">
              <div className="p-4 pb-2">
                <h3 className="text-lg font-semibold">Technical Expertise</h3>
              </div>
              <div className="flex-1 overflow-hidden">
                <Marquee pauseOnHover className="[--duration:60s]">
                  {expertiseTips.map((tip, i) => (
                    <div key={i} className="mx-2 p-4 rounded-lg bg-background/50 border border-border/50 w-72 shrink-0">
                      <h4 className="font-semibold text-sm text-foreground mb-1">{tip.title}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">{tip.desc}</p>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trust Section */}
      <section className="relative z-10 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Strategic Engagements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card hover:border-border transition-all hover:-translate-y-1">
                <div className="p-6">
                  <div className="mb-4 flex gap-2 items-center justify-center h-16 p-3 bg-white rounded-lg">
                    {project.logos.map((logo, idx) => (
                      <div key={idx} className="relative h-12 w-auto flex items-center">
                        <Image
                          src={logo}
                          alt={project.title}
                          width={160}
                          height={80}
                          className="object-contain h-12 w-auto"
                        />
                      </div>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  
                  <ul className="space-y-1 mb-4">
                    {project.features.slice(0, 3).map((feature, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((t) => {
                      // Simplified color scheme
                      const techColors: Record<string, string> = {
                        // Languages - Blue tones that work in both modes
                        'COBOL': 'bg-blue-500/20 text-blue-600 border border-blue-500/30 dark:text-blue-400',
                        'SQL': 'bg-blue-500/20 text-blue-600 border border-blue-500/30 dark:text-blue-400',
                        'C#': 'bg-blue-500/20 text-blue-600 border border-blue-500/30 dark:text-blue-400',
                        'ASP.NET': 'bg-indigo-500/20 text-indigo-600 border border-indigo-500/30 dark:text-indigo-400',
                        'Python': 'bg-indigo-500/20 text-indigo-600 border border-indigo-500/30 dark:text-indigo-400',
                        'React': 'bg-cyan-500/20 text-cyan-600 border border-cyan-500/30 dark:text-cyan-400',
                        'React Native': 'bg-cyan-500/20 text-cyan-600 border border-cyan-500/30 dark:text-cyan-400',
                        'PostgreSQL': 'bg-slate-500/20 text-slate-600 border border-slate-500/30 dark:text-slate-400',
                        'Mobile Development': 'bg-slate-500/20 text-slate-600 border border-slate-500/30 dark:text-slate-400',
                        'Agile': 'bg-emerald-500/20 text-emerald-600 border border-emerald-500/30 dark:text-emerald-400',
                        // Cloud Providers - Warm colors
                        'Google Firebase': 'bg-orange-500/20 text-orange-600 border border-orange-500/30 dark:text-orange-400',
                        'Oracle Cloud': 'bg-rose-500/20 text-rose-600 border border-rose-500/30 dark:text-rose-400',
                        // AI - Teal/Green tones
                        'OpenAI': 'bg-teal-500/20 text-teal-600 border border-teal-500/30 dark:text-teal-400',
                        'LLM': 'bg-teal-500/20 text-teal-600 border border-teal-500/30 dark:text-teal-400',
                        'AI Integration': 'bg-teal-500/20 text-teal-600 border border-teal-500/30 dark:text-teal-400',
                        'IBM Watson AI': 'bg-teal-500/20 text-teal-600 border border-teal-500/30 dark:text-teal-400',
                        // Security/Compliance - Purple
                        'PCI-DSS': 'bg-violet-500/20 text-violet-600 border border-violet-500/30 dark:text-violet-400',
                        // Mobile Platforms - Neutral grays
                        'iOS': 'bg-gray-500/20 text-gray-600 border border-gray-500/30 dark:text-gray-400',
                        'Android': 'bg-lime-500/20 text-lime-600 border border-lime-500/30 dark:text-lime-400',
                        // Legacy Systems - Stone
                        'Mainframe': 'bg-stone-500/20 text-stone-600 border border-stone-500/30 dark:text-stone-400',
                      };
                      const colorClass = techColors[t] || 'bg-primary/10 text-primary border border-primary/20';
                      
                      return (
                        <span key={t} className={`text-xs px-2 py-1 rounded-full ${colorClass}`}>
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-auto p-4 pt-0 flex gap-2">
                  {project.liveUrl && (
                    <Button asChild size="sm" className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.codeUrl && (
                    <Button asChild size="sm" variant="outline">
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        View Code
                      </a>
                    </Button>
                  )}
                  {!project.liveUrl && !project.codeUrl && (
                    <div className="text-xs text-muted-foreground italic">Confidential / Enterprise</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bento Grid Section */}
      <section className="relative z-10 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1: Cloud Infrastructure - Large */}
            <div className="relative md:col-span-2 md:row-span-2 min-h-[280px] flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card p-6 hover:border-border transition-colors group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent" />
              <div className="relative z-10 flex-1">
                <MixIcon className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-2xl font-semibold mb-3">Fractional CTO</h3>
                <p className="text-muted-foreground text-lg">
                  Strategic technical leadership for startups and SMEs. I align your technology roadmap with your business goals, mentor your team, and ensure your stack is built for the long term.
                </p>
              </div>
            </div>

            {/* Card 2: DevOps */}
            <div className="relative min-h-[130px] flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card p-6 hover:border-border transition-colors group">
              <div className="relative z-10 flex-1">
                <svg className="w-12 h-12 text-amber-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>
                <h3 className="text-lg font-semibold mb-2">Cloud & Infrastructure</h3>
                <p className="text-muted-foreground text-sm">
                  As a certified AWS Cloud Architect, I can help deploy automated, resilient, and cost-optimized deployments. I design systems that don't just work, they scale effortlessly without breaking the bank.
                </p>
              </div>
            </div>

            {/* Card 3: Web Development */}
            <div className="relative min-h-[130px] flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card p-6 hover:border-border transition-colors group">
              <div className="relative z-10 flex-1">
                <CodeIcon className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">AI & LLM Implementation</h3>
                <p className="text-muted-foreground text-sm">
                  Move beyond the hype. I build custom AI integrations, from intelligent RAG systems to automated customer operations, that leverage your proprietary data safely.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Globe Section */}
      <GlobeSection />

      {/* Get In Touch CTA */}
      <section className="relative z-10 px-4 py-8">
  <div className="max-w-6xl mx-auto text-center">
    <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card p-12 group">
      {/* Background Effect */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
        Scale your <AuroraText>Infrastructure</AuroraText><br />Integrate new <AuroraText>AI Capabilities</AuroraText>
      </h2>
      
      <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
        With experience in Europe's largest banking systems and AI integrations, I provide the strategic leadership you need. <strong>Let's discuss how I can accelerate your vision.</strong>
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild size="lg" className="h-14 px-8 text-md font-bold gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
          <a href="mailto:dev@mathieuv.pro">
            <EnvelopeClosedIcon className="w-5 h-5" />
            Discuss Partnership
          </a>
        </Button>
      </div>
      
      <p className="mt-8 text-xs text-muted-foreground uppercase tracking-[0.2em]">
        Currently accepting new projects opportunities
      </p>

      <BorderBeam size={300} duration={15} />
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="relative z-50 border-t border-border/50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Mathieu Voyer. All rights reserved.
            </p>
            <div className="flex gap-4"><p className="text-sm text-muted-foreground">
              Portfolio made by Mathieu Voyer
            </p>
              {/* <Button variant="ghost" size="sm">About</Button>
              <Button variant="ghost" size="sm">Projects</Button>
              <Button variant="ghost" size="sm">Testimonials</Button>
              <Button variant="ghost" size="sm">Blog</Button> */}
            </div>
            <div className="flex gap-2">
              <Button asChild variant="ghost" size="icon">
                <a href="mailto:dev@mathieuv.pro" aria-label="Email Mathieu">
                  <EnvelopeClosedIcon className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href="https://github.com/mathieu900v" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile">
                  <GitHubLogoIcon className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href="https://linkedin.com/in/mvoyer" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn">
                  <LinkedInLogoIcon className="w-4 h-4" />
                </a>
              </Button>
              <WeChatButton wechatId="mathieu900v" variant="ghost" size="icon" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}