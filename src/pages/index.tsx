import { GithubCircle, LinkedIn, Twitter } from 'iconoir-react';
import type { NextPage } from 'next';
import Link from 'next/link';

import CHBio from 'mod/components/CHBio.mdx';

const socialIconStyle =
  'stroke-white duration-300 ease-out group-hover:scale-105 group-active:scale-105 transition-all';

const socialLink = {
  github: {
    href: 'https://github.com/yarabramasta',
    rel: 'noopener noreferrer',
    target: '_blank'
  },
  twitter: {
    href: 'https://twitter.com/yarabram',
    rel: 'noopener noreferrer',
    target: '_blank'
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/yara-bramasta-a1b711263',
    rel: 'noopener noreferrer',
    target: '_blank'
  }
};

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

const Home: NextPage = () => {
  return (
    <div className="max-w-[640px] mx-auto p-normal">
      <section className="flex flex-col mb-section gap-component">
        <div className="flex flex-col gap-text">
          <div className="flex flex-col-reverse md:flex-row w-full md:items-baseline md:justify-between gap-component">
            <h1 className="text-xl font-bold">Yara Bramasta</h1>
            <ul className="flex flex-row gap-normal">
              <li className="w-fit group">
                <Link title="github/yarabramasta" {...socialLink.github}>
                  <GithubCircle className={socialIconStyle} />
                </Link>
              </li>
              <li className="w-fit group">
                <Link title="twitter/yarabram" {...socialLink.twitter}>
                  <Twitter className={socialIconStyle} />
                </Link>
              </li>
              <li className="w-fit group">
                <Link title="linkedin/yara-bramasta" {...socialLink.linkedin}>
                  <LinkedIn className={socialIconStyle} />
                </Link>
              </li>
            </ul>
          </div>
          <h2 className="font-medium text-base text-white85">
            Mobile app developer &bull; He/Him
          </h2>
        </div>
        <p className="text-white60 text-base">
          A passionate software developer from Indonesia, focusing on mobile app
          development with Flutter as main tool since 2021.
        </p>
      </section>
      <section className="mb-section">
        <CHBio />
      </section>
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
    </div>
  );
};

export default Home;
