import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { AppType } from 'next/app';
import dynamic from 'next/dynamic';

import Header from '@/ui/Header';
import IntroWrapper from '@/ui/IntroWrapper';

const Noise = dynamic(() => import('../ui/Noise'), { ssr: false });

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <IntroWrapper>
        <Header />
        <div className="h-16" />
        <Component {...pageProps} />
      </IntroWrapper>
      {process.env.NODE_ENV !== 'development' && <Noise />}
      {/* <Noise /> */}
      <Analytics mode={'production'} />
    </>
  );
};

export default App;
