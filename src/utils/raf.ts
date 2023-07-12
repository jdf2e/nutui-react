export const inBrowser = typeof window !== 'undefined'

function requestAniFrame() {
  if (typeof window !== 'undefined') {
    const _window = window as any
    return (
      _window.requestAnimationFrame ||
      _window.webkitRequestAnimationFrame ||
      function (callback: any) {
        _window.setTimeout(callback, 1000 / 60)
      }
    )
  }
  return (callback: any) => {
    setTimeout(callback, 1000 / 60)
  }
}

export function cancelRaf(id: number) {
  if (inBrowser) {
    cancelAnimationFrame(id)
  } else {
    clearTimeout(id)
  }
}

export default requestAniFrame()
