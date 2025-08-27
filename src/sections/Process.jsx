import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    ['Frame', 'Clarify business constraint, value levers & success metrics. Codify current workflow.'],
    ['Design', 'Map system architecture, model fit, data surfaces, human-in-loop points.'],
    ['Build', 'Implement minimal viable automation + evaluation harness.'],
    ['Deploy', 'Rollout to a controlled cohort with monitoring & guardrails.'],
    ['Amplify', 'Instrument ROI, expand scope, enable adjacent teams.']
  ];

  const [hoveredWire, setHoveredWire] = useState(null);

  // Function to generate random wire paths
  const generateWirePath = (index, isEven) => {
    const startX = isEven ? 100 : 0;
    const endX = isEven ? 0 : 100;
    
    // Generate some random control points for organic-looking curves
    const cp1x = 50 + (Math.random() * 20 - 10);
    const cp1y = 25 + (Math.random() * 20 - 10);
    const cp2x = 50 + (Math.random() * 20 - 10);
    const cp2y = 75 + (Math.random() * 20 - 10);
    
    return `M ${startX} 0 C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} 100`;
  };

  return (
    <section id="process" className="relative py-28 md:py-40 bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            A disciplined loop. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Not a science experiment.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Our proven process ensures your AI initiatives deliver real business value, not just technical experiments.
          </p>
        </div>
        
        {/* Process timeline container with dotted background */}
        <div className="relative bg-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl"
          style={{
            backgroundImage: 'radial-gradient(circle, #4a5568 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            backgroundPosition: 'center',
          }}>
          
          <div className="relative">
            <ol className="space-y-24 md:space-y-32 relative z-10">
              {steps.map((s, i) => {
                const isEven = i % 2 === 0;
                
                return (
                  <li key={s[0]} className={`relative ${isEven ? 'md:pr-1/2' : 'md:pl-1/2'} group`}>
                    {/* Connection dots */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-800 z-20 hidden md:flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{i+1}</span>
                    </div>
                    
                    {/* Interactive wires */}
                    {i > 0 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-24 h-full -translate-y-1/2 hidden md:block z-0"
                           style={{ height: '150%' }}>
                        <svg 
                          width="100%" 
                          height="100%" 
                          viewBox="0 0 100 100" 
                          preserveAspectRatio="none"
                          className="overflow-visible"
                        >
                          <motion.path
                            d={generateWirePath(i, isEven)}
                            strokeWidth="2"
                            stroke="url(#wireGradient)"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ 
                              pathLength: 1,
                              transition: { duration: 1.5, delay: i * 0.2 } 
                            }}
                            whileHover={{
                              stroke: "#ec4899",
                              strokeWidth: 3,
                              transition: { duration: 0.2 }
                            }}
                            drag
                            dragConstraints={{
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                            }}
                            dragElastic={0.1}
                            className="cursor-grab active:cursor-grabbing"
                            onHoverStart={() => setHoveredWire(i)}
                            onHoverEnd={() => setHoveredWire(null)}
                          />
                          <defs>
                            <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="#8b5cf6" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    )}
                    
                    {/* Step card */}
                    <motion.div 
                      className={`bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl transform transition-all duration-300 hover:shadow-2xl ${isEven ? 'md:mr-8' : 'md:ml-8'}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      whileHover={{ 
                        scale: 1.02,
                        borderColor: hoveredWire === i ? "#ec4899" : "#4a5568",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg`}>
                          {i+1}
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{s[0]}</h3>
                          <p className="text-gray-400 text-sm md:text-base leading-relaxed">{s[1]}</p>
                        </div>
                      </div>
                    </motion.div>
                  </li>
                );
              })}
            </ol>
            
            {/* Central connection line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block rounded-full"></div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>✨ Drag and play with the connecting wires to explore our process flow</p>
        </div>
      </div>
    </section>
  );
} 