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
  } = {
    ...defaultProps,
    ...props,
  }

  const [value, setValue] = usePropsValue<string | number>({
    value: outerValue,
    defaultValue: outerDefaultValue,
    finalValue: 0,
    onChange,
  })
  const titleItemsRef = useRef<HTMLDivElement[]>([])
  const navRef = useRef<HTMLDivElement>(null)
  const scrollDirection = (
    nav: any,
    to: number,
    duration: number,
    direction?: 'horizontal' | 'vertical'
  ) => {
    let count = 0
    const from = direction === 'horizontal' ? nav.scrollLeft : nav.scrollTop
    const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16)

    function animate() {
      if (direction === 'horizontal') {
        nav.scrollLeft += (to - from) / frames
      } else {
        nav.scrollTop += (to - from) / frames
      }

      if (++count < frames) {
        raf(animate)
      }
    }
    animate()
  }
  const scrollIntoView = (index: number, immediate?: boolean) => {
    const nav = navRef.current
    const titleItem = titleItemsRef.current
    if (!nav || !titleItem || !titleItem[index]) {
      return
    }
    const title = titleItem[index]

    let to = 0
    if (direction === 'vertical') {
      const runTop = title.offsetTop - nav.offsetTop + 10
      to = runTop - (nav.offsetHeight - title.offsetHeight) / 2
    } else {
      to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2
    }
    scrollDirection(nav, to, immediate ? 0 : 0.3, direction)
  }

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
      // eslint-disable-next-line eqeqeq
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
  const getContentStyle = () => {
    // eslint-disable-next-line eqeqeq
    let index = titles.current.findIndex((t) => t.value == value)
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
    // eslint-disable-next-line eqeqeq
    let index = titles.current.findIndex((t) => t.value == value)
    index = index < 0 ? 0 : index
    setTimeout(() => {
      scrollIntoView(index)
    })
  }, [value])

  const tabChange = (item: TabsTitle) => {
    onClick && onClick(item.value)
    if (item.disabled) {
      return
    }
    setValue(item.value)
  }
  return (
    <div className={classes} {...rest}>
      <div className={classesTitle} style={{ ...tabStyle }} ref={navRef}>
        {!!title && typeof title === 'function'
          ? title()
          : titles.current.map((item) => {
              return (
                <div
                  onClick={() => {
                    tabChange(item)
                  }}
                  className={classNames(`${classPrefix}-titles-item`, {
                    [`nut-tabs-titles-item-active`]:
                      !item.disabled && String(item.value) === String(value),
                    [`nut-tabs-titles-item-disabled`]: item.disabled,
                    [`nut-tabs-titles-item-${align}`]: align,
                  })}
                  ref={(ref: HTMLDivElement) => titleItemsRef.current.push(ref)}
                  key={item.value}
                >
                  {activeType === 'line' && (
                    <div
                      className={classNames(`${classPrefix}-titles-item-line`, {
                        [`${classPrefix}-titles-item-line-${direction}`]: true,
                      })}
                      style={tabsActiveStyle}
                    />
                  )}
                  {activeType === 'smile' && (
                    <div
                      className={`${classPrefix}-titles-item-smile`}
                      style={tabsActiveStyle}
                    >
                      <JoySmile color={activeColor} width={40} height={20} />
                    </div>
                  )}
                  <div
                    className={classNames(
                      `${classPrefix}-ellipsis`,
                      `${classPrefix}-titles-item-text`
                    )}
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
        </div>
      </div>
    </div>
  )
}

Tabs.displayName = 'NutTabs'
Tabs.TabPane = TabPane
