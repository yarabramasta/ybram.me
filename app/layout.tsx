import './globals.css';

import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const clashGrotesk = localFont({
  src: './static/clash-grotesk.woff2',
  display: 'swap',
  variable: '--font-clash-grotesk',
  preload: true
});

export const metadata: Metadata = {
  title: 'Yara Bramasta',
  description:
    'A passionate software developer, focusing on mobile app development.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(clashGrotesk.variable, 'font-sans')}>
        {children}
      </body>
    </html>
  );
}
