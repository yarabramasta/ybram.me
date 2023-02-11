import clsx from 'clsx';
import { motion } from 'framer-motion';
import {
  createContext,
  useContext,
  useState,
  type FC,
  type PropsWithChildren
} from 'react';

const Drawer: FC & {
  Toggler: typeof DrawerToggleButton;
  Context: typeof DrawerContext;
} = () => {
  return <div></div>;
};

const DrawerToggleButton: FC = () => {
  const { toggle, isOpen } = useDrawerState();

  return (
    <motion.button
      className="border border-white20 duration-300 ease-out hover:border-white60 p-1 active:bg-white04 outline-none focus:ring-white60 rounded-md group"
      onClick={toggle}
      title={isOpen ? 'Close Drawer' : 'Open Drawer'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <svg
        className={clsx(
          'duration-300 stroke-white85 ease-out group-hover:stroke-white fill-none',
          isOpen ? 'rotate-180' : 'rotate-0'
        )}
        height={24}
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M6 9l6 6 6-6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        ></motion.path>
      </svg>
    </motion.button>
  );
};

const store = createContext({ isOpen: false, toggle: () => {} });

const DrawerContext: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((current) => !current);

  return <store.Provider value={{ isOpen, toggle }}>{children}</store.Provider>;
};

Drawer.Toggler = DrawerToggleButton;
Drawer.Context = DrawerContext;

export function useDrawerState() {
  return useContext<{ toggle: () => void; isOpen: boolean }>(store);
}

export default Drawer;
