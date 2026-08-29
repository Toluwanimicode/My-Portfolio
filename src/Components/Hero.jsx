  import './Hero.css'
    
    function Hero({ name, title, bio }) {
      return (
        <section id="hero" className="hero">
          <div className="hero__container">
            <div className="hero__content">
              <p className="hero__greeting">Hello, I'm</p>
              <h1 className="hero__name">{name}</h1>
              <h2 className="hero__title">{title}</h2>
              <p className="hero__bio">{bio}</p>
              <div className="hero__buttons">
                <a href="#contact" className="btn btn--primary">Contact Me</a>
                <a href="#cv"      className="btn btn--outline">Download CV</a>
              </div>
            </div>
            <div className="hero__image">
              <div className="hero__avatar">
                  <img src="./images/Picture-2.png" alt={name} className="hero__avatar-image" />
              </div>
            </div>
          </div>
        </section>
      )
    }
    export default Hero
