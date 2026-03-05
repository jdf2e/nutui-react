import React, { ForwardRefRenderFunction, useImperativeHandle } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import classNames from 'classnames'
import { Close } from '@nutui/icons-react-taro'
import Popup from '@/packages/popup/index.taro'
import SafeArea from '@/packages/safearea/index.taro'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import {
  QuickEnterActions,
  QuickEnterOption,
  QuickEnterRef,
  TaroQuickEnterProps,
} from '@/types'
import Badge from '@/packages/badge/index.taro'
import { useConfig } from '@/packages/configprovider'

const defaultProps = {
  ...ComponentDefaults,
  options: [],
  visible: false,
  closeOnOverlayClick: true,
} as unknown as TaroQuickEnterProps

const InternalQuickEnter: ForwardRefRenderFunction<
  QuickEnterRef,
  Partial<TaroQuickEnterProps>
> = (props, ref) => {
  const {
    children,
    visible,
    title,
    options = [],
    closeOnOverlayClick,
    popupProps = {},
    className,
    style,
    onClose,
    onChange,
    closeIcon,
    ...rest
  } = { ...defaultProps, ...props }
  const { locale } = useConfig()
  const mergedTitle = title || locale.quickenter.title

  const classPrefix = 'nut-quickenter'
  const classes = classNames(classPrefix, className)

  const [innerVisible, setInnerVisible] = usePropsValue<boolean>({
    value: props.visible,
    defaultValue: false,
    finalValue: false,
    onChange: (v: boolean) => {
      if (!v) {
        props.onClose?.()
      }
    },
  })

  const actions: QuickEnterActions = {
    open: () => {
      setInnerVisible(true)
    },
    close: () => {
      setInnerVisible(false)
    },
  }
  useImperativeHandle(ref, () => actions)

  const onCancelEvent = () => {
    setInnerVisible(false)
  }

  const handleItemClick = (item: QuickEnterOption, index: number) => {
    if (item.url) {
      Taro.navigateTo({ url: item.url })
    }
    onChange?.(item, index)
  }

  const renderTitleBar = () => {
    return (
      <View className={`${classPrefix}-control`}>
        <View className={`${classPrefix}-title`}>{mergedTitle}</View>
        <View
          className={`${classPrefix}-close-btn`}
          onClick={(e: { stopPropagation: () => void }) => {
            e.stopPropagation()
            onCancelEvent()
          }}
        >
          {closeIcon || <Close />}
        </View>
      </View>
    )
  }

  const renderContent = () => {
    return (
      <View
        className={classNames(`${classPrefix}-content`, {
          [`${classPrefix}-content-scrollable`]: options.length > 8,
        })}
      >
        <View className={`${classPrefix}-list`}>
          {options.map((item, index) => (
            <View
              key={index}
              className={`${classPrefix}-item`}
              onClick={() => handleItemClick(item, index)}
            >
              <View className={`${classPrefix}-item-icon`}>
                <Badge
                  {...item.badgeProps}
                  value={item.badge ?? item.badgeProps?.value}
                >
                  {item.icon}
                </Badge>
              </View>
              <View className={`${classPrefix}-item-title`}>{item.title}</View>
            </View>
          ))}
        </View>
      </View>
    )
  }

  const renderQuickEnterElement = () => {
    return (
      <View className={classes} style={style} {...rest}>
        {renderTitleBar()}
        {children}
        {renderContent()}
      </View>
    )
  }

  return (
    <>
      <Popup
        style={{
          background: 'transparent',
        }}
        {...popupProps}
        overlayStyle={{
          background: 'transparent',
        }}
        visible={innerVisible}
        position="top"
        onOverlayClick={() => {
          if (!closeOnOverlayClick) return
          onCancelEvent()
        }}
        onClose={onCancelEvent}
      >
        <SafeArea position="top" />
        {renderQuickEnterElement()}
      </Popup>
    </>
  )
}

const QuickEnter = React.forwardRef<
  QuickEnterRef,
  Partial<TaroQuickEnterProps>
>(InternalQuickEnter)
export default QuickEnter
