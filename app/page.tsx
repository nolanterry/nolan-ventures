import Link from "next/link";

const products = [
  {
    name: "FenceCalc",
    tagline: "Fence estimating software that wins more jobs",
    description:
      "Material takeoffs, satellite measurement, branded PDF proposals, e-signatures, and online payments — all from your phone. Built for fence contractors.",
    url: "https://thefencecalc.com",
    appUrl: "https://app.thefencecalc.com",
    status: "Live",
    price: "$79/mo",
    color: "from-emerald-500 to-teal-600",
    icon: "🏗️",
  },
  {
    name: "ShieldAI",
    tagline: "AI tool approval workflows for financial services",
    description:
      "Evaluate, approve, and monitor every AI tool your employees want to use. Built for compliance officers at banks, PE firms, hedge funds, and RIAs.",
    url: "https://tryshieldai.com",
    status: "Building",
    price: "Coming soon",
    color: "from-indigo-500 to-blue-600",
    icon: "🛡️",
  },
  {
    name: "FireLog",
    tagline: "Digital fire inspection reports (NFPA compliant)",
    description:
      "Replace paper checklists with mobile-first NFPA inspection forms. Branded PDF reports, deficiency tracking, and compliance documentation.",
    url: "#",
    status: "Researching",
    price: "Coming soon",
    color: "from-orange-500 to-red-600",
    icon: "🔥",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <header className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Arcline
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
            Building vertical SaaS for underserved industries. Compliance-grade
            software at indie prices.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>Est. 2026</span>
          </div>
        </div>
      </header>

      {/* Thesis */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Investment Thesis
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We build software for regulated industries where documentation is
            legally mandated, currently paper-based, and failure means fines or
            shutdowns. Each product targets a niche with weak incumbents charging
            $200+/month — we deliver better tools at $79/month with modern
            mobile-first UX. Shared infrastructure across products. 2-week build
            cycles. 30-day kill criteria.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
          Portfolio
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="group border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{product.icon}</span>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    product.status === "Live"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : product.status === "Building"
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-gray-500/10 text-gray-400"
                  }`}
                >
                  {product.status}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">{product.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{product.tagline}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-400">
                  {product.price}
                </span>
                {product.url !== "#" && (
                  <Link
                    href={product.url}
                    target="_blank"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Visit →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Model */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
          The Model
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              num: "01",
              title: "Find",
              desc: "Identify regulated niches with paper-based workflows and overpriced incumbents",
            },
            {
              num: "02",
              title: "Build",
              desc: "Ship an MVP in 2 weeks using shared platform infrastructure",
            },
            {
              num: "03",
              title: "Validate",
              desc: "30-day kill criteria — paying customers or we move on",
            },
            {
              num: "04",
              title: "Scale",
              desc: "SEO + community + referrals. No paid ads until product-market fit.",
            },
          ].map((step) => (
            <div key={step.num} className="space-y-3">
              <span className="text-sm font-mono text-gray-600">
                {step.num}
              </span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Numbers */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
          Target
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { stat: "10+", label: "Products in pipeline" },
            { stat: "$79/mo", label: "Price point per product" },
            { stat: "$3.6M", label: "ARR target (10 products × $30K MRR)" },
          ].map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-4xl font-bold">{item.stat}</p>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2026 Arcline.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link
              href="mailto:hello@arcline.dev"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
