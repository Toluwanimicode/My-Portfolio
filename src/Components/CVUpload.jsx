    import { useState, useEffect } from 'react'
    import './CVUpload.css'
    
    function CVUpload() {
      const [cvFile, setCvFile]               = useState(null)
      const [cvUrl, setCvUrl]                 = useState(null)
      const [isDragging, setIsDragging]       = useState(false)
      const [uploadMessage, setUploadMessage] = useState("")
    
      useEffect(() => {
        if (cvFile) {
          const url = URL.createObjectURL(cvFile)
          setCvUrl(url)
          return () => URL.revokeObjectURL(url) 
        }
      }, [cvFile])
    
      function handleFileChange(event) {
        const file = event.target.files[0]
        if (!file) return
        if (file.type !== 'application/pdf') {
          setUploadMessage('Please upload a PDF file only.'); return
        }
        if (file.size > 5 * 1024 * 1024) {
          setUploadMessage('File too large. Max 5MB.'); return
        }
        setCvFile(file)
        setUploadMessage(`${file.name} uploaded successfully!`)
      }
    
      function handleDragOver(e)  { e.preventDefault(); setIsDragging(true) }
      function handleDragLeave()  { setIsDragging(false) }
      function handleDrop(e) {
        e.preventDefault(); setIsDragging(false)
        const file = e.dataTransfer.files[0]
        if (file) handleFileChange({ target: { files: [file] } })
      }
    
      return (
        <section id="cv" className="cv-upload">
          <div className="section-container">
            <h2 className="section-title">My CV</h2>
            <div className="cv-upload__content">
              <div className={`cv-upload__dropzone
                ${isDragging ? "cv-upload__dropzone--dragging" : ""}
                ${cvFile    ? "cv-upload__dropzone--filled"   : ""}`}
                onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
              >
                <span className='cv-upload__icon'>{cvFile ? '📄' : '📁'}</span>
                <p className='cv-upload__text'>{cvFile ? cvFile.name : 'Drag & drop your CV here'}</p>
                <p className='cv-upload__subtext'>{cvFile ? `${(cvFile.size/1024).toFixed(1)} KB` : 'PDF only, max 5MB'}</p>
                <label className='cv-upload__browse-btn'>
                  {cvFile ? 'Change CV' : 'Browse Files'}
                  <input type='file' accept='.pdf' onChange={handleFileChange} className='cv-upload__input' />
                </label>
              </div>
              {uploadMessage && <p className="cv-upload__message">{uploadMessage}</p>}
              {cvUrl && (
                <a href={cvUrl} download={cvFile.name} className="btn btn--primary cv-upload__download">
                  Download My CV
                </a>
              )}
            </div>
          </div>
        </section>
      )
    }
    export default CVUpload
