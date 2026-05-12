import analyticsData from "../../public/data/analytics.json";

type Segment = {
  name: string;
  pct: number;
  insight: string;
  action: string;
};

type AnalyticsData = {
  client: string;
  vertical: string;
  period: string;
  totalCustomers: number;
  revenueFromTop20: number;
  atRiskRevenue: number;
  segments: Segment[];
  vipMultiplier: number;
  fpo: boolean;
};

const data = analyticsData as AnalyticsData;

const segmentColor: Record<string, string> = {
  VIP: "#3d3530",
  Nurture: "#bf5a38",
  "Re-engage": "#c4b9ac",
};

const segmentTextColor: Record<string, string> = {
  VIP: "#f5f0e8",
  Nurture: "#f5f0e8",
  "Re-engage": "#3d3530",
};

function MetricCard({
  label,
  value,
  sub,
  fpo,
}: {
  label: string;
  value: string;
  sub: string;
  fpo: boolean;
}) {
  return (
    <div className="relative rounded-2xl border border-[#e8e0d4] bg-white p-5">
      {fpo && (
        <span className="absolute top-3 right-3 text-[9px] italic font-medium text-[#bf5a38] opacity-60">
          FPO
        </span>
      )}
      <div className="text-3xl font-bold text-[#3d3530] leading-none mb-1">
        {value}
      </div>
      <div className="text-xs font-semibold text-[#3d3530] mb-1">{label}</div>
      <div className="text-xs text-[#1a1410] opacity-50">{sub}</div>
    </div>
  );
}

