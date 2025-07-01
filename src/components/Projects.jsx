// ...existing code...
function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project-item">
          <h3>Google Gemini Clone</h3>
          <span className="project-tech">Technologies: ReactJS, Gemini API</span>
          <ul className="project-desc">
            <li>Developed a clone using React and Gemini API to simulate AI chat interactions.</li>
            <li>Implemented real-time data handling, responsive design, and intuitive UI with React hooks and API integration.</li>
          </ul>
        </div>
        <div className="project-item">
          <h3>Job Portal Web Application</h3>
          <span className="project-tech">Technologies: MongoDB, ExpressJS, ReactJS, NodeJS</span>
          <ul className="project-desc">
            <li>Designed and developed a job portal using the MERN stack.</li>
            <li>Implemented secure user authentication, job listings, and application tracking features.</li>
            <li>Integrated RESTful APIs for efficient data flow and optimized performance.</li>
          </ul>
        </div>
        <div className="project-item">
          <h3>Simon Says Game</h3>
          <span className="project-tech">Technologies: HTML, CSS, JavaScript</span>
          <ul className="project-desc">
            <li>Built an interactive memory game using HTML, CSS, and JavaScript.</li>
            <li>Designed responsive UI and engaging gameplay to improve user interaction and retention.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
