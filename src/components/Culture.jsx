import "../styles/culture.css";

function Culture() {

  const cultureCards = [
    {
      icon:"🚀",
      title:"Live Projects",
      desc:"Work on meaningful projects that create real impact for students."
    },
    {
      icon:"🎯",
      title:"Mentorship",
      desc:"Learn directly from experienced professionals and mentors."
    },
    {
      icon:"💡",
      title:"Innovation",
      desc:"Experiment, build and bring new ideas to life."
    },
    {
      icon:"🤝",
      title:"Collaboration",
      desc:"Work alongside passionate people who love solving problems."
    }
  ];

  return (
    <section id="culture" className="culture fade-up">

      <div className="culture-header">

        <span className="culture-tag">
          LIFE AT PORTFOLIO BUILDERS
        </span>

        <h2>
          A Place To Learn,
          Grow & Build
        </h2>

        <p>
          We foster a culture of learning, innovation and
          collaboration where every team member has the
          opportunity to make a meaningful impact.
        </p>

      </div>

      <div className="culture-grid">

        {cultureCards.map((card,index)=>(
          <div className="culture-card" key={index}>

            <div className="culture-icon">
              {card.icon}
            </div>

            <h3>{card.title}</h3>

            <p>{card.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Culture;