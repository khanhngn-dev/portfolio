import clsx from 'clsx';
import { FC } from 'react';

import { Accordion, AlignImage, Card, CardList } from '..';
import { CardAccordionProps } from './types';

const SkillCard: FC<CardAccordionProps> = ({ title, className, items, images, imageClassName, ...props }) => {
  return (
    <div
      className={clsx(
        'pt-2 sm:pt-4 bg-neutral-850/70 backdrop-blur-[2px] h-max border border-white/10 border-solid',
        className,
      )}
      {...props}
    >
      {images && <AlignImage className={clsx(imageClassName, 'mb-5')} items={images} />}
      <Accordion title={title}>
        <CardList className="p-3 sm:p-4" items={items} />
      </Accordion>
    </div>
  );
};

export default SkillCard;
