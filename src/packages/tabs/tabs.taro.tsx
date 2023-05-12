import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { ScrollView, View } from '@tarojs/components'
import classNames from 'classnames'
import { JoySmile } from '@nutui/icons-react-taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import TabPane from '@/packages/tabpane/index.taro'
import { usePropsValue } from '@/utils/use-props-value'
import { useForceUpdate } from '@/utils/use-force-update'

type Title = {
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
  }, [value])

  const tabChange = (item: Title, index: number) => {
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
        showScrollbar={false}
        scrollIntoViewAlignment="center"
        scrollWithAnimation
        scrollIntoView={`scrollIntoView${scrollIntoRef.current}`}
        className={classesTitle}
        style={{ ...tabStyle }}
        ref={navRef}
      >
        {!!title && typeof title === 'function'
          ? title()
          : titles.current.map((item, index) => {
              return (
                <View
                  ref={(ref: HTMLDivElement) => titleItemsRef.current.push(ref)}
                  id={`scrollIntoView${index}`}
                  onClick={(e) => {
                    tabChange(item, index)
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
