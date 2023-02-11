import '@/styles/globals.css';

import { Source_Code_Pro } from '@next/font/google';
import localFont from '@next/font/local';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';
import type { AppType } from 'next/app';

import Header from '@/ui/Header';

const sans = localFont({
  src: '../assets/clash-grotesk.woff2',
  display: 'swap',
  variable: '--font-sans',
  preload: true
});

const mono = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-mono',
  preload: true
});

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <div className={clsx(sans.variable, mono.variable, 'font-sans')}>
        <Header />
        <main className="pt-16">
          <Component {...pageProps} />
        </main>
      </div>
      <Analytics mode={'production'} />
    </>
  );
};

export default App;
