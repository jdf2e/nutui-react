import React, {
  ForwardRefRenderFunction,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useMemo,
} from 'react'
import { Tips } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import Popup from '@/packages/popup/index.taro'
import { useConfig } from '@/packages/configprovider/index.taro'
import { ComponentDefaults } from '@/utils/typings'
import { PopupProps } from '@/packages/popup/popup.taro'
import { usePropsValue } from '@/utils/use-props-value'
import { ShortPasswordActions } from '@/packages/shortpassword/types'

export interface ShortPasswordProps extends PopupProps {
  value: string
  visible: boolean
  plain: boolean
  title: ReactNode
  description: ReactNode
  tips: ReactNode
  hideFooter: boolean
  length: number
  error: ReactNode
  autoFocus: boolean
  onFocus: () => void
  onChange: (value: string) => void
  onConfirm: (value: string) => void
  onCancel: () => void
  onClose: () => void
  onTips: () => void
  onComplete: (value: string) => void
}

const defaultProps = {
  ...ComponentDefaults,
  value: '',
  visible: false,
  plain: false,
  hideFooter: true,
  length: 6, // 1~6
  autoFocus: false,
} as ShortPasswordProps
export const InternalShortPassword: ForwardRefRenderFunction<
  unknown,
  Partial<ShortPasswordProps>
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
  const actions: ShortPasswordActions = {
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
      style={{
        padding: '32px 24px 28px 24px',
        borderRadius: '12px',
        textAlign: 'center',
      }}
      visible={visible}
      closeable
      onOverlayClick={onClose}
      onCloseIconClick={onClose}
      {...rest}
    >
      <div className={classNames(classPrefix, className)} style={style}>
        <div className={`${classPrefix}-title`}>
          {title || locale.shortpassword.title}
        </div>
        <div className={`${classPrefix}-description`}>
          {description || locale.shortpassword.description}
        </div>
        <div className={`${classPrefix}-input`} onClick={onFocus}>
          <div className={`${classPrefix}-input-site`} />
          <div className={`${classPrefix}-input-fake`}>
            {[...new Array(comLen).keys()].map((item, index) => {
              return (
                <div className={`${classPrefix}-input-fake-li`} key={index}>
                  {inputValue.length > index && (
                    <>
                      {plain ? (
                        inputValue[index]
                      ) : (
                        <div className={`${classPrefix}-input-fake-li-icon`} />
                      )}
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <div className={`${classPrefix}-message`}>
          <div className={`${classPrefix}-message-error`}>{error}</div>
          <div className={`${classPrefix}-message-forget`} onClick={onTips}>
            {tips || (
              <>
                <Tips size={11} />
                {locale.shortpassword.tips}
              </>
            )}
          </div>
        </div>
        {!hideFooter && (
          <div className={`${classPrefix}-footer`}>
            <div className={`${classPrefix}-footer-cancel`} onClick={onCancel}>
              {locale.cancel}
            </div>
            <div className={`${classPrefix}-footer-sure`} onClick={sure}>
              {locale.confirm}
            </div>
          </div>
        )}
      </div>
    </Popup>
  )
}
export const ShortPassword = React.forwardRef<
  unknown,
  Partial<ShortPasswordProps>
>(InternalShortPassword)
