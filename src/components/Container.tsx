import type { FC } from 'react';

const Container: FC = ({ children }) => {
  return <div className="max-w-[640px] mx-auto p-normal">{children}</div>;
};

export default Container;
