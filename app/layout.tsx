import './globals.css';

import clsx from 'clsx';
import type { Metadata } from 'next';
import { ServerThemeProvider } from 'next-themes';
import localFont from 'next/font/local';

import getAbsoluteUrl from '@/utils/getAbsoluteUrl';

const clashGrotesk = localFont({
  src: './static/clash-grotesk.woff2',
  display: 'swap',
  variable: '--font-clash-grotesk',
  preload: true
});

export const metadata: Metadata = {
  title: { default: 'Yara Bramasta', template: '%s ┈ Yara Bramasta' },
  description:
    'A passionate software developer, focusing on mobile app development.',
  creator: 'yarabramasta',
  alternates: { canonical: 'https://ybram.me' },
  viewport: 'initial-scale=1, viewport-fit=cover, user-scalable=no',
  manifest: '/site.webmanifest',
  keywords: [
    'Yara Bramasta',
    'bram',
    'yarabramasta',
    'ybram.me',
    'ybram me',
    'github',
    'indonesia',
    'nextjs',
    'flutter',
    'personal portfolio'
  ],
  verification: {
    google: 'g5Jypw7qhL9rKyiZ4-7hqifydSaFcO3REmVeyd2qij0',
    me: 'yarabram111@gmail.com'
  },
  icons: {
    icon: [
      '/favicon.ico',
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: getAbsoluteUrl('/favicon.ico'),
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/apple-icon-512x312.png', sizes: '512x312', type: 'image/png' }
    ]
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    type: 'website',
    url: 'https://ybram.me',
    title: 'Yara Bramasta',
    description:
      'A passionate software developer, focusing on mobile app development.',
    siteName: 'Yara Bramasta',
    images: getAbsoluteUrl('/images/og.jpg'),
    countryName: 'Indonesia',
    locale: 'en'
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@yarabram',
    title: 'Yara Bramasta',
    description:
      'A passionate software developer, focusing on mobile app development.',
    images: getAbsoluteUrl('/images/og.jpg')
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <html lang="en" className="dark" suppressHydrationWarning>
        <body
          className={clsx(
            clashGrotesk.variable,
            'font-sans bg-light dark:bg-dark antialiased'
          )}
        >
          {children}
        </body>
      </html>
    </ServerThemeProvider>
  );
}
