'use client';

import AppBar from './AppBar';
import Drawer from './Drawer';
import Footer from './Footer';
import ThemeWrapper from './ThemeWrapper';

export default function BaseLayout({ children }: React.PropsWithChildren) {
  return (
    <ThemeWrapper attribute="class" defaultTheme="system" enableSystem>
      <Drawer.Context>
        <AppBar />
        <Drawer />
      </Drawer.Context>
      <div className="p-8 lg:p-0"></div>
      {children}
      <Footer />
    </ThemeWrapper>
  );
}
