import '@/styles/globals.css';

import {
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
  Source_Code_Pro
} from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';
import type { AppType } from 'next/app';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '600', '700'],
  preload: true
});

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
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
      <div
        className={clsx(
          serif.variable,
          sans.variable,
          mono.variable,
          'font-sans h-full'
        )}
      >
        <Component {...pageProps} />
      </div>
      <Analytics mode={'production'} />
    </>
  );
};

export default App;
