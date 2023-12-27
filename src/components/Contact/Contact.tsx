'use client';

import clsx from 'clsx';
import { FaCopy } from 'react-icons/fa6';

import { useCopy } from '@/hooks';

import { Tooltip } from '..';

export type ContactProps = {
  icon: React.ReactNode;
  text: string;
  url: string;
  textToCopy?: string;
  className?: string;
};

const Contact = ({ icon, text, url, textToCopy = url, className }: ContactProps) => {
  const { text: tooltip, handleCopy } = useCopy();

  return (
    <div className={clsx('flex items-center group link', className)}>
      {icon}
      <a className="ml-3 mr-5 font-thin" href={url}>
        {text}
      </a>
      <Tooltip text={tooltip}>
        <FaCopy
          className="w-4 h-4 transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
          onClick={() => handleCopy(textToCopy)}
        />
      </Tooltip>
    </div>
  );
};

export default Contact;
