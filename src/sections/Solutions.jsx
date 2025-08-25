import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';

export default function Solutions() {
  const [activeNode, setActiveNode] = useState(null);
  const [nodePositions, setNodePositions] = useState({});
  const containerRef = useRef(null);
  
  const offers = [
    {
      id: 'node-1',
      tag: '01',
      title: 'Automation Opportunity Scan',
      body: 'Rapid discovery sprint. We map high-friction process surfaces, quantify savings & model ROI for 5-12 candidates.',
      result: 'Prioritized automation roadmap & executive brief.',
      position: { x: 0, y: 0 }
    },
    {
      id: 'node-2',
      tag: '02',
      title: 'Applied AI Build Cycle',
      body: '90-day product sprint. Ship a production workflow or agent that eliminates targeted manual work or latency.',
      result: 'Deployed internal AI product with measured ROI.',
      position: { x: 0, y: 0 }
    },
    {
      id: 'node-3',
      tag: '03',
      title: 'Capability Layer & Enablement',
      body: 'We standardize prompts, evaluation harnesses, data contracts & governance while training operators.',
      result: 'Reusable automation layer & adoption playbooks.',
      position: { x: 0, y: 0 }
    }
  ];

  // Initialize positions on component mount
  useEffect(() => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const centerY = containerRect.height / 2 - 100;
      
      const positions = {};
      offers.forEach((offer, index) => {
        const x = (containerRect.width / (offers.length + 1)) * (index + 1) - 150;
        positions[offer.id] = { x, y: centerY };
      });
      
      setNodePositions(positions);
    }
  }, []);

  const handleDrag = (event, info, id) => {
    setNodePositions(prev => ({
      ...prev,
      [id]: {
        x: prev[id].x + info.delta.x,
        y: prev[id].y + info.delta.y
      }
    }));
  };

  const calculateConnectorPath = (startId, endId) => {
    if (!nodePositions[startId] || !nodePositions[endId]) return '';
    
    const startX = nodePositions[startId].x + 300; // node width
    const startY = nodePositions[startId].y + 100; // node center
    const endX = nodePositions[endId].x;
    const endY = nodePositions[endId].y + 100; // node center
    
    // Create a curved path
    const controlX1 = startX + (endX - startX) * 0.5;
    const controlY1 = startY;
    const controlX2 = startX + (endX - startX) * 0.5;
    const controlY2 = endY;
    
    return `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;
  };

  return (
    <section id="solutions" className="section-anchor relative py-28 md:py-40 bg-ink/95 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white">
            Focused offers to compress risk & time‑to‑value.
          </h2>
          <p className="text-white/70 mt-4 text-lg">
            Drag the nodes to explore how our solutions connect and interact
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="relative min-h-[500px] md:min-h-[600px] border border-white/10 rounded-xl bg-ink/80 backdrop-blur-sm p-6"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}
        >
          {/* Connector lines */}
          {offers.slice(0, -1).map((offer, index) => {
            const nextOffer = offers[index + 1];
            return (
              <svg
                key={`connector-${offer.id}-${nextOffer.id}`}
                className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
              >
                <motion.path
                  d={calculateConnectorPath(offer.id, nextOffer.id)}
                  stroke="rgba(99, 102, 241, 0.6)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <motion.polygon
                  points="0,0 -8,-4 -8,4"
                  fill="rgba(99, 102, 241, 0.8)"
                  transform={`translate(${nodePositions[nextOffer.id]?.x || 0}, ${nodePositions[nextOffer.id]?.y + 100 || 0}) rotate(${Math.atan2(
                    (nodePositions[nextOffer.id]?.y + 100 || 0) - (nodePositions[offer.id]?.y + 100 || 0),
                    (nodePositions[nextOffer.id]?.x || 0) - (nodePositions[offer.id]?.x + 300 || 0)
                  ) * 180 / Math.PI})`}
                />
              </svg>
            );
          })}

          {/* Draggable Nodes */}
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              className={`absolute w-[300px] rounded-2xl p-6 bg-gradient-to-b from-gray-800 to-gray-900 border-2 hover:border-accent/50 transition-all duration-300 cursor-move ${activeNode === offer.id ? 'border-accent scale-105 shadow-lg z-20' : 'border-white/10 z-10'}`}
              style={{
                x: nodePositions[offer.id]?.x || 0,
                y: nodePositions[offer.id]?.y || 0,
              }}
              drag
              dragMomentum={false}
              dragElastic={0.1}
              onDrag={(event, info) => handleDrag(event, info, offer.id)}
              onClick={() => setActiveNode(activeNode === offer.id ? null : offer.id)}
              whileHover={{ scale: 1.02 }}
              whileDrag={{ scale: 1.05, zIndex: 30 }}
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xs">
                {offer.tag}
              </div>
              
              <h3 className="font-medium text-xl mb-3 text-white">{offer.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">{offer.body}</p>
              
              <AnimatePresence>
                {activeNode === offer.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-white/10">
                      <div className="text-white/50 text-xs uppercase tracking-wide mb-1">Outcome:</div>
                      <div className="text-white/80 text-sm">{offer.result}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {activeNode !== offer.id && (
                <div className="text-accent text-sm flex items-center mt-4">
                  Click to see outcome
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}

          {/* Floating elements for visual interest */}
          <motion.div
            className="absolute top-10 right-10 w-4 h-4 rounded-full bg-accent/40"
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-8 w-3 h-3 rounded-full bg-blue-400/40"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="mt-12 text-center text-white/60 text-sm">
          <p>Drag nodes to rearrange. Click to explore outcomes.</p>
        </div>
      </div>
    </section>
  );
}