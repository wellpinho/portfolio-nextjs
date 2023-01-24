import { motion } from 'framer-motion';
import styles from './animations.module.scss'

const ContinuousLearning = () => {
  return (
    <motion.div animate={{ x: 0 }}
      transition={{ delay: 1 }}
    >
      <h3>
        <span>100</span>
      </h3>
      <p>Continuous learning</p>
    </motion.div >
  )
}

export { ContinuousLearning }