import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { JoySmile } from '@nutui/icons-react'
import bem from '@/utils/bem'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import TabPane from '@/packages/tabpane'
import { pxCheck } from '@/utils/px-check'

class Title {
  title = ''

  paneKey = ''

  disabled = false

  index = 0

  // eslint-disable-next-line no-useless-constructor
  constructor() {}
}

export type TabsSize = 'large' | 'normal' | 'small'

export interface TabsProps extends BasicComponent {
  tabStyle: React.CSSProperties
  value: string | number
  activeColor: string
  direction: string
  activeType: string
  duration: number | string
  // titleGutter: number | string
  size: TabsSize
  align: 'left' | 'right'
  title: () => JSX.Element[]
  onChange: (t: Title) => void
  onClick: (t: Title) => void
  autoHeight: boolean
  children?: React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  tabStyle: {},
  value: 0,
  activeColor: '',
  direction: 'horizontal',
  activeType: 'line',
  duration: 300,
  // titleGutter: 0,
  size: 'normal',
  // align: 'left',
  autoHeight: false,
} as TabsProps

const classPrefix = 'nut-tabs'
export const Tabs: FunctionComponent<Partial<TabsProps>> & {
  TabPane: typeof TabPane
} = (props) => {
  const {
    value,
    activeColor,
    tabStyle,
    direction,
    activeType,
    // titleScroll,
    // ellipsis,
    duration,
    // titleGutter,
    size,
    align,
    title,
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

  const [, setCurrentItem] = useState<Title>({ index: 0 } as Title)
  const titles = useRef<Title[]>([])

  useEffect(() => {
    let currentIndex = 0
    titles.current = []
    // eslint-disable-next-line consistent-return
    React.Children.forEach(children, (child, idx) => {
      if (!React.isValidElement(child)) {
        return null
      }
      const title = new Title()
      const childProps = child?.props
      if (childProps?.title || childProps?.paneKey) {
        title.title = childProps?.title
        title.paneKey = childProps?.paneKey || idx
        title.disabled = childProps?.disabled
        title.index = idx
        if (title.paneKey === value) {
          currentIndex = idx
        }
      }
      titles.current.push(title)
    })
    setCurrentItem(titles.current[currentIndex])
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

  const index = titles.current.findIndex((t) => t.paneKey === value)

  const contentStyle = {
    transform:
      direction === 'horizontal'
        ? `translate3d(-${index * 100}%, 0, 0)`
        : `translate3d( 0,-${index * 100}%, 0)`,
    transitionDuration: `${duration}ms`,
  }

  const tabChange = (item: Title, index: number) => {
    onClick && onClick(item)
    if (item.disabled) {
      return
    }
    setCurrentItem(item)
    onChange && onChange(item)
  }

  return (
    <div className={classes} {...rest}>
      <div className={classesTitle} style={{ ...tabStyle }}>
        {!!title && typeof title === 'function'
          ? title()
          : titles.current.map((item, index) => {
              return (
                <div
                  onClick={(e) => tabChange(item, index)}
                  className={classNames(`${classPrefix}__titles-item`, {
                    [`nut-tabs__titles-item--active`]:
                      !item.disabled && String(item.paneKey) === String(value),
                    [`nut-tabs__titles-item--disabled`]: item.disabled,
                    [`nut-tabs__titles-item--${align}`]: align,
                  })}
                  key={item.paneKey}
                >
                  {activeType === 'line' && (
                    <div
                      className={`${classPrefix}__titles-item__line`}
                      style={tabsActiveStyle}
                    />
                  )}
                  {activeType === 'smile' && (
                    <div
                      className={`${classPrefix}__titles-item__smile`}
                      style={tabsActiveStyle}
                    >
                      <JoySmile color={activeColor} />
                    </div>
                  )}
                  <div
                    className={classNames(
                      {
                        ellipsis: true,
                      },
                      `${classPrefix}__titles-item__text`
                    )}
                  >
                    {item.title}
                  </div>
                </div>
              )
            })}
      </div>
      <div className={`${classPrefix}__content__wrap`}>
        <div className={`${classPrefix}__content`} style={contentStyle}>
          {React.Children.map(children, (child, idx) => {
            if (!React.isValidElement(child)) {
              return null
            }

            let childProps = {
              ...child.props,
              activeKey: value,
            }

            if (
              String(value) !== String(child.props?.paneKey || idx) &&
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

Tabs.defaultProps = defaultProps
Tabs.displayName = 'NutTabs'
Tabs.TabPane = TabPane
