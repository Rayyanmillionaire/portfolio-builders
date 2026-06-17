import "../styles/cta.css";

function CTA({ onApplyClick }) {

  return (
    <section className="cta">

      <div className="cta-box">

        <span className="cta-tag">
          JOIN OUR TEAM
        </span>

        <h2>
          Ready To Shape The Future
          Of Student Careers?
        </h2>

        <p>
          Join Portfolio Builders and help thousands of
          students gain real-world experience, build
          industry-ready portfolios and launch successful careers.
        </p>

        <div className="cta-buttons">

          <button
            className="cta-primary"
            onClick={onApplyClick}
          >
            Apply Now →
          </button>

          <button
            className="cta-secondary"
            onClick={() =>
              document
                .getElementById("culture")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Culture
          </button>

        </div>

      </div>

    </section>
  );
}

export default CTA;