const skills = [
  { icon: 'fab fa-html5', label: 'HTML' },
  { icon: 'fab fa-css3-alt', label: 'CSS' },
  { icon: 'fab fa-js', label: 'JavaScript' },
  { icon: 'fab fa-wordpress', label: 'WordPress' },
  { icon: 'fab fa-elementor', label: 'Elementor' },
  { icon: 'fab fa-python', label: 'Python' },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills watermarked" data-watermark="UNDER DEVELOPMENT">
      <h2 className="section-title">My <span>Skill</span></h2>
      <div className="skills-list">
        {skills.map((s) => (
          <div key={s.label} className="skill">
            <i className={s.icon}></i> {s.label}
          </div>
        ))}
      </div>
    </section>
  )
}