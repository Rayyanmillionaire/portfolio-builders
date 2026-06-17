import { useState } from "react";
import ApplyModal from "./ApplyModal";
import "../styles/openPositions.css";

function OpenPositions() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  const jobs = [
    {
      title: "Frontend Developer Intern",
      location: "Remote",
      type: "Internship",
      duration: "3 Months"
    },
    {
      title: "UI/UX Designer Intern",
      location: "Remote",
      type: "Internship",
      duration: "3 Months"
    },
    {
      title: "Digital Marketing Intern",
      location: "Remote",
      type: "Internship",
      duration: "3 Months"
    },
    {
      title: "Content Writer Intern",
      location: "Remote",
      type: "Internship",
      duration: "3 Months"
    }
  ];

  const handleApply = (position) => {
    setSelectedPosition(position);
    setShowModal(true);
  };

  return (
    <>
      <section id="jobs" className="jobs">

        <div className="jobs-header">

          <span className="jobs-tag">
            OPEN POSITIONS
          </span>

          <h2>
            Join Our Team
          </h2>

          <p>
            Explore opportunities to learn, grow and make
            a meaningful impact with Portfolio Builders.
          </p>

        </div>

        <div className="jobs-grid">

          {jobs.map((job, index) => (
            <div className="job-card" key={index}>

              <div className="job-top">

                <h3>{job.title}</h3>

                <span className="job-badge">
                  {job.type}
                </span>

              </div>

              <div className="job-meta">

                <span>📍 {job.location}</span>

                <span>⏳ {job.duration}</span>

              </div>

              <button
                onClick={() => handleApply(job.title)}
              >
                Apply Now →
              </button>

            </div>
          ))}

        </div>

      </section>

      <ApplyModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        position={selectedPosition}
      />
    </>
  );
}

export default OpenPositions;