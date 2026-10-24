import animeEye from '../assets/profile2.png'

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <h2>
          <h2>Hello World!</h2>
        </h2>
        <h1>I'm John Bernard</h1>

        {/* <p className="hero-description">
          I am a web developer focused on building modern, responsive, and
          efficient websites. I enjoy creating digital experiences with clean
          design and useful features.
        </p> */}

        {/* <div className="stats">
          <div className="stat-card">
            <h2>0</h2>
            <p>Project Completed</p>
          </div>
          <div className="stat-card">
            <h2>0</h2>
            <p>Year Experience</p>
          </div>
          <div className="stat-card">
            <h2><i className="fas fa-laptop-code"></i></h2>
            <p>Happy Clients</p>
          </div>
        </div> */}

        <div className="hero-buttons mt-5">
          <a href="#about" className="btn">
            About Me <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="socials">
          <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

      <div >
          <img src={animeEye} alt="Profile Image" />
      </div>
    </section>
  )
}
