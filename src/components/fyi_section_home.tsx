import Link from 'next/link';
import type { FC } from 'react';

const fyiCardStyle =
  'h-full overflow-hidden flex flex-col p-component duration-300 ease-in-out border border-white20 w-full rounded-md';

const fyiLink = {
  unmer: {
    href: 'https://unmer.ac.id',
    rel: 'noopener noreferrer',
    target: '_blank'
  },
  retgoo: {
    href: 'https://www.retgoo.id',
    rel: 'noopener noreferrer',
    target: '_blank'
  },
  grafika: {
    href: 'https://smkn4malang.sch.id',
    rel: 'noopener noreferrer',
    target: '_blank'
  }
};

const FYISectionHome: FC = () => {
  return (
    <section className="flex flex-col gap-component w-full mb-section">
      <div className="flex flex-col md:flex-row gap-component">
        <div className={fyiCardStyle}>
          <p>
            <span className="text-white60">Currently a student at </span>
            <span className="text-white85 font-medium hover:underline">
              <Link title="Universitas Merdeka Malang" {...fyiLink.unmer}>
                University of Merdeka Malang
              </Link>
            </span>
            .
          </p>
        </div>
        <div className={fyiCardStyle}>
          <p>
            <span className="text-white60">Former intern at </span>
            <span className="text-white85 font-medium hover:underline">
              <Link title="PT. RetGoo Sentris Informa" {...fyiLink.retgoo}>
                RetGoo Sentris Informa
              </Link>
            </span>
            .
          </p>
        </div>
      </div>
      <div className={fyiCardStyle}>
        <p>
          <span className="text-white60">Alumni from the 2022 class of </span>
          <span className="text-white85 font-medium hover:underline">
            <Link title="SMK Negeri 4 Malang" {...fyiLink.grafika}>
              SMKN 4 Malang
            </Link>
          </span>
          <span className="text-white60">
            &apos;s software engineering major.
          </span>
        </p>
      </div>
    </section>
  );
};

export default FYISectionHome;
