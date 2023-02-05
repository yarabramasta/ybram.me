import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { AppType } from 'next/app';
import dynamic from 'next/dynamic';

import Header from '@/ui/Header';

const Noise = dynamic(() => import('../ui/Noise'), { ssr: false });

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <div className="h-full font-sans">
        <Header.Drawer />
        <div className="h-16" />
        <Component {...pageProps} />
        {process.env.NODE_ENV !== 'development' && <Noise />}
      </div>
      <Analytics mode={'production'} />
    </>
  );
};

export default App;
