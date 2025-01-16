import React, { FunctionComponent, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { JoySmile } from '@nutui/icons-react'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import TabPane from '@/packages/tabpane'
import raf from '@/utils/raf'
import { usePropsValue } from '@/utils/use-props-value'
import { useForceUpdate } from '@/utils/use-force-update'
import { useRtl } from '../configprovider'

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
    children,
    onClick,
    onChange,
    className,
    autoHeight,
    value: outerValue,
    defaultValue: outerDefaultValue,
    ...rest
  } = { ...defaultProps, ...props }

  const [value, setValue] = usePropsValue<string | number>({
    value: outerValue,
    defaultValue: outerDefaultValue,
    onChange,
  })

  const titleItemsRef = useRef<HTMLDivElement[]>([])
  const navRef = useRef<HTMLDivElement>(null)

  const scrollDirection = (
    nav: HTMLDivElement,
    to: number,
    duration: number
  ) => {
    const from = direction === 'horizontal' ? nav.scrollLeft : nav.scrollTop
    const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16)
    let count = 0

    const animate = () => {
      if (direction === 'horizontal') nav.scrollLeft += (to - from) / frames
      else nav.scrollTop += (to - from) / frames
      if (++count < frames) raf(animate)
    }
    animate()
  }

  const scrollIntoView = (index: number, immediate?: boolean) => {
    const nav = navRef.current
    const titleItem = titleItemsRef.current
    const titlesLength = titles.current.length
    const itemLength = titleItem.length
    if (!nav || !titleItem || !titleItem[itemLength - titlesLength + index]) {
      return
    }
    const title = titleItem[itemLength - titlesLength + index]
    let to = 0
    if (direction === 'vertical') {
      const runTop = title.offsetTop - nav.offsetTop + 10
      to = runTop - (nav.offsetHeight - title.offsetHeight) / 2
    } else {
      to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2
    }
    scrollDirection(nav, to, immediate ? 0 : 0.3)
  }

  const getTitles = () => {
    const titles: TabsTitle[] = []
    React.Children.forEach(children, (child, idx) => {
      if (React.isValidElement(child)) {
        const { props } = child
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
    [`${classPrefix}-titles-${align}`]: align,
  })

  const getContentStyle = () => {
    let index = titles.current.findIndex((t) => t.value === value)
    index = index < 0 ? 0 : index
    return {
      transform:
        direction === 'horizontal'
          ? `translate3d(${rtl ? '' : '-'}${index * 100}%, 0, 0)`
          : `translate3d( 0, -${index * 100}%, 0)`,
      transitionDuration: `${duration}ms`,
    }
  }
  useEffect(() => {
    let index = titles.current.findIndex((t) => t.value === value)
    index = index < 0 ? 0 : index
    setTimeout(() => {
      scrollIntoView(index)
    })
  }, [value])

  const tabChange = (item: TabsTitle) => {
    onClick && onClick(item.value)
    if (!item.disabled) {
      setValue(item.value)
    }
  }
  return (
    <div className={classes} {...rest}>
      <div className={classesTitle} style={tabStyle} ref={navRef}>
        {!!title && typeof title === 'function'
          ? title()
          : titles.current.map((item) => {
              return (
                <div
                  key={item.value}
                  ref={(ref: HTMLDivElement) => titleItemsRef.current.push(ref)}
                  onClick={() => tabChange(item)}
                  className={classNames(`${classPrefix}-titles-item`, {
                    [`nut-tabs-titles-item-active`]:
                      !item.disabled && String(item.value) === String(value),
                    [`nut-tabs-titles-item-disabled`]: item.disabled,
                    [`nut-tabs-titles-item-${align}`]: align,
                  })}
                >
                  {activeType === 'line' && (
                    <div
                      className={classNames(
                        `${classPrefix}-titles-item-line`,
                        `${classPrefix}-titles-item-line-${direction}`
                      )}
                      style={{ background: activeColor }}
                    />
                  )}
                  {activeType === 'smile' && (
                    <div className={`${classPrefix}-titles-item-smile`}>
                      <JoySmile color={activeColor} width={40} height={20} />
                    </div>
                  )}
                  <div
                    className={classNames(
                      {
                        [`${classPrefix}-ellipsis`]: direction === 'vertical',
                      },
                      `${classPrefix}-titles-item-text`
                    )}
                    style={{ color: activeColor }}
                  >
                    {item.title}
                  </div>
                </div>
              )
            })}
      </div>
      <div className={`${classPrefix}-content-wrap`}>
        <div className={`${classPrefix}-content`} style={getContentStyle()}>
          {React.Children.map(children, (child, idx) => {
            if (!React.isValidElement(child)) return null
            return React.cloneElement(child, {
              ...child.props,
              active: value === child.props.value,
              autoHeightClassName:
                autoHeight && String(value) !== String(child.props.value || idx)
                  ? 'inactive'
                  : undefined,
            })
          })}
        </div>
      </div>
    </div>
  )
}

Tabs.displayName = 'NutTabs'
Tabs.TabPane = TabPane
