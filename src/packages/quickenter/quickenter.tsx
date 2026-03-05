import React, { ForwardRefRenderFunction, useImperativeHandle } from 'react'
import classNames from 'classnames'
import { Close } from '@nutui/icons-react'
import Popup from '@/packages/popup/index'
import SafeArea from '@/packages/safearea/index'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import {
  QuickEnterActions,
  QuickEnterOption,
  QuickEnterRef,
  WebQuickEnterProps,
} from '@/types'
import Badge from '@/packages/badge/index'
import { useConfig } from '@/packages/configprovider'

const defaultProps = {
  ...ComponentDefaults,
  options: [],
  visible: false,
  closeOnOverlayClick: true,
} as unknown as WebQuickEnterProps

const InternalQuickEnter: ForwardRefRenderFunction<
  QuickEnterRef,
  Partial<WebQuickEnterProps>
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
    onChange?.(item, index)
  }

  const renderTitleBar = () => {
    return (
      <div className={`${classPrefix}-control`}>
        <div className={`${classPrefix}-title`}>{mergedTitle}</div>
        <div
          className={`${classPrefix}-close-btn`}
          onClick={(e) => {
            e.stopPropagation()
            onCancelEvent()
          }}
        >
          {closeIcon || <Close />}
        </div>
      </div>
    )
  }

  const renderContent = () => {
    return (
      <div
        className={classNames(`${classPrefix}-content`, {
          [`${classPrefix}-content-scrollable`]: options.length > 8,
        })}
      >
        <div className={`${classPrefix}-list`}>
          {options.map((item, index) => (
            <div
              key={index}
              className={`${classPrefix}-item`}
              onClick={() => handleItemClick(item, index)}
            >
              <div className={`${classPrefix}-item-icon`}>
                <Badge
                  {...item.badgeProps}
                  value={item.badge ?? item.badgeProps?.value}
                >
                  {item.icon}
                </Badge>
              </div>
              <div className={`${classPrefix}-item-title`}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderQuickEnterElement = () => {
    return (
      <div className={classes} style={style} {...rest}>
        {renderTitleBar()}
        {children}
        {renderContent()}
      </div>
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
        {innerVisible ? <>{renderQuickEnterElement()} </> : null}
      </Popup>
    </>
  )
}

const QuickEnter = React.forwardRef<QuickEnterRef, Partial<WebQuickEnterProps>>(
  InternalQuickEnter
)
export default QuickEnter
