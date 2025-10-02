import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { assets } from "../assets/assets";

export default function Navbar({ scrollInstance }) {
  const navRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    // Animate nav items on mount
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

    // Scroll show/hide logic using Locomotive Scroll
    const scroll = scrollInstance?.current;
    if (scroll) {
      scroll.on("scroll", (args) => {
        const currentScrollY = args.scroll.y;
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
      });
    }
  }, [scrollInstance]);

  // Ensure navbar shows when clicking any nav link
  const handleNavClick = (e, target) => {
    e.preventDefault();
    const scroll = scrollInstance?.current;
    if (scroll) {
      scroll.scrollTo(target);
    }
    // Always show navbar after click
    gsap.to(navRef.current, { y: 0, duration: 0.3, ease: "power2.out" });
  };

  // Modal animation
  useEffect(() => {
    if (showModal) {
      gsap.fromTo(
        "#contact-modal",
        { y: 60, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [showModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const myForm = e.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        myForm.reset();
        setTimeout(() => {
          setShowModal(false);
          setIsSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-ink/80 via-ink/60 to-transparent backdrop-blur-md shadow-none transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <a href="/" className="hero-nav-item flex items-center">
            <img
              src={assets.HeaderLogo}
              alt="Gritt Cloud Logo"
              className="h-8 w-auto"
              style={{ minWidth: 32 }}
            />
          </a>
          <div className="hidden md:flex gap-8 text-sm text-white/70">
            <a
              href="#solutions"
              className="hero-nav-item hover:text-white"
              onClick={(e) => handleNavClick(e, "#solutions")}
            >
              Solutions
            </a>
            <a
              href="#process"
              className="hero-nav-item hover:text-white"
              onClick={(e) => handleNavClick(e, "#process")}
            >
              Process
            </a>
            <a
              href="#credibility"
              className="hero-nav-item hover:text-white"
              onClick={(e) => handleNavClick(e, "#credibility")}
            >
              Proof
            </a>
            <a
              href="#contact"
              className="hero-nav-item hover:text-white"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Contact
            </a>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="hero-nav-item text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/10"
          >
            Get in Touch
          </button>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            id="contact-modal"
            className="relative bg-ink rounded-2xl shadow-2xl border border-white/10 p-8 w-[90vw] max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-white/50 hover:text-white text-xl"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Get in Touch
            </h3>
            
            {isSubmitted ? (
              <div className="p-6 rounded-lg bg-accent/10 border border-accent/30 text-center">
                <p className="text-accent text-lg font-medium mb-2">Thank you!</p>
                <p className="text-white/70 text-sm">We'll contact you soon.</p>
              </div>
            ) : (
              <form
                name="get-in-touch"
                method="POST"
                data-netlify="true"
                className="space-y-5"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="get-in-touch" />
                <div>
                  <label
                    className="block text-white/70 text-sm mb-1"
                    htmlFor="org"
                  >
                    Organization Name
                  </label>
                  <input
                    id="org"
                    name="org"
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your organization"
                  />
                </div>
                <div>
                  <label
                    className="block text-white/70 text-sm mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label
                    className="block text-white/70 text-sm mb-1"
                    htmlFor="person"
                  >
                    Person Name
                  </label>
                  <input
                    id="person"
                    name="person"
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Contact person"
                  />
                </div>
                <div>
                  <label
                    className="block text-white/70 text-sm mb-1"
                    htmlFor="contact"
                  >
                    Person Contact Number
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="tel"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Contact number"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3 rounded-full bg-accent hover:bg-accent2 text-white font-medium text-sm tracking-wide shadow-subtle transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
