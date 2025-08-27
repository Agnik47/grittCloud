
export default function Credibility(){
  const items = [
    ['HR Tech', 'Automated onboarding assistant cut processing time by 65% and boosted employee satisfaction scores by 22%.'],
    ['Legal Advisory Firms', 'Contract review assistant reduced due diligence prep time from 7 hours to 40 minutes.'],
    ['Marketing Platforms', 'Campaign reporting agent automated data pulls across platforms, saving 25+ hours/month per account manager.'],
    ['FinTech Vendor', 'AI finance agent streamlined invoice management, cutting errors by 54% and reducing closure time by 40%']
  ];
  return (
  <section id="credibility" className="section-anchor relative py-28 md:py-40 bg-ink/95 section-blend">
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
