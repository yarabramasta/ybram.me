import type { NextFontWithVariable } from '@next/font';
import dynamic from 'next/dynamic';
import type { FC, PropsWithChildren } from 'react';

import Footer from './footer';

const AppBar = dynamic(() => import('./appbar'), { ssr: false });

const RootLayout: FC<
  PropsWithChildren<{ fontFamily: NextFontWithVariable }>
> = ({ children, fontFamily: switzer }) => {
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

export default RootLayout;
