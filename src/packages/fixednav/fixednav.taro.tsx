import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { ArrowLeft } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import Overlay from '@/packages/overlay/index.taro'
import { useConfig } from '@/packages/configprovider/index.taro'
import { FixedNavProps } from './types.taro'
import { defaultOverlayProps } from '@/packages/overlay/overlay.taro'

const defaultProps: FixedNavProps = {
  ...defaultOverlayProps,
  activeText: '',
  inactiveText: '',
  type: 'right',
  list: [],
  overlay: true,
  position: {
    top: 'auto',
    bottom: 'auto',
  },
  zIndex: 200,
  onChange: (value: boolean) => {},
  onSelect: () => {},
}

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
    type,
    children,
    style,
    content,
    zIndex,
    onChange,
    onSelect,
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-fixednav'
  const classes = classNames(
    classPrefix,
    {
      active: visible,
    },
    type,
    className
  )

  return (
    <View
      className={classes}
      style={{
        ...position,
        ...style,
      }}
    >
      {overlay && (
        <Overlay
          visible={visible}
          zIndex={zIndex}
          onClick={() => onChange(false)}
        />
      )}
      <View className="list">
        {children || (
          <View className={`${classPrefix}-list`}>
            {list.map((item: any, index) => {
              return (
                <View
                  className={`${classPrefix}-list-item`}
                  onClick={(event) => onSelect(item, event as any)}
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

      <View className={`${classPrefix}-btn`} onClick={() => onChange(!visible)}>
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
    </View>
  )
}

FixedNav.displayName = 'NutFixedNav'
