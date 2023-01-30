import localFont from '@next/font/local';
import type { FC } from 'react';

import AppBar from './AppBar';
import Footer from './Footer';

const switzer = localFont({
  src: [
    { path: '../assets/switzer.woff2', style: 'normal' },
    { path: '../assets/switzer-italic.woff2', style: 'italic' }
  ],
  display: 'swap',
  preload: true,
  variable: '--font-switzer',
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    "'Segoe UI'",
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    "'Open Sans'",
    "'Helvetica Neue'",
    'sans-serif'
  ]
});

const Layout: FC = ({ children }) => {
  return (
    <>
      <div className={`${switzer.variable} h-full relative flex flex-col`}>
        <AppBar />
        <main className="flex-grow pt-[64px]">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
