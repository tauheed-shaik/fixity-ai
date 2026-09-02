import { motion } from 'framer-motion'

const nextSteps = [
  'We understand the requirement.',
  'We map the skill matrix.',
  'We propose a pilot.',
  'You decide whether to proceed.',
]

const ConfirmationPage = ({ onBack }) => {
  return (
    <section className="confirmation-section">
      <div className="confirmation-inner">
        <button type="button" className="back-button" onClick={onBack}>
          ← Back
        </button>

        <motion.div
          className="confirmation-top"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="confirmation-mark" aria-hidden="true">✓</span>
          <div>
            <span className="confirmation-eyebrow">Requirement received</span>
            <h1>You&apos;re on the calendar.</h1>
          </div>
        </motion.div>

        <motion.div
          className="confirmation-body"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="confirmation-prep">
            <h3>BEFORE WE SPEAK</h3>
            <p>
              If you can share the role + approximate talent requirement, we&apos;ll come prepared with a potential pilot structure.
            </p>
          </div>

          <div className="meeting-card">
            <div className="meeting-label">YOUR MEETING</div>
            <div className="meeting-detail">Date · Time · 20 minutes</div>
          </div>

          <div className="next-steps-block">
            <h3>WHAT HAPPENS NEXT</h3>
            <div className="steps-list">
              {nextSteps.map((step, index) => (
                <div key={step} className="step-item">
                  <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="step-text">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ConfirmationPage
