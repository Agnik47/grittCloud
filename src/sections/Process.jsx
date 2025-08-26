export default function Process() {
  const steps = [
    ['Frame', 'Clarify business constraint, value levers & success metrics. Codify current workflow.'],
    ['Design', 'Map system architecture, model fit, data surfaces, human-in-loop points.'],
    ['Build', 'Implement minimal viable automation + evaluation harness.'],
    ['Deploy', 'Rollout to a controlled cohort with monitoring & guardrails.'],
    ['Amplify', 'Instrument ROI, expand scope, enable adjacent teams.']
  ];

  return (
    <section id="process" className="relative py-28 md:py-40 bg-gray-900 overflow-hidden">
      {/* Dotted background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            A disciplined loop. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Not a science experiment.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Our proven process ensures your AI initiatives deliver real business value, not just technical experiments.
          </p>
        </div>
        
        {/* Process timeline with connecting wires */}
        <div className="relative">
          {/* Central connection line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
          
          <ol className="space-y-12 md:space-y-24">
            {steps.map((s, i) => (
              <li key={s[0]} className={`relative ${i % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'} group`}>
                {/* Connection dots */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-900 z-10 hidden md:block"></div>
                
                {/* Connection wires for even items */}
                {i % 2 === 0 && i !== steps.length - 1 && (
                  <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 w-1/4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 hidden md:block"></div>
                )}
                
                {/* Connection wires for odd items */}
                {i % 2 !== 0 && i !== steps.length - 1 && (
                  <div className="absolute right-1/2 top-1/2 transform -translate-y-1/2 w-1/4 h-1 bg-gradient-to-r from-purple-500 to-blue-500 hidden md:block"></div>
                )}
                
                {/* Step card */}
                <div className={`bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl transform transition-all duration-300  hover:shadow-2xl ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg mr-4`}>
                      {i+1}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{s[0]}</h3>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">{s[1]}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}