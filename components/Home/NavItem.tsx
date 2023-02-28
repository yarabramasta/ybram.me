'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type Position =
  | 'object-top'
  | 'object-left'
  | 'object-bottom'
  | 'object-right'
  | 'object-left-top'
  | 'object-left-bottom'
  | 'object-right-top'
  | 'object-right-bottom'
  | 'object-center';

export default function NavItem({
  href,
  children,
  index,
  position = 'object-center',
  border = true
}: React.PropsWithChildren<{
  href: string;
  index: number;
  position?: Position;
  border?: boolean;
}>) {
  return (
    <Link
      href={href}
      className={clsx(
        'flex-grow h-full p-8 lg:pr-20 flex justify-start items-end duration-300 ease-out relative group text-dark dark:text-light hover:text-light text-lg md:text-xl',
        border && 'border-r border-r-dark/20 dark:border-r-light/20'
      )}
    >
      <div className="absolute top-0 left-0 w-full h-full -z-40 opacity-0 duration-300 ease-out group-hover:opacity-100" />
      <div className="absolute top-0 left-0 w-full h-full duration-300 ease-out group-hover:opacity-100 opacity-0 -z-50">
        <Image
          alt="hover-bg"
          src={`/images/hover-bg-${index}.png`}
          fill
          className={clsx('object-cover', position)}
        />
      </div>
      {children}
    </Link>
  );
}
