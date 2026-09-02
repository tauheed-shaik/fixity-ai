import { motion } from 'framer-motion'

const modelItems = [
  {
    number: '01',
    title: 'DEFINE',
    description: 'Role & skill requirement',
  },
  {
    number: '02',
    title: 'ASSESS',
    description: 'Baseline candidate capability',
  },
  {
    number: '03',
    title: 'BUILD',
    description: 'Role-specific learning',
  },
  {
    number: '04',
    title: 'VALIDATE',
    description: 'Projects + certification + assessment',
  },
  {
    number: '05',
    title: 'DELIVER',
    description: 'Curated interview-ready talent pool',
  },
]

const ModelSection = () => {
  return (
    <section className="model-section">
      <div className="model-inner">
        <div className="model-header">
          <h2>From campus to capability</h2>
        </div>

        <div className="model-grid">
          {modelItems.map((item, index) => (
            <motion.div
              key={item.number}
              className="model-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="model-number">{item.number}</div>
              <div className="model-title">{item.title}</div>
              <div className="model-description">{item.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ModelSection
