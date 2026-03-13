"use client";

import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import {
  ArrowRight,
  Shield,
  Flame,
  CreditCard,
  FileCheck,
  Wrench,
  BarChart3,
  Cpu,
  ExternalLink,
} from "lucide-react";

const PRODUCTS = [
  {
    name: "Scian.io",
    tagline: "AI-powered revenue infrastructure for B2B SaaS",
    status: "Active",
    price: null,
    link: "https://scian-site.vercel.app",
    icon: BarChart3,
  },
  {
    name: "FenceCalc",
    tagline: "Fence contractor estimating software",
    status: "Live",
    price: "$79/mo",
    link: "https://fencecalc.co",
    icon: Wrench,
  },
  {
    name: "ShieldAI",
    tagline: "AI tool approval workflows for financial services",
    status: "Active",
    price: "$199\u2013499/mo",
    link: null,
    icon: Shield,
  },
  {
    name: "FireLog",
    tagline: "Digital fire inspection reports (NFPA compliant)",
    status: "Active",
    price: "$49/mo",
    link: null,
    icon: Flame,
  },
  {
    name: "CraneCheck",
    tagline: "Crane inspection & OSHA compliance software",
    status: "Active",
    price: "$79/mo",
    link: null,
    icon: FileCheck,
  },
  {
    name: "ClaimScribe AI",
    tagline: "AI damage scoping for restoration contractors",
    status: "Active",
    price: "$199\u2013299/mo",
    link: null,
    icon: CreditCard,
  },
  {
    name: "WeldCert",
    tagline: "Welder certification & qualification tracking",
    status: "Active",
    price: "$49\u2013299/mo",
    link: null,
    icon: Cpu,
  },
];

const STEPS = [
  {
    num: "01",
    title: "Find",
    desc: "Identify regulated niches with mandated documentation, paper-based workflows, and overpriced incumbents.",
  },
  {
    num: "02",
    title: "Build",
    desc: "Ship an MVP in 2 weeks. Shared platform infrastructure: Clerk, Neon, Stripe, Next.js. Fork the codebase, customize for the vertical.",
  },
  {
    num: "03",
    title: "Validate",
    desc: "30-day kill criteria. Paying customers or move on. No sunk cost fallacy. Zero tolerance for building without signal.",
  },
  {
    num: "04",
    title: "Scale",
    desc: "SEO, cold outbound, community. No paid ads until product-market fit confirmed. Compound organic distribution.",
  },
];

