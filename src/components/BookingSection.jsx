import { motion } from 'framer-motion'

const coverageItems = [
  {
    number: '01',
    title: 'Your requirement',
    text: 'What roles are you hiring / building capability for?',
  },
  {
    number: '02',
    title: 'Current talent challenge',
    text: 'Where is the gap — volume, skills, readiness or hiring cost?',
  },
  {
    number: '03',
    title: 'Pilot opportunity',
    text: 'Could a 50-100 candidate pipeline make sense?',
  },
  {
    number: '04',
    title: 'Next step',
    text: "If there's a fit, we'll build a simple pilot proposal.",
  },
]

const roleOptions = [
  'Build a graduate talent pipeline',
  'Upskill existing workforce',
  'Role-specific talent academy',
  'Industry certification',
  'Campus / university partnership',
  'Other',
]

const talentAreas = ['AI', 'Data', 'Cloud', 'Cybersecurity', 'SAP / ERP', 'Software / Engineering', 'Other']

const requirementBands = ['25-50', '50-100', '100-500', '500+']

const BookingSection = ({ onBack, onSubmit }) => {
  return (
    <section className="booking-section">
      <button type="button" className="back-button" onClick={onBack}>
        ← Back
      </button>

      <div className="booking-layout">
        <motion.div
          className="booking-coverage"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="booking-eyebrow">Talent requirement</span>
          <h1>Build the pipeline around the role.</h1>
          <p className="booking-intro">Bring us one requirement. We&apos;ll bring a practical path to role-ready talent.</p>
          <h3>WHAT WE&apos;LL COVER</h3>

          <div className="coverage-list">
            {coverageItems.map((item) => (
              <div key={item.number} className="coverage-item">
                <div className="coverage-number">{item.number}</div>
                <div className="coverage-copy">
                  <div className="coverage-title">{item.title}</div>
                  <div className="coverage-text">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="booking-form-wrap"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3>Have a current hiring requirement? Tell us the role.</h3>
          <p className="booking-subheading">
            We&apos;ll respond with a proposed talent-pipeline structure.
          </p>

          <form
            className="booking-form"
            onSubmit={(event) => {
              event.preventDefault()
              if (onSubmit) onSubmit()
            }}
          >
            <label>
              <span>Role*</span>
              <input type="text" name="role" placeholder="Cloud Engineer" required />
            </label>

            <label>
              <span>Location*</span>
              <input type="text" name="location" placeholder="Hyderabad" required />
            </label>

            <label>
              <span>Talent requirement*</span>
              <input type="text" name="requirement" placeholder="75" required />
            </label>

            <label>
              <span>Experience*</span>
              <input type="text" name="experience" placeholder="0–2 years" required />
            </label>

            <label>
              <span>Target joining*</span>
              <input type="text" name="joining" placeholder="October 2026" required />
            </label>

            <label>
              <span>Key skills*</span>
              <textarea name="skills" rows="3" placeholder="AWS / Linux / Python / DevOps" required />
            </label>

            <label>
              <span>Contact*</span>
              <input type="text" name="contact" placeholder="Your name / email / team" required />
            </label>

            <button type="submit" className="request-button">
              Submit Talent Requirement <span aria-hidden="true">→</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default BookingSection
