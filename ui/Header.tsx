import clsx from 'clsx';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect, useState, type FC } from 'react';

import { useWindowSize } from '@/hooks';

const DrawerToggle = dynamic(() => import('./DrawerToggle'));

const Header: FC & {
  Link: typeof NavLink;
  Menu: typeof NavMenu;
  Logo: typeof Logo;
} = () => {
  const [scrolling, setScrolling] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { scrollY } = useScroll();
  const { width } = useWindowSize();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (!drawerOpen) {
      setScrolling(latest > 5);
    }
  });

  useEffect(() => {
    document.body.style.overflowY = drawerOpen ? 'hidden' : 'scroll';
  }, [drawerOpen]);

  return (
    <header
      className={clsx(
        'w-full fixed top-0 left-0 z-20 duration-300 ease-in-out backdrop-blur-md',
        drawerOpen || scrolling ? 'bg-white04' : 'bg-transparent'
      )}
    >
      <div className="max-w-[720px] flex flex-row mx-auto px-10 py-4 items-center justify-between">
        <Logo />
        {!width ? null : width > 768 ? (
          <NavMenu />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut' }}
          >
            <DrawerToggle
              state={drawerOpen}
              toggle={(s) => {
                if (scrolling) setScrolling(false);
                setDrawerOpen(!s);
              }}
            />
          </motion.div>
        )}
      </div>
      <hr
        className={clsx(
          'absolute bottom-0 text-white20 border-white20 w-full duration-300 transition-all ease-in-out delay-100',
          drawerOpen || scrolling
            ? 'left-0 opacity-100'
            : '-left-full opacity-0'
        )}
      />
    </header>
  );
};

const NavLink: FC<PropsWithChildren<{ href: string }>> = ({
  children,
  ...props
}) => {
  const router = useRouter();

  return (
    <div className="relative pb-[1.5px] overflow-hidden">
      <Link
        {...props}
        className={clsx(
          'group-hover:text-white85 font-medium text-sm relative',
          router.pathname === props.href ? 'text-white85' : 'text-white60'
        )}
      >
        {children}
      </Link>
      <AnimatePresence>
        {router.pathname === props.href && (
          <motion.hr
            initial={{ opacity: 1, x: -20, width: 0 }}
            animate={{ opacity: 1, x: 0, width: '100%' }}
            exit={{ opacity: 0, x: 20, width: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.3,
              opacity: { delay: 0.1 },
              ease: 'easeInOut'
            }}
            className="border-white40 absolute bottom-0 right-0 w-full rounded-md origin-center"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const items = [
  { id: 'home', href: '/', children: 'Home' },
  { id: 'about', href: '/about', children: 'About' },
  { id: 'blog', href: '/blog', children: 'Blog' },
  { id: 'guestbook', href: '/guestbook', children: 'Guestbook' }
];

const NavMenu: FC = () => {
  return (
    <ul className="flex flex-row items-center justify-end text-right gap-6">
      {items.map(({ href, id, children }, i) => (
        <motion.li
          key={id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: i * 0.05,
            ease: 'easeOut',
            opacity: { delay: 0.15 }
          }}
          className="group overflow-hidden"
        >
          <NavLink href={href}>{children}</NavLink>
        </motion.li>
      ))}
    </ul>
  );
};

const Logo = () => {
  return (
    <div className="flex flex-row gap-2 items-center justify-start h-[26px]">
      <Link href="/" title="Yara Bramasta">
        <svg
          id="a"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          height={24}
          className="hover:stroke-white85 stroke-white60 fill-none duration-300 ease-in-out transition-all"
        >
          <motion.path
            d="M235,128c0,1.88-.49,3.72-1.43,5.35l-48.13,83.31c-.94,1.63-2.3,2.99-3.93,3.93-1.63,.94-3.49,1.43-5.37,1.42H79.87c-1.88,0-3.74-.48-5.37-1.42-1.63-.94-2.99-2.29-3.93-3.93L22.43,133.35c-.94-1.63-1.43-3.47-1.43-5.35s.49-3.72,1.43-5.35L70.56,39.35c.94-1.63,2.3-2.99,3.93-3.92,1.63-.94,3.49-1.43,5.37-1.42h96.26c1.89,0,3.74,.48,5.37,1.42,1.63,.94,2.99,2.29,3.93,3.92l48.13,83.31c.94,1.63,1.43,3.47,1.43,5.35Zm-106,51v-40m-24,0h48m-48,0v-40m48,40v-40"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ ease: 'easeOut', duration: 1.25 }}
          />
        </svg>
      </Link>
      <h3 className="text-sm text-white60 font-medium">
        {'Yara Bramasta'.split('').map((c, i) => {
          return (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              key={c + i}
            >
              {c}
            </motion.span>
          );
        })}
      </h3>
    </div>
  );
};

Header.Link = NavLink;
Header.Menu = NavMenu;
Header.Logo = Logo;

export default Header;
