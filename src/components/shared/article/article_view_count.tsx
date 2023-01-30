import type { FC } from 'react';

type Props = {
  id: string;
};

const ArticleViewCount: FC<Props> = () => {
  return (
    <div className="flex flex-row gap-text items-end">
      <svg
        height={24}
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-white60"
      >
        <path
          d="M4.5 12.5c3-6.5 12-6.5 15 0M12 16a2 2 0 110-4 2 2 0 010 4z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-normal text-white60">{0} views</p>
    </div>
  );
};

export default ArticleViewCount;
