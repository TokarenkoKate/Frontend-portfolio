import "./styles/index.scss";
import { useEffect, useRef } from "react";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/sections/hero/hero";
import { About } from "@/sections/about/about";
import { Work } from "@/sections/work/work";
import { Skills } from "@/sections/skills/skills";
import { Projects } from "@/sections/projects/projects";
import { Contacts } from "./sections/contacts/contacts";
import gsap from "gsap";

export const App = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { opacity: 1, duration: 1 });

    return () => {
      gsap.killTweensOf(boxRef.current);
    };
  }, []);

  return (
    <div className="app" ref={boxRef}>
      <Navbar />
      <div className="app__content">
        <main className="app__main">
          <Hero />
          <About />
          <Work />
          <Skills />
          <Projects />
          <Contacts />
          <Footer />
        </main>
      </div>
    </div>
  );
};
