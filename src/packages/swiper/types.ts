export type SwiperDirection = 'horizontal' | 'vertical'
export type SwiperRef = {
  to: (index: number) => void
  next: () => void
  prev: () => void
}
