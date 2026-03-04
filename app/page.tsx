import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

// ──────────────────────────────────────────────
// Portfolio Companies
// ──────────────────────────────────────────────

const DIVISIONS = [
  {
    name: "Scian.io",
    division: "GTM Platform",
    tagline: "Push a feature, get a campaign",
    description:
      "Productized GTM platform for B2B SaaS. Clients import new features → AI generates ICP targeting, lead lists, email sequences, LinkedIn touches, content. Review queue → one-click launch across all channels.",
    url: "https://scian.io",
    siteUrl: "https://scian-site.vercel.app",
    status: "Pivoting",
    statusColor: "text-amber-400 bg-amber-500/10",
    price: "$1,500-5,000/mo",
    icon: "⚡",
    arr: "$50K",
    metrics: [
      { label: "Current ARR", value: "$50K" },
      { label: "Target", value: "$5M in 3yr" },
      { label: "Model", value: "Platform SaaS" },
    ],
    roadmap: [
      { item: "Customer Hub MVP — client-facing glass pane", status: "building" },
      { item: "AI campaign generator (feature → ICP → sequences)", status: "building" },
      { item: "Review queue with human-in-the-loop approval", status: "planned" },
      { item: "Multi-channel launch (email, LinkedIn, content, ads)", status: "planned" },
      { item: "Onboard first 3 pilot customers", status: "planned" },
      { item: "Performance analytics dashboard", status: "planned" },
    ],
  },
  {
    name: "FenceCalc",
    division: "Vertical SaaS",
    tagline: "Fence estimating software that wins more jobs",
    description:
      "Satellite measurement, auto material takeoffs, branded PDF proposals, e-signatures, online payments, CRM, tiered estimates. Built for fence contractors.",
    url: "https://thefencecalc.com",
    siteUrl: "https://thefencecalc.com",
    appUrl: "https://app.thefencecalc.com",
    status: "Live",
    statusColor: "text-emerald-400 bg-emerald-500/10",
    price: "$79/mo",
    icon: "🏗️",
    arr: "$0",
    metrics: [
      { label: "Price", value: "$79/mo" },
      { label: "TAM", value: "346K businesses" },
      { label: "SEO Pages", value: "28 live" },
    ],
    roadmap: [
      { item: "Cold outbound via Instantly (3 sequences ready)", status: "ready" },
      { item: "Stripe price IDs + billing live", status: "blocked" },
      { item: "G2 / Capterra listings", status: "ready" },
      { item: "First 10 paying customers", status: "planned" },
      { item: "Supplier catalog integration", status: "planned" },
    ],
  },
  {
    name: "ShieldAI",
    division: "Vertical SaaS",
    tagline: "AI tool approval workflows for financial services",
    description:
      "Evaluate, approve, and monitor every AI tool employees want to use. Built for compliance officers at PE firms, banks, hedge funds, and RIAs. SOC2, SOX, GLBA, FINRA, SEC, EU AI Act.",
    url: "https://tryshieldai.com",
    siteUrl: "https://tryshieldai.com",
    status: "Built",
    statusColor: "text-blue-400 bg-blue-500/10",
    price: "$199-499/mo",
    icon: "🛡️",
    arr: "$0",
    metrics: [
      { label: "Price", value: "$199-499/mo" },
      { label: "Target", value: "PE/Hedge/RIA" },
      { label: "App Files", value: "73 files" },
    ],
    roadmap: [
      { item: "Deploy to Vercel (needs Clerk + Neon keys)", status: "blocked" },
      { item: "Slack/Teams integration for approvals", status: "planned" },
      { item: "Outbound to compliance officers", status: "planned" },
      { item: "First 5 paying customers", status: "planned" },
    ],
  },
  {
    name: "FireLog",
    division: "Vertical SaaS",
    tagline: "Digital fire inspection reports (NFPA compliant)",
    description:
      "Replace paper checklists with mobile-first NFPA inspection forms. Pre-built templates (NFPA 10/25/72/80), branded PDF reports, deficiency tracking, compliance documentation.",
    url: "https://firelog-site.vercel.app",
    siteUrl: "https://firelog-site.vercel.app",
    status: "Built",
    statusColor: "text-blue-400 bg-blue-500/10",
    price: "$49/mo",
    icon: "🔥",
    arr: "$0",
    metrics: [
      { label: "Price", value: "$49/mo" },
      { label: "TAM", value: "19,845 businesses" },
      { label: "App Files", value: "49 files" },
    ],
    roadmap: [
      { item: "Deploy to Vercel (needs Clerk + Neon keys)", status: "blocked" },
      { item: "NFPA 96 + Hood Suppression template", status: "planned" },
      { item: "Outbound to fire protection companies", status: "planned" },
      { item: "First 10 paying customers", status: "planned" },
    ],
  },
];

