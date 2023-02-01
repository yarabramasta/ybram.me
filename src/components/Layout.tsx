import type { NextFontWithVariable } from '@next/font';
import type { FC } from 'react';

import AppBar from './AppBar';
import Footer from './Footer';

const Layout: FC<{ fontFamily: NextFontWithVariable }> = ({
  children,
  fontFamily: switzer
}) => {
  return (
    <div
      className={`${switzer.variable} h-full relative flex flex-col font-sans antialiased`}
    >
      <AppBar />
      <main className="flex-grow pt-[64px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
