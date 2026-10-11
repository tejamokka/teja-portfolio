import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Inspiration from "./components/Inspiration";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProfileCard from './components/ProfileCard';
import profile from './assets/kid.jpg';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Inspiration />
      <Contact />
      <Footer />
    </div>
  );
} 
export default App;