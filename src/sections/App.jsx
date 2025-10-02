import { useEffect, useRef } from "react";
// import LocomotiveScroll from "locomotive-scroll"; // Removed the import
// import "locomotive-scroll/dist/locomotive-scroll.css"; // Removed the CSS import
import Navbar from "./Navbar";
import Hero from "./Hero";
import Problem from "./Problem";
import Solutions from "./Solutions";
import Process from "./Process";
import Credibility from "./Credibility";
import CTA from "./CTA";
import Footer from "./Footer";

export default function App() {
  const scrollInstance = useRef(null); // Keeping this for now in case other components need it

  return (
    <>
      <Navbar scrollInstance={scrollInstance} />     {" "}
      <div>
        <Hero />
        <Problem />
        <Solutions />
        {/*         <Process /> */}
        <Credibility />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
