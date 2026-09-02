const HeroSection = ({ onOpenBooking }) => {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">FIXITYAI</div>
        <div className="tagline">Talent &amp; Workforce Solutions</div>
      </header>

      <main className="hero">
        <div className="hero-copy">
          <h1>
            BUILD YOUR
            <br />
            NEXT TALENT POOL.
            <br />
            BEFORE YOU HIRE.
          </h1>

          <p>
            We help GCCs and enterprises build role-ready talent pipelines through
            assessment, targeted upskilling, certification and industry validation.
          </p>

          <div className="actions">
            <button type="button" className="primary-btn">
              Explore the 50-100 Candidate Pilot <span aria-hidden="true">→</span>
            </button>
            <button type="button" className="secondary-btn" onClick={onOpenBooking}>
              Book a 20-min conversation
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HeroSection
