    import './Education.css'
    const educationData = [
      { id:1, degree:'B.Sc. Software Engineering', school:'Mountain Top University', year:'2024-2028', grade:'First Class Honours', emoji:'🎓' },
      { id:2, degree:'Web Development Bootcamp', school:'Gomycode Community', year:'2023', grade:'Completed', emoji:'💻' },
      { id:3, degree:'WAEC / SSCE', school:'Mountain Top Secondary School', year:'2018-2023', grade:'8 distinctions', emoji:'📜' },
    ]
    function Education() {
      return (
        <section id="education" className="education">
          <div className="section-container">
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">My academic journey</p>
            <div className="timeline">
              {educationData.map((item) => (
                <div key={item.id} className="timeline__item">
                  <div className="timeline__dot">{item.emoji}</div>
                  <div className="timeline__content">
                    <h3>{item.degree}</h3>
                    <p className="timeline__school">{item.school}</p>
                    <p className="timeline__year">{item.year}</p>
                    <span className="timeline__grade">{item.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    }
    export default Education
 
