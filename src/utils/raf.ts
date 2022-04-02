function requestAniFrame() {
  if (typeof window !== 'undefined') {
    return (
      window.requestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60)
      }
    )
  }
  return function (callback: Function) {
    setTimeout(callback, 1000 / 60)
  }
}

export default requestAniFrame()
