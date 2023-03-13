import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { JoySmile } from '@nutui/icons-react-taro'
import bem from '@/utils/bem'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import TabPane from '@/packages/tabpane/index.taro'

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
  className: string
  style: React.CSSProperties
  tabStyle: React.CSSProperties
  value: string | number
  color: string
  background: string
  direction: string
  type: string
  titleScroll: boolean
  ellipsis: boolean
  animatedTime: number | string
  titleGutter: number | string
  size: TabsSize
  leftAlign: boolean
  titleNode: () => JSX.Element[]
  onChange: (t: Title) => void
  onClick: (t: Title) => void
  autoHeight: boolean
  children?: React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  tabStyle: {},
  value: 0,
  color: '',
  background: '',
  direction: 'horizontal',
  type: 'line',
  titleScroll: false,
  ellipsis: true,
  animatedTime: 300,
  titleGutter: 0,
  size: 'normal',
  leftAlign: false,
  autoHeight: false,
} as TabsProps
const pxCheck = (value: string | number): string => {
  return Number.isNaN(Number(value)) ? String(value) : `${value}px`
}
export const Tabs: FunctionComponent<
  Partial<TabsProps>
  // & React.HTMLAttributes<HTMLDivElement>
> & {
  TabPane: typeof TabPane
} = (props) => {
  const {
    value,
    color,
    tabStyle,
    background,
    direction,
    type,
    titleScroll,
    ellipsis,
    animatedTime,
    titleGutter,
    size,
    leftAlign,
    titleNode,
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

  const [currentItem, setCurrentItem] = useState<Title>({ index: 0 } as Title)
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

  const b = bem('tabs')
  const classes = classNames(direction, b(''), className)
  const classesTitle = classNames(
    {
      [type]: type,
      scrollable: titleScroll,
      [size]: size,
    },
    `${b('')}__titles`
  )

  const titleStyle = {
    marginLeft: pxCheck(titleGutter),
    marginRight: pxCheck(titleGutter),
  }

  const tabsActiveStyle = {
    color: type === 'smile' ? color : '',
    background: type === 'line' ? color : '',
  }

  const index = titles.current.findIndex((t) => t.paneKey === value)

  const contentStyle = {
    transform:
      direction === 'horizontal'
        ? `translate3d(-${index * 100}%, 0, 0)`
        : `translate3d( 0,-${index * 100}%, 0)`,
    transitionDuration: `${animatedTime}ms`,
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
      <div className={classesTitle} style={{ ...tabStyle, background }}>
        {!!titleNode && typeof titleNode === 'function'
          ? titleNode()
          : titles.current.map((item, index) => {
              return (
                <div
                  style={titleStyle}
                  onClick={(e) => tabChange(item, index)}
                  className={classNames(
                    {
                      active:
                        !item.disabled &&
                        String(item.paneKey) === String(value),
                      disabled: item.disabled,
                      'nut-tabs__titles-item-left-align': leftAlign,
                    },
                    `${b('')}__titles-item`
                  )}
                  key={item.paneKey}
                >
                  {type === 'line' && (
                    <div
                      className={`${b('')}__titles-item__line`}
                      style={tabsActiveStyle}
                    />
                  )}
                  {type === 'smile' && (
                    <div
                      className={`${b('')}__titles-item__smile`}
                      style={tabsActiveStyle}
                    >
                      <JoySmile color={color} />
                    </div>
                  )}
                  <div
                    className={classNames(
                      {
                        ellipsis:
                          ellipsis &&
                          !titleScroll &&
                          direction === 'horizontal',
                      },
                      `${b('')}__titles-item__text`
                    )}
                  >
                    {item.title}
                  </div>
                </div>
              )
            })}
      </div>
      <div className={`${b('')}__content__wrap`}>
        <div className={`${b('')}__content`} style={contentStyle}>
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
