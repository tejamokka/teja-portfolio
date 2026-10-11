import profile from "../assets/kid.jpg";
import ProfileCard from "./ProfileCard";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <div className="hero-text">
          <h1>Hello, this is Teja</h1>

          <p>I am a computer science student.</p>

          <p>I love to code and build cool projects.</p>

          <button
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            View My Projects
          </button>
        </div>

        <div className="hero-profile-card">
          <ProfileCard
            name="Teja Mokka"
            title="Computer Science Student"
            handle="tejamokka"
            status="Available"
            contactText="Contact Me"
            avatarUrl={profile}
            miniAvatarUrl={profile}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          />
        </div>

      </div>

    </section>
  );
}

export default Hero;