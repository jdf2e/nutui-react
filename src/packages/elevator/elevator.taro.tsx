import React, {
  FunctionComponent,
  useRef,
  useEffect,
  useState,
  createContext,
} from 'react'
import Taro, { nextTick, createSelectorQuery } from '@tarojs/taro'

import { ScrollView } from '@tarojs/components'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export const elevatorContext = createContext({} as ElevatorData)

export interface ElevatorProps extends BasicComponent {
  height: number | string
  floorKey: string
  list: any[]
  sticky: boolean
  spaceHeight: number
  titleHeight: number
  showKeys: boolean
  children: React.ReactNode
  onClickItem: (key: string, item: ElevatorData) => void
  onClickIndex: (key: string) => void
}
const defaultProps = {
  ...ComponentDefaults,
  height: '200px',
  floorKey: 'title',
  list: [] as any[],
  sticky: false,
  spaceHeight: 23,
  titleHeight: 35,
  showKeys: true,
  className: 'weapp-elevator',
} as ElevatorProps
interface ElevatorData {
  name: string
  id: number | string
  [key: string]: string | number
}
export const Elevator: FunctionComponent<
  Partial<ElevatorProps> & React.HTMLAttributes<HTMLDivElement>
> & { Context: typeof elevatorContext } = (props) => {
  const {
    height,
    floorKey,
    list,
    sticky,
    spaceHeight,
    titleHeight,
    showKeys,
    className,
    style,
    onClickItem,
    onClickIndex,
    children,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-elevator'
  const listview = useRef<HTMLDivElement>(null)
  const initData = {
    anchorIndex: 0,
    listHeight: [] as number[],
    listGroup: [] as any[],
    scrollY: 0,
  }
  const touchState = useRef({
    y1: 0,
    y2: 0,
  })

  const [currentData, setCurrentData] = useState<ElevatorData>(
    {} as ElevatorData
  )
  const [currentKey, setCurrentKey] = useState('')
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [codeIndex, setCodeIndex] = useState<number>(0)
  const [scrollStart, setScrollStart] = useState<boolean>(false)
  const state = useRef(initData)
  const [scrollTop, setScrollTop] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  // 重置滚动参数
  const resetScrollState = () => {
    setScrollStart(false)
  }

  const getData = (el: HTMLElement): string | void => {
    if (!el.dataset.index) {
      return '0'
    }
    return el.dataset.index as string
  }

  const calculateHeight = () => {
    let height = 0

    state.current.listHeight.push(height)
    for (let i = 0; i < state.current.listGroup.length; i++) {
      const query = createSelectorQuery()
      query
        .selectAll(`.${className} .nut-elevator__item__${i}`)
        .boundingClientRect()
      // eslint-disable-next-line no-loop-func
      query.exec((res: any) => {
        if (res[0][0]) height += res[0][0].height
        // console.log(res, res[0][0].height, height, 'res')
        state.current.listHeight.push(height)
      })
    }
  }

  const scrollTo = (index: number) => {
    if (!index && index !== 0) {
      return
    }

    if (!state.current.listHeight.length) {
      calculateHeight()
    }
    let cacheIndex = index
    if (index < 0) {
      cacheIndex = 0
    }

    if (index > state.current.listHeight.length - 2) {
      cacheIndex = state.current.listHeight.length - 2
    }

    setCodeIndex(cacheIndex)
    const scrollTop = state.current.listHeight[cacheIndex]
    setScrollTop(scrollTop)
    if (sticky && scrollY !== scrollTop) {
      setScrollY(Math.floor(scrollTop) > 0 ? 1 : 0)
    }
  }

  const touchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const firstTouch = e.touches[0]
    touchState.current.y2 = firstTouch.pageY
    const delta =
      (touchState.current.y2 - touchState.current.y1) / spaceHeight || 0
    const cacheIndex = state.current.anchorIndex + Math.floor(delta)

    setCodeIndex(cacheIndex)
    scrollTo(cacheIndex)
  }

  const touchEnd = () => {
    resetScrollState()
  }

  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setScrollStart(true)
    const index = Number(getData(e.target as HTMLElement))

    const firstTouch = e.touches[0]
    touchState.current.y1 = firstTouch.pageY
    state.current.anchorIndex = +index
    setCodeIndex((codeIndex) => {
      return codeIndex + index
    })

    scrollTo(index)
  }

  const handleClickItem = (key: string, item: ElevatorData) => {
    onClickItem && onClickItem(key, item)
    setCurrentData(item)
    setCurrentKey(key)
  }

  const handleClickIndex = (key: string) => {
    onClickIndex && onClickIndex(key)
  }

  const setListGroup = () => {
    if (listview.current) {
      createSelectorQuery()
        .selectAll(`.${className} .nut-elevator__list__item`)
        .node((el) => {
          state.current.listGroup = [...Object.keys(el)]
          calculateHeight()
        })
        .exec()
    }
  }

  const listViewScroll = (e: any) => {
    const { listHeight } = state.current
    if (!listHeight.length) {
      calculateHeight()
    }
    const target = e.target as Element
    const { scrollTop } = target
    state.current.scrollY = Math.floor(scrollTop)
    Taro.getEnv() === 'WEB' && setScrollTop(scrollTop)
    if (sticky && scrollTop !== scrollY) {
      setScrollY(Math.floor(scrollTop) > 0 ? 1 : 0)
    }
    for (let i = 0; i < listHeight.length - 1; i++) {
      const height1 = listHeight[i]
      const height2 = listHeight[i + 1]
      if (state.current.scrollY >= height1 && state.current.scrollY < height2) {
        setCurrentIndex(i)
        return
      }
    }
  }

  useEffect(() => {
    if (listview.current) {
      nextTick(() => {
        setListGroup()
      })
    }
  }, [listview])

  return (
    <div className={`${classPrefix} ${className}`} style={style} {...rest}>
      <div
        className={`${classPrefix}__list`}
        style={{ height: Number.isNaN(+height) ? height : `${height}px` }}
      >
        <ScrollView
          scrollTop={scrollTop}
          scrollY
          scrollWithAnimation
          scrollAnchoring
          className={`${classPrefix}__list__inner`}
          type="list"
          ref={listview}
          onScroll={listViewScroll}
        >
          {list.map((item: any, idx: number) => {
            return (
              <div
                className={`${classPrefix}__list__item nut-elevator__item__${idx}`}
                key={idx}
              >
                <div className={`${classPrefix}__list__item__code`}>
                  {item[floorKey]}
                </div>
                <>
                  {item.list.map((subitem: ElevatorData) => {
                    return (
                      <div
                        className={classNames({
                          [`${classPrefix}__list__item__name`]: true,
                          [`${classPrefix}__list__item__name--highcolor`]:
                            currentData.id === subitem.id &&
                            currentKey === item[floorKey],
                        })}
                        key={subitem.id}
                        onClick={() => handleClickItem(item[floorKey], subitem)}
                      >
                        {children ? (
                          <>
                            <elevatorContext.Provider value={subitem}>
                              {children}
                            </elevatorContext.Provider>
                          </>
                        ) : (
                          subitem.name
                        )}
                      </div>
                    )
                  })}
                </>
              </div>
            )
          })}
        </ScrollView>
      </div>
      {showKeys ? (
        <>
          {list.length && scrollStart ? (
            <div
              className={classNames({
                [`${classPrefix}__code--current`]: true,
                [`${classPrefix}__code--current--current`]: true,
              })}
            >
              {list[codeIndex][floorKey]}
            </div>
          ) : null}
          <div className={`${classPrefix}__bars`}>
            <div
              className={`${classPrefix}__bars__inner`}
              onTouchStart={(event) => touchStart(event)}
              onTouchMove={(event) => touchMove(event)}
              onTouchEnd={touchEnd}
              style={{ touchAction: 'pan-y' }}
            >
              {list.map((item: any, index: number) => {
                return (
                  <div
                    className={classNames({
                      [`${classPrefix}__bars__inner__item`]: true,
                      [`${classPrefix}__bars__inner__item--active`]:
                        item[floorKey] === list[currentIndex][floorKey],
                    })}
                    data-index={index}
                    key={index}
                    onClick={() => handleClickIndex(item[floorKey])}
                  >
                    {item[floorKey]}
                  </div>
                )
              })}
            </div>
          </div>
        </>
      ) : null}
      {sticky && scrollY > 0 ? (
        <div className={`${classPrefix}__list__fixed`}>
          <span className={`${classPrefix}__list__fixed__title`}>
            {list[currentIndex][floorKey]}
          </span>
        </div>
      ) : null}
    </div>
  )
}

Elevator.defaultProps = defaultProps
Elevator.displayName = 'NutElevator'
Elevator.Context = elevatorContext
