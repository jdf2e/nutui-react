import React, {
  ForwardRefRenderFunction,
  useEffect,
  useRef,
  useImperativeHandle,
} from 'react'
import classNames from 'classnames'
import bem from '@/utils/bem'

export interface BarrageProps {
  className: string
  style: React.CSSProperties
  barrageList: Array<string>
  frequency: number
  loop: boolean
  speeds: number
  rows: number
  top: number
}
const defaultProps = {
  barrageList: [],
  frequency: 500,
  loop: true,
  speeds: 3000,
  rows: 3,
  top: 10,
}
const InternalBarrage: ForwardRefRenderFunction<
  unknown,
  Partial<BarrageProps>
> = (props, ref) => {
  const {
    className,
    frequency,
    loop,
    barrageList,
    speeds,
    rows,
    top,
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

  const b = bem('barrage')
  const classes = classNames(className, b(''))

  useImperativeHandle(ref, () => ({
    add: (word: string) => {
      const _index = index.current % barrageList.length
      if (!loop && index.current === barrageList.length) {
        barrageList.splice(barrageList.length, 0, word)
      } else {
        barrageList.splice(_index, 0, word)
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
  }, [barrageList])

  const run = () => {
    clearInterval(timer.current)
    timer.current = window.setTimeout(() => {
      play()
    }, frequency)
  }

  const play = () => {
    if (!loop && index.current >= barrageList.length) {
      return
    }
    const _index = loop ? index.current % barrageList.length : index.current
    const el = document.createElement(`div`)

    el.innerHTML = barrageList[_index] as string
    el.classList.add('barrage-item')
    ;(barrageContainer.current as HTMLDivElement).appendChild(el)

    const width = el.offsetWidth
    const height = el.offsetHeight
    el.classList.add('move')
    el.style.animationDuration = `${speeds}ms`
    el.style.top = `${(_index % rows) * (height + top) + 20}px`
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

export const Barrage =
  React.forwardRef<unknown, Partial<BarrageProps>>(InternalBarrage)

Barrage.defaultProps = defaultProps
Barrage.displayName = 'NutBarrage'
