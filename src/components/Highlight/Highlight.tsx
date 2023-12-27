'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import { Card, CardList } from '..';

const Highlight = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex gap-5 mt-10 overflow-x-auto">
      {['languages', 'frontend', 'backend', 'tools'].map((label, i) => (
        <div
          key={i}
          className={clsx(
            'transition-all flex-1 duration-300 flex bg-neutral-850/40 backdrop-blur-sm border-l border-white border-solid',
            active === i ? '' : 'flex-grow-[0.0001]',
          )}
        >
          <div
            onClick={() => setActive(i)}
            className="bg-neutral-800 hover:bg-neutral-800/70 transition-colors p-4 cursor-pointer"
            style={{
              writingMode: 'vertical-lr',
            }}
          >
            <div className="sticky top-0 h-max">{label}</div>
          </div>
          <div
            className={clsx('overflow-clip flex', active === i ? 'opacity-100 visible w-auto flex-1' : 'w-0 invisible')}
            style={{
              transition: 'opacity 1000ms ease, width 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <Card className="border-none w-full overflow-y-auto" showPlus={false} title="Javascript/Typescript">
              <div className="flex flex-col gap-10">
                <div className="relative w-full sm:w-[300px] sm:h-[300px] aspect-square mx-auto">
                  <Image
                    fill
                    className="absolute !w-[50%] !h-max"
                    style={{
                      aspectRatio: '1/1',
                      top: '0.5rem',
                      left: '0.5rem',
                    }}
                    src="/icons/js.svg"
                    alt="js icon"
                  />
                  <Image
                    fill
                    className="absolute !w-[50%] !h-max"
                    style={{
                      aspectRatio: '1/1',
                      top: 'auto',
                      bottom: '0.5rem',
                      right: '0.5rem',
                      left: 'auto',
                    }}
                    src="/icons/ts.svg"
                    alt="ts icon"
                  />
                </div>
                <CardList
                  items={[
                    'Working with Javascript for 3 years',
                    '2 years with its typed counter part',
                    'Learn JS/TS before learning its numerous libraries and frameworks',
                  ]}
                />
              </div>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Highlight;
