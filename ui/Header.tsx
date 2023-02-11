import { useWindowSize } from '@/hooks';
import clsx from 'clsx';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion';
import Link from 'next/link';
import { useState, type FC } from 'react';

import Drawer from './Drawer';

const Header: FC = () => {
  const { scrollY } = useScroll();
  const [scrolling, setScrolling] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolling(latest > 5);
  });

  const { width } = useWindowSize();

  return (
    <Drawer.Context>
      <header
        className={clsx(
          'w-screen fixed top-0 left-0 z-20 duration-300',
          scrolling
            ? 'bg-white04 backdrop-blur-md ease-out'
            : 'bg-transparent backdrop-blur-0 ease-in'
        )}
      >
        <div className="w-full relative flex flex-row items-center justify-between lg:px-20 p-6">
          <Link href="/">
            <div className="flex-grow flex flex-row items-center justify-start text-white85 group space-x-2 cursor-pointer font-normal">
              <Logo />
              {!width ? null : width > 1080 ? (
                <AnimatePresence>
                  <Text />
                </AnimatePresence>
              ) : null}
            </div>
          </Link>
          <Drawer.Toggler />
          <BorderBottom active={scrolling} />
        </div>
      </header>
    </Drawer.Context>
  );
};

const fade = {
  hidden: { opacity: 0, transition: { ease: 'easeIn', duration: 0.3 } },
  reveal: { opacity: 1, transition: { ease: 'easeOut', duration: 0.3 } }
};

const Logo: FC = () => {
  return (
    <motion.svg
      className="stroke-white85 group-hover:stroke-white duration-300 ease-out fill-none"
      id="a"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      height={32}
      initial="hidden"
      animate="reveal"
      variants={fade}
    >
      <motion.path
        variants={{
          hidden: {
            pathLength: 0,
            transition: { ease: 'easeIn', duration: 0.3 }
          },
          reveal: {
            pathLength: 1,
            transition: { ease: 'easeOut', duration: 0.6, delay: 0.2 }
          }
        }}
        initial="hidden"
        animate="reveal"
        d="M235,128c0,1.88-.49,3.72-1.43,5.35l-48.13,83.31c-.94,1.63-2.3,2.99-3.93,3.93-1.63,.94-3.49,1.43-5.37,1.42H79.87c-1.88,0-3.74-.48-5.37-1.42-1.63-.94-2.99-2.29-3.93-3.93L22.43,133.35c-.94-1.63-1.43-3.47-1.43-5.35s.49-3.72,1.43-5.35L70.56,39.35c.94-1.63,2.3-2.99,3.93-3.92,1.63-.94,3.49-1.43,5.37-1.42h96.26c1.89,0,3.74,.48,5.37,1.42,1.63,.94,2.99,2.29,3.93,3.92l48.13,83.31c.94,1.63,1.43,3.47,1.43,5.35Zm-106,51v-40m-24,0h48m-48,0v-40m48,40v-40"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </motion.svg>
  );
};

const fadeText = (delay: number = 0) => ({
  hidden: { ...fade.hidden, transition: { ...fade.hidden.transition }, y: 20 },
  reveal: {
    ...fade.reveal,
    transition: { ...fade.reveal.transition, delay },
    y: 0
  }
});

const Text: FC = () => {
  return (
    <div className="overflow-hidden flex flex-row space-x-2 items-center">
      <motion.h3
        initial="hidden"
        animate="reveal"
        exit="hidden"
        variants={fadeText()}
        className="group-hover:text-white duration-300 ease-out"
      >
        Yara Bramasta
      </motion.h3>
      <div className="overflow-hidden lg:w-6 w-full h-full">
        <motion.hr
          className="w-full border-white60 group-hover:border-white85 duration-300 ease-out"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '100%' }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ ease: 'easeOut', delay: 0.1 }}
        />
      </div>
      <motion.h3
        initial="hidden"
        animate="reveal"
        exit="hidden"
        variants={fadeText(0.2)}
        className="group-hover:text-white duration-300 ease-out"
      >
        Mobile App Developer
      </motion.h3>
    </div>
  );
};

const BorderBottom: FC<{ active: boolean }> = ({ active }) => {
  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.hr
            className="border-white20 w-full absolute bottom-0 left-0"
            initial="hidden"
            animate="reveal"
            exit="hidden"
            variants={{
              hidden: {
                opacity: 0,
                width: 0,
                transition: { duration: 0.3, ease: 'easeIn' }
              },
              reveal: {
                opacity: 1,
                width: '100%',
                transition: { duration: 0.3, ease: 'easeOut' }
              }
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
