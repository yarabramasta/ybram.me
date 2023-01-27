import type { NextPage } from 'next';

import { Home } from '@/components';

const HomePage: NextPage = () => {
  return (
    <div className="max-w-[640px] mx-auto p-normal">
      <div className="flex flex-col w-full flex-wrap gap-text mb-component">
        <div className="w-full flex flex-col-reverse gap-component md:gap-[0px] md:flex-row md:items-baseline md:justify-between">
          <h1 className="text-xl font-bold">Yara Bramasta</h1>
          <ul className="flex flex-row md:justify-end items-center gap-component">
            <Home.SocialLink
              href="/socials/github"
              path={Home.ICONOIR_PATH.github}
            />
            <Home.SocialLink
              href="/socials/twitter"
              path={Home.ICONOIR_PATH.twitter}
            />
            <Home.SocialLink
              href="/socials/linkedin"
              path={Home.ICONOIR_PATH.linkedin}
            />
          </ul>
        </div>
        <h2 className="text-base text-white85">
          Mobile App Developer &bull; He/Him
        </h2>
      </div>
      <p className="text-base text-white60">
        A passionate software developer from Indonesa, focusing on mobile app
        development with Flutter as main tool since 2021.
      </p>
    </div>
  );
};

export default HomePage;
