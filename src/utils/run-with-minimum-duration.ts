import { sleep } from '@/utils/sleep'

/**
 * 执行任务并保证最短耗时：任务本身很快时，也至少等待 minimumDuration 毫秒。
 *
 * 用于「加载中」这类状态至少可见一段时间，避免一闪而过看不出状态变化。
 * 任务的异常不会被吞掉，会在最短耗时结束后重新抛出。
 */
export const runWithMinimumDuration = async (
  task: (() => Promise<void>) | undefined,
  minimumDuration: number
) => {
  const [taskResult] = await Promise.allSettled([
    Promise.resolve().then(() => task?.()),
    sleep(Math.max(0, minimumDuration)),
  ])
  if (taskResult.status === 'rejected') {
    throw taskResult.reason
  }
}
