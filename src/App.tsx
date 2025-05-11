import "./styles/index.scss";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/sections/hero/hero";
import { About } from "@/sections/about/about";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="app__content">
        <main className="app__main">
          <Hero />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
};
