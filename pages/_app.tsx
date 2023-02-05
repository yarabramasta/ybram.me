import '@/styles/globals.css';

import Header from '@/ui/Header';
import IntroWrapper from '@/ui/IntroWrapper';
import { Analytics } from '@vercel/analytics/react';
import type { AppType } from 'next/app';

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
