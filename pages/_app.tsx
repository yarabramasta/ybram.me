import '@/styles/globals.css';

import type { AppType } from 'next/app';

import Header from '@/ui/Header';

const App: AppType = ({ Component, pageProps }) => {
  return (
    <div className="font-sans flex flex-col relative h-full">
      <Header />
      <main className="flex flex-grow flex-col h-full w-full gap-8 pt-16">
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default App;
