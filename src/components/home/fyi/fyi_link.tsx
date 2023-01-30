import NavLink from 'next/link';
import type { FC } from 'react';

const Link: FC<{ href: string }> = ({ children, href }) => {
  return (
    <span className="text-white85 font-medium hover:underline">
      <NavLink href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </NavLink>
    </span>
  );
};

export default Link;
