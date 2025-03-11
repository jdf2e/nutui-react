import { BaseSwiper, BaseSwiperItem } from './base'

export interface WebSwiperProps extends BaseSwiper {}

export interface WebSwiperItemProps
  extends BaseSwiperItem<React.MouseEvent<HTMLDivElement, MouseEvent>> {}
