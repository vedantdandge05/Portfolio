// ...existing code...
function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>React.js</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Databases</h3>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Operating Platforms</h3>
          <ul>
            <li>Windows</li>
            <li>Linux</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Dev Tools</h3>
          <ul>
            <li>Git</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Concepts</h3>
          <ul>
            <li>Data Structures</li>
            <li>REST APIs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
