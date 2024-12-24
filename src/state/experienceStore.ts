import { create } from 'zustand';
import * as experiences from '@/components';

type Experience = keyof typeof experiences;
type ExperienceStore = {
  currentExperience: Experience;
  setExperience: (experience: Experience) => void;
};

export const useExperienceStore = create<ExperienceStore>((set) => ({
  currentExperience: 'Greeting',
  setExperience: (currentExperience: Experience) => {
    set({ currentExperience });
  },
}));
