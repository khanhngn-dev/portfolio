'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Card, CardList } from '..';
import Image from 'next/image';

const CardSwiper = () => {
  return (
    <Swiper className="mt-10" loop modules={[Pagination, Navigation, A11y]} spaceBetween={40} navigation>
      <SwiperSlide className="px-12">
        <Card className="border-none" showPlus={false} title="Javascript/Typescript">
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="relative w-full max-w-[300px] aspect-square mx-auto bg-white">
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
      </SwiperSlide>
      <SwiperSlide className="px-12">
        <Card showPlus={false} title="NodeJS" className="border-none">
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="relative w-full max-w-[300px] aspect-square mx-auto bg-white">
              <Image className="p-5" fill src="/icons/node.svg" alt="node icon" />
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
      </SwiperSlide>
    </Swiper>
  );
};

export default CardSwiper;
