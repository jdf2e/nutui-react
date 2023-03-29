import React, {
  FunctionComponent,
  useRef,
  useEffect,
  useState,
  createContext,
} from 'react'
import { useGesture } from '@use-gesture/react'
import { animated } from '@react-spring/web'
import bem from '@/utils/bem'

export const elevatorContext = createContext({} as ElevatorData)

export interface ElevatorProps {
  height: number | string
  floorKey: string
  list: any[]
  sticky: boolean
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
  floorKey: 'title',
  list: [] as any[],
  sticky: false,
  spaceHeight: 23,
  titleHeight: 35,
  className: '',
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
    listGroup: [] as Element[],
    scrollY: 0,
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
  // 重置滚动参数
  const resetScrollState = () => {
    setScrollStart(false)
  }

  const clientHeight = () => {
    return listview.current ? listview.current.clientHeight : 0
  }

  const getData = (el: HTMLElement, name: string): string | void => {
    const prefix = 'data-'
    return el.getAttribute(prefix + name) as string
  }

  const calculateHeight = () => {
    let height = 0

    state.current.listHeight.push(height)
    for (let i = 0; i < state.current.listGroup.length; i++) {
      const item = state.current.listGroup[i]
      height += item.clientHeight
      state.current.listHeight.push(height)
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
    if (listview.current) {
      listview.current.scrollTo(0, state.current.listHeight[cacheIndex])
    }
  }

  const bind = useGesture({
    onDragStart: ({ target, offset }) => {
      setScrollStart(true)
      const index = Number(getData(target as HTMLElement, 'index'))
      touchState.current.y1 = offset[1]
      state.current.anchorIndex = +index
      setCodeIndex((codeIndex) => codeIndex + index)
      scrollTo(index)
    },
    onDragEnd: ({ offset }) => {
      touchState.current.y2 = offset[1]
      const delta =
        (touchState.current.y2 - touchState.current.y1) / spaceHeight || 0
      // delta 是一个浮点数, 需要四舍五入一下, 否则页面会找不到最终计算后的index
      const cacheIndex = state.current.anchorIndex + Math.ceil(delta)
      setCodeIndex(cacheIndex)
      scrollTo(cacheIndex)
      resetScrollState()
    },
  })

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
      const els = listview.current.querySelectorAll('.nut-elevator__list__item')

      els.forEach((el: Element) => {
        if (el != null && !state.current.listGroup.includes(el)) {
          state.current.listGroup.push(el)
        }
      })
    }
  }

  const listViewScroll = (e: Event) => {
    const { listHeight } = state.current
    if (!listHeight.length) {
      calculateHeight()
    }
    const target = e.target as Element
    const { scrollTop } = target
    state.current.scrollY = scrollTop
    setScrollY(scrollTop)
    for (let i = 0; i < listHeight.length - 1; i++) {
      const height1 = listHeight[i]
      const height2 = listHeight[i + 1]
      if (state.current.scrollY >= height1 && state.current.scrollY < height2) {
        setCurrentIndex(i)
        return
      }
    }

    setCurrentIndex(listHeight.length - 2)
  }

  useEffect(() => {
    if (listview.current) {
      setListGroup()
      listview.current.addEventListener('scroll', listViewScroll)
    }
  }, [listview])

  return (
    <div className={`${b()} ${className}`} {...rest}>
      {sticky && scrollY > 0 ? (
        <div className={b('list__fixed')}>
          <span className="fixed-title">{list[currentIndex][floorKey]}</span>
        </div>
      ) : null}
      <div
        className={b('list')}
        style={{ height: Number.isNaN(+height) ? height : `${height}px` }}
      >
        <div className={b('list__inner')} ref={listview}>
          {list.map((item: any, idx: number) => {
            return (
              <div className={b('list__item')} key={idx}>
                <div className={b('list__item__code')}>{item[floorKey]}</div>
                <>
                  {item.list.map((subitem: ElevatorData) => {
                    return (
                      <div
                        className={b('list__item__name', {
                          highcolor:
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
        </div>
      </div>
      {list.length && scrollStart ? (
        <div className={b('code--current', { current: true })}>
          {list[codeIndex][floorKey]}
        </div>
      ) : null}
      <div className={b('bars')}>
        <animated.div
          className={b('bars__inner')}
          {...bind()}
          style={{ touchAction: 'pan-y' }}
        >
          {list.map((item: any, index: number) => {
            return (
              <div
                className={b('bars__inner__item', {
                  active: item[floorKey] === list[currentIndex][floorKey],
                })}
                data-index={index}
                key={index}
                onClick={() => handleClickIndex(item[floorKey])}
              >
                {item[floorKey]}
              </div>
            )
          })}
        </animated.div>
      </div>
    </div>
  )
}

Elevator.defaultProps = defaultProps
Elevator.displayName = 'NutElevator'
Elevator.Context = elevatorContext
