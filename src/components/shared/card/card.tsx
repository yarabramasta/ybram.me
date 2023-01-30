import Link from 'next/link';
import type { FC } from 'react';

type Props = {
  href?: string;
  gradient?: boolean;
  title?: string;
};

const Card: FC<Props> = ({ children, href, gradient = false, title }) => {
  const border = gradient ? 'gradient-border' : 'border border-white20';

  return (
    <>
      <style jsx>{`
        .gradient-border {
          background: linear-gradient(var(--bg-color), var(--bg-color))
              padding-box,
            linear-gradient(97.23deg, #9c42f7 0%, #abfdae 61.46%, #496ff9 100%)
              border-box;
          border-radius: 6px;
          border: 4px solid transparent;
        }

        div {
          width: 100%;
        }

        @media (min-width: 768px) {
          div {
            width: 'calc(100% / 2)';
          }
        }
      `}</style>
      <div
        className={`h-full overflow-hidden flex flex-col p-component hover:shadow-xl hover:scale-105 hover:shadow-[rgb(0 0 0 / 0.6)] duration-300 ease-in-out ${border}`}
      >
        <Link
          href={href ?? ''}
          onClick={evt => {
            if (!href) evt.preventDefault();
          }}
          title={title}
          className="w-full"
        >
          {children}
        </Link>
      </div>
    </>
  );
};

export default Card;
