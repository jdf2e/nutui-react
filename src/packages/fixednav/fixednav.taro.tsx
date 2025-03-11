import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { ArrowLeft } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import Overlay from '@/packages/overlay/index.taro'
import { useConfig } from '@/packages/configprovider/index.taro'
import { TaroFixedNavProps } from '@/types'
import { defaultOverlayProps } from '@/packages/overlay/overlay.taro'
import Badge from '@/packages/badge/index.taro'

const defaultProps: TaroFixedNavProps = {
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
  Partial<TaroFixedNavProps> &
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

  const renderListItem = (item: any, index: number) => {
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
        <View className={`${classPrefix}-list-text`}>{item.text}</View>
      </View>
    )
  }

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
                <>
                  {item.num ? (
                    <Badge value={item.num} top={8} right={6}>
                      {renderListItem(item, index)}
                    </Badge>
                  ) : (
                    <>{renderListItem(item, index)}</>
                  )}
                </>
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
