import React, { FunctionComponent, MouseEvent } from 'react'
import classNames from 'classnames'
import { ArrowLeft } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import Overlay from '@/packages/overlay/index.taro'
import { useConfig } from '@/packages/configprovider/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import {
  FixedNavType,
  FixedNavItem,
  FixedNavPosition,
} from '@/packages/fixednav/types'

export interface FixedNavProps extends BasicComponent {
  visible: boolean
  overlay: boolean
  list: Array<FixedNavItem>
  activeText: string
  inactiveText: string
  position: FixedNavPosition
  type: FixedNavType
  onChange: (item: any) => void
  onSelect: (item: any, event: MouseEvent) => void
  content: React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  activeText: '',
  inactiveText: '',
  type: 'right',
  position: {
    top: 'auto',
    bottom: 'auto',
  },
} as FixedNavProps

export const FixedNav: FunctionComponent<
  Partial<FixedNavProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'onSelect' | 'content'
    >
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    overlay,
    visible,
    list,
    activeText,
    inactiveText,
    position,
    onChange,
    onSelect,
    type,
    children,
    style,
    content,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-fixednav'

  const classes = classNames(
    classPrefix,
    {
      active: visible,
    },
    type,
    className
  )

  const handleClick = (item: any, event: MouseEvent): void => {
    onSelect(item, event)
  }

  const onUpdateValue = (value = !visible): void => {
    onChange(value)
  }

  return (
    <div
      className={classes}
      style={{
        ...position,
        ...style,
      }}
      {...rest}
    >
      {overlay && (
        <Overlay
          visible={visible}
          style={{ '--nutui-overlay-zIndex': 200 }}
          onClick={() => onUpdateValue(false)}
        />
      )}
      <View className="list">
        {children || (
          <View className={`${classPrefix}-list`}>
            {list.map((item: any, index) => {
              return (
                <View
                  className={`${classPrefix}-list-item`}
                  onClick={(event) => handleClick(item, event as any)}
                  key={item.id || index}
                >
                  {React.isValidElement(item.icon) ? (
                    item.icon
                  ) : (
                    <img src={item.icon} alt="" />
                  )}
                  <View className={`${classPrefix}-list-text`}>
                    {item.text}
                  </View>
                  {item.num && <View className="b">{item.num}</View>}
                </View>
              )
            })}
          </View>
        )}
      </View>

      <View className={`${classPrefix}-btn`} onClick={() => onUpdateValue()}>
        {content || (
          <>
            <ArrowLeft color="#fff" />
            <View className="text">
              {visible
                ? activeText || locale.fixednav.activeText
                : inactiveText || locale.fixednav.inactiveText}
            </View>
          </>
        )}
      </View>
    </div>
  )
}

FixedNav.displayName = 'NutFixedNav'
