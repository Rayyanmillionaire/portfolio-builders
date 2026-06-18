import "../styles/whyJoinUs.css";

function WhyJoinUs() {

  const items = [
    {
      title: "Real Impact",
      desc: "Help thousands of students build successful careers."
    },
    {
      title: "Growth Culture",
      desc: "Learn continuously with mentors and teammates."
    },
    {
      title: "Innovation",
      desc: "Work on projects that solve real problems."
    },
    {
      title: "Collaboration",
      desc: "Grow together with a supportive team."
    }
  ];

  return (
    <section className="why">

      <div className="section-header">

        <span className="section-tag">
          WHY JOIN US
        </span>

        <h2>
          Why Join Portfolio Builders?
        </h2>

        <p>
          We believe careers are built through real-world
          experience, collaboration, and continuous learning.
        </p>

      </div>

      <div className="why-grid">

        {items.map((item,index)=>(

          <div className="why-card" key={index}>

            <div className="why-number">
              0{index + 1}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhyJoinUs;