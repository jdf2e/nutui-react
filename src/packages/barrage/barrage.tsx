import React, {
  ForwardRefRenderFunction,
  useEffect,
  useRef,
  useImperativeHandle,
} from 'react'
import classNames from 'classnames'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface BarrageProps extends BasicComponent {
  list: Array<string>
  interval: number
  loop: boolean
  duration: number
  rows: number
  gapY: number
}
const defaultProps = {
  ...ComponentDefaults,
  list: [],
  interval: 500,
  loop: true,
  duration: 3000,
  rows: 3,
  gapY: 10,
}

const classPrefix = `nut-barrage`
const InternalBarrage: ForwardRefRenderFunction<
  unknown,
  Partial<BarrageProps>
> = (props, ref) => {
  const {
    className,
    interval,
    loop,
    list,
    duration,
    rows,
    gapY,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const barrageBody = useRef<HTMLDivElement>(null)
  const barrageContainer = useRef<HTMLDivElement>(null)
  const barrageCWidth = useRef(0)
  const timer = useRef(0)
  const index = useRef(0)
  const times = useRef<number[]>([])
  const historyIndex = useRef(-1)

  const classes = classNames(classPrefix, className)

  useImperativeHandle(ref, () => ({
    add: (word: string) => {
      const _index = index.current % list.length
      if (!loop && index.current === list.length) {
        list.splice(list.length, 0, word)
      } else {
        list.splice(_index, 0, word)
      }
    },
  }))

  useEffect(() => {
    if (barrageBody.current) {
      barrageCWidth.current = barrageBody.current.offsetWidth
    }
    setTimeout(() => {
      barrageBody.current?.style.setProperty(
        '--move-distance',
        `-${barrageCWidth.current}px`
      )
      index.current = 0
      run()
    }, 300)
    return () => {
      clearInterval(timer.current)
    }
  }, [list])

  const run = () => {
    clearInterval(timer.current)
    let intervalCache = interval
    const _index = (loop ? index.current % list.length : index.current) % rows
    const result = times.current[_index] - rows * interval
    if (result > 0) {
      intervalCache += result
    }
    timer.current = window.setTimeout(() => {
      play()
    }, intervalCache)
  }

  const play = () => {
    if (!loop && index.current >= list.length) {
      return
    }

    const _index = loop ? index.current % list.length : index.current
    const el = document.createElement(`div`)

    let currentIndex = _index % rows
    if (
      currentIndex <= historyIndex.current ||
      (historyIndex.current === 3 && currentIndex !== 0) ||
      Math.abs(currentIndex - historyIndex.current) !== 1
    ) {
      currentIndex =
        historyIndex.current + 1 >= rows ? 0 : historyIndex.current + 1
    }
    historyIndex.current = currentIndex

    el.innerHTML = list[_index] as string
    el.classList.add('barrage-item')
    ;(barrageContainer.current as HTMLDivElement).appendChild(el)

    const width = el.offsetWidth
    const height = el.offsetHeight
    el.classList.add('move')
    const elScrollDuration = Math.ceil(
      (width / barrageCWidth.current) * duration
    )
    times.current[currentIndex] = elScrollDuration
    el.style.animationDuration = `${duration + elScrollDuration}ms`
    el.style.top = `${currentIndex * (height + gapY) + 20}px`
    el.style.width = `${width}px`

    el.addEventListener('animationend', () => {
      ;(barrageContainer.current as HTMLDivElement).removeChild(el)
    })
    index.current++
    run()
  }

  return (
    <div className={classes} ref={barrageBody} {...restProps}>
      <div ref={barrageContainer} className="bContainer" />
    </div>
  )
}

export const Barrage = React.forwardRef<unknown, Partial<BarrageProps>>(
  InternalBarrage
)

Barrage.displayName = 'NutBarrage'
