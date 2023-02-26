'use client';

import Link from 'next/link';

export default function NavItem({
  href,
  children
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <Link
      href={href}
      className="flex-grow border-r border-r-dark/20 dark:border-r-light/20 h-full p-10 lg:pr-20 flex justify-start items-end duration-300 ease-out hover:bg-dark/10 hover:dark:bg-light/10"
    >
      {children}
    </Link>
  );
}
