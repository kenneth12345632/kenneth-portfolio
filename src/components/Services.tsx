const services = [
  {
    icon: 'fas fa-code',
    title: 'Web Development',
    desc: 'Building responsive websites with clean code and modern web technologies.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: 'fas fa-pen-ruler',
    title: 'UI/UX Designer',
    desc: 'Designing user-friendly interfaces with attractive layouts and smooth navigation.',
    tags: ['Figma', 'UI Design', 'UX Design'],
  },
  {
    icon: 'fas fa-computer',
    title: 'IT Support & Hardware',
    desc: 'Helping users troubleshoot computer issues and understand hardware systems.',
    tags: ['Hardware', 'Support'],
  },
  {
    icon: 'fas fa-shield-halved',
    title: 'Cyber Security',
    desc: 'Learning security best practices to protect systems, accounts, and data.',
    tags: ['Security', 'Networking'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <h2 className="section-title">My <span>Services</span></h2>
      <div className="services-grid">
        {services.map((s) => (
          <article key={s.title} className="service-card">
            <i className={s.icon}></i>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="tags">
              {s.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}