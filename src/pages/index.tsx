import type { NextPage } from 'next';

import { Home } from '@/components';
import CHBio from '@/components/home/ch_bio.mdx';

const HomePage: NextPage = () => {
  return (
    <>
      <div className="max-w-[640px] mx-auto p-normal">
        <div className="flex flex-col w-full flex-wrap gap-text mb-component">
          <div className="w-full flex flex-col-reverse gap-component md:gap-[0px] md:flex-row md:items-baseline md:justify-between">
            <h1 className="text-xl font-bold">Yara Bramasta</h1>
            <ul className="flex flex-row md:justify-end items-center gap-component">
              <Home.SocialLink
                href="/socials/github"
                path={Home.socialIcons.github}
              />
              <Home.SocialLink
                href="/socials/twitter"
                path={Home.socialIcons.twitter}
              />
              <Home.SocialLink
                href="/socials/linkedin"
                path={Home.socialIcons.linkedin}
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
        <div className="py-component">
          <CHBio />
        </div>
        <div className="flex flex-col gap-component w-full flex-wrap mb-section">
          <div className="flex flex-col md:flex-row gap-component">
            <Home.FYICard text="Currently a student at University of Merdeka Malang." />
            <Home.FYICard text="Former intern at RetGoo Sentris Informa." />
          </div>
          <Home.FYICard
            text="Alumni from the 2022 class of SMKN 4 Malang's software
              engineering major."
          />
        </div>
      </div>
      <footer className="flex flex-row w-full max-w-640px gap-normal items-center justify-center px-normal py-component">
        <p className="text-white60 text-sm">
          &copy; 2023 Yara Bramasta. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default HomePage;
