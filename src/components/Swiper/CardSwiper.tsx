'use client';

import clsx from 'clsx';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Card } from '..';
import { CardProps } from '../Card/types';
import style from './Swiper.module.css';
import { CardSwiperProps } from './types';

const defaultTemplate = (item: CardProps) => <Card {...item} />;

function CardSwiper<T extends CardProps = CardProps>({
  items,
  className,
  template = defaultTemplate,
  ...props
}: CardSwiperProps<T>) {
  return (
    <Swiper
      className={clsx(style['custom-swiper'], className)}
      loop
      modules={[Pagination, Navigation, A11y]}
      spaceBetween={40}
      {...props}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="px-2 sm:px-10 pb-6 self-stretch !h-auto">
          {template(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardSwiper;
