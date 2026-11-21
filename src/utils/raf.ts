import { inBrowser } from '@/utils/get-rect'

function createFrameScheduler() {
  if (inBrowser) {
    const _window = window as any
    const request =
      _window.requestAnimationFrame || _window.webkitRequestAnimationFrame
    const cancel =
      _window.cancelAnimationFrame || _window.webkitCancelAnimationFrame

    // 原生调度和取消必须成对可用；否则统一使用定时器。
    if (typeof request === 'function' && typeof cancel === 'function') {
      return {
        request: (callback: any) => request.call(_window, callback),
        cancel: (id: number | ReturnType<typeof setTimeout>) =>
          cancel.call(_window, id),
      }
    }
    return {
      request: (callback: any) => _window.setTimeout(callback, 1000 / 60),
      cancel: (id: number | ReturnType<typeof setTimeout>) =>
        _window.clearTimeout(id),
    }
  }
  return {
    request: (callback: any) => setTimeout(callback, 1000 / 60),
    cancel: (id: number | ReturnType<typeof setTimeout>) => clearTimeout(id),
  }
}

const frameScheduler = createFrameScheduler()

export function cancelRaf(id: number | ReturnType<typeof setTimeout>) {
  frameScheduler.cancel(id)
}

export default frameScheduler.request
