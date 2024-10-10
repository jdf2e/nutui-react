export const inBrowser = typeof window !== 'undefined'

// 防频
function requestAniFrame() {
  if (inBrowser) {
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
    const _window = window as any
    ;(_window.cancelAnimationFrame || _window.webkitCancelAnimationFrame)(id)
  } else {
    clearTimeout(id)
  }
}

export default requestAniFrame()
