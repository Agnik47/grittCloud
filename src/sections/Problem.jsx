import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mic, BookOpen, MessageCircle, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Problem() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for fade-in
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const features = [
    {
      icon: Mic,
      title: "Remote podcast Recording",
      description: "Create studio-quality podcasts from the comfort of your home. Invite guest speakers from around the world. Collaborate across locations.",
      delay: 0
    },
    {
      icon: BookOpen,
      title: "Remote Teaching",
      description: "Make learning more flexible and accessible to your students. Share lectures and lessons. Craft educational videos in real-time.",
      delay: 100
    },
    {
      icon: MessageCircle,
      title: "Testimonials & Support",
      description: "Show on the remote person with all learners and providers",
      delay: 200
    },
    {
      icon: Users,
      title: "Corporate Communications",
      description: "Stay on the same page with all teams, even when you're working remotely. Exchange new ideas and...",
      delay: 300,
      large: true
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-ink to-gray-950 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Remote Collaboration Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform provides everything you need for seamless remote collaboration across various use cases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left column - 3 smaller cards */}
          <div className="md:col-span-7 space-y-8">
            {features.slice(0, 3).map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <TorchCard
                  key={index}
                  className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-md p-8 rounded-2xl shadow-xl overflow-hidden group border border-white/10 h-56"
                  style={{
                    transitionDelay: `${feature.delay}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                  }}
                >
                  <div className="flex items-start h-full">
                    <div className="p-3 rounded-lg bg-white/5 mr-6 flex-shrink-0">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  </div>
                </TorchCard>
              );
            })}
          </div>

          {/* Right column - 1 large card */}
          <div className="md:col-span-5">
            {features.slice(3).map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <TorchCard
                  key={index}
                  className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-md p-8 rounded-2xl shadow-xl overflow-hidden group border border-white/10 h-full min-h-[712px]"
                  style={{
                    transitionDelay: `${feature.delay}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                  }}
                >
                  <div className="flex flex-col h-full">
                    <div className="p-3 rounded-lg bg-white/5 w-fit mb-6">
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-6">{feature.title}</h3>
                    <p className="text-white/80 text-lg flex-grow">{feature.description}</p>
                    <div className="mt-8">
                      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </TorchCard>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

// TorchCard component with contained light effect
const TorchCard = ({ children, className, style }) => {
  const cardRef = useRef(null);
  const torchRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current || !torchRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate position with boundaries to keep torch within card
      const boundedX = Math.max(50, Math.min(x, rect.width - 50));
      const boundedY = Math.max(50, Math.min(y, rect.height - 50));
      
      gsap.to(torchRef.current, {
        x: boundedX,
        y: boundedY,
        duration: 0.2,
        ease: "power2.out"
      });
    };

    const cardElement = cardRef.current;
    if (cardElement) {
      cardElement.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        cardElement.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ease-out ${className}`}
      style={style}
      onMouseEnter={() => {
        gsap.to(torchRef.current, { opacity: 1, duration: 0.3 });
      }}
      onMouseLeave={() => {
        gsap.to(torchRef.current, { opacity: 0, duration: 0.3 });
      }}
    >
      {children}
      
      {/* Torch light effect - contained within card */}
      <div
        ref={torchRef}
        className="absolute pointer-events-none opacity-0 transition-opacity duration-300"
        style={{
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)',
          borderRadius: '50%',
          transform: 'translate(-60px, -60px)',
          willChange: 'transform',
          zIndex: 2
        }}
      ></div>
    </div>
  );
};