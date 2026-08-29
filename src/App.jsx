import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Skills from './components/Skills.jsx'
import About from './Components/About.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CVUpload from './components/CVUpload.jsx'
import Projects from './components/Projects.jsx'

function App() {

      // UPDATE THIS WITH YOUR OWN INFORMATION
    const portfolioData = {
      name:     'Doyin-Adenekan Toluwanimi',                    // Your name
      title:    'Software Engineer & Social Media Mananger ', // Your job title
      bio:      'I build beautiful, responsive web experiences.',
      email:    'tolugodsproperty@gmail.com',
      phone:    '07046977455',
      location: 'Lagos, Nigeria',
      github:   'github.com/Toluwanimicode',
      linkedin: 'linkedin.com/in/amara',
    }

  return (
    <div>        
      <Navbar name='Tolu' />
       <Hero
            name={portfolioData.name}
            title={portfolioData.title}
            bio={portfolioData.bio}
          />
        <About 
            name={portfolioData.name}
            bio={portfolioData.bio}
            email={portfolioData.email}
            phone={portfolioData.phone}
            location={portfolioData.location}
            github={portfolioData.github}
            linkedin={portfolioData.linkedin}
        />
        <Skills />
        <Projects />
        <Education />
        <CVUpload/>
        <Contact />
        <Footer />
    </div>
  )
}

export default App
