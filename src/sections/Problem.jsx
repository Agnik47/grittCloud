import { FaAnchor, FaProjectDiagram, FaUserSecret, FaTools, FaRegChartBar, FaNetworkWired } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

export default function Problem() {
  const items = [
    {
      title: "No clear business anchor",
      description:
        "Initiatives start from tech curiosity not a quantifiable bottleneck.",
      size: "large",
      icons: [
        <FaAnchor key="1" size={100} className="text-gray-400 opacity-70 drop-shadow-lg" />,
        <FaRegChartBar key="2" size={100} className="text-gray-400 opacity-70 drop-shadow-lg" />,
        <FaNetworkWired key="3" size={100} className="text-gray-400 opacity-70 drop-shadow-lg" />,
      ],
    },
    {
      title: "Fragmented data / process maps",
      description:
        "Nobody has codified the current manual workflow or success metric.",
      size: "small",
      icons: [
        <FaProjectDiagram key="1" size={70} className="text-gray-400 opacity-70 drop-shadow-lg" />,
      ],
    },
    {
      title: "Shadow pilots",
      description:
        "Unvetted scripts & agents create risk and die after the champion leaves.",
      size: "large",
      icons: [
        <FaUserSecret key="1" size={130} className="text-gray-400 opacity-70 drop-shadow-lg" />,
      ],
    },
    {
      title: "Tool sprawl",
      description:
        "Point solutions overlap; no compounding capability layer emerges.",
      size: "small",
      icons: [
        <FaTools key="1" size={60} className="text-gray-400 opacity-70 drop-shadow-lg" />,
      ],
    },
  ];

  return (
  <section className="bg-gradient-to-b from-[#0F1117] via-[#0D0F14] bg-ink/95 py-16 relative overflow-hidden section-blend">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Why most internal AI projects stall.
        </h2>
        <p className="text-white/70 text-lg mb-12 max-w-3xl">
          Teams chase headlines, over-scope MVPs, underestimate change-management and burn cycles on infra before capturing a single hour of saved work.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[220px]">
          {items.map((item, index) => (
            <TorchCard
              key={index}
              title={item.title}
              description={item.description}
              icons={item.icons}
              size={item.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TorchCard({ title, description, icons, size }) {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const bg = useTransform(
    [x, y],
    ([latestX, latestY]) =>
      `radial-gradient(200px at ${latestX}px ${latestY}px, rgba(255,255,255,0.15), rgba(255,255,255,0))`
  );

  const borderGlow = useTransform(
    [x, y],
    ([latestX, latestY]) =>
      `radial-gradient(150px at ${latestX}px ${latestY}px, rgba(0,255,255,0), transparent)`
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      className={`relative rounded-2xl p-8 transition-all flex flex-col justify-between overflow-hidden cursor-pointer ${
        size === "large" ? "md:row-span-2" : ""
      }`}
      style={{
        background: hovered ? bg : "rgba(255,255,255,0)",
        border: "1px solid rgba(255,255,255,0.08)",
        position: "relative",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Border Glow */}
      {hovered && (
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            borderRadius: "16px",
            background: borderGlow,
          }}
        />
      )}

      <div>
        <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
          {title}
        </h3>
        <p className="text-white/70 mb-6 relative z-10">{description}</p>
      </div>
      <div className="flex gap-4 justify-center items-center flex-wrap relative z-10">
        {icons}
      </div>
    </motion.div>
  );
}
