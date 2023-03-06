import React, {
  ForwardRefRenderFunction,
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
} from 'react'
import { createSelectorQuery } from '@tarojs/taro'
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
  const [styleList, setStyleList] = useState<any[]>([])
  const [baItemList, setBaItemList] = useState(barrageList)
  const barrageListSet = useRef<any>(barrageList)

  const barrageBody = useRef<HTMLDivElement>(null)
  const barrageContainer = useRef<HTMLDivElement>(null)
  const timeId = useRef(new Date().getTime())
  const timer = useRef(0)
  const index = useRef(0)

  const b = bem('barrage')
  const classes = classNames(className, b(''), {
    [`nut-barrage__body${timeId.current}`]: true,
  })

  useImperativeHandle(ref, () => ({
    add: (word: string) => {
      barrageListSet.current = [...barrageListSet.current, word]
      run()
    },
  }))

  useEffect(() => {
    barrageListSet.current = [...barrageList]
    run()
    return () => {
      clearInterval(timer.current)
    }
  }, [barrageList])

  const run = () => {
    setBaItemList(barrageListSet.current)
    barrageListSet.current.forEach((item: any, index: number) => {
      getNode(index)
    })
  }

  const getNode = (index: number) => {
    const query = createSelectorQuery()
    setTimeout(() => {
      let width = 100
      query
        .select('.nut-barrage__body' + timeId.current)
        .boundingClientRect((rec) => {
          width = rec.width || 300
        })

      query
        .select('.nut-barrage__item' + index)
        .boundingClientRect((recs) => {
          let height = recs.height
          let nodeTop = (index % rows) * (height + top) + 20 + 'px'
          styleInfo(index, nodeTop, width)
        })
        .exec()
    }, 500)
  }

  const styleInfo = (index: number, nodeTop: string, width: number) => {
    let timeIndex = index - rows > 0 ? index - rows : 0
    let list = styleList
    let time = list[timeIndex] ? Number(list[timeIndex]['--time']) : 0
    // // distance.value = '-' + (speeds / 1000) * 200 + '%';
    let obj = {
      top: nodeTop,
      '--time': `${frequency * index + time}`,
      animationDuration: `${speeds}ms`,
      animationIterationCount: `${loop ? 'infinite' : 1}`,
      animationDelay: `${frequency * index + time}ms`,
      '--move-distance': `-${width}px`,
    }
    list.push(obj)
    setStyleList([...list])
  }

  return (
    <div className={classes} ref={barrageBody} {...restProps}>
      <div ref={barrageContainer} className="bContainer">
        {baItemList.map((item: any, index: number) => {
          return (
            <div
              className={`barrage-item nut-barrage__item${index} move`}
              style={styleList[index]}
            >
              {item.length > 8 ? item.substr(0, 8) + '...' : item}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const Barrage =
  React.forwardRef<unknown, Partial<BarrageProps>>(InternalBarrage)

Barrage.defaultProps = defaultProps
Barrage.displayName = 'NutBarrage'
