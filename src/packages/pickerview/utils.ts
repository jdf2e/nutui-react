export const momentum = (distance: number, duration: number) => {
  const speed = Math.abs(distance / duration)
  return (speed / 0.003) * (distance < 0 ? -1 : 1)
}

export const useStyles = (
  touchTime: number,
  touchDeg: string,
  scrollDistance: number,
  lineSpacing: React.MutableRefObject<number>,
  rotation: number
) => {
  const getTransitionStyle = (transformValue: string) => ({
    transition: `transform ${touchTime}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
    transform: transformValue,
  })

  const touchRollerStyle = () =>
    getTransitionStyle(`rotate3d(1, 0, 0, ${touchDeg})`)

  const touchTiledStyle = () =>
    getTransitionStyle(`translate3d(0, ${scrollDistance}px, 0)`)

  const rollerStyle = (index: number) => ({
    transform: `rotate3d(1, 0, 0, ${-rotation * (index + 1)}deg) translate3d(0px, 0px, ${Math.round(
      lineSpacing.current * 3.2
    )}px)`,
  })

  return { touchRollerStyle, touchTiledStyle, rollerStyle }
}
