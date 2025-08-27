import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFlag, FiMap, FiCode, FiPlayCircle, FiTrendingUp } from 'react-icons/fi';

const iconMap = {
  Frame: FiFlag,
  Design: FiMap,
  Build: FiCode,
  Deploy: FiPlayCircle,
  Amplify: FiTrendingUp
};

export default function Process() {
  const [active, setActive] = useState(0);
  const steps = [
    {
      title: 'Frame',
      desc: 'Clarify constraint, value levers & success metrics. Codify current workflow + baseline.',
      notes: ['Business anchor defined', 'Workflow mapped', 'Metric instrumentation plan']
    },
    {
      title: 'Design',
      desc: 'Map architecture, model fit, data surfaces, human-in-loop + failure states.',
      notes: ['System diagram', 'Data contracts', 'Guardrail design']
    },
    {
      title: 'Build',
      desc: 'Implement minimal viable automation + eval harness. Ship functional spine.',
      notes: ['MVP workflow', 'Eval harness', 'Ops runbook draft']
    },
    {
      title: 'Deploy',
      desc: 'Controlled rollout to first cohort. Monitor latency, drift, adoption & errors.',
      notes: ['Cohort onboarded', 'Observability live', 'Risk & fallback paths']
    },
    {
      title: 'Amplify',
      desc: 'Quantify ROI, expand scope, enable adjacent teams + compound capability layer.',
      notes: ['ROI report', 'Adjacent backlog', 'Enablement assets']
    }
  ];

  return (
    <section id="process" className="relative py-32 md:py-44 section-blend overflow-hidden">
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none" style={{background:"radial-gradient(circle at 25% 35%, rgba(99,102,241,0.15), transparent 60%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.12), transparent 65%)"}} />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-20 max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
            A disciplined loop. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Not a science experiment.</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl">
            Rendered like an n8n workflow: each stage is a promotable artifact with clear exit criteria and telemetry. Click a node to inspect its deliverables.
          </p>
        </div>

        {/* Horizontal workflow */}
        <div className="relative overflow-x-auto pb-10 -mx-4 px-4">
          <div className="min-w-[900px] flex items-start gap-10">
            {steps.map((step, i) => {
              const Icon = iconMap[step.title];
              const isActive = i === active;
              return (
                <div key={step.title} className="flex flex-col items-stretch w-56">
                  <button
                    onClick={() => setActive(i)}
                    className={`workflow-node group rounded-2xl text-left p-5 transition-all duration-300 ${isActive ? 'workflow-node-active' : 'hover:shadow-lg'} focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-11 h-11 flex items-center justify-center rounded-xl mr-3 shrink-0 bg-gradient-to-br from-indigo-500/90 to-purple-500/90 shadow-md group-hover:scale-105 transition-transform ${isActive ? 'ring-2 ring-indigo-400 ring-offset-2 ring-offset-[#0B0F19]' : ''}`}> 
                        <Icon className="text-white" size={22} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] tracking-wider font-mono text-indigo-300/70">{String(i+1).padStart(2,'0')}</span>
                        <span className="text-white font-semibold leading-tight">{step.title}</span>
                      </div>
                    </div>
                    <p className="text-white/60 text-xs leading-relaxed pr-2">
                      {step.desc}
                    </p>
                  </button>
                  {i < steps.length -1 && <div className="workflow-connector" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div className="mt-8 md:mt-14 grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3 rounded-3xl p-8 bg-gradient-to-b from-white/5 to-white/0 border border-white/10">
            <div className="text-xs font-mono tracking-widest text-indigo-300/70 mb-3">STAGE DETAIL</div>
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/90 shadow">{React.createElement(iconMap[steps[active].title], { size: 18, className: 'text-white'})}</span>
              {steps[active].title}
            </h3>
            <p className="text-white/65 leading-relaxed mb-6 text-sm md:text-base">
              {steps[active].desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {steps[active].notes.map(n => (
                <span key={n} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] tracking-wide text-white/70">{n}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            <MetricCard label="Exit Criteria" items={steps[active].notes} />
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:.35}} className="rounded-3xl p-6 bg-indigo-500/5 border border-indigo-400/20">
                <div className="text-xs font-mono tracking-widest text-indigo-300/70 mb-2">WHY IT MATTERS</div>
                <p className="text-white/70 text-sm leading-relaxed">{whyCopy(steps[active].title)}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-16 text-center text-white/40 text-xs tracking-wide">Click / tap nodes to explore the workflow. Designed for compounding value – not one-off experiments.</div>
      </div>
    </section>
  );
}

function MetricCard({ label, items }) {
  return (
    <div className="rounded-3xl p-6 bg-gradient-to-b from-white/5 to-white/0 border border-white/10 h-full">
      <div className="text-xs font-mono tracking-widest text-indigo-300/70 mb-3">{label.toUpperCase()}</div>
      <ul className="space-y-3">
        {items.map(i => (
          <li key={i} className="flex items-start gap-3 text-sm group">
            <span className="workflow-mini-line h-9 rounded-full group-hover:opacity-100 transition-opacity" />
            <span className="text-white/70 group-hover:text-white/90 transition-colors leading-relaxed">{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function whyCopy(stage) {
  switch(stage) {
    case 'Frame': return 'Without a quantified constraint & baseline you can\'t prove impact or prioritize; framing de-risks wander.';
    case 'Design': return 'Intentional interface & data design prevents brittle scripts and enables safe human oversight early.';
    case 'Build': return 'A thin vertical slice produces the first observable value & evaluation harness so iteration compounds.';
    case 'Deploy': return 'Controlled rollout captures real usage signal & uncovers edge cases before reputational risk grows.';
    case 'Amplify': return 'Measured ROI, enablement & backlog creation converts one-off success into a capability layer.';
    default: return '';
  }
}