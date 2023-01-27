import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { forwardRef, useState } from 'react';

const AppBar = (_: any, ref: any) => {
  const { scrollY } = useScroll();
  const [isUnderScroll, setIsUnderScroll] = useState(false);

  useMotionValueEvent(scrollY, 'change', latest => {
    setIsUnderScroll(latest >= 5);
  });

  const logoText = {
    default: {
      fontSize: '0.875rem',
      color: 'var(--white70)'
    },
    scroll: {
      fontSize: '1rem',
      color: 'var(--white85)'
    }
  };

  const barStroke = {
    default: {
      width: 0,
      opacity: 0
    },
    scroll: {
      width: '100%',
      opacity: 1,
      transition: {
        ease: 'linear',
        width: {
          delay: 0.1
        }
      }
    }
  };

  const transition = { ease: [0.16, 1, 0.3, 1], duration: 0.3 };

  return (
    <motion.header
      ref={ref}
      className="w-screen px-normal py-4 fixed top-0 left-0 z-10 backdrop-blur-md"
    >
      <div className="w-full max-w-[720px] flex flex-row items-center justify-beetwen mx-auto">
        <div className="flex flex-row gap-2 items-center justify-start w-fit">
          <motion.svg
            id="a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            height={24}
            animate={{ height: isUnderScroll ? 32 : 24 }}
            transition={transition}
          >
            <path
              d="M235,128c0,1.88-.49,3.72-1.43,5.35l-48.13,83.31c-.94,1.63-2.3,2.99-3.93,3.93-1.63,.94-3.49,1.43-5.37,1.42H79.87c-1.88,0-3.74-.48-5.37-1.42-1.63-.94-2.99-2.29-3.93-3.93L22.43,133.35c-.94-1.63-1.43-3.47-1.43-5.35s.49-3.72,1.43-5.35L70.56,39.35c.94-1.63,2.3-2.99,3.93-3.92,1.63-.94,3.49-1.43,5.37-1.42h96.26c1.89,0,3.74,.48,5.37,1.42,1.63,.94,2.99,2.29,3.93,3.92l48.13,83.31c.94,1.63,1.43,3.47,1.43,5.35Zm-106,51v-40m-24,0h48m-48,0v-40m48,40v-40"
              stroke="#7400e9"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </motion.svg>
          <motion.h3
            className="text-sm font-medium text-white70"
            variants={logoText}
            animate={isUnderScroll ? 'scroll' : 'default'}
            transition={transition}
          >
            Yara Bramasta
          </motion.h3>
        </div>
      </div>
      <motion.div
        variants={barStroke}
        animate={isUnderScroll ? 'scroll' : 'default'}
        className="absolute left-0 bottom-0 h-[1px] w-full bg-white20"
      />
    </motion.header>
  );
};

export default forwardRef(AppBar);
