import '@/styles/globals.css';

import Header from '@/ui/Header';
import { Analytics } from '@vercel/analytics/react';
import type { AppType } from 'next/app';
import dynamic from 'next/dynamic';

const IntroWrapper = dynamic(() => import('../ui/IntroWrapper'), {
  ssr: false
});

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <IntroWrapper>
        <Header />
        <div className="h-16" />
        <Component {...pageProps} />
      </IntroWrapper>
      <Analytics mode={'production'} />
    </>
  );
};

export default App;
