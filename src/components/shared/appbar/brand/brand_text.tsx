import { AnimationProps, motion } from 'framer-motion';
import type { FC } from 'react';

import { logoText, transition } from '../animation_variants';

type Props = {
  animate: AnimationProps['animate'];
};

const Text: FC<Props> = ({ animate }) => {
  return (
    <motion.h3
      initial={false}
      className="text-sm font-medium text-white60"
      variants={logoText}
      animate={animate}
      transition={transition}
    >
      Yara Bramasta
    </motion.h3>
  );
};

export default Text;
