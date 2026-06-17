import "../styles/hiringprocess.css";
function HiringProcess() {

  const steps = [
    {
      number: "01",
      title: "Apply",
      desc: "Submit your application and tell us about yourself."
    },
    {
      number: "02",
      title: "Shortlisting",
      desc: "Our team reviews applications and identifies strong matches."
    },
    {
      number: "03",
      title: "Interview",
      desc: "Meet the team and discuss your skills and aspirations."
    },
    {
      number: "04",
      title: "Welcome Aboard",
      desc: "Join Portfolio Builders and start creating impact."
    }
  ];

  return (
    <section className="hiring">

      <div className="hiring-header">

        <span className="hiring-tag">
          HIRING PROCESS
        </span>

        <h2>
          How We Hire
        </h2>

        <p>
          Our hiring process is simple, transparent,
          and focused on finding passionate people.
        </p>

      </div>

      <div className="timeline">

        {steps.map((step,index)=>(
          <div className="timeline-card" key={index}>

            <div className="timeline-number">
              {step.number}
            </div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default HiringProcess;