import { DefaultSeo } from 'next-seo';

const BaseHead = () => {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s • Yara Bramasta"
        defaultTitle="Yara Bramasta"
        description="A college student & mobile app developer from Indonesia."
        themeColor="#0A0A0C"
        openGraph={{
          type: 'website',
          locale: 'en',
          url: 'https://www.ybram.me/',
          siteName: 'Yara Bramasta',
          images: [
            {
              url: 'https://bucket.ybram.my.id/assets/ybram.svg',
              type: 'image/svg+xml',
              alt: 'ybram - logo'
            }
          ]
        }}
        twitter={{
          handle: '@yarabram',
          site: '@yarabram',
          cardType: 'summary_large_image'
        }}
        additionalLinkTags={[
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/icon/apple-touch-icon.png'
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/icon/favicon-32x32.png'
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/icon/favicon-16x16.png'
          },
          {
            rel: 'manifest',
            href: '/site.webmanifest'
          }
        ]}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'initial-scale=1, viewport-fit=cover, user-scalable=no'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black-translucent'
          },
          {
            name: 'keywords',
            content:
              'yara,yarabramasta,yara bramasta,ybram.me,ybram.my.id,www.ybram.me,www.ybram.my.id,bram,ybram,portfolio,personal portfolio,indonesia,malang,jawa timur,east java,indonesian,personal,github,yarabramasta github com,tech,flutter,developer,mobile,mobile app developer,android,ios'
          }
        ]}
      />
    </>
  );
};

export default BaseHead;
