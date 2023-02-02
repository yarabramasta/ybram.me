import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useState, type FC } from 'react';

import { useWindowSize } from 'mod/lib/hooks';

import DropdownArrow from './dropdown_arrow';
import { LogoIcon, LogoText } from './logo';
import MenuDropdown from './menu_dropdown';
import MenuItem, { items } from './menu_item';

const barStroke = {
  default: {
    width: 0,
    opacity: 0,
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: 0.5,
      width: {
        delay: 0.1
      }
    }
  },
  change: {
    width: '100%',
    opacity: 1,
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: 0.5,
      width: {
        delay: 0.1
      }
    }
  }
};

const headerBg = {
  default: {
    background: 'rgba(241, 241, 249, 0)'
  },
  change: {
    background: 'var(--color-white04)'
  }
};

const AppBar: FC = () => {
  const { width } = useWindowSize();

  const [scroll, setScroll] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', latest => {
    if (!open) {
      setScroll(latest >= 5);
    }
  });

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(o => !o);
  };

  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'scroll';
  }, [open]);

  return (
    <>
      <motion.header
        className="w-screen fixed top-0 left-0 z-20 backdrop-blur-md"
        initial="default"
        variants={headerBg}
        animate={scroll || open ? 'change' : 'default'}
        transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.2 }}
      >
        <div className="mx-auto max-w-[720px] flex flex-row items-center justify-between px-normal py-4">
          <div className="flex flex-row gap-2 items-center justify-start w-fit">
            <LogoIcon animate={{ height: scroll || open ? 32 : 24 }} />
            {width > 768 && (
              <LogoText animate={scroll || open ? 'change' : 'default'} />
            )}
          </div>
          {width > 768 ? (
            <ul className="flex items-center flex-row justify-end gap-component">
              {items.map(l => (
                <MenuItem key={l.title} {...l} />
              ))}
            </ul>
          ) : (
            <button
              className="p-1 active:bg-white04 border border-transparent hover:border-white20 duration-300 ease-in-out cursor-pointer rounded-md outline-none transition-all"
              onClick={() => {
                if (scroll) {
                  setScroll(false);
                  window.scrollTo(0, 0);
                }
                toggle();
              }}
            >
              <DropdownArrow animate={open ? 'change' : 'default'} />
            </button>
          )}
          <motion.div
            initial={false}
            variants={barStroke}
            animate={scroll || open ? 'change' : 'default'}
            className="absolute left-0 bottom-0 h-[2px] w-full bg-white20"
          />
        </div>
      </motion.header>
      <MenuDropdown open={open} />
    </>
  );
};

export default AppBar;
