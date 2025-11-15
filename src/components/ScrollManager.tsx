import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext({ save: () => {}, restore: () => {} });

export function useScrollManager() {
  return useContext(ScrollContext);
}

export function ScrollManagerProvider({ children }: { children: React.ReactNode }) {
  const scrollY = useRef(0);

  const save = () => {
    scrollY.current = window.scrollY;
  };

  const restore = () => {
    window.scrollTo({ top: scrollY.current, behavior: 'auto' });
  };

  return (
    <ScrollContext.Provider value={{ save, restore }}>
      {children}
    </ScrollContext.Provider>
  );
}
