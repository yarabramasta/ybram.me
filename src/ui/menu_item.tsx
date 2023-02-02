import Link from 'next/link';
import { useRouter } from 'next/router';
import { type FC } from 'react';

export const items = [
  { href: '/', title: 'Home Page', text: 'Home' },
  { href: '/about', title: 'About Page', text: 'About' },
  { href: '/blog', title: 'Blog Page', text: 'Blog' },
  { href: '/guestbook', title: 'Guestbook Page', text: 'Guestbook' }
];

const MenuItem: FC<{ href: string; title: string; text: string }> = ({
  href,
  title,
  text
}) => {
  const router = useRouter();

  return (
    <li className="w-full group cursor-pointer">
      <Link
        href={href}
        title={title}
        className={`${
          router.pathname === href ? 'text-white' : 'text-white60'
        } text-base w-full h-full group-hover:text-white duration-300 ease-in-out`}
      >
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;
