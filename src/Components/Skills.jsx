   import './Skills.css'
    
    const skillsData = [
      { id: 1, name: 'HTML',       icon: '🌐', level: 100, category: 'Frontend' },
      { id: 2, name: 'CSS',        icon: '🎨', level: 100, category: 'Frontend' },
      { id: 3, name: 'JavaScript', icon: '⚡', level: 95, category: 'Frontend' },
      { id: 4, name: 'React',      icon: '⚛️', level: 95, category: 'Frontend' },
      { id: 5, name: 'Node.js',   icon: '🟢', level: 85, category: 'Backend'  },
      { id: 6, name: 'Git',        icon: '📦', level: 100, category: 'Tools'   },
      { id: 7, name: 'Figma',      icon: '🎭', level: 60, category: 'Design'  },
      { id: 8, name: 'Python',     icon: '🐍', level: 55, category: 'Backend' },
    ]
    
    function SkillCard({ name, icon, level, category }) {
      return (
        <div className="skill-card">
          <div className="skill-card__header">
            <span className="skill-card__icon">{icon}</span>
            <div>
              <h3 className="skill-card__name">{name}</h3>
              <span className="skill-card__category">{category}</span>
            </div>
          </div>
          <div className="skill-card__bar-container">
            <div className="skill-card__bar" style={{ width: `${level}%` }}></div>
          </div>
          <p className="skill-card__level">{level}%</p>
        </div>
      )
    }
    
    function Skills() {
      return (
        <section id="skills" className="skills">
          <div className="section-container">
            <h2 className="section-title">My Skills</h2>
            <p className="section-subtitle">Technologies I work with</p>
            <div className="skills__grid">
              {skillsData.map((skill) => (
                <SkillCard
                  key={skill.id}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  category={skill.category}
                />
              ))}
            </div>
          </div>
        </section>
      )
    }
    export default Skills
 
