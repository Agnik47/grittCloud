export default function Footer() {
  // Replace with your Freshdesk portal URL
  const freshdeskUrl = "https://YOURDOMAIN.freshdesk.com/support/tickets/new";

  return (
    <footer className="relative py-14 border-t border-white/10 bg-ink/95 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10 md:items-center justify-between">
        <div className="space-y-2">
          <div className="font-medium tracking-tight">Studio Automata</div>
          <p className="text-white/40 text-xs max-w-sm leading-relaxed">
            Boutique applied AI automation studio. We help B2B teams turn manual
            operational drag into defensible leverage.
          </p>
        </div>
        <div className="flex gap-6 text-white/40">
          <a href="#solutions" className="hover:text-white">
            Solutions
          </a>
          <a href="#process" className="hover:text-white">
            Process
          </a>
          <a href="#credibility" className="hover:text-white">
            Proof
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
          <a
            href={freshdeskUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            Support
          </a>
        </div>
        <div className="text-white/30 text-[11px]">
          © {new Date().getFullYear()} Studio Automata
        </div>
      </div>
    </footer>
  );
}
