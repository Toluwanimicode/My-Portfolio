import './CVUpload.css'

function CVUpload() {
  // Path to your PDF file in the public folder
  const cvFilePath = '/CV/my-cv.pdf' 

  return (
    <section id="cv" className="cv-upload">
      <div className="section-container">
        <h2 className="section-title">My CV</h2>
        <div className="cv-upload__content">
          
          {/* Visual Card / Dropzone lookalike for design consistency */}
          <div className="cv-upload__dropzone cv-upload__dropzone--filled">
            <span className='cv-upload__icon'>📄</span>
            <p className='cv-upload__text'>My_Resume.pdf</p>
            <p className='cv-upload__subtext'>Click below to view or save</p>
            
            {/* View CV in a new browser tab */}
            <a 
              href={cvFilePath} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='cv-upload__browse-btn'
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              View CV
            </a>
          </div>

          {/* Download CV Directly */}
          <a 
            href={cvFilePath} 
            download="My_Resume.pdf" 
            className="btn btn--primary cv-upload__download"
          >
            Download My CV
          </a>
          
        </div>
      </div>
    </section>
  )
}

export default CVUpload