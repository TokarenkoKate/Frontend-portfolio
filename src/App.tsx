import "./styles/index.scss";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/sections/hero/hero";
import { About } from "@/sections/about/about";
import { Work } from "@/sections/work/work";
import { Skills } from "@/sections/skills/skills";
import { Projects } from "@/sections/projects/projects";
import { Contacts } from "./sections/contacts/contacts";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="app__content">
        <main className="app__main">
          <Hero />
          <About />
          <Work />
          <Skills />
          <Projects />
          <Contacts />
        </main>
        <Footer />
      </div>
    </div>
  );
};
