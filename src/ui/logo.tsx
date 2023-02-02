import { AnimationProps, motion } from 'framer-motion';
import Link from 'next/link';
import { type FC } from 'react';

export const LogoIcon: FC<{ animate: AnimationProps['animate'] }> = ({
  animate
}) => {
  return (
    <Link href="/" title="Yara Bramasta">
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
          stroke="#f2f2f9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
      </motion.svg>
    </Link>
  );
};

const logoText = {
  default: {
    fontSize: '0.875rem',
    color: 'var(--color-white60)'
  },
  change: {
    fontSize: '1rem',
    color: 'var(--color-white85)'
  }
};

export const LogoText: FC<{ animate: AnimationProps['animate'] }> = ({
  animate
}) => {
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