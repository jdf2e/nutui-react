import React, { FC, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import SideBarItem from '@/packages/sidebaritem'
import raf from '@/utils/raf'
import { usePropsValue } from '@/utils/use-props-value'
import { useForceUpdate } from '@/utils/use-force-update'
import { mergeProps } from '@/utils/merge-props'

import { SideBarItemProps, SideBarProps } from './types'

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

  const [value, setValue] = usePropsValue<string | number>({
    value: props.value,
    defaultValue: props.defaultValue,
    finalValue: 0,
    onChange,
  })
  const titleItemsRef = useRef<HTMLDivElement[]>([])
  const navRef = useRef<HTMLDivElement>(null)
  const scroll = (nav: any, to: number) => {
    let count = 0
    const from = nav.scrollTop
    const frames = sidebarDuration === 0 ? 1 : Math.round(sidebarDuration / 16)
    function animate() {
      nav.scrollTop += (to - from) / frames
      if (++count < frames) {
        raf(animate)
      }
    }
    animate()
  }
  const scrollIntoView = (index: number) => {
    const nav = navRef.current
    const titleItem = titleItemsRef.current
    const titlesLength = titles.current.length
    const itemLength = titleItemsRef.current.length
    if (!nav || !titleItem || !titleItem[itemLength - titlesLength + index]) {
      return
    }
    const title = titleItem[itemLength - titlesLength + index]
    const runTop = title.offsetTop - nav.offsetTop + 10
    const to =
      runTop - (nav.offsetHeight - title.offsetHeight) / 2 + title.offsetHeight
    scroll(nav, to)
  }

  const getTitles = () => {
    const titles: SideBarItemProps[] = []
    React.Children.forEach(children, (child: any, idx) => {
      if (React.isValidElement(child)) {
        const props: any = child?.props
        if (props?.title || props?.value) {
          titles.push({
            title: props.title,
            value: props.value ?? idx,
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

  const getContentStyle = () => {
    let index = titles.current.findIndex((t) => t.value === value)
    index = index < 0 ? 0 : index
    return {
      transform: `translate3d( 0,-${index * 100}%, 0)`,
      transitionDuration: `${contentDuration}ms`,
    }
  }
  useEffect(() => {
    let index = titles.current.findIndex((t) => t.value === value)
    index = index < 0 ? 0 : index
    const rafId = requestAnimationFrame(() => {
      scrollIntoView(index)
    })
    return () => cancelAnimationFrame(rafId)
  }, [value])

  const tabChange = (item: SideBarItemProps) => {
    if (item.disabled) return
    onClick?.(item.value)
    setValue(item.value)
  }
  return (
    <div className={classes} {...rest}>
      <div className={classesTitle} ref={navRef}>
        {titles.current.map((item) => {
          return (
            <div
              onClick={() => {
                tabChange(item)
              }}
              className={classNames(`${classPrefix}-titles-item`, {
                [`${classPrefix}-titles-item-active`]:
                  !item.disabled && String(item.value) === String(value),
                [`${classPrefix}-titles-item-disabled`]: item.disabled,
              })}
              ref={(ref: HTMLDivElement) => titleItemsRef.current.push(ref)}
              key={item.value}
            >
              <div className={`${classPrefix}-titles-item-text`}>
                {item.title}
              </div>
            </div>
          )
        })}
      </div>
      <div className={`${classPrefix}-content-wrap`}>
        <div className={`${classPrefix}-content`} style={getContentStyle()}>
          {React.Children.map(children, (child, idx) => {
            if (!React.isValidElement(child)) {
              return null
            }
            let childProps = {
              ...child.props,
              active: value === child.props.value,
            }

            if (String(value) !== String(child.props.value || idx)) {
              childProps = {
                ...childProps,
              }
            }
            return React.cloneElement(child, childProps)
          })}
        </div>
      </div>
    </div>
  )
}

SideBar.displayName = 'NutSideBar'
SideBar.Item = SideBarItem
