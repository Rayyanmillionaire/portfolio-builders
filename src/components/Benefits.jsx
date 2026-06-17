import "../styles/benefits.css";

function Benefits() {

  const benefits = [
    {
      icon: "⏰",
      title: "Flexible Hours",
      desc: "Manage your work schedule with flexibility and balance."
    },
    {
      icon: "🌍",
      title: "Remote Friendly",
      desc: "Work and collaborate from wherever you're most productive."
    },
    {
      icon: "🎓",
      title: "Mentorship",
      desc: "Receive guidance from experienced mentors and professionals."
    },
    {
      icon: "📈",
      title: "Career Growth",
      desc: "Develop practical skills through impactful projects."
    },
    {
      icon: "🏆",
      title: "Recognition",
      desc: "Your efforts and contributions are celebrated."
    },
    {
      icon: "🤝",
      title: "Networking",
      desc: "Build meaningful connections with peers and experts."
    }
  ];

  return (
    <section className="benefits">

      <div className="benefits-header">

        <span className="benefits-tag">
          BENEFITS & PERKS
        </span>

        <h2>
          Why You'll Love Working Here
        </h2>

        <p>
          We believe great work happens when people
          feel supported, valued, and inspired.
        </p>

      </div>

      <div className="benefits-grid">

        {benefits.map((benefit,index)=>(
          <div className="benefit-card" key={index}>

            <div className="benefit-icon">
              {benefit.icon}
            </div>

            <h3>{benefit.title}</h3>

            <p>{benefit.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Benefits;