import Link from 'next/link';
import type { FC } from 'react';

const FYILink: FC<{ href: string }> = ({ children, href }) => {
  return (
    <span className="text-white85 font-medium hover:underline">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    </span>
  );
};

export default FYILink;
