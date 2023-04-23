import React, { FunctionComponent, useRef } from 'react'
import classNames from 'classnames'
import { JoySmile } from '@nutui/icons-react-taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import TabPane from '@/packages/tabpane/index.taro'
import { usePropsValue } from '@/utils/use-props-value'

type Title = {
  title: string
  disabled: boolean
  active?: boolean
  value: string | number
}
export type TabsSize = 'large' | 'normal' | 'small'

export interface TabsProps extends BasicComponent {
  tabStyle: React.CSSProperties
  value: string | number
  defaultValue: string | number
  activeColor: string
  direction: string
  activeType: string
  duration: number | string
  // titleGutter: number | string
  size: TabsSize
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
    activeColor,
    tabStyle,
    direction,
    activeType,
    duration,
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

  const [value, setValue] = usePropsValue<string | number>({
    value: props.value,
    defaultValue: props.defaultValue,
    finalValue: 0,
    onChange,
  })

  const getTitles = () => {
    const titles: Title[] = []
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

  const titles = useRef<Title[]>(getTitles())

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

  const index = titles.current.findIndex((t) => t.value === value)
  const contentStyle = {
    transform:
      direction === 'horizontal'
        ? `translate3d(-${index * 100}%, 0, 0)`
        : `translate3d( 0,-${index * 100}%, 0)`,
    transitionDuration: `${duration}ms`,
  }

  const tabChange = (item: Title, index: number) => {
    onClick && onClick(item.value)
    if (item.disabled) {
      return
    }
    setValue(item.value)
  }

  return (
    <div className={classes} {...rest}>
      <div className={classesTitle} style={{ ...tabStyle }}>
        {!!title && typeof title === 'function'
          ? title()
          : titles.current.map((item, index) => {
              return (
                <div
                  onClick={(e) => {
                    tabChange(item, index)
                    e.currentTarget.scrollIntoView &&
                      direction === 'horizontal' &&
                      e.currentTarget.scrollIntoView({
                        behavior: 'smooth',
                        block:
                          direction === 'horizontal' ? 'nearest' : 'center',
                        inline:
                          direction === 'horizontal' ? 'center' : 'nearest',
                      })
                  }}
                  className={classNames(`${classPrefix}__titles-item`, {
                    [`nut-tabs__titles-item--active`]:
                      !item.disabled && String(item.value) === String(value),
                    [`nut-tabs__titles-item--disabled`]: item.disabled,
                    [`nut-tabs__titles-item--${align}`]: align,
                  })}
                  key={item.value}
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
                      <JoySmile color={activeColor} width={40} height={20} />
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

Tabs.defaultProps = defaultProps
Tabs.displayName = 'NutTabs'
Tabs.TabPane = TabPane
