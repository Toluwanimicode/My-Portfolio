import './About.css'
    function About({ name, bio, email, phone, location, github, linkedin }) {
      const personalInfo = [
        { label:'Name',     value:name,     icon:'👤' },
        { label:'Email',    value:email,    icon:'📧' },
        { label:'Phone',    value:phone,    icon:'📱' },
        { label:'Location', value:location, icon:'📍' },
        { label:'GitHub',   value:github,   icon:'🐙' },
        { label:'LinkedIn', value:linkedin, icon:'💼' },
      ]
      return (
        <section id="about" className="about">
          <div className="section-container">
            <h2 className="section-title">About Me</h2>
            <div className="about__grid">
              <div className="about__text">
                <h3>Who Am I?</h3>
                <p>{bio}</p>
                <p>Passionate about clean code and accessible design.</p>
              </div>
              <div className="about__info">
                {personalInfo.map((item) => (
                  <div key={item.label} className="about__info-item">
                    <span className="about__info-icon">{item.icon}</span>
                    <div>
                      <span className="about__info-label">{item.label}</span>
                      <span className="about__info-value">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )
    }
    export default About
