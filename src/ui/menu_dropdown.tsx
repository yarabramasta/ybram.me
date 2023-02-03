import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';

const dropdown = {
  close: {
    opacity: 0,
    scale: 0.95,
    transition: {
      delay: 0.2,
      ease: 'easeInOut'
    }
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const MenuDropdown: FC<{ open: boolean }> = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed z-20 w-full h-full top-[64px] left-0 bg-black40 backdrop-blur-sm"
          variants={dropdown}
          initial="close"
          animate="open"
          exit="close"
          transition={{ duration: 0.6 }}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuDropdown;
