import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';

const BaseSocialLink: FC<PropsWithChildren<{ href: string }>> = ({
  href,
  children
}) => {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="group"
    >
      <li className="group-hover:text-fg">{children}</li>
    </Link>
  );
};

export default BaseSocialLink;
