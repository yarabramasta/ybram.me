import { AnimatePresence, motion } from 'framer-motion';
import { useState, type FC, type PropsWithChildren } from 'react';

const IntroWrapper: FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="font-sans h-full">
      <AnimatePresence key="intro-wrapper" mode="wait">
        {loading ? (
          <svg
            id="a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            height={56}
            className="stroke-white fill-none duration-300 ease-in-out transition-all fixed top-1/2 left-1/2"
          >
            <motion.path
              d="M235,128c0,1.88-.49,3.72-1.43,5.35l-48.13,83.31c-.94,1.63-2.3,2.99-3.93,3.93-1.63,.94-3.49,1.43-5.37,1.42H79.87c-1.88,0-3.74-.48-5.37-1.42-1.63-.94-2.99-2.29-3.93-3.93L22.43,133.35c-.94-1.63-1.43-3.47-1.43-5.35s.49-3.72,1.43-5.35L70.56,39.35c.94-1.63,2.3-2.99,3.93-3.92,1.63-.94,3.49-1.43,5.37-1.42h96.26c1.89,0,3.74,.48,5.37,1.42,1.63,.94,2.99,2.29,3.93,3.92l48.13,83.31c.94,1.63,1.43,3.47,1.43,5.35Zm-106,51v-40m-24,0h48m-48,0v-40m48,40v-40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              initial={{ opacity: 1, pathLength: 1 }}
              animate={{ opacity: 0, pathLength: 0 }}
              onAnimationComplete={() => setLoading(false)}
              transition={{
                duration: 3,
                ease: 'easeInOut',
                pathLength: { duration: 2, delay: 0.3 },
                opacity: { duration: 1, delay: 1.5 }
              }}
            />
          </svg>
        ) : (
          <div>{children}</div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroWrapper;
