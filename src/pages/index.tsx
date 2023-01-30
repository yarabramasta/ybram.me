import type { GetStaticProps, NextPage } from 'next';

import { Footer, Home } from '@/components';
import CHBio from '@/components/home/ch_bio.mdx';
import styles from '@/components/home/home.module.css';
import { Article, getFeaturedArticles } from '@/data/article';

type Articles = {
  articles: Article[];
};

const HomePage: NextPage<Articles> = ({ articles }) => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.title_container}>
          <div className={styles.h1_container}>
            <h1 className="text-xl font-bold">Yara Bramasta</h1>
            <ul className={styles.social_links_container}>
              <Home.SocialLink
                href="https://github.com/yarabramasta"
                path={Home.socialIcons.github}
              />
              <Home.SocialLink
                href="https://twitter.com/yarabram"
                path={Home.socialIcons.twitter}
              />
              <Home.SocialLink
                href="https://www.linkedin.com/in/yara-bramasta-a1b711263"
                path={Home.socialIcons.linkedin}
              />
            </ul>
          </div>
          <h2 className="text-base text-white85 font-medium">
            Mobile App Developer &bull; He/Him
          </h2>
        </div>
        <p className="text-base text-white60">
          A passionate software developer from Indonesia, focusing on mobile app
          development with Flutter as main tool since 2021.
        </p>
        <div className="py-component">
          <CHBio />
        </div>
        <div className={styles.fyi_container}>
          <div className="flex flex-col md:flex-row gap-component">
            <Home.FYICard>
              Currently a student at{' '}
              <Home.FYILink href="https://unmer.ac.id">
                University of Merdeka Malang
              </Home.FYILink>
              .
            </Home.FYICard>
            <Home.FYICard>
              Former intern at{' '}
              <Home.FYILink href="https://www.retgoo.id">
                RetGoo Sentris Informa
              </Home.FYILink>
              .
            </Home.FYICard>
          </div>
          <Home.FYICard>
            Alumni from the 2022 class of{' '}
            <Home.FYILink href="https://smkn4malang.sch.id">
              SMKN 4 Malang
            </Home.FYILink>
            &apos;s software engineering major.
          </Home.FYICard>
        </div>
        <Home.FeaturedArticles fallback={articles} />
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Articles> = async () => {
  const articles = await getFeaturedArticles();

  return {
    props: {
      articles: JSON.parse(JSON.stringify(articles))
    },
    revalidate: 10
  };
};

export default HomePage;
