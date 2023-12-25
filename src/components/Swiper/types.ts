import { SwiperProps } from 'swiper/react';
import { CardProps } from '../Card/types';

export type CardSwiperProps<T extends CardProps = CardProps> = SwiperProps & {
  items: T[];
  template?: (item: T) => JSX.Element;
};
