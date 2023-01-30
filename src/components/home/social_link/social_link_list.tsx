import type { FC } from 'react';

import { socialIcons } from './constants';
import SocialLink from './social_link';

const SocialLinkList: FC = () => {
  return (
    <ul className="flex flex-row md:justify-end items-center gap-component">
      <SocialLink
        href="https://github.com/yarabramasta"
        path={socialIcons.github}
      />
      <SocialLink
        href="https://twitter.com/yarabram"
        path={socialIcons.twitter}
      />
      <SocialLink
        href="https://www.linkedin.com/in/yara-bramasta-a1b711263"
        path={socialIcons.linkedin}
      />
    </ul>
  );
};

export default SocialLinkList;
