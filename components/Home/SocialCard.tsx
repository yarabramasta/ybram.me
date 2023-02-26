import clsx from 'clsx';
import Link from 'next/link';

import Icons from './Icons';

function SocialCard({
  children,
  href,
  text,
  disable = false
}: React.PropsWithChildren<{ text: string; href: string; disable?: boolean }>) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={clsx(
        disable && 'pointer-events-none cursor-default',
        'flex flex-row gap-2 p-2 text-sm border border-dark/20 dark:border-light/20 duration-300 ease-out hover:bg-dark/10 hover:dark:bg-light/10 hover:border-dark/60 hover:dark:border-light/60 rounded-md items-center justify-center flex-grow h-full'
      )}
    >
      <span>{children}</span>
      <span>{text}</span>
    </Link>
  );
}

function Github() {
  return (
    <SocialCard href="https://github.com/yarabramasta" text="Github">
      <Icons.Github />
    </SocialCard>
  );
}

function Twitter() {
  return (
    <SocialCard href="https://twitter.com/yarabram" text="Twitter">
      <Icons.Twitter />
    </SocialCard>
  );
}

function Location() {
  return (
    <SocialCard href="" text="Malang, Indonesia" disable>
      <Icons.LocationPin />
    </SocialCard>
  );
}

SocialCard.Github = Github;
SocialCard.Twitter = Twitter;
SocialCard.Location = Location;

export default SocialCard;
