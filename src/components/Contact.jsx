function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Let's connect and build something together.</p>

      <div className="contact-card">

        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=venkatateja.mokka@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-item"
>
  <h3>Email</h3>
  <p>venkatateja.mokka@gmail.com</p>
</a>

        <a
          href="https://github.com/tejamokka"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <h3>GitHub</h3>
          <p>github.com/tejamokka</p>
        </a>

        <a
          href="https://www.linkedin.com/in/Tejamokka/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <h3>LinkedIn</h3>
          <p>LinkedIn Profile</p>
        </a>

      </div>
    </section>
  );
}

export default Contact;