"use client";

import React from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Menu,
  X,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import PixelBlast from "@/components/PixelBlast";
import LiquidEther from "@/components/LiquidEther";

const DATA = {
  siteName: "Austin's Portfolio",
  person: {
    name: "Austin Kane",
    tagline: "Data Science • ML • Analytics",
    headline: "Hi, I'm {{name}} \n building insights with data & models.",
    sub: "Data science student focused on end‑to‑end projects: data wrangling, EDA, modeling, and deploying ML solutions. I love turning complex datasets into clear, actionable stories.",
    heroImage: "/images/data-scientist.jpg",
    primaryCta: { label: "Explore Projects", href: "#projects" },
    secondaryCta: { label: "Download Resume", href: "#", download: true },
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    title: "Curious mind with a builder’s mindset",
    paragraphs: [
      "I'm a data science student passionate about bridging statistics, software, and design. I enjoy exploring messy datasets, crafting visual narratives, and shipping practical models that make decisions easier.",
      "My toolkit includes Python, Pandas, scikit‑learn, SQL, and visualization with Altair/Plotly. I'm digging deeper into MLOps and lightweight inference services.",
    ],
    highlights: [
      "Built end‑to‑end ML pipelines from exploration to deployment.",
      "Strong communicator: clear reports, dashboards, and presentations.",
      "Collaborative and user‑focused, with an eye for clean interfaces.",
    ],
  },
  projects: [
    {
      title: "Demand Forecasting with Gradient Boosting",
      desc: "Time‑series feature engineering and XGBoost to predict weekly product demand. Includes backtesting and SHAP explainability.",
      tags: ["Python", "Pandas", "XGBoost", "SHAP"],
      href: "#",
    },
    {
      title: "NLP Sentiment Dashboard",
      desc: "Pipeline for scraping reviews, fine‑tuned sentiment model, and an interactive dashboard for trends and outliers.",
      tags: ["Python", "Transformers", "FastAPI", "Plotly"],
      href: "#",
    },
    {
      title: "Churn Prediction & Uplift Modeling",
      desc: "Feature store + model comparison (LR, RF, LightGBM) with uplift modeling to inform retention offers.",
      tags: ["SQL", "LightGBM", "scikit‑learn", "Uplift"],
      href: "#",
    },
  ],
  contact: {
    email: "hello@example.com",
    github: "https://github.com/Tinnne",
    linkedin: "https://linkedin.com/in/tinnne",
  },
  footer: {
    copyright: () => `© ${new Date().getFullYear()} ${DATA.person.name} - Data Science Portfolio`,
  },
};

const handleSmoothScroll = (e: React.MouseEvent, href: string) => {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;

  const yOffset = -80; // navbar height
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  // DO NOT touch location hash here — prevents instant jump
  window.scrollTo({ top: y, behavior: "smooth" });
};

const Container = ({ children }) => (
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b">
      <Container>
        <div className="grid grid-cols-3 items-center py-3">
          {/* Logo */}
          <a href="#" className="font-semibold tracking-tight justify-self-start">
            {DATA.siteName.split(" ").map((word, i) => {
              return word.includes("Austin") ? (
                <span key={i} className="text-sky-600">
                  {word}{" "}
                </span>
              ) : (
                <span key={i}>{word} </span>
              );
            })}
          </a>

          {/* Links */}
          <nav className="hidden md:flex items-center justify-center gap-8 text-sm">
            {DATA.nav.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                scroll={false}
                prefetch={false}
                className="hover:underline"
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="justify-self-end">
            <Button size="sm" className="rounded-xl">
              Let's talk
            </Button>
          </div>
          {/* Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-3 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              {DATA.nav.map((i) => (
                <a key={i.label} href={i.href} className="py-1">
                  {i.label}
                </a>
              ))}
              <Button size="sm" className="rounded-xl">
                Let's talk
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

function Hero() {
  const heading = DATA.person.headline.replace("{{name}}", DATA.person.name);
  const nameWords = DATA.person.name.split(" ");

  return (
    <section className="relative border-b min-h-screen flex items-center pb-20 overflow-hidden">
      {/* === Background === */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={16}
          iterationsPoisson={16}
          resolution={0.4}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={1.5}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* === Foreground content === */}
      <Container>
        <div className="relative z-10 gap-10 items-center py-16">
          {/* Frosted glass text box */}
          <div className="relative rounded-3xl bg-white/80 backdrop-blur border border-white/30 shadow-lg p-10">
            <Badge variant="outline" className="mb-4 text-sky-800">
              {DATA.person.tagline}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-gray-900 drop-shadow-sm">
              {heading.split(" ").map((w, i) => {
                const cleaned = w.replace(/[^A-Za-z]/g, "");
                if (cleaned === nameWords[nameWords.length - 1]) {
                  return (
                    <React.Fragment key={i}>
                      <span className="text-sky-600">{w} </span>
                      <br />
                    </React.Fragment>
                  );
                }
                return nameWords.includes(cleaned) ? (
                  <span key={i} className="text-sky-600">
                    {w}{" "}
                  </span>
                ) : (
                  <span key={i}>{w} </span>
                );
              })}
            </h1>

            <p className="mt-4 text-lg text-gray-700 max-w-3xl">{DATA.person.sub}</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="rounded-xl" asChild>
                <a href={DATA.person.primaryCta.href}>
                  {DATA.person.primaryCta.label} <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl" asChild>
                <a
                  href={DATA.person.secondaryCta.href}
                  download={DATA.person.secondaryCta.download || false}
                >
                  {DATA.person.secondaryCta.label} <Download className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Optional right-side visual */}
          <div className="hidden lg:block" />
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 border-b">
      <Container>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <Badge variant="outline" className="mb-3">
              ABOUT ME
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{DATA.about.title}</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              {DATA.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Highlights</CardTitle>
              <CardDescription className="sr-only">Key strengths</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {DATA.about.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-sky-500" />
                    {h}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="py-16 border-b bg-gradient-to-b from-transparent to-slate-50/60"
    >
      <Container>
        <Badge variant="outline" className="mb-4">
          PROJECTS
        </Badge>
        <div className="grid md:grid-cols-3 gap-6">
          {DATA.projects.map((p) => (
            <Card key={p.title} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">{p.title}</CardTitle>
                <CardDescription>{p.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-full">
                      {t}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" className="px-0" asChild>
                  <a href={p.href}>
                    View project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <Badge variant="outline" className="mb-3">
              GET IN TOUCH
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Let's collaborate</h3>
            <p className="mt-3 text-muted-foreground max-w-prose">
              I'm open to internships, research projects, and collaborations. If my work resonates
              with you, drop a message — I'll get back quickly.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="secondary" asChild className="rounded-xl">
                <a href={`mailto:${DATA.contact.email}`}>
                  <Mail className="w-4 h-4 mr-2" /> {DATA.contact.email}
                </a>
              </Button>
              <Button variant="outline" asChild className="rounded-xl">
                <a href={DATA.contact.github} target="_blank" rel="noreferrer">
                  <Github className="w-4 h-4 mr-2" /> GitHub
                </a>
              </Button>
              <Button variant="outline" asChild className="rounded-xl">
                <a href={DATA.contact.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Message me</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <Input placeholder="Your name" />
                  <Input placeholder="you@domain.com" type="email" />
                </div>
                <Textarea placeholder="Tell me about your project..." rows={5} />
                <Button className="rounded-xl">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t py-10">
      <Container>
        <div className="text-sm text-muted-foreground">{DATA.footer.copyright()}</div>
      </Container>
    </footer>
  );
}

export default function DSPortfolioClone() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
