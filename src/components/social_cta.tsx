import { GithubCircle, LinkedIn, Twitter } from 'iconoir-react';
import Link from 'next/link';
import type { FC } from 'react';

const socialIconStyle =
  'stroke-white duration-300 ease-out group-hover:stroke-white group-hover:text-white group-active:scale-105 transition-all';

export const socialLinks = [
  {
    linkProps: {
      href: 'https://github.com/yarabramasta',
      rel: 'noopener noreferrer',
      target: '_blank',
      title: 'github/yarabramasta'
    },
    icon: <GithubCircle color="#f2f2f999" className={socialIconStyle} />
  },
  {
    linkProps: {
      href: 'https://twitter.com/yarabram',
      rel: 'noopener noreferrer',
      target: '_blank',
      title: 'twitter/yarabram'
    },
    icon: <Twitter color="#f2f2f999" className={socialIconStyle} />
  },
  {
    linkProps: {
      href: 'https://www.linkedin.com/in/yara-bramasta-a1b711263',
      rel: 'noopener noreferrer',
      target: '_blank',
      title: 'linkedin/yara-bramasta'
    },
    icon: <LinkedIn color="#f2f2f999" className={socialIconStyle} />
  }
];

const SocialCTA: FC<{ linkProps: any; icon: any }> = ({ linkProps, icon }) => {
  return (
    <li className="w-fit group">
      <Link {...linkProps}>{icon}</Link>
    </li>
  );
};

export default SocialCTA;
