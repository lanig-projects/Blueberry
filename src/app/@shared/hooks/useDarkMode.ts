import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useEffect } from 'react';

interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
}

export const useDarkModeStore = create<DarkModeState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleDarkMode: () =>
        set((state) => {
          const newValue = !state.isDarkMode;
          return { isDarkMode: newValue };
        }),
      setDarkMode: (value: boolean) => set({ isDarkMode: value })
    }),
    {
      name: 'dark-mode'
    }
  )
);

export const useDarkMode = () => {
  const { isDarkMode, toggleDarkMode, setDarkMode } = useDarkModeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode, setDarkMode };
};
