import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const stats = [
  { label: 'Capital Deployed', value: '$14.2B', descriptor: 'across 60+ portfolio companies' },
  { label: 'Average EBITDA Growth', value: '28%', descriptor: 'within first 24 months' },
  { label: 'Global Team', value: '12 offices', descriptor: 'operating across 4 continents' },
  { label: 'Impact Capital', value: '7 ESG funds', descriptor: 'integrating sustainability mandates' },
]

const differentiators = [
  {
    title: 'Sector Intelligence Cloud',
    description:
      'Proprietary data engine benchmarking 120k middle-market signals to identify alpha before it becomes consensus.',
    cta: 'Explore the platform',
  },
  {
    title: 'Operator First Philosophy',
    description:
      'Deep bench of operating partners embedding growth playbooks and digital transformation accelerators inside every mandate.',
    cta: 'Meet our operators',
  },
  {
    title: 'Sustainable Value Creation',
    description:
      'ESG integration from diligence through exit ensures resilient outcomes, stakeholder trust, and measurable impact.',
    cta: 'Read the ESG report',
  },
]

const caseStudies = [
  {
    id: 'apollo',
    company: 'Apollo Nutraceuticals',
    metric: '4.2x MOIC',
    theme: 'Consumer Health',
    story:
      'Digitally enabled go-to-market strategy with precision retail partnerships delivered 4.2x MOIC in 36 months.',
    color: 'from-emerald-400 via-emerald-500 to-cyan-400',
  },
  {
    id: 'stratus',
    company: 'Stratus Aviation',
    metric: '32% CAGR',
    theme: 'Aerospace & Defense',
    story:
      'Operational excellence sprint modernized manufacturing, unlocking $180M in backlog and 32% CAGR.',
    color: 'from-indigo-500 via-sky-500 to-purple-400',
  },
  {
    id: 'aether',
    company: 'Aether Grid',
    metric: 'Carbon Neutral',
    theme: 'Energy Transition',
    story:
      'Structured carve-out of legacy assets, investing $400M in smart-grid upgrades to achieve carbon neutrality.',
    color: 'from-amber-400 via-orange-500 to-rose-500',
  },
]

const sectors = [
  {
    name: 'Advanced Manufacturing',
    summary:
      'Automation, robotics, and Industry 4.0 execution powering next-generation productivity in industrial platforms.',
    points: ['AI-enabled demand planning', 'Digital twin deployment', 'Global supply chain redesign'],
  },
  {
    name: 'Health & Wellness',
    summary: 'Full-stack wellness brands with personalized consumer journeys and omnichannel expansion.',
    points: ['Connected care analytics', 'Lifecycle loyalty programs', 'Precision commerce experiences'],
  },
  {
    name: 'Aerospace & Defense',
    summary: 'Mission-critical suppliers modernizing with resilient, cyber-secure architectures.',
    points: ['Smart factory retrofits', 'Defense compliance automation', 'Predictive maintenance suites'],
  },
  {
    name: 'Climate & Infrastructure',
    summary: 'Energy transition and sustainable infrastructure platforms delivering resilient returns.',
    points: ['Grid modernization capital', 'Circular economy partnerships', 'Sustainable financing expertise'],
  },
]

const insights = [
  {
    title: '2024 Private Equity Pulse',
    description:
      'Why resilient deal flow is returning to the middle market and how to underwrite growth in an uncertain macro climate.',
    action: 'Download insights',
  },
  {
    title: 'Operational Alpha Playbook',
    description:
      'A blueprint for embedding digital, ESG, and human capital excellence across every portfolio company.',
    action: 'Get the playbook',
  },
  {
    title: 'LP Transparency Dashboard',
    description:
      'Interactive reporting experiences that bring LPs inside the value-creation engine in real time.',
    action: 'View a sample report',
  },
]

const timeline = [
  {
    title: 'Immersive Origination',
    description:
      'Deal teams co-create theses with operators and data scientists to pressure-test signals before deploying capital.',
  },
  {
    title: 'Velocity Diligence',
    description:
      'Lightning-fast sprints blending sector intelligence, ESG scoring, and scenario planning for actionable conviction.',
  },
  {
    title: 'Operator Residency',
    description:
      'Embedded operators and product strategists sit shoulder-to-shoulder with founders to accelerate transformations.',
  },
  {
    title: 'Transparent Exits',
    description:
      'Purpose-built reporting and stakeholder storytelling maximize exit multiples and impact narratives.',
  },
]

const testimonials = [
  {
    quote:
      'Their sector intelligence cloud gave us conviction to acquire ahead of the curve—growth unlocked in record time.',
    name: 'Amelia Chen',
    title: 'CEO, Apollo Nutraceuticals',
  },
  {
    quote:
      'The operator residency program transformed our go-to-market muscle and expanded EBITDA by 300 basis points.',
    name: 'Marcus Rivera',
    title: 'COO, Stratus Aviation',
  },
  {
    quote:
      'They championed sustainability with rigor, helping us finance a carbon-neutral grid that delights regulators and LPs.',
    name: 'Lena Kapoor',
    title: 'Founder, Aether Grid',
  },
]

