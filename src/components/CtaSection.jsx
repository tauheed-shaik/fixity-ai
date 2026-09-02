const CtaSection = ({ onOpenBooking }) => {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <span className="cta-eyebrow">Build the next capability</span>
        <h2>HAVE A TALENT REQUIREMENT?</h2>

        <p className="cta-subtitle">
          Tell us the role. We&apos;ll show you how we&apos;d build the pipeline.
        </p>

        <button type="button" className="cta-button" onClick={onOpenBooking}>
          Submit Talent Requirement <span aria-hidden="true">→</span>
        </button>

        <p className="cta-note">
          No sales deck. No long pitch. Just a working discussion around one talent requirement.
        </p>
      </div>
    </section>
  )
}

export default CtaSection
