import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { ScrollView, View } from '@tarojs/components'
import classNames from 'classnames'
import { JoySmile } from '@nutui/icons-react-taro'
import Taro, { nextTick, createSelectorQuery } from '@tarojs/taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import TabPane from '@/packages/tabpane/index.taro'
import { usePropsValue } from '@/utils/use-props-value'
import { useForceUpdate } from '@/utils/use-force-update'
import raf from '@/utils/raf'
import useUuid from '@/utils/use-uuid'
import { useRtl } from '../configprovider/configprovider.taro'

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
  activeType: 'line' | 'smile' | 'simple' | 'card' | 'button' | 'divider'
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
  const rtl = useRtl()
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
    value: outerValue,
    defaultValue: outerDefaultValue,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const uuid = useUuid()

  const [value, setValue] = usePropsValue<string | number>({
    value: outerValue,
    defaultValue: outerDefaultValue,
    finalValue: 0,
    onChange,
  })

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
    `${classPrefix}-${direction}`,
    className
  )
  const classesTitle = classNames(`${classPrefix}-titles`, {
    [`${classPrefix}-titles-${activeType}`]: activeType,
    [`${classPrefix}-titles-scrollable`]: true,
    [`${classPrefix}-titles-${align}`]: align,
  })

  const tabsActiveStyle = {
    color: activeType === 'smile' ? activeColor : '',
    background: activeType === 'line' ? activeColor : '',
  }
  const getRect = (selector: string) => {
    return new Promise((resolve) => {
      createSelectorQuery()
        .select(selector)
        .boundingClientRect()
        .exec((rect = []) => {
          resolve(rect[0])
        })
    })
  }
  const getAllRect = (selector: string) => {
    return new Promise((resolve) => {
      createSelectorQuery()
        .selectAll(selector)
        .boundingClientRect()
        .exec((rect = []) => {
          resolve(rect[0])
        })
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
  const [scrollLeft, setScrollLeft] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)
  const scrollDirection = (
    to: number,
    direction: 'horizontal' | 'vertical'
  ) => {
    let count = 0
    const frames = 1

    function animate() {
      if (direction === 'horizontal') {
        setScrollLeft(to)
      } else {
        setScrollTop(to)
      }
      if (++count < frames) {
        raf(animate)
      }
    }

    animate()
  }
  const scrollIntoView = (index: number) => {
    raf(() => {
      Promise.all([
        getRect(`#nut-tabs-titles-${name || uuid} .nut-tabs-list`),
        getAllRect(`#nut-tabs-titles-${name || uuid} .nut-tabs-titles-item`),
      ]).then(([navRect, titleRects]: any) => {
        navRectRef.current = navRect
        titleRectRef.current = titleRects
        // @ts-ignore
        const titleRect: RectItem = titleRectRef.current[index]
        if (!titleRect) return

        let to = 0
        if (direction === 'vertical') {
          const top = titleRects
            .slice(0, index)
            .reduce((prev: number, curr: RectItem) => prev + curr.height, 0)
          to = top - (navRectRef.current.height - titleRect.height) / 2
        } else {
          const left = titleRects
            .slice(0, index)
            .reduce((prev: number, curr: RectItem) => prev + curr.width, 0)
          to = left - (navRectRef.current.width - titleRect.width) / 2
          to = rtl ? -to : to
        }
        nextTick(() => {
          scrollWithAnimation.current = true
        })

        scrollDirection(to, direction)
      })
    })
  }

  const getContentStyle = () => {
    let index = titles.current.findIndex(
      (t) => String(t.value) === String(value)
    )
    index = index < 0 ? 0 : index
    return {
      transform:
        direction === 'horizontal'
          ? `translate3d(${rtl ? '' : '-'}${index * 100}%, 0, 0)`
          : `translate3d( 0,-${index * 100}%, 0)`,
      transitionDuration: `${duration}ms`,
    }
  }

  useEffect(() => {
    let index = titles.current.findIndex(
      (t) => String(t.value) === String(value)
    )
    index = index < 0 ? 0 : index
    scrollIntoView(index)
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
        scrollLeft={scrollLeft}
        scrollTop={scrollTop}
        showScrollbar={false}
        scrollWithAnimation={
          rtl && Taro.getEnv() !== 'WEB' ? false : scrollWithAnimation.current
        }
        id={`nut-tabs-titles-${name || uuid}`}
        className={classesTitle}
        style={{ ...tabStyle }}
      >
        <View className="nut-tabs-list" ref={navRef}>
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
                    className={classNames(`${classPrefix}-titles-item`, {
                      [`nut-tabs-titles-item-active`]:
                        !item.disabled && String(item.value) === String(value),
                      [`nut-tabs-titles-item-disabled`]: item.disabled,
                      [`nut-tabs-titles-item-${align}`]: align,
                    })}
                    key={item.value}
                  >
                    {activeType === 'line' && (
                      <View
                        className={classNames(
                          `${classPrefix}-titles-item-line`,
                          {
                            [`${classPrefix}-titles-item-line-${direction}`]:
                              true,
                          }
                        )}
                        style={tabsActiveStyle}
                      />
                    )}
                    {activeType === 'smile' && (
                      <View
                        className={`${classPrefix}-titles-item-smile`}
                        style={tabsActiveStyle}
                      >
                        <JoySmile color={activeColor} />
                      </View>
                    )}
                    <View
                      className={classNames(
                        `${classPrefix}-ellipsis`,
                        `${classPrefix}-titles-item-text`
                      )}
                    >
                      {item.title}
                    </View>
                  </View>
                )
              })}
        </View>
      </ScrollView>
      <View className={`${classPrefix}-content-wrap`}>
        <View className={`${classPrefix}-content`} style={getContentStyle()}>
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

Tabs.displayName = 'NutTabs'
Tabs.TabPane = TabPane
