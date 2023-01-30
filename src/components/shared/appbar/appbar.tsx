import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

import { barStroke } from './animation_variants';
import * as Brand from './brand';

const AppBar = () => {
  const { scrollY } = useScroll();
  const [isUnderScroll, setIsUnderScroll] = useState(false);

  useMotionValueEvent(scrollY, 'change', latest => {
    setIsUnderScroll(latest >= 5);
  });

  return (
    <header className="w-screen px-normal py-4 fixed top-0 left-0 z-10 backdrop-blur-md">
      <div className="w-full max-w-[720px] flex flex-row items-center justify-beetwen mx-auto">
        <div className="flex flex-row gap-2 items-center justify-start w-fit">
          <Brand.Logo animate={{ height: isUnderScroll ? 32 : 24 }} />
          <Brand.Text animate={isUnderScroll ? 'scroll' : 'default'} />
        </div>
      </div>
      <motion.div
        initial={false}
        variants={barStroke}
        animate={isUnderScroll ? 'scroll' : 'default'}
        className="absolute left-0 bottom-0 h-[1px] w-full bg-white20"
      />
    </header>
  );
};

export default AppBar;
