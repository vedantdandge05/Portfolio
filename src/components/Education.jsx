// ...existing code...
function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-list">
        <div className="education-item">
          <h3>B.Tech in Mechanical Engineering</h3>
          <span className="school">JSPM Rajarshi Shahu College of Engineering, Pune, India</span>
          <span className="duration">2020 – 2024</span>
          <span className="score">GPA: 7.5/10</span>
        </div>
        <div className="education-item">
          <h3>HSC</h3>
          <span className="school">Shri Mahesh Junior College, Shirur Tajband</span>
          <span className="duration">2019 – 2020</span>
          <span className="score">Percentage: 65.3%</span>
        </div>
        <div className="education-item">
          <h3>SSC</h3>
          <span className="school">Yeshwant Vidhyalaya, Ahmedpur</span>
          <span className="duration">2017 – 2018</span>
          <span className="score">Percentage: 88.2%</span>
        </div>
      </div>
    </section>
  );
}

export default Education;
