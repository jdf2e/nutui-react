import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'

describe('animation frame scheduling', () => {
  beforeEach(() => {
    vi.resetModules()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.useRealTimers()
  })

  function browser(api: Record<string, unknown> = {}) {
    const fakeWindow = { setTimeout, clearTimeout, ...api }
    vi.stubGlobal('document', { scripts: [] })
    vi.stubGlobal('window', fakeWindow)
    return fakeWindow
  }

  it('cancels the timer fallback when browser RAF APIs are unavailable', async () => {
    browser()
    const { default: request, cancelRaf } = await import('../raf')
    const callback = vi.fn()
    const id = request(callback)
    expect(() => cancelRaf(id)).not.toThrow()
    vi.advanceTimersByTime(20)
    expect(callback).not.toHaveBeenCalled()
  })

  it('executes the browser timer fallback', async () => {
    browser()
    const { default: request } = await import('../raf')
    const callback = vi.fn()
    request(callback)
    vi.advanceTimersByTime(20)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('uses timers when only the native request API is available', async () => {
    const nativeRequest = vi.fn()
    browser({ requestAnimationFrame: nativeRequest })
    const { default: request, cancelRaf } = await import('../raf')
    const callback = vi.fn()
    cancelRaf(request(callback))
    vi.advanceTimersByTime(20)
    expect(nativeRequest).not.toHaveBeenCalled()
    expect(callback).not.toHaveBeenCalled()
  })

  it.each([
    ['requestAnimationFrame', 'cancelAnimationFrame'],
    ['webkitRequestAnimationFrame', 'webkitCancelAnimationFrame'],
  ])(
    'pairs %s with %s and preserves their receiver',
    async (requestName, cancelName) => {
      const nativeRequest = vi.fn(() => 73)
      const nativeCancel = vi.fn()
      const fakeWindow = browser({
        [requestName]: nativeRequest,
        [cancelName]: nativeCancel,
      })
      const { default: request, cancelRaf } = await import('../raf')
      const callback = vi.fn()
      cancelRaf(request(callback))
      expect(nativeRequest).toHaveBeenCalledWith(callback)
      expect(nativeCancel).toHaveBeenCalledWith(73)
      expect(nativeRequest.mock.contexts[0]).toBe(fakeWindow)
      expect(nativeCancel.mock.contexts[0]).toBe(fakeWindow)
    }
  )

  it('cancels timers outside the browser', async () => {
    vi.stubGlobal('document', undefined)
    const { default: request, cancelRaf } = await import('../raf')
    const callback = vi.fn()
    cancelRaf(request(callback))
    vi.advanceTimersByTime(20)
    expect(callback).not.toHaveBeenCalled()
  })
})
