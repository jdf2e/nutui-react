import React, {
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useMemo,
} from 'react'
import { Tips } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import Popup from '@/packages/popup/index.taro'
import { useConfig } from '@/packages/configprovider/index.taro'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import { TaroShortPasswordProps, ShortPasswordRef } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  value: '',
  visible: false,
  plain: false,
  hideFooter: true,
  length: 6, // 1~6
  autoFocus: false,
} as TaroShortPasswordProps
export const InternalShortPassword: ForwardRefRenderFunction<
  unknown,
  Partial<TaroShortPasswordProps>
> = (props, ref) => {
  const { locale } = useConfig()
  const {
    title,
    description,
    tips,
    visible: outerVisible,
    value,
    error,
    hideFooter,
    length,
    plain,
    style,
    className,
    closeable,
    autoFocus,
    round,
    onFocus,
    onChange,
    onConfirm,
    onTips,
    onCancel,
    onClose,
    onComplete,
    onOverlayClick,
    onCloseIconClick,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-shortpassword'
  const comLen = useMemo(() => {
    return Math.min(Math.max(4, length || 4), 6)
  }, [length])
  const format = (val: string) => {
    return val.slice(0, comLen)
  }

  const [visible, setVisible] = usePropsValue({
    value: outerVisible,
    defaultValue: false,
    finalValue: false,
  })
  const handleClose = () => {
    onClose?.()
    setVisible(false)
  }
  const actions: ShortPasswordRef = {
    open: () => {
      setVisible(true)
    },
    close: () => {
      setVisible(false)
    },
  }
  useImperativeHandle(ref, () => actions)

  const [inputValue, setInputValue] = usePropsValue<string>({ value, onChange })
  useEffect(() => {
    if (visible && autoFocus) {
      onFocus && onFocus()
    }
  }, [visible])
  useEffect(() => {
    const val = format(value)
    if (val.length >= comLen) {
      onComplete && onComplete(val)
    }
    setInputValue(format(value))
  }, [value])
  const sure = () => {
    onConfirm && onConfirm(inputValue)
  }

  return (
    <Popup
      className={`${classPrefix}-popup`}
      visible={visible}
      closeable
      onOverlayClick={onClose}
      onCloseIconClick={onClose}
      round={round}
      {...rest}
    >
      <View className={classNames(classPrefix, className)} style={style}>
        <View className={`${classPrefix}-title`}>
          {title || locale.shortpassword.title}
        </View>
        <View className={`${classPrefix}-description`}>
          {description || locale.shortpassword.description}
        </View>
        <View className={`${classPrefix}-input`} onClick={onFocus}>
          <View className={`${classPrefix}-input-site`} />
          <View className={`${classPrefix}-input-fake`}>
            {[...new Array(comLen).keys()].map((item, index) => {
              return (
                <View className={`${classPrefix}-input-fake-li`} key={index}>
                  {inputValue.length > index && (
                    <>
                      {plain ? (
                        inputValue[index]
                      ) : (
                        <View className={`${classPrefix}-input-fake-li-icon`} />
                      )}
                    </>
                  )}
                </View>
              )
            })}
          </View>
        </View>
        <View className={`${classPrefix}-message`}>
          <View className={`${classPrefix}-message-error`}>{error}</View>
          <View className={`${classPrefix}-message-forget`} onClick={onTips}>
            {tips || (
              <>
                <Tips size={11} />
                {locale.shortpassword.tips}
              </>
            )}
          </View>
        </View>
        {!hideFooter && (
          <View className={`${classPrefix}-footer`}>
            <View className={`${classPrefix}-footer-cancel`} onClick={onCancel}>
              {locale.cancel}
            </View>
            <View className={`${classPrefix}-footer-sure`} onClick={sure}>
              {locale.confirm}
            </View>
          </View>
        )}
      </View>
    </Popup>
  )
}
export const ShortPassword = React.forwardRef<
  unknown,
  Partial<TaroShortPasswordProps>
>(InternalShortPassword)
