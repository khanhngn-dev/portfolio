import { FC } from 'react';
import { QuoteCardProps } from './types';
import { Card } from '.';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';
import Link from 'next/link';
import clsx from 'clsx';

const QuoteCard: FC<QuoteCardProps> = ({ company, date, name, quote, title, className, ...props }) => {
  return (
    <Card
      title={name}
      className={clsx('relative overflow-y-clip', className)}
      preFix={() => (
        <div className='mb-5'>
          <p className="mt-2 text-light italic text-white/80">
            {'//'} {title}
          </p>
          <p className="mt-2 pb-[2px] border-b border-solid w-max ">
            @ <Link href={company.url}>{company.name}</Link>
          </p>
        </div>
      )}
      postFix={() => (
        <>
          <FaQuoteRight className="opacity-[0.02] w-40 h-40 absolute -top-12 right-1 sm:right-3 -z-10" />
          <FaQuoteLeft className="opacity-[0.02] w-40 h-40 absolute -bottom-12 left-1 sm:left-3 -z-10" />
        </>
      )}
      detail={{
        title: date,
      }}
      {...props}
    >
      &ldquo;{quote}&rdquo;
    </Card>
  );
};

export default QuoteCard;
