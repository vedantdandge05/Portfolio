function Navbar({ onNavClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-img-bg">
          <img src="/VedantH.jpg" alt="Vedant Dandge" className="navbar-img" />
        </div>
        <span className="navbar-name">Vedant <span className="navbar-name-highlight">Dandge</span></span>
      </div>
      <ul>
        <li><button className="nav-btn" onClick={() => onNavClick('about')}>About</button></li>
        <li><button className="nav-btn" onClick={() => onNavClick('experience')}>Experience</button></li>
        <li><button className="nav-btn" onClick={() => onNavClick('skills')}>Skills</button></li>
        <li><button className="nav-btn" onClick={() => onNavClick('education')}>Education</button></li>
        <li><button className="nav-btn" onClick={() => onNavClick('projects')}>Projects</button></li>
        <li><button className="nav-btn" onClick={() => onNavClick('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
