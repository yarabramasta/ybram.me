'use client';

import Link from 'next/link';

import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-10 px-10 md:px-20 py-10 items-baseline w-full justify-between lg:gap-20">
      <div className="flex flex-grow flex-col md:flex-row gap-10 items-start">
        <div className="flex flex-row flex-grow items-start justify-between gap-10">
          <FooterItems
            items={[
              { text: 'About', href: '', external: false },
              { text: 'Blog', href: '', external: false },
              { text: 'Guestbook', href: '', external: false }
            ]}
          />
          <FooterItems
            items={[
              {
                text: 'Business Inquiries',
                href: 'mailto:bramasta.yb@gmail.com',
                external: false
              },
              {
                text: 'Github',
                href: 'https://github.com/yarabramasta',
                external: true
              },
              {
                text: 'Twitter',
                href: 'https://twitter.com/yarabram',
                external: true
              }
            ]}
          />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Logo size={24} />
          <h4>Yara Bramasta</h4>
        </div>
      </div>
      <p className="text-dark/60 dark:text-light/60 text-sm mx-auto lg:mx-0 text-center lg:text-left">
        &copy; 2023 Yara Bramasta. All Rights Reserved.
      </p>
    </footer>
  );
}

function FooterItems({
  items
}: {
  items: { text: string; href: string; external: boolean }[];
}) {
  return (
    <ul className="flex flex-col gap-6 lg:w-full">
      {items.map(({ href, text, external: pop }) => (
        <li
          key={text}
          className="text-dark/60 dark:text-light/60 hover:text-dark hover:dark:text-light duration-300 ease-out active:opacity-100 text overflow-hidden relative"
        >
          <Link
            href={href}
            {...(pop ? { rel: 'noopener noreferrer', target: '_blank' } : {})}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
