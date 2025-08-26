import { FaAnchor, FaProjectDiagram, FaUserSecret, FaTools, FaRegChartBar, FaNetworkWired } from "react-icons/fa";

export default function Problem() {
  const items = [
    {
      title: "No clear business anchor",
      description:
        "Initiatives start from tech curiosity not a quantifiable bottleneck.",
      size: "large",
      bgColor: "bg-gradient-to-b from-white/5 to-white/5",
      icons: [
        <FaAnchor key="1" size={60} className="text-gray-400 opacity-70 drop-shadow-lg" />,
        <FaRegChartBar key="2" size={60} className="text-gray-400 opacity-70 drop-shadow-lg" />,
        <FaNetworkWired key="3" size={60} className="text-gray-400 opacity-70 drop-shadow-lg" />,
      ],
    },
    {
      title: "Fragmented data / process maps",
      description:
        "Nobody has codified the current manual workflow or success metric.",
      size: "small",
      bgColor: "bg-gradient-to-b from-white/5 to-white/5",
      icons: [
        <FaProjectDiagram key="1" size={60} className="text-gray-400 opacity-70 drop-shadow-lg" />,
      ],
    },
    {
      title: "Shadow pilots",
      description:
        "Unvetted scripts & agents create risk and die after the champion leaves.",
      size: "large",
      bgColor: "bg-gradient-to-b from-white/5 to-white/5",
      icons: [
        <FaUserSecret key="1" size={60} className="text-gray-400 opacity-70 drop-shadow-lg" />,
      ],
    },
    {
      title: "Tool sprawl",
      description:
        "Point solutions overlap; no compounding capability layer emerges.",
      size: "small",
      bgColor: "bg-gradient-to-b from-white/5 to-white/5",
      icons: [
        <FaTools key="1" size={60} className="text-gray-400 opacity-70 drop-shadow-lg" />,
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-ink/80 via-ink/60 to-transparent py-16">
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
            <div
              key={index}
              className={`${item.bgColor} rounded-2xl p-8 hover:opacity-90 transition-all flex flex-col justify-between overflow-hidden ${
                item.size === "large" ? "md:row-span-2" : ""
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70 mb-6">{item.description}</p>
              </div>
              <div className="flex gap-4 justify-center items-center flex-wrap">
                {item.icons}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

