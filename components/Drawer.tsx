'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { createContext, useContext, useEffect, useState } from 'react';

const drawerState = createContext({ toggle: () => {}, open: false });

function Context({ children }: React.PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((current) => !current);
  };

  return (
    <drawerState.Provider value={{ open, toggle }}>
      {children}
    </drawerState.Provider>
  );
}

export const useDrawerState = () => useContext(drawerState);

function Drawer() {
  const { open } = useDrawerState();

  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'scroll';
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          className={clsx(
            'safe-h-screen bg-light/80 backdrop-blur-md z-10 fixed top-0 left-0',
            open ? 'w-full' : 'w-0'
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layout
        ></motion.nav>
      )}
    </AnimatePresence>
  );
}

function Toggle() {
  const { open, toggle } = useDrawerState();

  return (
    <button
      onClick={toggle}
      className={clsx(
        'p-1 border rounded-md group duration-300 ease-out',
        open
          ? 'border-dark/20 dark:border-dark/20'
          : 'border-dark/20 dark:border-light/20',
        open
          ? 'hover:bg-dark/10 active:bg-dark/20 active:border-dark/60 dark:hover:bg-dark/10 dark:active:bg-dark/20 dark:active:border-dark/60'
          : 'hover:bg-dark/10 active:bg-dark/20 active:border-dark/60 dark:hover:bg-light/10 dark:active:bg-light/20 dark:active:border-light/60'
      )}
    >
      <svg
        className={clsx(
          'fill-none duration-300 stroke-dark/80',
          open ? 'rotate-180 ease-out' : 'rotate-0 ease-in-out',
          open ? 'dark:stroke-dark/80' : 'dark:stroke-light/80'
        )}
        height={18}
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

Drawer.Toggle = Toggle;
Drawer.Context = Context;

export default Drawer;
