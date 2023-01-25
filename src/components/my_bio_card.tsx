import Image from 'next/image';

import BaseSocialLink from './base_social_link';

const MyBioCard = () => {
  return (
    <div className="flex flex-col flex-wrap w-fit h-fit gradient-border-1 max-w-[320px] relative">
      <div className="absolute top-0 left-0 opacity-20">
        <Image
          src="https://bucket.ybram.my.id/assets/elnath.svg"
          alt="elnath: gradient-blob"
          width={400}
          height={400}
        />
      </div>
      <div
        className="p-6 rounded-[8px]"
        style={{
          background:
            'linear-gradient(91.54deg, rgba(242, 242, 249, 0.04) 0%, rgba(242, 242, 249, 0.02) 100%)',
          backdropFilter: 'blur(20px)'
        }}
      >
        <Image
          src="https://bucket.ybram.my.id/assets/ybram.svg"
          alt="brand-logo"
          width={32}
          height={32}
          priority
        />
        <span className="p-2" />
        <h1 className="flex flex-wrap flex-col md:flex-row w-full items-baseline md:space-x-2 leading-loose">
          <span className="text-2xl text-fg font-bold">Yara Bramasta</span>
          <span className="text-fg/60">&bull;</span>
          <span className="text-sm text-fg/60">He / Him</span>
        </h1>
        <h2 className="text-base text-fg/80 font-medium">
          Mobile App Developer
        </h2>
        <br />
        <p className="text-base leading-snug text-fg/60">
          A passionate developer from <span className="text-fg">Indonesia</span>
          ,
          <br />
          focused on mobile app development with{' '}
          <span className="text-fg">Flutter</span> as my main tool{' '}
          <span className="text-fg">since 2020</span>.
        </p>
        <span className="p-6" />
        <ul className="flex flex-col md:flex-row flex-wrap w-full justify-start items-start space-y-2 md:space-x-2 md:space-y-0 text-fg/80 font-medium">
          <BaseSocialLink href="https://github.com/yarabramasta">
            Github
          </BaseSocialLink>
          <BaseSocialLink href="https://twitter.com/yarabram">
            Twitter
          </BaseSocialLink>
          <BaseSocialLink href="mailto:bramasta.yb@gmail.com">
            Email
          </BaseSocialLink>
        </ul>
      </div>
    </div>
  );
};

export default MyBioCard;
