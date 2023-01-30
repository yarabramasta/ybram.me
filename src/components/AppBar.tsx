import {
  AnimationProps,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion';
import { useState, type FC } from 'react';

const LogoIcon: FC<{ animate: AnimationProps['animate'] }> = ({ animate }) => {
  return (
    <motion.svg
      id="a"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      height={24}
      initial={false}
      animate={animate}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.3 }}
    >
      <path
        d="M235,128c0,1.88-.49,3.72-1.43,5.35l-48.13,83.31c-.94,1.63-2.3,2.99-3.93,3.93-1.63,.94-3.49,1.43-5.37,1.42H79.87c-1.88,0-3.74-.48-5.37-1.42-1.63-.94-2.99-2.29-3.93-3.93L22.43,133.35c-.94-1.63-1.43-3.47-1.43-5.35s.49-3.72,1.43-5.35L70.56,39.35c.94-1.63,2.3-2.99,3.93-3.92,1.63-.94,3.49-1.43,5.37-1.42h96.26c1.89,0,3.74,.48,5.37,1.42,1.63,.94,2.99,2.29,3.93,3.92l48.13,83.31c.94,1.63,1.43,3.47,1.43,5.35Zm-106,51v-40m-24,0h48m-48,0v-40m48,40v-40"
        stroke="#7400e9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </motion.svg>
  );
};

const logoText = {
  default: {
    fontSize: '0.875rem',
    color: 'var(--white60)'
  },
  scroll: {
    fontSize: '1rem',
    color: 'var(--white85)'
  }
};

const LogoText: FC<{ animate: AnimationProps['animate'] }> = ({ animate }) => {
  return (
    <motion.h3
      initial={false}
      className="text-sm font-medium text-white60"
      variants={logoText}
      animate={animate}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.3 }}
    >
      Yara Bramasta
    </motion.h3>
  );
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
      ease: [0.16, 1, 0.3, 1],
      width: {
        delay: 0.1
      }
    }
  }
};

const AppBar: FC = () => {
  const { scrollY } = useScroll();
  const [isUnderScroll, setIsUnderScroll] = useState(false);

  useMotionValueEvent(scrollY, 'change', latest => {
    setIsUnderScroll(latest >= 5);
  });

  return (
    <header className="w-screen px-normal py-4 fixed top-0 left-0 z-10 backdrop-blur-md">
      <div className="mx-auto max-w-[720px]">
        <div className="flex flex-row gap-2 items-center justify-start w-fit">
          <LogoIcon animate={{ height: isUnderScroll ? 32 : 24 }} />
          <LogoText animate={isUnderScroll ? 'scroll' : 'default'} />
        </div>
        <motion.div
          initial={false}
          variants={barStroke}
          animate={isUnderScroll ? 'scroll' : 'default'}
          className="absolute left-0 bottom-0 h-[1px] w-full bg-white20"
        />
      </div>
    </header>
  );
};

export default AppBar;
