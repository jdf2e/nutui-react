import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { ScrollView, View } from '@tarojs/components'
import classNames from 'classnames'
import { JoySmile } from '@nutui/icons-react-taro'
import Taro, { nextTick } from '@tarojs/taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import TabPane from '@/packages/tabpane/index.taro'
import { usePropsValue } from '@/utils/use-props-value'
import { useForceUpdate } from '@/utils/use-force-update'
import raf from '@/utils/raf'

export type TabsTitle = {
  title: string
  disabled: boolean
  active?: boolean
  value: string | number
}

export interface TabsProps extends BasicComponent {
  tabStyle: React.CSSProperties
  value: string | number
  defaultValue: string | number
  activeColor: string
  name: string
  direction: 'horizontal' | 'vertical'
  activeType: 'line' | 'smile'
  duration: number | string
  align: 'left' | 'right'
  title: () => JSX.Element[]
  onChange: (index: string | number) => void
  onClick: (index: string | number) => void
  autoHeight: boolean
  children?: React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  tabStyle: {},
  name: '',
  activeColor: '',
  direction: 'horizontal',
  activeType: 'line',
  duration: 300,
  autoHeight: false,
} as TabsProps

const classPrefix = 'nut-tabs'
export const Tabs: FunctionComponent<Partial<TabsProps>> & {
  TabPane: typeof TabPane
} = (props) => {
  const {
    activeColor,
    tabStyle,
    direction,
    activeType,
    duration,
    align,
    title,
    name,
    children,
    onClick,
    onChange,
    className,
    autoHeight,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [value, setValue] = usePropsValue<string | number>({
    value: props.value,
    defaultValue: props.defaultValue,
    finalValue: 0,
    onChange,
  })
  const [contentStyle, setContentStyle] = useState({})

  const titleItemsRef = useRef<HTMLDivElement[]>([])
  const navRef = useRef<HTMLDivElement>(null)

  const getTitles = () => {
    const titles: TabsTitle[] = []
    React.Children.forEach(children, (child: any, idx) => {
      if (React.isValidElement(child)) {
        const props: any = child?.props
        if (props?.title || props?.value) {
          titles.push({
            title: props.title,
            value: props.value || idx,
            disabled: props.disabled,
          })
        }
      }
    })
    return titles
  }

  const titles = useRef<TabsTitle[]>(getTitles())
  const forceUpdate = useForceUpdate()
  useEffect(() => {
    titles.current = getTitles()
    let current: string | number = ''
    titles.current.forEach((title) => {
      if (title.value === value) {
        current = value
      }
    })
    if (current !== '' && current !== value) {
      setValue(current)
    } else {
      forceUpdate()
    }
  }, [children])
  const classes = classNames(
    classPrefix,
    `${classPrefix}--${direction}`,
    className
  )
  const classesTitle = classNames(`${classPrefix}__titles`, {
    [`${classPrefix}__titles--${activeType}`]: activeType,
    [`${classPrefix}__titles--scrollable`]: true,
    [`${classPrefix}__titles--${align}`]: align,
  })

  const tabsActiveStyle = {
    color: activeType === 'smile' ? activeColor : '',
    background: activeType === 'line' ? activeColor : '',
  }
  const getRect = (selector: string) => {
    return new Promise((resolve) => {
      Taro.createSelectorQuery()
        .select(selector)
        .boundingClientRect()
        .exec((rect = []) => {
          resolve(rect[0])
        })
    })
  }
  const getAllRect = (selector: string) => {
    return new Promise((resolve) => {
      Taro.createSelectorQuery()
        .selectAll(selector)
        .boundingClientRect()
        .exec((rect = []) => resolve(rect[0]))
    })
  }
  type RectItem = {
    bottom: number
    dataset: { sid: string }
    height: number
    id: string
    left: number
    right: number
    top: number
    width: number
  }
  const scrollWithAnimation = useRef(false)
  const navRectRef = useRef<any>()
  const titleRectRef = useRef<RectItem[]>([])
  const canShowLabel = useRef(false)
  const scrollLeft = useRef(0)
  const scrollTop = useRef(0)
  const scrollDirection = (
    to: number,
    direction: 'horizontal' | 'vertical'
  ) => {
    let count = 0
    const from =
      direction === 'horizontal' ? scrollLeft.current : scrollTop.current
    const frames = 1

    function animate() {
      if (direction === 'horizontal') {
        scrollLeft.current += (to - from) / frames
      } else {
        scrollTop.current += (to - from) / frames
      }

      if (++count < frames) {
        raf(animate)
      }
    }

    animate()
  }
  const scrollIntoView = () => {
    console.log(name, props)
    if (!name) return

    raf(() => {
      Promise.all([
        getRect(`#nut-tabs__titles_${name}`),
        getAllRect(`#nut-tabs__titles_${name} .nut-tabs__titles-item`),
      ]).then(([navRect, titleRects]: any) => {
        navRectRef.current = navRect
        titleRectRef.current = titleRects

        if (navRectRef.current) {
          if (props.direction === 'vertical') {
            const titlesTotalHeight = titleRects.reduce(
              (prev: number, curr: RectItem) => prev + curr.height,
              0
            )
            if (titlesTotalHeight > navRectRef.current.height) {
              canShowLabel.current = true
            } else {
              canShowLabel.current = false
            }
          } else {
            const titlesTotalWidth = titleRects.reduce(
              (prev: number, curr: RectItem) => prev + curr.width,
              0
            )
            if (titlesTotalWidth > navRectRef.current.width) {
              canShowLabel.current = true
            } else {
              canShowLabel.current = false
            }
          }
        }

        // @ts-ignore
        const titleRect: RectItem = titleRectRef.current[value]

        let to = 0
        if (props.direction === 'vertical') {
          const DEFAULT_PADDING = 11
          const top = titleRects
            .slice(0, value)
            .reduce(
              (prev: number, curr: RectItem) => prev + curr.height + 0,
              DEFAULT_PADDING
            )
          to = top - (navRectRef.current.height - titleRect.height) / 2
        } else {
          const DEFAULT_PADDING = 31
          const left = titleRects
            .slice(0, value)
            .reduce(
              (prev: number, curr: RectItem) => prev + curr.width + 20,
              DEFAULT_PADDING
            )
          to = left - (navRectRef.current.width - titleRect.width) / 2
        }

        nextTick(() => {
          scrollWithAnimation.current = true
        })

        scrollDirection(to, direction)
      })
    })
  }

  const scrollIntoRef = useRef(0)
  useEffect(() => {
    const index = titles.current.findIndex((t) => t.value === value)
    setContentStyle({
      transform:
        direction === 'horizontal'
          ? `translate3d(-${index * 100}%, 0, 0)`
          : `translate3d( 0,-${index * 100}%, 0)`,
      transitionDuration: `${duration}ms`,
    })
    const scrollToIndex = index - 2
    scrollIntoRef.current = scrollToIndex < 0 ? 0 : scrollToIndex

    scrollIntoView()
  }, [value])

  const tabChange = (item: TabsTitle, index: number) => {
    onClick && onClick(item.value)
    if (item.disabled) {
      return
    }
    setValue(item.value)
  }

  return (
    <View className={classes} {...rest}>
      <ScrollView
        enableFlex
        scrollX={direction === 'horizontal'}
        scrollY={direction === 'vertical'}
        scrollLeft={scrollLeft.current}
        scrollTop={scrollTop.current}
        showScrollbar={false}
        scrollIntoViewAlignment="center"
        scrollWithAnimation={scrollWithAnimation.current}
        // scrollIntoView={`scrollIntoView${scrollIntoRef.current}`}
        id={`nut-tabs__titles_${name}`}
        className={classesTitle}
        style={{ ...tabStyle }}
        ref={navRef}
      >
        <View className="nut-tabs__list">
          {!!title && typeof title === 'function'
            ? title()
            : titles.current.map((item, index) => {
                return (
                  <View
                    ref={(ref: HTMLDivElement) =>
                      titleItemsRef.current.push(ref)
                    }
                    id={`scrollIntoView${index}`}
                    onClick={(e) => {
                      tabChange(item, index)
                    }}
                    className={classNames(`${classPrefix}__titles-item taro`, {
                      [`nut-tabs__titles-item--active`]:
                        !item.disabled && String(item.value) === String(value),
                      [`nut-tabs__titles-item--disabled`]: item.disabled,
                      [`nut-tabs__titles-item--${align}`]: align,
                    })}
                    key={item.value}
                  >
                    {activeType === 'line' && (
                      <View
                        className={`${classPrefix}__titles-item__line`}
                        style={tabsActiveStyle}
                      />
                    )}
                    {activeType === 'smile' && (
                      <View
                        className={`${classPrefix}__titles-item__smile`}
                        style={tabsActiveStyle}
                      >
                        <JoySmile color={activeColor} width={40} height={20} />
                      </View>
                    )}
                    <View
                      className={classNames(
                        {
                          ellipsis: true,
                        },
                        `${classPrefix}__titles-item__text`
                      )}
                    >
                      {item.title}
                    </View>
                  </View>
                )
              })}
        </View>
      </ScrollView>
      <View className={`${classPrefix}__content__wrap`}>
        <View className={`${classPrefix}__content`} style={contentStyle}>
          {React.Children.map(children, (child, idx) => {
            if (!React.isValidElement(child)) {
              return null
            }

            let childProps = {
              ...child.props,
              active: value === child.props.value,
            }

            if (
              String(value) !== String(child.props.value || idx) &&
              autoHeight
            ) {
              childProps = {
                ...childProps,
                autoHeightClassName: 'inactive',
              }
            }
            return React.cloneElement(child, childProps)
          })}
        </View>
      </View>
    </View>
  )
}

Tabs.defaultProps = defaultProps
Tabs.displayName = 'NutTabs'
Tabs.TabPane = TabPane
