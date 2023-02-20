import React, {
  FunctionComponent,
  useRef,
  useEffect,
  useState,
  createContext,
} from 'react'
import { nextTick, createSelectorQuery } from '@tarojs/taro'

import { ScrollView } from '@tarojs/components'
import bem from '@/utils/bem'

export const elevatorContext = createContext({} as ElevatorData)

export interface ElevatorProps {
  height: number | string
  acceptKey: string
  indexList: any[]
  isSticky: boolean
  spaceHeight: number
  titleHeight: number
  className: string
  style: React.CSSProperties
  children: React.ReactNode
  onClickItem: (key: string, item: ElevatorData) => void
  onClickIndex: (key: string) => void
}
const defaultProps = {
  height: '200px',
  acceptKey: 'title',
  indexList: [] as any[],
  isSticky: false,
  spaceHeight: 23,
  titleHeight: 35,
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
    acceptKey,
    indexList,
    isSticky,
    spaceHeight,
    titleHeight,
    className,
    onClickItem,
    onClickIndex,
    children,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('elevator')
  const listview = useRef<HTMLDivElement>(null)
  const initData = {
    anchorIndex: 0,
    listHeight: [] as number[],
    listGroup: [] as any[],
    scrollY: 0,
    diff: -1,
    fixedTop: 0,
  }
  const touchState = useRef({
    y1: 0,
    y2: 0,
  })
  const [scrollY, setScrollY] = useState(0)
  const [currentData, setCurrentData] = useState<ElevatorData>(
    {} as ElevatorData
  )
  const [currentKey, setCurrentKey] = useState('')
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [codeIndex, setCodeIndex] = useState<number>(0)
  const [scrollStart, setScrollStart] = useState<boolean>(false)
  const state = useRef(initData)
  const [scrollTop, setScrollTop] = useState(0)
  // 重置滚动参数
  const resetScrollState = () => {
    setScrollStart(false)
  }

  const clientHeight = () => {
    return listview.current ? listview.current.clientHeight : 0
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
        .selectAll(`.${className} .elevator__item__${i}`)
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
    setScrollTop(state.current.listHeight[cacheIndex])
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
    setScrollY(scrollTop)
    for (let i = 0; i < listHeight.length - 1; i++) {
      const height1 = listHeight[i]
      const height2 = listHeight[i + 1]
      if (state.current.scrollY >= height1 && state.current.scrollY < height2) {
        setCurrentIndex(i)
        state.current.diff = height2 - state.current.scrollY
        return
      }
    }

    setCurrentIndex(listHeight.length - 2)
  }

  useEffect(() => {
    if (listview.current) {
      nextTick(() => {
        setListGroup()
      })
    }
  }, [listview])

  useEffect(() => {
    const { listHeight, diff, scrollY } = state.current
    let fixedTop = diff > 0 && diff < titleHeight ? diff - titleHeight : 0
    if (scrollY + clientHeight() === listHeight[listHeight.length - 1]) {
      if (fixedTop !== 0) {
        fixedTop = 0
      }
    }
    if (state.current.fixedTop === fixedTop) return
    state.current.fixedTop = fixedTop
  }, [state.current.diff, titleHeight])
  return (
    <div className={`${b()} ${className} `} {...rest}>
      {isSticky && scrollY > 0 ? (
        <div className={b('list__fixed')}>
          <span className="fixed-title">
            {indexList[currentIndex][acceptKey]}
          </span>
        </div>
      ) : null}
      <div
        className={b('list')}
        style={{ height: Number.isNaN(+height) ? height : `${height}px` }}
      >
        <ScrollView
          scrollTop={scrollTop}
          scrollY
          className={b('list__inner')}
          ref={listview}
          onScroll={listViewScroll}
        >
          {indexList.map((item: any, idx: number) => {
            return (
              <div
                className={`${b('list__item')} elevator__item__${idx}`}
                key={idx}
              >
                <div className={b('list__item__code')}>{item[acceptKey]}</div>
                <>
                  {item.list.map((subitem: ElevatorData) => {
                    return (
                      <div
                        className={b('list__item__name', {
                          highcolor:
                            currentData.id === subitem.id &&
                            currentKey === item[acceptKey],
                        })}
                        key={subitem.id}
                        onClick={() =>
                          handleClickItem(item[acceptKey], subitem)
                        }
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
      {indexList.length && scrollStart ? (
        <div className={b('code--current', { current: true })}>
          {indexList[codeIndex][acceptKey]}
        </div>
      ) : null}
      <div className={b('bars')}>
        <div
          className={b('bars__inner')}
          onTouchStart={(event) => touchStart(event)}
          onTouchMove={(event) => touchMove(event)}
          onTouchEnd={touchEnd}
          style={{ touchAction: 'pan-y' }}
        >
          {indexList.map((item: any, index: number) => {
            return (
              <div
                className={`${b('bars__inner__item', {
                  active:
                    item[acceptKey] === indexList[currentIndex][acceptKey],
                })} `}
                data-index={index}
                key={index}
                onClick={() => handleClickIndex(item[acceptKey])}
              >
                {item[acceptKey]}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Elevator.defaultProps = defaultProps
Elevator.displayName = 'NutElevator'
Elevator.Context = elevatorContext
