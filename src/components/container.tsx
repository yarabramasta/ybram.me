import type { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-[640px] mx-auto p-normal">{children}</div>;
};

export default Container;
