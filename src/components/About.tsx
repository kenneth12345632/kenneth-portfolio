import animeEye from '../assets/anime-eye.mp4.mp4'

export default function About() {
  return (
    <section id="about" className="section about watermarked" data-watermark="UNDER DEVELOPMENT">
      
      <div className="about-content">
        <h2>About <span>me</span></h2>
        <p>
          Hi, my name is John Bernard. I am passionate about technology, web
          development, and creating attractive digital experiences. I enjoy
          learning new skills and transforming ideas into functional websites.
        </p>
        <p>
          My goal is to create websites that are easy to use, visually
          appealing, and accessible on different devices. I continuously improve
          my skills to deliver better results.
        </p>

        <div className="info-card">
          <i className="fas fa-user"></i>
          <div>
            <h4>My Name</h4>
            <p>Ryan, Web Developer</p>
          </div>
        </div>

        <div className="info-card">
          <i className="fas fa-phone"></i>
          <div>
            <h4>My Phone Number</h4>
            <p>+63 XXX XXX XXXX</p>
          </div>
        </div>

        <a href="#contact" className="btn">Contact Me</a>
      </div>
    </section>
  )
}