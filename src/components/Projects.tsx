const projects = [
  { title: 'Calculator', desc: 'A simple calculator interface for basic mathematical operations.' },
  { title: 'Calculator', desc: 'A responsive calculator project with a clean interface.' },
  { title: 'Calculator', desc: 'A beginner-friendly web application built with front-end technologies.' },
]

function CalculatorPreview() {
  const keys = ['C', '÷', '×', '−', '7', '8', '9', '+', '4', '5', '6', '=', '1', '2', '3', '0']
  return (
    <div className="calculator">
      <div className="calc-display">0</div>
      <div className="calc-keys">
        {keys.map((k, i) => <span key={i}>{k}</span>)}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects watermarked" data-watermark="UNDER DEVELOPMENT">
      <h2 className="section-title">Latest <span>Project</span></h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article key={i} className="project-card">
            <CalculatorPreview />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tags">
              <span>HTML</span><span>CSS</span><span>JavaScript</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}