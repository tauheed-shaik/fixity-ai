import { useState } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import JourneySection from './components/JourneySection'
import CxoProblemSection from './components/CxoProblemSection'
import ModelSection from './components/ModelSection'
import ProofSection from './components/ProofSection'
import RoleFamiliesSection from './components/RoleFamiliesSection'
import MetricsSection from './components/MetricsSection'
import CtaSection from './components/CtaSection'
import BookingSection from './components/BookingSection'
import ConfirmationPage from './components/ConfirmationPage'

const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

const App = () => {
  const [screen, setScreen] = useState('landing')

  if (screen === 'booking') {
    return <BookingSection onBack={() => setScreen('landing')} onSubmit={() => setScreen('confirmation')} />
  }

  if (screen === 'confirmation') {
    return <ConfirmationPage onBack={() => setScreen('landing')} />
  }

  return (
    <>
      <Reveal><HeroSection onOpenBooking={() => setScreen('booking')} /></Reveal>
      <Reveal><JourneySection /></Reveal>
      <Reveal><CxoProblemSection /></Reveal>
      <Reveal><ModelSection /></Reveal>
      <Reveal><ProofSection /></Reveal>
      <Reveal><RoleFamiliesSection /></Reveal>
      <Reveal><MetricsSection /></Reveal>
      <Reveal><CtaSection onOpenBooking={() => setScreen('booking')} /></Reveal>
    </>
  )
}

export default App