const tabMotion = {
  rest: { opacity: 0, scale: 0.95 },
  hover: { opacity: 1, scale: 1 },
}

const PrivateEquityLanding = () => {
  const [activeSector, setActiveSector] = useState(sectors[0])
  const [activeCase, setActiveCase] = useState(caseStudies[0])

  const navLinks = useMemo(
    () => [
      { href: '#vision', label: 'Vision' },
      { href: '#differentiators', label: 'Differentiators' },
      { href: '#sectors', label: 'Sectors' },
      { href: '#case-studies', label: 'Case Studies' },
      { href: '#insights', label: 'Insights' },
      { href: '#connect', label: 'Connect' },
    ],
    []
  )

  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-[36rem] w-[36rem] rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/5 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">Helios Partners</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              Private equity built for the modern era of value creation.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              We empower category-defining founders with immersive capital, real operators, and data-rich insights that
              accelerate impact and returns.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm font-medium text-white/80">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative overflow-hidden rounded-full border border-white/10 px-4 py-2 transition hover:border-white/40"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 scale-x-0 bg-white/10 transition group-hover:scale-x-100" />
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="relative z-10 space-y-28 pb-32">
        <section id="vision" className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-16 lg:flex-row lg:items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/70">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" /> Investing in tomorrow&apos;s market leaders
            </div>
            <h2 className="mt-6 text-5xl font-semibold leading-tight">
              Deploying conviction capital with a digital-first, human-centered edge.
            </h2>
            <p className="mt-6 text-lg text-white/70">
              Our multidisciplinary teams integrate proprietary data science, deep sector expertise, and transformative operating
              rigor. From origination to exit, we architect experiences that scale revenue, resilience, and responsibility.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#connect">
                <a className="group relative overflow-hidden rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition">
                  <span className="relative z-10">Pitch your vision</span>
                  <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-emerald-400 via-sky-500 to-purple-500 transition group-hover:translate-y-0" />
                </a>
              </Link>
              <Link href="#insights">
                <a className="group relative overflow-hidden rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition">
                  <span className="relative z-10">Download our thesis</span>
                  <span className="absolute inset-0 translate-y-full bg-white/10 transition group-hover:translate-y-0" />
                </a>
              </Link>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-4">
            {stats.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.03, translateY: -4 }}
                className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                <div className="relative">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/60">{item.label}</p>
                  <p className="mt-4 text-3xl font-semibold">{item.value}</p>
                  <p className="mt-2 text-sm text-white/70">{item.descriptor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="differentiators"
          className="mx-auto max-w-6xl space-y-10 px-6"
        >
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-3xl font-semibold">Why partners choose Helios</h3>
              <p className="mt-2 text-base text-white/70">
                Full-stack partnership experiences engineered to create headline-grabbing value.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Live LP data room access
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {differentiators.map((item) => (
              <motion.article
                key={item.title}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <motion.div
                  variants={tabMotion}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                />
                <div className="relative space-y-4">
                  <h4 className="text-2xl font-semibold">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
                  <button className="group relative inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">
                    {item.cta}
                    <span className="transition group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="sectors" className="mx-auto max-w-6xl px-6">
          <div className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-800/40 p-10 shadow-[0_40px_120px_-60px_rgba(15,118,110,0.75)]">
            <div className="flex flex-col gap-10 lg:flex-row">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-200">
                  Sector focus
                </div>
                <h3 className="text-4xl font-semibold">Conviction across future-forward sectors</h3>
                <p className="text-base text-white/70">
                  Adaptive theses anchor every investment. Activate a sector to explore how we architect defensible alpha.
                </p>
                <div className="flex flex-wrap gap-3">
                  {sectors.map((sector) => {
                    const isActive = activeSector.name === sector.name
                    return (
                      <button
                        key={sector.name}
                        onClick={() => setActiveSector(sector)}
                        className={`relative overflow-hidden rounded-full px-5 py-2 text-sm font-medium transition ${
                          isActive
                            ? 'bg-gradient-to-r from-emerald-400 via-sky-500 to-purple-500 text-slate-900 shadow-lg shadow-emerald-500/40'
                            : 'border border-white/10 text-white hover:border-white/30'
                        }`}
                        type="button"
                      >
                        {sector.name}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex-1">
                <AnimatePresence exitBeforeEnter>
                  <motion.div
                    key={activeSector.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                    <div className="relative space-y-4">
                      <h4 className="text-2xl font-semibold">{activeSector.name}</h4>
                      <p className="text-sm text-white/70">{activeSector.summary}</p>
                      <ul className="space-y-3 text-sm text-white/80">
                        {activeSector.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <section id="case-studies" className="mx-auto max-w-6xl space-y-10 px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-4xl font-semibold">Signature transformations</h3>
              <p className="mt-2 max-w-xl text-base text-white/70">
                Explore an interactive look at how Helios orchestrates outsized outcomes with bold operators and forward-looking capital.
              </p>
            </div>
            <div className="flex gap-3">
              {caseStudies.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveCase(item)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                    activeCase.id === item.id
                      ? 'bg-white text-slate-900'
                      : 'border border-white/10 text-white hover:border-white/30'
                  }`}
                >
                  {item.company}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className={`relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br ${activeCase.color} p-10 text-slate-900 shadow-[0_30px_100px_-50px_rgba(14,165,233,0.75)]`}
            >
              <div className="absolute inset-0 bg-white/20 mix-blend-screen" />
              <div className="relative grid gap-6 lg:grid-cols-3 lg:items-center">
                <div className="lg:col-span-2 space-y-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-800/70">{activeCase.theme}</p>
                  <h4 className="text-4xl font-semibold">{activeCase.company}</h4>
                  <p className="text-lg text-slate-900/80">{activeCase.story}</p>
                </div>
                <div className="flex flex-col items-start gap-6 rounded-3xl bg-white/70 p-8 text-slate-900">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Outcome</p>
                  <p className="text-5xl font-semibold">{activeCase.metric}</p>
                  <Link href="#connect">
                    <a className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                      Request the full memo <span className="transition group-hover:translate-x-1">→</span>
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        <section id="insights" className="mx-auto max-w-6xl space-y-12 px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-4xl font-semibold">Insight engine</h3>
              <p className="mt-2 text-base text-white/70">
                Curated intelligence designed for founders and limited partners navigating complex markets.
              </p>
            </div>
            <Link href="#connect">
              <a className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-white/40">
                Join the LP circle <span>→</span>
              </a>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {insights.map((insight) => (
              <motion.article
                key={insight.title}
                whileHover={{ translateY: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative space-y-4">
                  <h4 className="text-2xl font-semibold">{insight.title}</h4>
                  <p className="text-sm text-white/70">{insight.description}</p>
                  <button className="group inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
                    {insight.action}
                    <span className="transition group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-[3rem] border border-white/10 bg-white/5">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6 p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white/70">
                  How we partner
                </div>
                <h3 className="text-4xl font-semibold">From first conversation to transformational exit</h3>
                <p className="text-base text-white/70">
                  A transparent, human-centered approach builds enduring relationships and measurable value.
                </p>
                <ul className="space-y-6">
                  {timeline.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="mt-1 h-3 w-3 rounded-full bg-emerald-400" />
                      <div>
                        <p className="text-lg font-semibold">{item.title}</p>
                        <p className="text-sm text-white/70">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8 border-t border-white/10 bg-gradient-to-br from-emerald-400/10 via-sky-400/5 to-purple-500/10 p-10">
                <h4 className="text-2xl font-semibold">Voices of partnership</h4>
                <div className="space-y-6">
                  {testimonials.map((testimonial) => (
                    <blockquote key={testimonial.quote} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                      <p className="text-base text-white/80">“{testimonial.quote}”</p>
                      <footer className="mt-4 text-sm text-white/60">
                        <p className="font-semibold text-white/80">{testimonial.name}</p>
                        <p>{testimonial.title}</p>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="connect" className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-emerald-400/20 via-sky-500/10 to-purple-500/20 p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white/70">
                  Let&apos;s build together
                </div>
                <h3 className="text-4xl font-semibold text-slate-900 drop-shadow">Share your next bold idea</h3>
                <p className="text-base text-slate-900/80">
                  Tell us about your vision and one of our partners will connect within 48 hours with curated insights tailored to your
                  growth mandate.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:partners@heliospartners.com"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/30 transition hover:shadow-slate-900/60"
                  >
                    partners@heliospartners.com
                  </a>
                  <a
                    href="tel:+12125550124"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-900/30 px-6 py-3 text-sm font-semibold text-slate-900/80 transition hover:border-slate-900/50"
                  >
                    +1 (212) 555-0124
                  </a>
                </div>
              </div>

              <form className="space-y-6 rounded-3xl bg-white/80 p-8 text-slate-900 shadow-2xl shadow-slate-900/10 backdrop-blur">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-2xl border border-slate-300/80 bg-white px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-2xl border border-slate-300/80 bg-white px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                  />
                </div>
                <div>
                  <label htmlFor="sector" className="text-sm font-semibold text-slate-700">
                    Sector of interest
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    className="mt-2 w-full rounded-2xl border border-slate-300/80 bg-white px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a sector
                    </option>
                    {sectors.map((sector) => (
                      <option key={sector.name} value={sector.name}>
                        {sector.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                    Tell us about your mandate
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Share growth goals, deal thesis, or transformation priorities..."
                    className="mt-2 w-full rounded-2xl border border-slate-300/80 bg-white px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Request a strategy session
                </button>
                <p className="text-xs text-slate-500">
                  We respect confidentiality. Submissions sync to our secure LP &amp; founder portal.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 px-6 py-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Helios Partners. All rights reserved.
      </footer>
    </div>
  )
}

export default PrivateEquityLanding
