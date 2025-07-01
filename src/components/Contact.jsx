// ...existing code...
function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-list">
        <div className="contact-item">
          <span className="contact-label">Email:</span>
          <a href="mailto:vedantdandge43@gmail.com" className="contact-link" id="email-link">vedantdandge43@gmail.com</a>
          <button
            className="nav-btn"
            style={{ marginLeft: '1rem' }}
            onClick={() => {
              navigator.clipboard.writeText('vedantdandge43@gmail.com');
              alert('Email copied!');
            }}
            type="button"
          >
            Copy
          </button>
        </div>
        <div className="contact-item">
          <span className="contact-label">Phone:</span>
          <span className="contact-link">+91-8600537925</span>
          <a href="tel:+918600537925" className="nav-btn" style={{marginLeft: '1rem'}}>Call Now</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Location:</span>
          <span className="contact-link">Pune, Maharashtra, India</span>
        </div>
        <div className="contact-item">
          <span className="contact-label">LinkedIn:</span>
          <a href="https://linkedin.com/in/vedantdandge" className="contact-link" target="_blank" rel="noopener noreferrer">linkedin.com/in/vedantdandge</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">GitHub:</span>
          <a href="https://github.com/vedantdandge05" className="contact-link" target="_blank" rel="noopener noreferrer">github.com/vedantdandge05</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Resume:</span>
          <a href="https://drive.google.com/file/d/1UiS9kL2SBtAaeVPrayyBdc2dr-iPEaiG/view?usp=sharing" className="contact-link" target="_blank" rel="noopener noreferrer" download>Download Resume (Google Drive)</a>
        </div>
      </div>
      <div className="contact-form-container">
        <h3>Contact Us</h3>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="nav-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
