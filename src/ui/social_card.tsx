import { ArrowRight, GithubCircle, LinkedIn, Twitter } from 'iconoir-react';
import Link from 'next/link';
import type { FC } from 'react';

export const icons = {
  0: <GithubCircle height={18} color="#f2f2f9d9" />,
  1: <Twitter height={18} color="#f2f2f9d9" />,
  2: <LinkedIn height={18} color="#f2f2f9d9" />
};

const SocialCard: FC<{ linkProps: any; icon: any }> = ({ linkProps, icon }) => {
  return (
    <Link {...linkProps} className="w-full group">
      <div className="flex flex-row w-full gap-component border border-white20 px-component py-text group-hover:bg-white04 duration-300 ease-in-out rounded-md items-center justify-between">
        <div className="flex flex-grow flex-row gap-text items-center justify-start">
          {icon}
          <p className="text-white85 text-sm">{linkProps['title']}</p>
        </div>
        <ArrowRight
          height={18}
          color="#f2f2f9d9"
          className="-rotate-45 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] duration-300 ease-in-out"
        />
      </div>
    </Link>
  );
};

export default SocialCard;
