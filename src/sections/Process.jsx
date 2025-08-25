import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Process() {
  const sectionRef = useRef(null);

  const steps = [
    [
      "Frame",
      "Clarify business constraint, value levers & success metrics. Codify current workflow.",
    ],
    [
      "Design",
      "Map system architecture, model fit, data surfaces, human-in-loop points.",
    ],
    ["Build", "Implement minimal viable automation + evaluation harness."],
    ["Deploy", "Rollout to a controlled cohort with monitoring & guardrails."],
    ["Amplify", "Instrument ROI, expand scope, enable adjacent teams."],
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".process-step", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.25,
        delay: 0.3,
      });
      gsap.from(".process-dot", {
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(2)",
        stagger: 0.25,
        delay: 0.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      className="section-anchor relative py-28 md:py-40 bg-ink"
      ref={sectionRef}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="process-title font-display text-3xl md:text-5xl font-medium tracking-tight">
            A disciplined loop. Not a science experiment.
          </h2>
        </div>
        <ol className="space-y-10 md:space-y-14">
          {steps.map((s, i) => (
            <li key={s[0]} className="process-step group relative pl-10">
              <div className="process-dot absolute left-0 top-1.5 w-6 h-6 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-[11px] font-medium text-accent">
                {i + 1}
              </div>
              <div className="font-medium text-xl mb-2">{s[0]}</div>
              <div className="text-white/60 leading-relaxed max-w-2xl text-sm md:text-base">
                {s[1]}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
