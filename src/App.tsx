import { motion, AnimatePresence } from 'motion/react';
import { useExperienceStore } from '@state/experienceStore';
import * as experiences from '@/components';

function App() {
  const currentExperience = useExperienceStore(
    (state) => state.currentExperience
  );

  const Experience = experiences[currentExperience];

  return (
    <AnimatePresence mode="popLayout">
      <motion.div key={currentExperience}>
        <Experience />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
