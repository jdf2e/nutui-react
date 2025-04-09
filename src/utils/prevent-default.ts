export function preventDefault(
  event: React.TouchEvent<HTMLElement> | TouchEvent,
  isStopPropagation?: boolean
) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault()
  }

  if (isStopPropagation) {
    event.stopPropagation()
  }
}
