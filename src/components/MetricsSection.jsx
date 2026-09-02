import { motion } from 'framer-motion'

const metricItems = [
  { value: '12,000+', label: 'Students Trained' },
  { value: '28+', label: 'Institution Partnerships' },
  { value: '89%', label: 'Placement / Interview Outcome' },
  { value: '14', label: 'Industry Certifications' },
]

const logoFiles = [
  'Accenture.png',
  'amazon-white.png',
  'aws.png',
  'Cisco.png',
  'dell_technologies.png',
  'google.png',
  'infosys.webp',
  'microsoft.png',
]

const MetricsSection = () => {
  return (
    <section className="metrics-section">
      <div className="metrics-inner">
        <h2 className="credibility-title">CREDIBILITY — BUILT AT SCALE</h2>
        <div className="metrics-grid">
          {metricItems.map((item, index) => (
            <motion.div
              key={item.label}
              className="metric-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="metric-value"
                initial={{ opacity: 0, scale: 0.86 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 + 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                {item.value}
              </motion.div>
              <div className="metric-label">{item.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="trusted-wrap">
          <div className="trusted-title">Trusted by</div>
          <div className="logo-row" aria-label="Partner logos">
            {logoFiles.map((file, index) => (
              <motion.div
                key={file}
                className="logo-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <img src={`/logos/${file}`} alt={file.replace(/[-_.]/g, ' ')} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MetricsSection
