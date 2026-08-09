import profile from "../assets/kid.jpg";
function Hero() {
  return (
    <section id="home" className="hero">
      <img src={profile} alt="Teja" />
      <h1>Hello, this is Teja</h1>
      <p>I am a computer science student.</p>
      <p>I love to code and build cool projects.</p>
      <button onClick={() => {
        document.getElementById('projects').scrollIntoView({
           behavior: 'smooth' });
      }}>
        View My Projects
      </button>
    </section>
  );
}

export default Hero;