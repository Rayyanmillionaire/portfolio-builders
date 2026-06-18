import { useEffect } from "react";
import "../styles/applyModal.css";

function ApplyModal({
  isOpen,
  onClose,
  position = "General Application"
}) {

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () =>
      window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Application submitted successfully! (Backend not connected yet)"
    );

    onClose();
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <span className="modal-tag">
          PORTFOLIO BUILDERS
        </span>

        <h2>Join Our Team</h2>

        <p>
          Fill in your details below and we'll
          get back to you if there's a suitable
          opportunity.
        </p>

        <form
          className="apply-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
          />

          <select
            defaultValue={position || "General Application"}
            required
          >
            <option value="Frontend Developer Intern">
              Frontend Developer Intern
            </option>

            <option value="UI/UX Designer Intern">
              UI/UX Designer Intern
            </option>

            <option value="Digital Marketing Intern">
              Digital Marketing Intern
            </option>

            <option value="Content Writer Intern">
              Content Writer Intern
            </option>

            <option value="General Application">
              General Application
            </option>
          </select>

          <textarea
            rows="4"
            placeholder="Tell us about yourself..."
          />

          <input
            type="file"
            accept=".pdf,.doc,.docx"
          />

          <button
            type="submit"
            className="submit-btn"
          >
            Submit Application →
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplyModal;