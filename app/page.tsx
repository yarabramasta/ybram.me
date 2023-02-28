import { NavItem, SocialCard } from '@/components/Home';
import Section from '@/components/Section';

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row border-b border-b-dark/20 dark:border-b-light/20">
      <Section
        fullHeight
        fullWidth
        adaptiveBorder
        style="max-h-[88vh] lg:max-h-screen flex flex-col justify-between p-8 lg:px-20 lg:py-10"
      >
        <h3 className="flex flex-row items-center gap-4 text-xs md:text-sm text-opacity-80">
          <span>Yara Bramasta</span>
          <hr className="border-dark/80 dark:border-light/80 w-6" />
          <span className="flex-grow">Mobile App Developer</span>
        </h3>
        <h1 className="text-2xl md:text-4xl font-semibold max-w-[480px] mx-auto lg:mx-0">
          A Passionate Software Developer,
          <br />
          <span className="bg-clip-text bg-gradient-to-r from-purple-accent to-pink-accent text-transparent">
            focusing on Mobile App Development.
          </span>
        </h1>
        <ul className="flex flex-row gap-4 w-full items-start justify-between flex-wrap md:flex-nowrap">
          <SocialCard.Github />
          <SocialCard.Twitter />
          <SocialCard.Location />
        </ul>
      </Section>
      <Section border={false} style="h-[24vh] lg:h-screen">
        <ul className="flex flex-row w-full h-full lg:max-h-screen justify-between items-end">
          <NavItem index={1} href="" position="object-left-top">
            About
          </NavItem>
          <NavItem index={2} href="" position="object-left-top">
            Blog
          </NavItem>
          <NavItem
            index={3}
            href=""
            position="object-left-bottom"
            border={false}
          >
            Guestbook
          </NavItem>
        </ul>
      </Section>
    </main>
  );
}
