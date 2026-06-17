import "../styles/footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">

      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <h2>Portfolio Builders</h2>

            <p>
              Empowering students to build career-ready portfolios,
              gain real-world experience and launch successful careers.
            </p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>

            <a href="#">Home</a>
            <a href="#">Programs</a>
            <a href="#">Resources</a>
            <a href="#">Blog</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>

            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
            <a href="#">Refer & Earn</a>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>

            <p>+91 79947 21792</p>
            <p>info@portfoliobuilders.in</p>
            <p>Mon - Sat : 10AM - 6PM</p>
          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Portfolio Builders. All Rights Reserved.
          </p>

          <p>
            Empowering Careers Across India
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;