const REASONS = [
  {
    title: "Fear-Driven Buyers",
    desc: "Failed audits mean fines, lost certifications, and shutdowns. Compliance software isn\u2019t a nice-to-have \u2014 it\u2019s insurance against business-ending risk.",
  },
  {
    title: "Weak Incumbents",
    desc: "Most regulated verticals are served by legacy tools built in 2005, charging enterprise prices for terrible UX. Modern alternatives win on experience and price.",
  },
  {
    title: "Mandated Demand",
    desc: "OSHA, NFPA, EPA, AWS, ASME \u2014 regulations don\u2019t go away. The TAM doesn\u2019t shrink. Every new regulation creates more software buyers.",
  },
];

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Live: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    Active: "text-brand-light bg-brand/10 border-brand/20",
    Building: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  };
  return (
    <span
      className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${colors[status] || colors.Active}`}
    >
      {status}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-dark/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            arcline
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <Link href="#portfolio" className="hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link href="#thesis" className="hover:text-white transition-colors">
              Thesis
            </Link>
            <Link href="#model" className="hover:text-white transition-colors">
              How We Build
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <AuroraBackground className="min-h-screen pt-16">
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
          <BlurFade delay={0.1}>
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 mb-8">
              <AnimatedShinyText className="text-sm">
                Venture Studio &mdash; Building Software for Regulated Industries
              </AnimatedShinyText>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-gradient">Software for industries</span>
              <br />
              <span className="text-gradient-brand">the market ignores.</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
              Arcline Ventures identifies underserved regulated industries, builds modern SaaS tools, and scales them. Compliance-driven workflows. Mobile-first. Priced for the market, not the enterprise.
            </p>
          </BlurFade>

          <BlurFade delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="#portfolio">
                <ShimmerButton
                  background="rgba(255, 255, 255, 0.1)"
                  shimmerColor="rgba(255,255,255,0.2)"
                  className="text-sm font-medium px-8 py-3"
                >
                  Explore Our Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ShimmerButton>
              </Link>
              <Link
                href="#thesis"
                className="text-sm text-zinc-400 hover:text-white transition-colors px-6 py-3"
              >
                Our Thesis &rarr;
              </Link>
            </div>
          </BlurFade>
        </div>
      </AuroraBackground>

      {/* Stats */}
      <section className="py-20 border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6">
          <BlurFade delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: 7, suffix: "", label: "Products" },
                { value: 3, suffix: "", label: "Industries Served" },
                { value: 2, suffix: "-week", label: "Build Cycles" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold stat-glow">
                    <NumberTicker value={stat.value} delay={0.3} />
                    <span className="text-zinc-400 text-2xl md:text-3xl">{stat.suffix}</span>
                  </div>
                  <p className="text-sm text-zinc-500 mt-2">{stat.label}</p>
                </div>
              ))}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold stat-glow">
                  <span className="text-zinc-400 text-2xl md:text-3xl">$</span>
                  <NumberTicker value={49} delay={0.3} />
                  <span className="text-zinc-400 text-2xl md:text-3xl">&ndash;</span>
                  <NumberTicker value={299} delay={0.3} />
                  <span className="text-zinc-400 text-2xl md:text-3xl">/mo</span>
                </div>
                <p className="text-sm text-zinc-500 mt-2">Price Range</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Thesis */}
      <section id="thesis" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <BlurFade delay={0.1}>
            <p className="text-sm font-medium text-brand-light uppercase tracking-wider mb-4">
              Our Thesis
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Compliance as a workflow.</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
              Every regulated industry has the same problem: legally mandated documentation trapped in paper forms, spreadsheets, and legacy software charging $200+/month. We build modern alternatives &mdash; mobile-first, AI-enhanced, priced 60&ndash;80% lower. Each product targets a niche with weak incumbents and fear-driven buyers. If audits, fines, or shutdowns drive the purchase, we&apos;re interested.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6">
          <BlurFade delay={0.1}>
            <p className="text-sm font-medium text-brand-light uppercase tracking-wider mb-4">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-12">
              <span className="text-gradient">Active products.</span>
            </h2>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.map((product, i) => {
              const Icon = product.icon;
              return (
                <BlurFade key={product.name} delay={0.1 + i * 0.05}>
                  <div className="glass rounded-2xl p-6 h-full flex flex-col justify-between hover:border-white/10 transition-all duration-300 group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-brand-light" />
                        </div>
                        <StatusBadge status={product.status} />
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {product.tagline}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/[0.04]">
                      {product.price ? (
                        <span className="text-sm font-medium text-zinc-300">
                          {product.price}
                        </span>
                      ) : (
                        <span className="text-sm text-zinc-600">Custom pricing</span>
                      )}
                      {product.link && (
                        <Link
                          href={product.link}
                          target="_blank"
                          className="text-xs text-zinc-500 hover:text-white flex items-center gap-1 transition-colors"
                        >
                          Visit <ExternalLink className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Model */}
      <section id="model" className="py-24 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6">
          <BlurFade delay={0.1}>
            <p className="text-sm font-medium text-brand-light uppercase tracking-wider mb-4">
              How We Build
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-16">
              <span className="text-gradient">Find. Build. Validate. Scale.</span>
            </h2>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <BlurFade key={step.num} delay={0.1 + i * 0.08}>
                <div className="space-y-4">
                  <span className="text-sm font-mono text-brand-light/60">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Why Regulated Industries */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6">
          <BlurFade delay={0.1}>
            <p className="text-sm font-medium text-brand-light uppercase tracking-wider mb-4">
              Why Regulated Industries
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-12">
              <span className="text-gradient">The unfair advantages.</span>
            </h2>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-5">
            {REASONS.map((reason, i) => (
              <BlurFade key={reason.title} delay={0.1 + i * 0.08}>
                <div className="glass rounded-2xl p-8 h-full">
                  <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{reason.desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 mesh-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <BlurFade delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Building for the industries</span>
              <br />
              <span className="text-gradient-brand">that can&apos;t afford to fail.</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
              Interested in what we&apos;re building? We&apos;re always looking for operators, partners, and early customers.
            </p>
          </BlurFade>
          <BlurFade delay={0.3}>
            <Link href="mailto:hello@arcline.io">
              <ShimmerButton
                background="rgba(255, 255, 255, 0.1)"
                shimmerColor="rgba(255,255,255,0.2)"
                className="text-sm font-medium px-8 py-3"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </ShimmerButton>
            </Link>
          </BlurFade>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-lg font-semibold tracking-tight mb-2">arcline</p>
              <p className="text-sm text-zinc-500">
                Venture studio building SaaS for regulated industries.
              </p>
            </div>
            <div className="flex items-center gap-8 text-sm text-zinc-500">
              <Link href="#portfolio" className="hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link href="#thesis" className="hover:text-white transition-colors">
                Thesis
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                X
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>
          <div className="divider mt-8 mb-6" />
          <p className="text-xs text-zinc-600">&copy; 2026 Arcline Ventures</p>
        </div>
      </footer>
    </div>
  );
}
