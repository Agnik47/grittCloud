export default function CTA() {
  return (
    <section id="contact" className="section-anchor relative py-32 bg-ink">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-8">
          Scope your first automation.
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-10">
          We run a free 25‑minute diagnostic call to understand your process
          friction & quantify a quick‑win candidate.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto max-w-xl grid gap-4 md:grid-cols-5 text-left"
        >
          <input
            required
            placeholder="First name"
            type="text"
            className="md:col-span-2 px-5 py-4 rounded-xl bg-ink/80 border border-white/15 focus:outline-none focus:ring-2 focus:ring-accent/60 placeholder:text-white/30 text-sm text-white"
          />
          <input
            required
            placeholder="Work email"
            type="email"
            className="md:col-span-3 px-5 py-4 rounded-xl bg-ink/80 border border-white/15 focus:outline-none focus:ring-2 focus:ring-accent/60 placeholder:text-white/30 text-sm text-white"
          />
          <input
            required
            placeholder="Company"
            className="md:col-span-3 px-5 py-4 rounded-xl bg-ink/80 border border-white/15 focus:outline-none focus:ring-2 focus:ring-accent/60 placeholder:text-white/30 text-sm text-white"
          />
          <select
            required
            className="md:col-span-2 px-5 py-4 rounded-xl bg-ink/80 border border-white/15 focus:outline-none focus:ring-2 focus:ring-accent/60 text-sm text-white/80"
            defaultValue=""
          >
            <option value="" disabled>
              Select interest
            </option>
            <option value="agentic">Agentic business operation</option>
            <option value="marketing">Marketing with AI</option>
          </select>
          <button className="md:col-span-5 mt-2 px-6 py-4 rounded-xl bg-accent hover:bg-accent2 text-sm font-medium tracking-wide">
            Request Diagnostic
          </button>
        </form>
        <div className="mt-6 text-[11px] text-white/40">
          We respond inside 1 business day. Zero sales pressure.
        </div>
      </div>
    </section>
  );
}
