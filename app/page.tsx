"use client";

import Link from "next/link";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ArrowRight, ExternalLink } from "lucide-react";

const PRODUCTS = [
  {
    name: "FenceCalc",
    domain: "fencecalc.co",
    description:
      "Estimating software for fence contractors. Measure, quote, and close jobs faster with built-in material calculators and proposal generation.",
    status: "Live",
    link: "https://fencecalc.co",
    logo: "/logos/fencecalc.svg",
  },
  {
    name: "FireLog",
    domain: "firelogai.com",
    description:
      "Digital fire inspection and NFPA compliance. Replace paper forms with structured, auditable inspection reports that meet code requirements.",
    status: "Live",
    link: "https://firelogai.com",
    logo: "/logos/firelog.svg",
  },
  {
    name: "CraneCheck",
    domain: "cranecheck.co",
    description:
      "Crane inspection and OSHA compliance software. Digitize inspections, track certifications, and generate compliance documentation on-site.",
    status: "Live",
    link: "https://cranecheck.co",
    logo: "/logos/cranecheck.svg",
  },
];

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Live: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    Building: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  };
  return (
    <span
      className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${colors[status] || colors.Live}`}
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
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/arcline-logo.svg" alt="Arcline" width={28} height={28} className="invert" />
            <span className="text-lg font-semibold tracking-tight">arcline</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <Link href="#products" className="hover:text-white transition-colors">
              Products
            </Link>
            <Link href="mailto:hello@arcline.io" className="hover:text-white transition-colors">
              Contact
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
                3 products live &mdash; more shipping soon
              </AnimatedShinyText>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-gradient">We build</span>
              <br />
              <span className="text-gradient-brand">software.</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
              Arcline ships modern tools for industries still running on paper and legacy software. Real products, real users, real revenue.
            </p>
          </BlurFade>

          <BlurFade delay={0.4}>
            <Link href="#products">
              <ShimmerButton
                background="rgba(255, 255, 255, 0.1)"
                shimmerColor="rgba(255,255,255,0.2)"
                className="text-sm font-medium px-8 py-3"
              >
                View Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </ShimmerButton>
            </Link>
          </BlurFade>
        </div>
      </AuroraBackground>

      {/* Tech Grid Divider */}
      <div className="tech-grid h-24 border-b border-white/[0.04]" />

      {/* Products */}
      <section id="products" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <BlurFade delay={0.1}>
            <p className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4">
              ./products
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-16">
              <span className="text-gradient">Shipping now.</span>
            </h2>
          </BlurFade>

          <div className="grid gap-6">
            {PRODUCTS.map((product, i) => (
              <BlurFade key={product.name} delay={0.1 + i * 0.08}>
                <div className="glass rounded-2xl p-8 md:p-10 hover:border-white/10 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                    <div className="flex items-center gap-4 md:min-w-[200px]">
                      <div className="w-12 h-12 rounded-xl bg-white border border-white/20 flex items-center justify-center overflow-hidden shrink-0">
                        <Image src={product.logo} alt={product.name} width={28} height={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p className="text-xs font-mono text-zinc-500 mt-0.5">{product.domain}</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <StatusBadge status={product.status} />
                      <Link
                        href={product.link}
                        target="_blank"
                        className="text-sm text-zinc-500 hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        Visit <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 mesh-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <BlurFade delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-gradient">More products</span>
              <br />
              <span className="text-gradient-brand">shipping soon.</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
              We&apos;re always building. If you&apos;re in an industry that needs better tools, we want to hear about it.
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
              <div className="flex items-center gap-2.5 mb-2">
                <Image src="/arcline-logo.svg" alt="Arcline" width={24} height={24} className="invert" />
                <p className="text-lg font-semibold tracking-tight">arcline</p>
              </div>
              <p className="text-sm text-zinc-500">
                Software for industries that need it most.
              </p>
            </div>
            <div className="flex items-center gap-8 text-sm text-zinc-500">
              {PRODUCTS.map((product) => (
                <Link
                  key={product.name}
                  href={product.link}
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="divider mt-8 mb-6" />
          <p className="text-xs text-zinc-600">&copy; 2026 Arcline</p>
        </div>
      </footer>
    </div>
  );
}
