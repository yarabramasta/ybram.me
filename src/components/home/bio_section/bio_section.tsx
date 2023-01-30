import type { FC } from 'react';

import BioContent from './bio_content.mdx';

const BioSection: FC = () => {
  return (
    <div className="py-component">
      <BioContent />
    </div>
  );
};

export default BioSection;
