import { useCallback, useRef } from 'react'

/**
 * 节流Hook - 限制函数调用频率
 * @param fn 需要节流的函数
 * @param delay 节流延迟时间（毫秒）
 * @param options 配置选项
 * @returns 节流处理后的函数
 */
export function useThrottle<T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 16, // 默认约60fps
  options: { leading?: boolean; trailing?: boolean } = {}
): T {
  const { leading = true, trailing = true } = options
  const lastCallTime = useRef<number>(0)
  const timer = useRef<number | null>(null)
  const lastArgs = useRef<any[]>([])

  // 清除定时器
  const clearTimer = () => {
    if (timer.current !== null) {
      window.cancelAnimationFrame(timer.current)
      timer.current = null
    }
  }

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now()
      const elapsed = now - lastCallTime.current
      lastArgs.current = args

      // 重置上次调用时间
      function resetLastCallTime() {
        lastCallTime.current = now
      }

      // 如果是第一次调用或者已经超过延迟时间
      if (elapsed > delay) {
        clearTimer()

        if (leading) {
          resetLastCallTime()
          fn(...args)
        } else if (trailing) {
          timer.current = window.requestAnimationFrame(() => {
            resetLastCallTime()
            fn(...lastArgs.current)
            timer.current = null
          })
        }
      } else if (trailing && timer.current === null) {
        // 设置定时器，确保最后一次调用也能执行
        timer.current = window.requestAnimationFrame(() => {
          resetLastCallTime()
          fn(...lastArgs.current)
          timer.current = null
        })
      }
    },
    [fn, delay, leading, trailing]
  ) as T
}

/**
 * 防抖Hook - 延迟函数调用直到停止触发一段时间后
 * @param fn 需要防抖的函数
 * @param delay 防抖延迟时间（毫秒）
 * @param options 配置选项
 * @returns 防抖处理后的函数
 */
export function useDebounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 300,
  options: { leading?: boolean; trailing?: boolean } = {}
): T {
  const { leading = false, trailing = true } = options
  const timer = useRef<number | null>(null)
  const isLeadingCalled = useRef<boolean>(false)

  return useCallback(
    (...args: Parameters<T>) => {
      const invokeLeading = leading && !isLeadingCalled.current

      // 清除之前的定时器
      if (timer.current !== null) {
        window.clearTimeout(timer.current)
        timer.current = null
      }

      // 如果是第一次调用并且启用了leading选项
      if (invokeLeading) {
        isLeadingCalled.current = true
        fn(...args)
      }

      // 设置新的定时器
      if (trailing || !leading) {
        timer.current = window.setTimeout(() => {
          if (trailing) {
            fn(...args)
          }
          isLeadingCalled.current = false
          timer.current = null
        }, delay)
      }
    },
    [fn, delay, leading, trailing]
  ) as T
}
