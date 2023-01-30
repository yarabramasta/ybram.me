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
          <Path path={path} />
        </svg>
      </li>
    </Link>
  );
};

const Path: FC<{ path: string | string[] }> = ({ path }) => {
  return (
    <>
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
    </>
  );
};

export default SocialLink;
