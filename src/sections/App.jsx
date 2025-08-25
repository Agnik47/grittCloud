import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Problem from "./Problem";
import Solutions from "./Solutions";
import Process from "./Process";
import Credibility from "./Credibility";
import CTA from "./CTA";
import Footer from "./Footer";

export default function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
      multiplier: 1,
      class: "is-reveal",
    });

    const handleResize = () => scroll.update();
    window.addEventListener("resize", handleResize);

    return () => {
      scroll.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div ref={scrollRef} data-scroll-container>
        <Hero />
        <Problem />
        <Solutions />
        <Process />
        <Credibility />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
