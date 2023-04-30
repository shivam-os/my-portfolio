import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { FaArrowUp } from "react-icons/fa";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <button id="btn-back-to-top">
        <a href="#hero">
          <FaArrowUp color="#00ff00" />
        </a>
      </button>
    </div>
  );
}

export default App;
