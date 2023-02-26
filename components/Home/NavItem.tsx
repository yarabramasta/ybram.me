'use client';

import Link from 'next/link';
import clsx from 'clsx';

export default function NavItem({
  href,
  children,
  border = true
}: React.PropsWithChildren<{ href: string, border: boolean }>) {
  return (
    <Link
      href={href}
      className={clsx(border && 'border-r border-r-dark/20 dark:border-r-light/20', "flex-grow h-full p-8 lg:pr-20 flex justify-center md:justify-start items-end duration-300 ease-out hover:bg-dark/10 hover:dark:bg-light/10")}
    >
      {children}
    </Link>
  );
}
