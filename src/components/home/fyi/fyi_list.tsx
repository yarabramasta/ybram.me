import type { FC } from 'react';

import Card from './fyi_card';
import Link from './fyi_link';

const List: FC = () => {
  return (
    <div className="flex flex-col gap-component w-full flex-wrap mb-section">
      <div className="flex flex-col md:flex-row gap-component">
        <Card>
          Currently a student at{' '}
          <Link href="https://unmer.ac.id">University of Merdeka Malang</Link>.
        </Card>
        <Card>
          Former intern at{' '}
          <Link href="https://www.retgoo.id">RetGoo Sentris Informa</Link>.
        </Card>
      </div>
      <Card>
        Alumni from the 2022 class of{' '}
        <Link href="https://smkn4malang.sch.id">SMKN 4 Malang</Link>
        &apos;s software engineering major.
      </Card>
    </div>
  );
};

export default List;
