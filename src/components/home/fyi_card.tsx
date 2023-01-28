import type { FC } from 'react';

const FYICard: FC = ({ children }) => {
  return (
    <div className="border border-white20 rounded-md p-component w-full">
      <p className="text-white60">{children}</p>
    </div>
  );
};

export default FYICard;
