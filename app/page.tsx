import Section from '@/components/Section';

export default function Home() {
  return (
    <>
      <header>
        <h3 className="flex flex-row items-center gap-4 text-xs lg:text-sm justify-center lg:justify-start text-dark/80 dark:text-light/80 w-full">
          <span>Yara Bramasta</span>
          <hr className="border-dark/80 dark:border-light/80 w-6" />
          <span className="flex-grow">Mobile App Developer</span>
        </h3>
      <header>
      <div className="flex flex-col lg:flex-row border-b border-b-dark/20 dark:border-b-light/20">
        <Section border={false} fullHeight>
          <div className="flex h-full flex-col justify-between">
            <h3 className="flex flex-row items-center gap-4 text-xs lg:text-sm justify-center lg:justify-start text-dark/80 dark:text-light/80">
              <span>Yara Bramasta</span>
              <hr className="border-dark/80 dark:border-light/80 w-6" />
              <span className="flex-grow">Mobile App Developer</span>
            </h3>
            <h1 className="text-2xl lg:text-4xl font-semibold max-w-[480px]">
              A Passionate Software Developer,
              <br />
              <span className="bg-clip-text bg-gradient-to-r from-violet-900 to-pink-700 text-transparent">
                focusing on Mobile App Development.
              </span>
            </h1>
            <ul></ul>
          </div>
        </Section>
        <Section border={false}></Section>
      </div>
    </>
  );
}
