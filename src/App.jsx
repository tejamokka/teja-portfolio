import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Inspiration from './components/Inspiration'; 
import Contact from './components/Contact'; 
import './App.css'
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About /> 
      <Skills />  
      <Inspiration />
      <Contact />
      <Footer />
    </>
  )
}

export default App
