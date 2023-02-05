import { AnimatePresence, motion } from 'framer-motion';
import { type FC } from 'react';

/* ---------- MOTION VARIANTS ---------- */
const arrowSvg = {
  init: {
    opacity: 0,
    transition: { delay: 0.1, duration: 0.6, ease: 'easeInOut' }
  },
  initWithRotate: {
    opacity: 0,
    rotate: 180,
    transition: { delay: 0.1, duration: 0.6, ease: 'easeInOut' }
  },
  enter: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
  exit: {
    opacity: 0,
    transition: { duration: 0.6, ease: 'easeInOut', opacity: { delay: -0.3 } }
  }
};

const arrowPath = {
  hidden: { pathLength: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  enter: {
    pathLength: 1,
    transition: { delay: 0.1, duration: 0.6, ease: 'easeInOut' }
  },
  exit: { pathLength: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
};
/* ---------- MOTION VARIANTS ---------- */

const ArrowIcon: FC<{ motionKey: string; init: string }> = ({
  motionKey,
  init
}) => {
  return (
    <motion.svg
      key={motionKey}
      height={20}
      className="stroke-white60 group-hover:stroke-white85"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={arrowSvg}
      initial={init}
      animate="enter"
      exit="exit"
    >
      <motion.path
        d="M6 9l6 6 6-6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={arrowPath}
        initial="hidden"
        animate="enter"
        exit="exit"
      />
    </motion.svg>
  );
};

const DrawerToggle: FC<{
  // eslint-disable-next-line no-unused-vars
  toggle: (state: boolean) => void;
  state: boolean;
}> & { Icon: typeof ArrowIcon } = ({ toggle, state }) => {
  return (
    <button
      key="arrow-button"
      className="p-1 border border-white20 duration-300 ease-in-out rounded-md hover:bg-white04 active:bg-white20 group overflow-hidden"
      onClick={() => toggle(state)}
    >
      <AnimatePresence mode="wait">
        {state ? (
          <ArrowIcon motionKey="arrow-opened" init="initWithRotate" />
        ) : (
          <ArrowIcon motionKey="arrow-closed" init="init" />
        )}
      </AnimatePresence>
    </button>
  );
};

DrawerToggle.Icon = ArrowIcon;

export default DrawerToggle;
