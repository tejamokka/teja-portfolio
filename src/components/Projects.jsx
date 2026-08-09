function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-card">
        <h3>Animated Web Page</h3>

        <p>
          A simple animated webpage created using HTML.
        </p>
        <a
          href="/animated.html"
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          View Project
        </a>
      </div>
    </section>
  );
}

export default Projects;