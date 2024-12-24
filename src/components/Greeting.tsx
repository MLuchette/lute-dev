import { motion } from 'motion/react';
import { Typewriter } from 'react-simple-typewriter';

import { useExperienceStore } from '@state/experienceStore';

const messages = [`Hello!`, `I'm Matt`];

export const Greeting = () => {
  const setExperience = useExperienceStore((state) => state.setExperience);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <motion.button
        key="Greeting"
        onClick={() => {
          setExperience('Skills');
        }}
        className="min-w-16 rounded-full bg-gradient-to-br from-sky-400 to-sky-500 p-4 font-mono text-white shadow-lg shadow-sky-500/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [-50, 0] }}
        transition={{ type: 'spring' }}
        exit={{ scale: 0 }}
      >
        <Typewriter cursor cursorBlinking words={messages}></Typewriter>
      </motion.button>
    </div>
  );
};
