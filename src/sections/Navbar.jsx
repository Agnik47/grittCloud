import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const navRef = useRef(null);
  let lastScrollY = 0;

  useEffect(() => {
    // Stagger in nav items on mount
    gsap.fromTo(
      ".hero-nav-item",
      { y: -30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
        delay: 0.2,
      }
    );

    // Scroll show/hide logic
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        gsap.to(navRef.current, { y: 0, duration: 0.3, ease: "power2.out" });
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        gsap.to(navRef.current, {
          y: "-100%",
          duration: 0.4,
          ease: "power2.in",
        });
      } else {
        // Scrolling up
        gsap.to(navRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-ink/80 via-ink/60 to-transparent backdrop-blur-md shadow-none transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <div className="hero-nav-item text-lg font-semibold tracking-tight">
          Studio Automata
        </div>
        <div className="hidden md:flex gap-8 text-sm text-white/70">
          <a href="#solutions" className="hero-nav-item hover:text-white">
            Solutions
          </a>
          <a href="#process" className="hero-nav-item hover:text-white">
            Process
          </a>
          <a href="#credibility" className="hero-nav-item hover:text-white">
            Proof
          </a>
          <a href="#contact" className="hero-nav-item hover:text-white">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="hero-nav-item text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/10"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
