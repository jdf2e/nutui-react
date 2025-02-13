export const momentum = (distance: number, duration: number) => {
  const speed = Math.abs(distance / duration)
  return (speed / 0.003) * (distance < 0 ? -1 : 1)
}
