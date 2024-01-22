import React from 'react'

export default function useNodeBoundingRect(): [
  DOMRectReadOnly | null,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Function,
  () => void,
] {
  const [rect, setRect] = React.useState<DOMRectReadOnly | null>(null)

  const resizeObserver = new ResizeObserver((entries) => {
    setRect(entries[0].contentRect)
  })

  const ref = React.useCallback((node: Element | null) => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
  }, [])

  const cleanObserver = React.useCallback(() => {
    resizeObserver.disconnect()
  }, [])

  return [rect, ref, cleanObserver]
}
