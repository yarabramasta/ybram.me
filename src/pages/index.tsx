import type { NextPage } from 'next';

import { MyBioCard } from '@/components';

const Home: NextPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:px-60">
      <MyBioCard />
    </div>
  );
};

export default Home;
