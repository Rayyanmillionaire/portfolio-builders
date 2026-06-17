import "../styles/navbar.css";
import { useEffect, useState } from "react";

function Navbar({ onApplyClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="navbar-logo">
        <span className="logo-icon">PB</span>
        Portfolio Builders
      </div>

      <div className="navbar-links">

        <a href="#culture">
          Culture
        </a>

        <a href="#jobs">
          Open Positions
        </a>

        <a href="#contact">
          Contact
        </a>

      </div>

      <button
        className="navbar-btn"
        onClick={onApplyClick}
      >
        Apply Now
      </button>

    </nav>
  );
}

export default Navbar;