import { AnimationProps, motion } from 'framer-motion';
import { type FC } from 'react';

const morphArrow = {
  default: {
    d: ['M6 9l6 6 6-6']
  },
  change: {
    d: ['M6 15l6-6 6 6']
  }
};

const DropdownArrow: FC<{ animate: AnimationProps['animate'] }> = ({
  animate
}) => {
  return (
    <svg
      height={20}
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-white85"
    >
      <motion.path
        initial={false}
        d="M6 9l6 6 6-6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={morphArrow}
        animate={animate}
      />
    </svg>
  );
};

export default DropdownArrow;
