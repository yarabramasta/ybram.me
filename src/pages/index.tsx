import type { GetStaticProps, NextPage } from 'next';

import { Footer, HomeComponent } from 'mod/components';
import { getFeaturedArticles, type FeaturedArticle } from 'mod/data/article';

type Articles = {
  articles: FeaturedArticle[];
};

const HomePage: NextPage<Articles> = ({ articles }) => {
  return (
    <div className="max-w-[640px] mx-auto p-normal">
      <HomeComponent.TitleSection />
      <p className="text-base text-white60">
        A passionate software developer from Indonesia, focusing on mobile app
        development with Flutter as main tool since 2021.
      </p>
      <HomeComponent.BioSection />
      <HomeComponent.FYI.List />
      <HomeComponent.FeaturedSection fallback={articles} />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Articles> = async () => {
  const articles = await getFeaturedArticles();

  return {
    props: {
      articles
    },
    revalidate: 10
  };
};

export default HomePage;
