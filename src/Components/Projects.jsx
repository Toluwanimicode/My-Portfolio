import { useState } from 'react'
    import './Projects.css'
    
    const projectsData = [
      { id:1, title:'Coco App', emoji:'💰', featured:true,
        description:'A modern digital platform for Coco, offering user-friendly design and web development services.',
        tech:['React','CSS','JavaScript'], link:'https://coco-a2tf.onrender.com/' },
      { id:2, title:'Cobuild App ', emoji:'🌤️', featured:false,
        description:'',
        tech:['HTML','CSS','JavaScript'], link:'#' },
      { id:3, title:'Calculator app', emoji:'📊', featured:true,
        description:'A simple and responsive web calculator for performing basic arithmetic operations',
        tech:['React','Node.js','CSS'], link:'https://calculator-ckjh.onrender.com' },
      { id:4, title:'Leadgen App', emoji:'🍳', featured:false,
        description:'An e-commerce web app for Leadgen, designed for selling headphones online',
        tech:['React','CSS'], link:'#' },
    ]
    
    function ProjectCard({ project }) {
      return (
        <div className={`project-card ${project.featured ? "project-card--featured" : ""}`}>
          {project.featured && <span className="project-card__badge">⭐ Featured</span>}
          <div className="project-card__emoji">{project.emoji}</div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__desc">{project.description}</p>
          <div className="project-card__tech">
            {project.tech.map((t) => <span key={t} className="project-card__tag">{t}</span>)}
          </div>
          <a href={project.link} className="project-card__link">View Project →</a>
        </div>
      )
    }
    
    function Projects() {
      const [filter, setFilter] = useState('All')
      const categories = ['All', 'Featured', 'Others']
      const filteredProjects = projectsData.filter((p) => {
        if (filter === 'All')      return true
        if (filter === 'Featured') return p.featured
        return !p.featured
      })
      return (
        <section id="projects" className="projects">
          <div className="section-container">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">Things I have built</p>
            <div className="projects__filters">
              {categories.map((cat) => (
                <button key={cat}
                  className={`filter-btn ${filter === cat ? "filter-btn--active" : ""}`}
                  onClick={() => setFilter(cat)}>{cat}</button>
              ))}
            </div>
            <div className="projects__grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            {filteredProjects.length === 0 && <p className='projects__empty'>No projects here yet.</p>}
          </div>
        </section>
      )
    }
    export default Projects
