import { AnimatePresence, motion } from 'framer-motion';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
  type FC
} from 'react';

const context = createContext({ state: false, toggle: () => {} });

const DrawerProvider: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  useEffect(() => {
    const t = setTimeout(() => {
      document.body.style.overflowY = open ? 'hidden' : 'scroll';
    }, 300);

    return () => clearTimeout(t);
  }, [open]);

  return (
    <context.Provider value={{ state: open, toggle }}>
      {children}
    </context.Provider>
  );
};

const dropdown = {
  hidden: {
    opacity: 0,
    height: 0
  },
  enter: {
    opacity: 1,
    height: 'calc(100% - 4rem)',
    transition: {
      layout: {
        delay: 0.3,
        type: 'spring',
        duration: 2.5
      }
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      layout: {
        ease: 'easeOut',
        duration: 1.5
      }
    }
  }
};

const Drawer: FC & {
  Toggle: typeof DrawerToggle;
  Context: typeof DrawerProvider;
  state: typeof context;
} = () => {
  const { state } = useContext(context);

  return (
    <AnimatePresence key="drawer">
      {state && (
        <motion.ul
          className="absolute top-16 left-0 w-full p-8 flex flex-col gap-6 backdrop-blur-md bg-white04 z-20"
          style={{ height: 'calc(100% - 4rem)' }}
          variants={dropdown}
          initial="hidden"
          animate="enter"
          exit="exit"
          layout
        ></motion.ul>
      )}
    </AnimatePresence>
  );
};

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

const DrawerToggle: FC<{ onClick: () => void }> = ({ onClick }) => {
  const { toggle, state } = useContext(context);

  return (
    <button
      key="arrow-button"
      className="p-1 border border-white20 duration-300 ease-in-out rounded-md hover:bg-white04 active:bg-white20 group overflow-hidden"
      onClick={() => {
        onClick();
        toggle();
      }}
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

Drawer.Toggle = DrawerToggle;
Drawer.Context = DrawerProvider;
Drawer.state = context;

export default Drawer;
