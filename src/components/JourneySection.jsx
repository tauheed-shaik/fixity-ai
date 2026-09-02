import { motion } from 'framer-motion'

const JourneySection = () => {
  const steps = [
    {
      number: '01',
      title: 'Campus',
      text: 'Identify emerging talent with the right academic base and potential.',
    },
    {
      number: '02',
      title: 'Capability',
      text: 'Bridge technical gaps with focused cloud training and real-world readiness.',
    },
    {
      number: '03',
      title: 'Deployment',
      text: 'Deliver job-ready professionals aligned to your engineering roadmap.',
    },
  ]

  return (
    <section className="journey-section">
      <div className="journey-inner">
        <div className="journey-header">
          <span className="journey-eyebrow">From campus to capability</span>
          <h2>Turn emerging talent into production-ready cloud capability.</h2>
        </div>

        <div className="journey-flow">
          <div className="journey-pipeline">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="journey-node"
                initial={{ opacity: 0, y: 26, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="journey-node-top">
                  <span className="journey-node-number">{step.number}</span>
                  <span className="journey-node-line" aria-hidden="true" />
                </div>
                <div className="journey-node-body">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="journey-summary"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="journey-summary-card">
              <span className="journey-summary-tag">Outcome</span>
              <h3>
                <span className="journey-summary-value">50</span>
                {' '}
                interview-ready candidates
              </h3>
              <p>aligned to your hiring goals.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default JourneySection