function SegmentBar({ segment }: { segment: Segment }) {
  const bg = segmentColor[segment.name] ?? "#999";
  const textColor = segmentTextColor[segment.name] ?? "#fff";
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-semibold text-[#3d3530]">
          {segment.name}
        </span>
        <span className="text-sm font-bold text-[#3d3530]">
          {segment.pct}%
        </span>
      </div>
      <div className="w-full rounded-full h-7 bg-[#ede8df] overflow-hidden mb-1.5">
        <div
          className="h-7 rounded-full flex items-center px-3 transition-all"
          style={{ width: `${segment.pct}%`, background: bg }}
        >
          {segment.pct >= 20 && (
            <span
              className="text-[10px] font-semibold whitespace-nowrap"
              style={{ color: textColor }}
            >
              {segment.pct}%
            </span>
          )}
        </div>
      </div>
      <p className="text-xs text-[#1a1410] opacity-60 mb-1">
        {segment.insight}
      </p>
      <p className="text-xs font-medium text-[#bf5a38]">→ {segment.action}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── Nav ─────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 border-b border-[#e0d8cc]"
        style={{ background: "#f5f0e8" }}
      >
        <div className="mx-auto max-w-[680px] px-5 h-14 flex items-center justify-between">
          <a href="https://peachykeandev.com">
            <img
              src="/peachy-kean-logo.svg"
              alt="Peachy Kean DevOps"
              style={{ height: "40px", width: "auto" }}
            />
          </a>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#services"
              className="hidden sm:block text-sm font-medium text-[#3d3530] hover:text-[#bf5a38] transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="hidden sm:block text-sm font-medium text-[#3d3530] hover:text-[#bf5a38] transition-colors"
            >
              About
            </a>
            <a
              href="mailto:john@peachykeandev.com"
              className="text-sm font-semibold px-4 py-2 rounded-full text-white hover:opacity-90 transition-opacity"
              style={{ background: "#bf5a38" }}
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ── Hero ────────────────────────────────────── */}
        <section className="mx-auto max-w-[680px] px-5 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#bf5a38] mb-5">
            West Asheville &amp; WNC
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3d3530] leading-[1.1] tracking-tight mb-6">
            Know your best customers. Bring them back.
          </h1>
          <p className="text-lg text-[#1a1410] opacity-65 mb-10 leading-relaxed max-w-[520px]">
            We turn your Square exports, website traffic, and loyalty data into
            a clear picture of who your best customers are — and exactly what to
            do about it. Built for independent WNC businesses.
          </p>
          <a
            href="mailto:john@peachykeandev.com"
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white hover:opacity-90 transition-opacity"
            style={{ background: "#bf5a38" }}
          >
            Get your analysis →
          </a>
        </section>

        {/* ── What we do ──────────────────────────────── */}
        <section className="py-14 sm:py-20 bg-[#ede8df]">
          <div className="mx-auto max-w-[680px] px-5">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#bf5a38] mb-6">
              What we do
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-[#e8e0d4] bg-white p-5 flex flex-col gap-3">
                <span className="text-[#bf5a38]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#3d3530] mb-1">
                    Google Analytics Setup
                  </p>
                  <p className="text-xs text-[#1a1410] opacity-55 leading-relaxed">
                    GA4 configuration + traffic dashboard so you know where your
                    customers come from.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#e8e0d4] bg-white p-5 flex flex-col gap-3">
                <span className="text-[#bf5a38]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#3d3530] mb-1">
                    Square 80/20 Analysis
                  </p>
                  <p className="text-xs text-[#1a1410] opacity-55 leading-relaxed">
                    Identify the 20% of customers driving 80% of your revenue
                    from your Square exports.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#e8e0d4] bg-white p-5 flex flex-col gap-3">
                <span className="text-[#bf5a38]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                    <line x1="2" y1="20" x2="22" y2="20" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#3d3530] mb-1">
                    RFM Customer Segmentation
                    <sup className="text-[#bf5a38] ml-0.5">¹</sup>
                  </p>
                  <p className="text-xs text-[#1a1410] opacity-55 leading-relaxed">
                    Segment VIP, growth, and at-risk customers so you act on the
                    right audience every time.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-[10px] text-[#1a1410] opacity-40 leading-relaxed">
              <sup>¹</sup>{" "}
              <a
                href="https://en.wikipedia.org/wiki/RFM_(market_research)"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#bf5a38] hover:opacity-100 transition-colors"
              >
                RFM methodology
              </a>{" "}
              — Recency, Frequency, Monetary value segmentation.
            </p>
          </div>
        </section>

        {/* ── Live RFM Dashboard ───────────────────────── */}
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-[680px] px-5">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#bf5a38] mb-2">
              Live RFM Dashboard
            </h2>
            <p className="text-xs text-[#1a1410] opacity-50 mb-6">
              {data.vertical} · {data.period} · {data.client}
            </p>

            {data.fpo && (
              <div className="mb-6 rounded-xl border-2 border-dashed border-[#bf5a38] px-4 py-3 flex items-start gap-3 bg-[#fdf8f4]">
                <span className="text-[#bf5a38] mt-0.5 flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </span>
                <p className="text-xs text-[#1a1410] opacity-70 leading-relaxed">
                  Sample data shown for illustration — your numbers will vary by
                  vertical.{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/RFM_(market_research)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#bf5a38] underline hover:opacity-80 transition-opacity"
                  >
                    What is RFM? →
                  </a>
                </p>
              </div>
            )}

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <MetricCard
                label="Total Customers"
                value={data.totalCustomers.toLocaleString()}
                sub={`Over ${data.period}`}
                fpo={data.fpo}
              />
              <MetricCard
                label="Revenue from Top 20%"
                value={`${data.revenueFromTop20}%`}
                sub="Pareto concentration"
                fpo={data.fpo}
              />
              <MetricCard
                label="At-Risk Revenue"
                value={`$${data.atRiskRevenue.toLocaleString()}`}
                sub="Recoverable with action"
                fpo={data.fpo}
              />
            </div>

            {/* Segment Bars */}
            <div className="rounded-2xl border border-[#e8e0d4] bg-white p-6 mb-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#3d3530] mb-5">
                Customer Segments
              </h3>
              {data.segments.map((seg) => (
                <SegmentBar key={seg.name} segment={seg} />
              ))}
            </div>

            <p className="text-sm font-medium text-[#3d3530] text-center mb-8 px-2">
              VIP customers visit{" "}
              <span className="font-bold text-[#bf5a38]">
                {data.vipMultiplier}×
              </span>{" "}
              more than average
            </p>

            {/* Bottom CTA Strip */}
            <div
              className="rounded-2xl px-6 py-8 text-center"
              style={{ background: "#3d3530" }}
            >
              <p className="text-[#f5f0e8] opacity-80 text-sm mb-1">
                What do your numbers look like?
              </p>
              <p className="text-[#f5f0e8] font-semibold mb-5 text-base">
                Every vertical is different.
              </p>
              <a
                href="mailto:john@peachykeandev.com"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white hover:opacity-90 transition-opacity"
                style={{ background: "#bf5a38" }}
              >
                Get your analysis →
              </a>
            </div>
          </div>
        </section>

        {/* ── Services + Pricing ──────────────────────── */}
        <section id="services" className="py-14 sm:py-20 bg-[#ede8df]">
          <div className="mx-auto max-w-[680px] px-5">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#bf5a38] mb-6">
              Services &amp; Pricing
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Starter */}
              <div className="rounded-2xl border border-[#e8e0d4] bg-white p-5">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-sm font-bold text-[#3d3530]">Starter</p>
                  <span className="text-lg font-bold text-[#3d3530]">$299</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[#bf5a38] font-semibold mb-2">
                  One-time
                </p>
                <p className="text-xs text-[#1a1410] opacity-60 leading-relaxed">
                  GA4 setup + basic traffic dashboard. Know where your customers
                  come from.
                </p>
              </div>

              {/* Insights */}
              <div className="rounded-2xl border border-[#e8e0d4] bg-white p-5">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-sm font-bold text-[#3d3530]">Insights</p>
                  <span className="text-lg font-bold text-[#3d3530]">$499</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[#bf5a38] font-semibold mb-2">
                  One-time
                </p>
                <p className="text-xs text-[#1a1410] opacity-60 leading-relaxed">
                  Square 80/20 analysis + customer report. Know who your best
                  customers are.
                </p>
              </div>

              {/* Full Picture */}
              <div className="rounded-2xl border border-[#e8e0d4] bg-white p-5">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-sm font-bold text-[#3d3530]">
                    Full Picture
                  </p>
                  <span className="text-lg font-bold text-[#3d3530]">$999</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[#bf5a38] font-semibold mb-2">
                  One-time
                </p>
                <p className="text-xs text-[#1a1410] opacity-60 leading-relaxed">
                  GA4 + Square + RFM segmentation + action plan. Everything in
                  one complete engagement.
                </p>
              </div>

              {/* Monthly */}
              <div className="rounded-2xl border border-[#e8e0d4] bg-white p-5">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-sm font-bold text-[#3d3530]">Monthly</p>
                  <span className="text-lg font-bold text-[#3d3530]">
                    $149
                    <span className="text-sm font-medium text-[#1a1410] opacity-50">
                      /mo
                    </span>
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[#bf5a38] font-semibold mb-2">
                  Ongoing
                </p>
                <p className="text-xs text-[#1a1410] opacity-60 leading-relaxed">
                  RFM refresh + Brew Loyalty data combined. Always-current view
                  of your customer base.
                </p>
              </div>
            </div>

            {/* AI Peer XP — featured card */}
            <div
              className="mt-4 rounded-2xl border-2 p-5"
              style={{ borderColor: "#bf5a38", background: "white" }}
            >
              <div className="flex items-start justify-between mb-1">
                <p className="text-sm font-bold text-[#3d3530]">
                  AI Peer XP Session
                </p>
                <span className="text-lg font-bold text-[#3d3530]">
                  $149
                  <span className="text-sm font-medium text-[#1a1410] opacity-50">
                    /session
                  </span>
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#bf5a38] font-semibold mb-3">
                Per session
              </p>
              <p className="text-xs text-[#1a1410] opacity-70 leading-relaxed">
                Two AI models, one problem. We run Claude and ChatGPT as peer
                reviewers on your customer data — each independently analyzing
                your segments, then reconciling where they agree and disagree.
                Inspired by{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Extreme_programming"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bf5a38] underline hover:opacity-80 transition-opacity"
                >
                  Extreme Programming
                </a>
                <sup className="text-[#bf5a38] ml-0.5">²</sup>&apos;s pair
                review methodology. The result is analysis you can trust, not
                just one model&apos;s opinion.
              </p>
            </div>

            <a
              href="mailto:john@peachykeandev.com"
              className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white hover:opacity-90 transition-opacity"
              style={{ background: "#bf5a38" }}
            >
              Get your analysis →
            </a>
          </div>
        </section>

        {/* ── Footnotes ───────────────────────────────── */}
        <section className="mx-auto max-w-[680px] px-5 py-8">
          <div className="space-y-2">
            <p className="text-[11px] text-[#1a1410] opacity-40 leading-relaxed">
              <sup>¹</sup> RFM (Recency, Frequency, Monetary) analysis —{" "}
              <a
                href="https://en.wikipedia.org/wiki/RFM_(market_research)"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#bf5a38] hover:opacity-100 transition-colors"
              >
                en.wikipedia.org/wiki/RFM_(market_research)
              </a>
            </p>
            <p className="text-[11px] text-[#1a1410] opacity-40 leading-relaxed">
              <sup>²</sup> Extreme Programming peer review methodology —{" "}
              <a
                href="https://en.wikipedia.org/wiki/Extreme_programming"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#bf5a38] hover:opacity-100 transition-colors"
              >
                en.wikipedia.org/wiki/Extreme_programming
              </a>
            </p>
          </div>
        </section>

        {/* ── About strip ─────────────────────────────── */}
        <section
          id="about"
          className="py-14 sm:py-20"
          style={{ background: "#3d3530" }}
        >
          <div className="mx-auto max-w-[680px] px-5">
            <p className="text-[#f5f0e8] text-lg sm:text-xl font-medium leading-relaxed mb-5 opacity-90">
              Built for independent WNC businesses. All client engagements
              protected under NDA. We&apos;ve completed analytics work for
              independent Asheville businesses across arts, retail, and food
              &amp; beverage.
            </p>
            <a
              href="https://peachykeandev.com"
              className="text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{ color: "#bf5a38" }}
            >
              peachykeandev.com →
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────── */}
      <footer
        className="border-t border-[#e0d8cc]"
        style={{ background: "#f5f0e8" }}
      >
        <div className="mx-auto max-w-[680px] px-5 py-8">
          <p className="text-xs text-[#1a1410] opacity-45 text-center">
            &copy; 2026 Peachy Kean DevOps LLC &middot; Asheville, NC &middot;{" "}
            <a
              href="mailto:john@peachykeandev.com"
              className="hover:text-[#bf5a38] hover:opacity-100 transition-colors"
            >
              john@peachykeandev.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
