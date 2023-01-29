import type { NextPage } from 'next';
import Link from 'next/link';

import { Home } from '@/components';
import CHBio from '@/components/home/ch_bio.mdx';
import { Article, type IArticleJSON } from '@/data';
import { useGraphQL } from '@/lib/graphql_fetcher';
import { useMemo } from 'react';

const HomePage: NextPage = () => {
  const { data, error } = useGraphQL<{ allArticle: [IArticleJSON] }>(
    `query {
      allArticle(limit: 3, sort: { _createdAt: DESC }) {
        _id
        slug { current }
        title
        author { name }
        body
        _createdAt
      }
    }
    `
  );

  const latestArticles = useMemo(
    () => Article.getLatestArticles(data?.allArticle ?? []),
    [data]
  );

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
        <div className="flex flex-col gap-component w-full flex-wrap mb-section">
          <div className="flex flex-col md:flex-row gap-component">
            <Home.FYICard>
              Currently a student at{' '}
              <span className="text-white85 font-medium hover:underline">
                <Link
                  href="https://unmer.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of Merdeka Malang
                </Link>
              </span>
              .
            </Home.FYICard>
            <Home.FYICard>
              Former intern at{' '}
              <span className="text-white85 font-medium hover:underline">
                <Link
                  href="https://www.retgoo.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RetGoo Sentris Informa
                </Link>
              </span>
              .
            </Home.FYICard>
          </div>
          <Home.FYICard>
            Alumni from the 2022 class of{' '}
            <span className="text-white85 font-medium hover:underline">
              <Link
                href="https://smkn4malang.sch.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                SMKN 4 Malang
              </Link>
            </span>
            &apos;s software engineering major.
          </Home.FYICard>
        </div>
        {error ? (
          <p className="text-sm font-medium text-danger w-full text-center">
            Unable to retrieve latest articles.
          </p>
        ) : (
          data && <pre>{JSON.stringify(latestArticles, null, 2)}</pre>
        )}
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
