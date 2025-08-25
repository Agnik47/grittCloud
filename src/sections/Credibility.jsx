
export default function Credibility(){
  const items = [
    ['Global SaaS Platform', 'Reduced onboarding case prep from 46 min to 6 min using retrieval + summarization agents.'],
    ['Industrial Supplier', 'Automated quote validation freeing 2.5 FTE and accelerating cycle time 34%.'],
    ['Healthcare Network', 'Deployed intake triage assistant reducing manual data structuring 71%.'],
    ['FinTech Vendor', 'Evaluation harness cut hallucination rate 52% across high-impact flows.']
  ];
  return (
    <section id="credibility" className="section-anchor relative py-28 md:py-40 bg-ink/95">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight">Signals we execute.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {items.map(i => (
            <div key={i[0]} className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-accent/40 transition-colors">
              <div className="font-medium text-lg mb-2">{i[0]}</div>
              <div className="text-white/60 text-sm leading-relaxed">{i[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
