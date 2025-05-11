import "./styles/index.scss";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="app__content">
        <main className="app__main">123</main>
        <Footer />
      </div>
    </div>
  );
};
