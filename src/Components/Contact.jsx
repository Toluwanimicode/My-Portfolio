
import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function validate() {
    const e = {}
    if (!formData.name.trim()) e.name = 'Name is required'
    if (!formData.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      e.email = 'Invalid email'
    }
    if (!formData.message.trim()) e.message = 'Message is required'
    return e
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const errs = validate()
    setErrors(errs)
    setSubmitError('')

    if (Object.keys(errs).length > 0) return

    setIsSubmitting(true)

    try {
      const response = await fetch(
        'http://localhost:5000/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Unable to send your message.')
      }

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setErrors({})
      setSubmitted(true)
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setSubmitError(
        error.message || 'Unable to send your message. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="contact">
        <div className="section-container">
          <div className="contact__success">
            <span>🎉</span>
            <h2>Message Sent!</h2>
            <p>Thank you — I will get back to you soon.</p>
            <button
              className="btn btn--primary"
              onClick={() => setSubmitted(false)}
            >
              Send Another
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project? Let's talk!</p>

        <form
          className="contact__form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={errors.name ? 'input--error' : ''}
              />
              {errors.name && (
                <span className="error-msg">{errors.name}</span>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={errors.email ? 'input--error' : ''}
              />
              {errors.email && (
                <span className="error-msg">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Inquiry"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className={errors.message ? 'input--error' : ''}
            />
            {errors.message && (
              <span className="error-msg">{errors.message}</span>
            )}
          </div>

          {submitError && (
            <p className="error-msg" role="alert">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            className="btn btn--primary contact__submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

