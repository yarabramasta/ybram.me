import type { NextPage } from 'next';

import BioJSON from 'mod/components/bio_json.mdx';
import Container from 'mod/components/container';
import FYISectionHome from 'mod/components/fyi_section_home';
import SocialCTA, { socialLinks } from 'mod/components/social_cta';

const Home: NextPage = () => {
  return (
    <Container>
      <section className="flex flex-col mb-section gap-component">
        <div className="flex flex-col gap-text">
          <div className="flex flex-col-reverse md:flex-row w-full md:items-baseline md:justify-between gap-component">
            <h1 className="text-xl font-bold">Yara Bramasta</h1>
            <ul className="flex flex-row gap-normal">
              {socialLinks.map(({ icon, linkProps }) => (
                <SocialCTA
                  key={linkProps.title}
                  linkProps={{ ...linkProps }}
                  icon={icon}
                />
              ))}
            </ul>
          </div>
          <h2 className="font-medium text-base text-white85">
            Mobile app developer &bull; He/Him
          </h2>
        </div>
        <p className="text-white60 text-base">
          A passionate software developer from Indonesia, focusing on mobile app
          development.
        </p>
      </section>
      <section className="mb-section">
        <BioJSON />
      </section>
      <FYISectionHome />
    </Container>
  );
};

export default Home;
