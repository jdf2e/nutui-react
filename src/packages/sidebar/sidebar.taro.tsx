import React, { FC, useEffect, useRef, useState } from 'react'
import { ScrollView, View } from '@tarojs/components'
import classNames from 'classnames'
import Taro, { nextTick, createSelectorQuery } from '@tarojs/taro'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'
import { useForceUpdate } from '@/utils/use-force-update'
import raf from '@/utils/raf'
import useUuid from '@/utils/use-uuid'
import { SideBarItemProps, SideBarProps } from './types'
import SideBarItem from '@/packages/sidebaritem/index.taro'
import { mergeProps } from '@/utils/merge-props'

const defaultProps = {
  ...ComponentDefaults,
  contentDuration: 0,
  sidebarDuration: 0,
} as SideBarProps

const classPrefix = 'nut-sidebar'
export const SideBar: FC<Partial<SideBarProps>> & {
  Item: typeof SideBarItem
} = (props) => {
  const {
    contentDuration,
    sidebarDuration,
    children,
    onClick,
    onChange,
    className,
    ...rest
  } = mergeProps(defaultProps, props)
  const uuid = useUuid()
  const [value, setValue] = usePropsValue<string | number>({
    value: props.value,
    defaultValue: props.defaultValue,
    finalValue: 0,
    onChange,
  })

  const titleItemsRef = useRef<HTMLDivElement[]>([])
  const navRef = useRef<HTMLDivElement>(null)

  const getTitles = () => {
    const titles: SideBarItemProps[] = []
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

  const titles = useRef<SideBarItemProps[]>(getTitles())
  const forceUpdate = useForceUpdate()
  useEffect(() => {
    titles.current = getTitles()
    let current: string | number = ''
    titles.current.forEach((title) => {
      if (title.value === value) {
        current = value
      }
    })
    forceUpdate()
  }, [children])

  const classes = classNames(classPrefix, className)
  const classesTitle = classNames(
    `${classPrefix}-titles`,
    `${classPrefix}-titles-scrollable`
  )
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
  const [scrollTop, setScrollTop] = useState(0)
  const scrollDirection = (to: number) => {
    let count = 0
    const frames = sidebarDuration === 0 ? 1 : Math.round(sidebarDuration / 16)
    function animate() {
      setScrollTop(to)
      if (++count < frames) {
        raf(animate)
      }
    }
    animate()
  }
  const scrollIntoView = (index: number) => {
    raf(() => {
      Promise.all([
        getRect(`#${classPrefix}-titles-${uuid} .${classPrefix}-list`),
        getAllRect(
          `#${classPrefix}-titles-${uuid} .${classPrefix}-titles-item`
        ),
      ]).then(([navRect, titleRects]: any) => {
        navRectRef.current = navRect
        titleRectRef.current = titleRects
        const titleRect: RectItem = titleRectRef.current[index]
        if (!titleRect) return
        nextTick(() => {
          scrollWithAnimation.current = true
        })
        scrollDirection(titleRect.height * (index - 1))
      })
    })
  }

  const getContentStyle = () => {
    let index = titles.current.findIndex(
      (t) => String(t.value) === String(value)
    )
    index = index < 0 ? 0 : index
    return {
      transform: `translate3d( 0,-${index * 100}%, 0)`,
      transitionDuration: `${contentDuration}ms`,
    }
  }

  useEffect(() => {
    let index = titles.current.findIndex(
      (t) => String(t.value) === String(value)
    )
    index = index < 0 ? 0 : index
    scrollIntoView(index)
  }, [value])

  const tabChange = (item: SideBarItemProps, index: number) => {
    if (item.disabled) return
    onClick?.(item.value)
    setValue(item.value)
  }

  return (
    <View className={classes} {...rest}>
      <ScrollView
        enableFlex
        scrollX={false}
        scrollY
        scrollTop={scrollTop}
        showScrollbar={false}
        scrollWithAnimation={
          Taro.getEnv() !== 'WEB' ? false : scrollWithAnimation.current
        }
        id={`${classPrefix}-titles-${uuid}`}
        className={classesTitle}
      >
        <View className={`${classPrefix}-list`} ref={navRef}>
          {titles.current.map((item, index) => {
            return (
              <View
                ref={(ref: HTMLDivElement) => titleItemsRef.current.push(ref)}
                id={`scrollIntoView${index}`}
                onClick={(e) => {
                  tabChange(item, index)
                }}
                className={classNames(`${classPrefix}-titles-item`, {
                  [`${classPrefix}-titles-item-active`]:
                    !item.disabled && String(item.value) === String(value),
                  [`${classPrefix}-titles-item-disabled`]: item.disabled,
                })}
                key={item.value}
              >
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
            if (String(value) !== String(child.props.value ?? idx)) {
              childProps = {
                ...childProps,
              }
            }
            return React.cloneElement(child, childProps)
          })}
        </View>
      </View>
    </View>
  )
}

SideBar.displayName = 'NutSideBar'
SideBar.Item = SideBarItem
