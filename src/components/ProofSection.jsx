import { motion } from 'framer-motion'

const proofStages = [
  {
    number: '01',
    title: 'Define the pilot',
    description: 'Focus the first move around one hiring need.',
    details: ['50-100 candidates', '1 role family', '8-12 weeks'],
  },
  {
    number: '02',
    title: 'Measure readiness',
    description: 'Build evidence against the capabilities that matter.',
    details: ['Defined skill matrix', 'Pre/post assessment', 'Industry projects'],
  },
  {
    number: '03',
    title: 'Expand with confidence',
    description: 'Carry the signal into the next talent cohort.',
    details: ['Certification where relevant', 'Final readiness score'],
  },
]

const ProofSection = () => {
  return (
    <section className="proof-section">
      <div className="proof-inner">
        <div className="proof-heading-row">
          <div className="proof-heading-copy">
            <span className="proof-eyebrow">A measured path to hiring confidence</span>
            <h2>
              START SMALL. PROVE IT. SCALE IT.
            </h2>
          </div>
          <p className="proof-lead">
            Begin with one talent requirement. Build the evidence. Expand the model when the signal is clear.
          </p>
        </div>

        <div className="proof-stages" aria-label="Pilot stages">
          {proofStages.map((stage, index) => (
            <motion.article
              key={stage.number}
              className="proof-stage"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="proof-stage-top">
                <span className="proof-stage-number">{stage.number}</span>
                <span className="proof-stage-line" aria-hidden="true" />
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <ul>
                {stage.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="proof-close">
          <blockquote>“You decide whether they&apos;re ready to interview.”</blockquote>
          <p>You&apos;re not promising hires. You&apos;re giving your team valid talent to act on.</p>
        </div>
      </div>
    </section>
  )
}

export default ProofSection