const PIPELINE = [
  { name: "DeckCalc", desc: "Deck estimating (fork FenceCalc)", validated: true },
  { name: "SepticPro", desc: "Septic inspection documentation", validated: false },
  { name: "BackflowBoss", desc: "Backflow test reports", validated: false },
  { name: "WeldTrack", desc: "Weld inspection tracking", validated: false },
  { name: "ArborBooks", desc: "Arborist reporting", validated: false },
  { name: "PestLog", desc: "Pest control documentation", validated: false },
  { name: "CraneLog", desc: "Crane inspection records", validated: false },
  { name: "ElevatorDoc", desc: "Elevator inspection reports", validated: false },
];

function StatusDot({ status }: { status: string }) {
  const colors: Record<string, string> = {
    building: "bg-blue-400",
    ready: "bg-amber-400",
    blocked: "bg-red-400",
    planned: "bg-gray-500",
    done: "bg-emerald-400",
  };
  return <span className={`inline-block w-2 h-2 rounded-full ${colors[status] || "bg-gray-500"}`} />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight">▲ Arcline</span>
            <span className="text-xs text-gray-500 border border-white/10 px-2 py-0.5 rounded">Command Center</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>4 Active Companies</span>
            <span>·</span>
            <span>8 in Pipeline</span>
            <UserButton />
          </div>
        </div>
      </header>

      {/* Portfolio Overview */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Portfolio ARR", value: "$50K", sub: "Target: $3.6M" },
            { label: "Active Products", value: "4", sub: "1 live, 2 built, 1 pivoting" },
            { label: "SEO Pages", value: "34", sub: "Compounding organic traffic" },
            { label: "Pipeline", value: "8", sub: "Products queued for build" },
          ].map((stat) => (
            <div key={stat.label} className="border border-white/10 rounded-xl p-4 bg-white/[0.02]">
              <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
              <p className="text-xs text-gray-600 mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Cards */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {DIVISIONS.map((co) => (
            <div key={co.name} className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden">
              {/* Company Header */}
              <div className="p-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{co.icon}</span>
                    <h2 className="text-xl font-bold">{co.name}</h2>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${co.statusColor}`}>
                      {co.status}
                    </span>
                    <span className="text-xs text-gray-600 border border-white/10 px-2 py-0.5 rounded">
                      {co.division}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-1 font-medium">{co.tagline}</p>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{co.description}</p>
                </div>
                <div className="flex gap-3">
                  {co.url && (
                    <Link href={co.url} target="_blank" className="text-xs text-gray-500 hover:text-white border border-white/10 px-3 py-1.5 rounded-lg transition-colors">
                      Site →
                    </Link>
                  )}
                  {"appUrl" in co && co.appUrl && (
                    <Link href={co.appUrl as string} target="_blank" className="text-xs text-gray-500 hover:text-white border border-white/10 px-3 py-1.5 rounded-lg transition-colors">
                      App →
                    </Link>
                  )}
                </div>
              </div>

              {/* Metrics + Roadmap */}
              <div className="border-t border-white/10 grid md:grid-cols-2">
                {/* Metrics */}
                <div className="p-6 border-b md:border-b-0 md:border-r border-white/10">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Key Metrics</p>
                  <div className="grid grid-cols-3 gap-4">
                    {co.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-lg font-bold">{m.value}</p>
                        <p className="text-xs text-gray-600">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Roadmap */}
                <div className="p-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Roadmap</p>
                  <div className="space-y-2">
                    {co.roadmap.map((r) => (
                      <div key={r.item} className="flex items-start gap-2 text-sm">
                        <StatusDot status={r.status} />
                        <span className={r.status === "blocked" ? "text-red-400" : r.status === "ready" ? "text-amber-400" : "text-gray-400"}>
                          {r.item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scian Productization Detail */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            ⚡ Scian.io — Productization Roadmap
          </h2>
          <p className="text-gray-400 text-sm mb-6 max-w-3xl">
            Scian is pivoting from agency (manual GTM delivery) to platform (AI-automated GTM delivery).
            The product: a &quot;glass pane&quot; where B2B SaaS clients push features in and get full campaigns out.
            Behind the glass: Clay + Instantly + HeyReach + GHL, all orchestrated by AI. The customer never touches the tools.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Phase 1 — Foundation</p>
              <div className="space-y-2 text-sm">
                {[
                  { item: "Customer Hub UI (Next.js + Clerk)", done: false },
                  { item: "Feature intake form → structured data", done: false },
                  { item: "ICP generator (feature → target personas)", done: false },
                  { item: "Multi-tenant data model", done: false },
                ].map((i) => (
                  <div key={i.item} className="flex items-center gap-2">
                    <span className={i.done ? "text-emerald-400" : "text-gray-600"}>{i.done ? "✓" : "○"}</span>
                    <span className={i.done ? "text-gray-300" : "text-gray-500"}>{i.item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Phase 2 — AI Engine</p>
              <div className="space-y-2 text-sm">
                {[
                  { item: "AI email sequence generator", done: false },
                  { item: "AI LinkedIn touch generator", done: false },
                  { item: "AI blog post / content generator", done: false },
                  { item: "Lead list builder (Clay integration)", done: false },
                  { item: "Review queue (human-in-the-loop)", done: false },
                ].map((i) => (
                  <div key={i.item} className="flex items-center gap-2">
                    <span className={i.done ? "text-emerald-400" : "text-gray-600"}>{i.done ? "✓" : "○"}</span>
                    <span className={i.done ? "text-gray-300" : "text-gray-500"}>{i.item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Phase 3 — Launch</p>
              <div className="space-y-2 text-sm">
                {[
                  { item: "One-click multi-channel launch", done: false },
                  { item: "Instantly + HeyReach orchestration", done: false },
                  { item: "Performance analytics dashboard", done: false },
                  { item: "3 pilot customers onboarded", done: false },
                  { item: "Pricing: Starter $1.5K → Growth $3K → Scale $5K", done: false },
                ].map((i) => (
                  <div key={i.item} className="flex items-center gap-2">
                    <span className={i.done ? "text-emerald-400" : "text-gray-600"}>{i.done ? "✓" : "○"}</span>
                    <span className={i.done ? "text-gray-300" : "text-gray-500"}>{i.item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-white/10 rounded-xl p-5 bg-white/[0.02]">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">The Flywheel</p>
            <p className="text-sm text-gray-400">
              More campaigns → more data → AI gets smarter → better results → higher retention → more customers → more campaigns.
              Every campaign run through the platform makes the AI better at targeting, sequencing, and content generation.
              At scale, Scian becomes a data moat — no agency can compete with AI trained on thousands of GTM campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Product Pipeline
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {PIPELINE.map((p) => (
              <div key={p.name} className="border border-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-sm">{p.name}</h3>
                  {p.validated && (
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      Validated
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thesis */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Vertical SaaS Thesis
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Regulated industries where documentation is legally mandated, currently paper-based,
              and failure means fines or shutdowns. Each product targets a niche with weak incumbents
              charging $200+/month. We deliver better tools at $49-79/month with modern mobile-first UX.
              Shared infrastructure. 2-week build cycles. 30-day kill criteria.
            </p>
          </div>
          <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              GTM Platform Thesis
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              B2B SaaS companies need GTM execution but can&apos;t afford agencies ($15-30K/mo) and
              don&apos;t have time to learn 6 tools. Scian is the platform layer: push a feature in,
              get a full campaign out. 10× cheaper than agencies, 10× easier than DIY.
              AI orchestration makes it scalable without headcount.
            </p>
          </div>
        </div>
      </section>

      {/* Build Model */}
      <section className="max-w-7xl mx-auto px-6 py-8 pb-16">
        <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            The Model
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Find", desc: "Identify regulated niches with paper-based workflows and overpriced incumbents" },
              { num: "02", title: "Build", desc: "Ship an MVP in 2 weeks using shared platform infrastructure (Clerk + Neon + Stripe + PDF)" },
              { num: "03", title: "Validate", desc: "30-day kill criteria — paying customers or we move on. No sunk cost fallacy." },
              { num: "04", title: "Scale", desc: "SEO + cold outbound + community. No paid ads until product-market fit confirmed." },
            ].map((step) => (
              <div key={step.num} className="space-y-3">
                <span className="text-sm font-mono text-gray-600">{step.num}</span>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <p className="text-sm text-gray-600">© 2026 Arcline.</p>
          <p className="text-xs text-gray-700">Internal Command Center — Not Public</p>
        </div>
      </footer>
    </div>
  );
}
