import { useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-title",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.5 }
    );
    gsap.fromTo(
      ".hero-desc",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1.1 }
    );
    gsap.fromTo(
      ".hero-cta",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 1.5,
        stagger: 0.15,
      }
    );
    gsap.fromTo(
      ".hero-stats > div",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        delay: 2,
        stagger: 0.15,
      }
    );

    // Counting animation for stats
    const stats = [
      { selector: ".stat-hours", end: 42000, prefix: "", suffix: "+" },
      { selector: ".stat-value", end: 12, prefix: "$", suffix: "M+" },
      { selector: ".stat-cases", end: 38, prefix: "", suffix: "" },
      { selector: ".stat-roi", end: 90, prefix: "", suffix: " days" },
    ];

    stats.forEach((stat, i) => {
      const el = document.querySelector(stat.selector);
      if (!el) return;
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: stat.end,
          duration: 1.5,
          delay: 2 + i * 0.15,
          ease: "power1.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            let val = Math.floor(el.innerText);
            if (stat.selector === ".stat-value") {
              el.innerText = stat.prefix + val + stat.suffix;
            } else if (stat.selector === ".stat-hours") {
              el.innerText = val.toLocaleString() + stat.suffix;
            } else if (stat.selector === ".stat-roi") {
              el.innerText = val + stat.suffix;
            } else {
              el.innerText = val + stat.suffix;
            }
          },
        }
      );
    });
  }, []);

  return (
    <header className="relative overflow-hidden gradient-edge noise-overlay pt-32 pb-28 md:pb-40">
      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="mt-28 md:mt-40 space-y-10">
          <h1 className="hero-title font-display text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Applied AI Automations that ship revenue in 90 days.
          </h1>
          <p className="hero-desc max-w-xl text-lg md:text-xl text-white/70 leading-relaxed">
            We help non‑technical B2B operators imagine, design & deploy
            internal AI products that remove manual work, unlock new margins &
            de‑risk adoption.
          </p>
          <div className="flex flex-wrap gap-4 hero-cta">
            <a
              href="#contact"
              className="px-7 py-4 rounded-full bg-accent hover:bg-accent2 text-white font-medium text-sm tracking-wide shadow-subtle"
            >
              Request Scope Session
            </a>
            <a
              href="#process"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium"
            >
              How we work
            </a>
          </div>
          <div className="hero-stats pt-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-sm text-white/60">
            <div>
              <div className="stat-hours text-2xl md:text-3xl font-semibold text-white">
                0
              </div>
              <div className="mt-1 text-white/50 tracking-wide uppercase text-[11px]">
                Hours automated
              </div>
            </div>
            <div>
              <div className="stat-value text-2xl md:text-3xl font-semibold text-white">
                0
              </div>
              <div className="mt-1 text-white/50 tracking-wide uppercase text-[11px]">
                Client value created
              </div>
            </div>
            <div>
              <div className="stat-cases text-2xl md:text-3xl font-semibold text-white">
                0
              </div>
              <div className="mt-1 text-white/50 tracking-wide uppercase text-[11px]">
                Deployed use‑cases
              </div>
            </div>
            <div>
              <div className="stat-roi text-2xl md:text-3xl font-semibold text-white">
                0
              </div>
              <div className="mt-1 text-white/50 tracking-wide uppercase text-[11px]">
                Avg. time to first ROI
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
