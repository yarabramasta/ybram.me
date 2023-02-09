import clsx from 'clsx';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion';
import { useState, type FC } from 'react';

const Header: FC = () => {
  const { scrollY } = useScroll();
  const [scrolling, setScrolling] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolling(latest > 5);
  });

  return (
    <header
      className={clsx(
        'h-16 w-screen fixed top-0 left-0 z-20 duration-[250ms] transition-all',
        scrolling
          ? 'bg-white04 backdrop-blur-md ease-out'
          : 'bg-transparent backdrop-blur-0 ease-in'
      )}
    >
      <div className="h-full w-full relative flex flex-row items-center justify-between">
        <BorderBottom active={scrolling} />
      </div>
    </header>
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
                transition: { duration: 0.25, ease: 'easeIn' }
              },
              reveal: {
                opacity: 1,
                width: '100%',
                transition: { duration: 0.25, ease: 'easeOut' }
              }
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
