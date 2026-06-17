import ParticlesBackground from "./ParticlesBackground";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-bg">
        <ParticlesBackground />
      </div>

      <div className="hero-content">

        <span className="hero-tag">
          Careers at Portfolio Builders
        </span>

        <h1>
          Build Careers.
          <br />
          Create Impact.
        </h1>

        <p>
          Join a passionate team dedicated to helping students gain
          real-world experience, work on meaningful projects,
          and build career-ready portfolios.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() =>
              document
                .getElementById("jobs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Open Positions
          </button>

          <button
            className="secondary-btn"
            onClick={() =>
              document
                .getElementById("culture")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </button>

        </div>

        <div className="hero-stats">

          <div className="stat">
            <h3>10K+</h3>
            <p>Students</p>
          </div>

          <div className="stat">
            <h3>100+</h3>
            <p>Projects</p>
          </div>

          <div className="stat">
            <h3>95%</h3>
            <p>Success Rate</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;