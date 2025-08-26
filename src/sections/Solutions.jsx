export default function Solutions() {
  const offers = [
    {
      tag: "01",
      title: "Automation Opportunity Scan",
      body: "Rapid discovery sprint. We map high-friction process surfaces, quantify savings & model ROI for 5-12 candidates.",
      result: "Prioritized automation roadmap & executive brief.",
    },
    {
      tag: "02",
      title: "Applied AI Build Cycle",
      body: "90-day product sprint. Ship a production workflow or agent that eliminates targeted manual work or latency.",
      result: "Deployed internal AI product with measured ROI.",
    },
    {
      tag: "03",
      title: "White Label Platform & Enablement",
      body: "Launch your own branded automation platform. We provide the infrastructure, customization, and training for your team or clients.",
      result: "Fully branded, ready-to-scale automation solution.",
    },
  ];
  return (
    <section
      id="solutions"
    className="section-anchor relative py-28 md:py-40 bg-ink/95"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight">
            Focused offers to compress risk & time‑to‑value.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((o) => (
          <div
              key={o.title}
              className="relative rounded-2xl p-8 bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-accent/50 transition-colors"
            >
              <div className="text-xs font-mono tracking-wider text-accent mb-4">
                {o.tag}
              </div>
              <h3 className="font-medium text-xl mb-3">{o.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {o.body}
              </p>
              <div className="text-white/50 text-xs uppercase tracking-wide">
                Outcome:{" "}
                <span className="text-white/80 normal-case font-normal">
                  {o.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
