import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const recipient = 'your-email@example.com'
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    const mailto =
      `mailto:${recipient}` +
      `?subject=${encodeURIComponent(form.subject)}` +
      `&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <section id="contact" className="section contact watermarked" data-watermark="UNDER DEVELOPMENT">
      <div className="contact-info">
        <h2>Contact <span>Me</span></h2>
        <p>Have a project in mind? Send me a message and let's work together.</p>

        <a href="https://wa.me/" className="contact-item">
          <i className="fab fa-whatsapp"></i>
          <span>My WhatsApp</span>
        </a>

        <div className="contact-item">
          <i className="fas fa-location-dot"></i>
          <span>My Address</span>
        </div>
      </div>

      <div className="contact-form">
        <h2>Send <span>Email</span></h2>
        <form onSubmit={handleSubmit}>
          <input id="name" type="text" placeholder="Your name" required value={form.name} onChange={handleChange} />
          <input id="email" type="email" placeholder="Your email" required value={form.email} onChange={handleChange} />
          <input id="subject" type="text" placeholder="Subject" required value={form.subject} onChange={handleChange} />
          <textarea id="message" rows={5} placeholder="Your message" required value={form.message} onChange={handleChange} />
          <button type="submit" className="btn">
            Send Message <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  )
}