import React, {
  FunctionComponent,
  useRef,
  useEffect,
  useState,
  createContext,
} from 'react'
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
  clickItem: (key: string, item: ElevatorData) => void
  clickIndex: (key: string) => void
}
const defaultProps = {
  height: '200px',
  acceptKey: 'title',
  indexList: [] as any[],
  isSticky: false,
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
> = (props) => {
  const {
    height,
    acceptKey,
    indexList,
    isSticky,
    spaceHeight,
    titleHeight,
    className,
    clickItem,
    clickIndex,
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

  const touchMove = (e: TouchEvent) => {
    const firstTouch = e.touches[0]
    touchState.current.y2 = firstTouch.pageY
    const delta =
      (touchState.current.y2 - touchState.current.y1) / spaceHeight || 0
    // delta 是一个浮点数, 需要四舍五入一下, 否则页面会找不到最终计算后的index
    const cacheIndex = state.current.anchorIndex + Math.ceil(delta)
    setCodeIndex(cacheIndex)
    scrollTo(cacheIndex)
    e.preventDefault()
  }

  const touchEnd = () => {
    resetScrollState()
  }

  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setScrollStart(true)
    const index = Number(getData(e.target as HTMLElement, 'index'))
    const firstTouch = e.touches[0]
    touchState.current.y1 = firstTouch.pageY
    state.current.anchorIndex = +index
    setCodeIndex((codeIndex) => codeIndex + index)
    scrollTo(index)
    const target = e.currentTarget as HTMLElement
    target.removeEventListener('touchend', touchEnd, false)
    target.addEventListener('touchend', touchEnd, false)
  }

  const handleClickItem = (key: string, item: ElevatorData) => {
    clickItem && clickItem(key, item)
    setCurrentData(item)
    setCurrentKey(key)
  }

  const handleClickIndex = (key: string) => {
    clickIndex && clickIndex(key)
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
        state.current.diff = height2 - state.current.scrollY
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

  const refIndexBar = useRef<HTMLDivElement>(null)

  // 之前的代码, 手指在index条上下移动的时候, 下面的列表也会跟随滚动, 需要阻止默认事件
  // 如果使用react的touchmove, 没有找到可以设置passive的选项, 无法阻止默认事件, 所以使用了原生的方法进行添加
  useEffect(() => {
    refIndexBar.current &&
      refIndexBar.current.addEventListener('touchmove', touchMove, {
        passive: false,
      })
    return () => {
      refIndexBar.current &&
        refIndexBar.current.removeEventListener('touchmove', touchMove)
    }
  }, [])
  return (
    <div className={`${b()} ${className}`} {...rest}>
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
        <div className={b('list__inner')} ref={listview}>
          {indexList.map((item: any, idx: number) => {
            return (
              <div className={b('list__item')} key={idx}>
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
        </div>
      </div>
      {indexList.length && scrollStart ? (
        <div className={b('code--current', { current: true })}>
          {indexList[codeIndex][acceptKey]}
        </div>
      ) : null}
      <div
        ref={refIndexBar}
        className={b('bars')}
        onTouchStart={(event) => touchStart(event)}
        // onTouchMove={(event) => touchMove(event)}
      >
        <div className={b('bars__inner')}>
          {indexList.map((item: any, index: number) => {
            return (
              <div
                className={b('bars__inner__item', {
                  active:
                    item[acceptKey] === indexList[currentIndex][acceptKey],
                })}
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
