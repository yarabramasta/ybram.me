import Link from 'next/link';
import type { FC } from 'react';

type Props = {
  href: string;
  path: string | string[];
};

const SocialLink: FC<Props> = ({ href, path }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <li className="stroke-white60 duration-300 ease-in-out group-hover:stroke-white85 group-active:stroke-white group-active:scale-110">
        <svg
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {path instanceof Array ? (
            <>
              {path.map((v, i) => (
                <path
                  key={i}
                  d={v}
                  stroke="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ))}
            </>
          ) : (
            <path
              d={path}
              stroke="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </li>
    </Link>
  );
};

export const ICONOIR_PATH = {
  github:
    'M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3',
  twitter:
    'M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z',
  linkedin: [
    'M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7',
    'M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011'
  ]
};

export default SocialLink;
