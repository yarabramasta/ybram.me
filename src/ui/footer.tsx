import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="flex flex-row w-full max-w-640px gap-normal items-center justify-center px-normal py-component">
      <p className="text-white40 text-xs text-center">
        &copy; 2023 Yara Bramasta. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
