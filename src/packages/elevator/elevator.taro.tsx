import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState,
  createContext,
  useMemo,
} from 'react'
import Taro, { nextTick, createSelectorQuery } from '@tarojs/taro'
import { ScrollView, View, Text } from '@tarojs/components'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { harmony } from '@/utils/taro/platform'
import { useUuid } from '@/hooks/use-uuid'
import raf from '@/utils/raf'
import { ElevatorItem, ElevatorList, TaroElevatorProps } from '@/types'
import { usePropsValue } from '@/hooks'

export const elevatorContext = createContext({} as ElevatorItem)

const defaultProps = {
  ...ComponentDefaults,
  mode: 'horizontal',
  height: '200px',
  floorKey: 'title',
  list: [] as ElevatorList[],
  sticky: false,
  spaceHeight: 18,
  showKeys: true,
  defaultValue: undefined,
  value: undefined,
} as TaroElevatorProps

export const Elevator: FunctionComponent<
  Partial<TaroElevatorProps> & React.HTMLAttributes<HTMLDivElement>
> & { Context: typeof elevatorContext } = (props) => {
  const {
    value,
    defaultValue,
    mode,
    height,
    floorKey,
    list,
    sticky,
    spaceHeight,
    showKeys,
    className,
    style,
    onItemClick,
    onIndexClick,
    children,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const uuid = useUuid()
  const classPrefix = 'nut-elevator'

  const initData = {
    anchorIndex: 0,
    listHeight: [] as number[],
    scrollY: 0,
  }
  const touchState = useRef({
    y1: 0,
    y2: 0,
  })

  const [currentData, setCurrentData] = usePropsValue<ElevatorItem>({
    value,
    defaultValue: defaultValue || ({} as ElevatorItem),
  })
  const [codeIndex, setCodeIndex] = useState<number>(0)
  const [scrollStart, setScrollStart] = useState<boolean>(false)
  const state = useRef(initData)
  const scrolling = useRef(false)
  const [scrollTop, setScrollTop] = useState(0)
  const [scrollY, setScrollY] = useState(0)
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
    state.current.listHeight = [0]

    const query = createSelectorQuery()
    query
      .selectAll(`#${classPrefix}-${uuid} .${classPrefix}-list-item`)
      .boundingClientRect()
      .exec((rect = []) => {
        if (rect[0] && rect[0].length) {
          // rect[0] = rect[0].reverse()
          state.current.listHeight = rect[0].reduce(
            (acc: any[], item: { height: any }, index: number) => {
              // 当前项的高度等于前面所有项的高度之和
              const height = acc[index] + item.height
              acc.push(height)
              return acc
            },
            [0]
          )
        }
      })
  }

  const scrollTo = async (index: number) => {
    if (!index && index !== 0) {
      return
    }

    if (!state.current.listHeight.length) {
      await calculateHeight()
    }
    let cacheIndex = index
    if (index < 0) {
      cacheIndex = 0
    }

    if (index > state.current.listHeight.length - 2) {
      cacheIndex = Math.max(0, state.current.listHeight.length - 2)
    }

    setCodeIndex(cacheIndex)
    const scrollTop = state.current.listHeight[cacheIndex]
    setScrollTop(scrollTop)
    if (mode === 'vertical' && sticky) {
      setScrollY(Math.floor(scrollTop) > 0 ? 1 : 0)
    }
  }

  const touchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const firstTouch = e.touches[0]
    touchState.current.y2 = firstTouch.pageY
    const delta =
      (touchState.current.y2 - touchState.current.y1) / spaceHeight || 0
    const cacheIndex = state.current.anchorIndex + Math.round(delta)
    setCodeIndex(cacheIndex)
    scrollTo(cacheIndex)
  }

  const touchEnd = () => {
    resetScrollState()
  }

  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const index = Number(getData(e.target as HTMLElement))
    const firstTouch = e.touches[0]
    scrolling.current = true
    touchState.current.y1 = firstTouch.pageY
    state.current.anchorIndex = +index
    setScrollStart(true)
    setCodeIndex(index)
    scrollTo(index)
  }

  const handleClickItem = (key: string, item: ElevatorItem) => {
    onItemClick && onItemClick(key, item)
    setCurrentData(item)
  }

  const handleClickIndex = (key: string) => {
    onIndexClick && onIndexClick(key)
  }

  const listViewScroll = (e: any) => {
    raf(() => {
      const { listHeight } = state.current
      if (!listHeight.length) {
        calculateHeight()
      }
      const target = e.target as Element
      const { scrollTop } = target
      state.current.scrollY = Math.floor(scrollTop)
      Taro.getEnv() === 'WEB' && setScrollTop(scrollTop)
      if (mode === 'vertical' && sticky) {
        setScrollY(Math.floor(scrollTop) > 0 ? 1 : 0)
      }
      if (scrolling.current) return

      const index = listHeight.findIndex(
        (height, i) =>
          state.current.scrollY >= height &&
          state.current.scrollY < (listHeight[i + 1] || Infinity)
      )

      if (index !== -1 && index !== codeIndex) {
        setCodeIndex(index)
      }
    })
  }

  const getWrapStyle = useMemo(() => {
    const calcHeight = Number.isNaN(+height) ? height : `${height}px`

    return { height: harmony() ? Number(height) : calcHeight }
  }, [height])

  useEffect(() => {
    nextTick(() => {
      calculateHeight()
    })
  }, [])

  return (
    <div
      className={`${classPrefix} ${className} ${classPrefix}-${mode} `}
      id={`${classPrefix}-${uuid}`}
      style={style}
      {...rest}
    >
      <View className={`${classPrefix}-list`} style={getWrapStyle}>
        <ScrollView
          scrollTop={scrollTop}
          scrollY
          enhanced
          scrollWithAnimation={false}
          scrollAnchoring
          className={`${classPrefix}-list-inner`}
          onScroll={listViewScroll}
          onTouchStart={(e) => {
            scrolling.current = false
          }}
        >
          {list.map((item: any, idx: number) => {
            return (
              <View
                className={`${classPrefix}-list-item nut-elevator-item-${idx}`}
                key={idx}
              >
                <View className={`${classPrefix}-list-item-code`}>
                  {item[floorKey]}
                </View>
                <View className={`${classPrefix}-list-item-sublist`}>
                  {item.list.map((subitem: ElevatorItem) => {
                    return (
                      <View
                        className={classNames({
                          [`${classPrefix}-list-item-name`]: true,
                          [`${classPrefix}-list-item-name-highcolor`]:
                            currentData.id === subitem.id,
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
                      </View>
                    )
                  })}
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
      {showKeys ? (
        <>
          {list.length && scrollStart ? (
            <View
              className={classNames({
                [`${classPrefix}-code-current`]: true,
                [`${classPrefix}-code-current-current`]: true,
              })}
            >
              {list[codeIndex] && String(list[codeIndex][floorKey])}
            </View>
          ) : null}
          <View className={`${classPrefix}-bars`}>
            <View className={`${classPrefix}-bars-inner`}>
              {list.map((item: any, index: number) => {
                return (
                  <View
                    className={classNames({
                      [`${classPrefix}-bars-inner-item`]: true,
                      [`${classPrefix}-bars-inner-item-active`]:
                        item[floorKey] === list[codeIndex][floorKey],
                    })}
                    data-index={index}
                    key={index}
                    onClick={() => handleClickIndex(item[floorKey])}
                    onTouchStart={(event) => touchStart(event as any)}
                    onTouchMove={(event) => touchMove(event as any)}
                    onTouchEnd={touchEnd}
                    style={{ touchAction: 'pan-y' }}
                  >
                    {String(item[floorKey])}
                  </View>
                )
              })}
            </View>
          </View>
        </>
      ) : null}
      {mode === 'vertical' && sticky && scrollY > 0 ? (
        <View className={`${classPrefix}-list-fixed`}>
          <Text className={`${classPrefix}-list-fixed-title`}>
            {list[codeIndex] && String(list[codeIndex][floorKey])}
          </Text>
        </View>
      ) : null}
    </div>
  )
}

Elevator.displayName = 'NutElevator'
Elevator.Context = elevatorContext
