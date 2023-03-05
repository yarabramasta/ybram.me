'use client';

import clsx from 'clsx';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

import Drawer, { useDrawerState } from './Drawer';
import Logo from './Logo';

export default function AppBar() {
  const { scrollY } = useScroll();
  const { open } = useDrawerState();
  const [scrolling, setScrolling] = useState(false);
  const [lastScrollPx, setLastScrollPx] = useState(0);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setLastScrollPx(latest);
    setScrolling(latest > 5);
  });

  useEffect(() => {
    if (scrolling && open) {
      setScrolling(false);
    }

    if (lastScrollPx > 5 && !open) {
      setScrolling(true);
    }
  }, [open, scrolling, lastScrollPx]);

  return (
    <header
      className={clsx(
        'w-screen fixed top-0 left-0 z-20 duration-300 transition-all',
        scrolling
          ? 'bg-light/10 ease-out backdrop-blur-md py-4'
          : 'bg-transparent ease-in backdrop-blur-0 py-8'
      )}
    >
      <motion.div
        className={clsx(
          'h-full w-full relative flex flex-row items-center justify-between px-8 lg:px-20'
        )}
        layout
      >
        <div
          className={clsx(
            scrolling ? 'opacity-100 ease-out' : 'lg:opacity-0 ease-in',
            'duration-300 transition-all',
            open && '!opacity-0'
          )}
        >
          <Logo size={24} />
        </div>
        <Drawer.Toggle />
      </motion.div>
    </header>
  );
}
