import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="w-full flex flex-row items-center text-center justify-center p-6 px-8">
      <h3 className="text-xs text-white40">
        &copy; 2023 by Yara Bramasta. All rights reserved.
      </h3>
    </footer>
  );
};

export default Footer;
