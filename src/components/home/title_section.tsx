import type { FC } from 'react';

import { SocialLinkList } from './social_link';

const TitleSection: FC = () => {
  return (
    <section className="flex flex-col w-full flex-wrap gap-text mb-component">
      <div className="w-full flex flex-col-reverse gap-component md:gap-[0px] md:flex-row md:items-baseline md:justify-between">
        <h1 className="text-xl font-bold">Yara Bramasta</h1>
        <SocialLinkList />
      </div>
      <h2 className="text-base text-white85 font-medium">
        Mobile App Developer &bull; He/Him
      </h2>
    </section>
  );
};

export default TitleSection;
