import type { FC } from 'react';

const FYICard: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="border border-white20 rounded-md p-component w-full">
      <p className="text-white60">{text}</p>
    </div>
  );
};

export default FYICard;
