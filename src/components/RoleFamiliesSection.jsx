import { motion } from 'framer-motion'

const roleFamilies = [
  ['Cloud', 'Cloud / DevOps'],
  ['Data', 'Data Engineering / Analytics'],
  ['AI', 'Applied AI / GenAI'],
  ['Cybersecurity', 'Cybersecurity'],
  ['ERP', 'SAP'],
  ['Enterprise IT', 'IT / Digital Engineering'],
]

const RoleFamiliesSection = () => {
  return (
    <section className="role-families-section">
      <div className="role-families-inner">
        <div className="role-families-heading">
          <div>
            <span className="role-families-eyebrow">Built around the work</span>
            <h2>ROLE FAMILIES WE CAN BUILD</h2>
          </div>
          <p>Start with the capability your roadmap needs next.</p>
        </div>

        <div className="role-families-grid">
          {roleFamilies.map(([family, role], index) => (
            <motion.article
              key={family}
              className="role-family-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="role-family-top">
                <span className="role-family-index">0{index + 1}</span>
                <span className="role-family-arrow" aria-hidden="true">↗</span>
              </div>
              <span className="role-family-label">{family}</span>
              <h3>{role}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RoleFamiliesSection
