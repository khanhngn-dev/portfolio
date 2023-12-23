import clsx from 'clsx';
import { Accordion, AlignImage, Card, CardList } from '..';
import { CardAccordionProps } from './types';
import { FC } from 'react';

const SkillCard: FC<CardAccordionProps> = ({ title, className, items, images, imageClassName, ...props }) => {
  return (
    <div className={clsx('p-3 sm:p-4 bg-neutral-850/40 backdrop-blur-sm h-max border border-white/10 border-solid', className)} {...props}>
      {images && <AlignImage className={clsx(imageClassName, 'mb-5')} items={images} />}
      <Accordion title={title}>
        <Card className="border-none p-2">
          <CardList items={items} />
        </Card>
      </Accordion>
    </div>
  );
};

export default SkillCard;
