import React, { FunctionComponent, ReactNode, useEffect, useMemo } from 'react'
import { Tips } from '@nutui/icons-react'
import classNames from 'classnames'
import Popup from '@/packages/popup'
import { useConfig } from '@/packages/configprovider'
import { ComponentDefaults } from '@/utils/typings'
import { PopupProps } from '@/packages/popup/index'
import { usePropsValue } from '@/utils/use-props-value'

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
export const ShortPassword: FunctionComponent<Partial<ShortPasswordProps>> = (
  props
) => {
  const { locale } = useConfig()
  const {
    title,
    description,
    tips,
    visible,
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
      <div className={classNames(className, classPrefix)} style={style}>
        <div className={`${classPrefix}__title`}>
          {title || locale.shortpassword.title}
        </div>
        <div className={`${classPrefix}__description`}>
          {description || locale.shortpassword.description}
        </div>
        <div className={`${classPrefix}__input`} onClick={onFocus}>
          <div className={`${classPrefix}__input-site`} />
          <div className={`${classPrefix}__input-fake`}>
            {[...new Array(comLen).keys()].map((item, index) => {
              return (
                <div className={`${classPrefix}__input-fake__li`} key={index}>
                  {inputValue.length > index && (
                    <>
                      {plain ? (
                        inputValue[index]
                      ) : (
                        <div
                          className={`${classPrefix}__input-fake__li__icon`}
                        />
                      )}
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <div className={`${classPrefix}__message`}>
          <div className={`${classPrefix}__message__error`}>{error}</div>
          <div className={`${classPrefix}__message__forget`} onClick={onTips}>
            {tips || (
              <>
                <Tips width={11} height={11} style={{ marginRight: '3px' }} />
                {locale.shortpassword.tips}
              </>
            )}
          </div>
        </div>
        {!hideFooter && (
          <div className={`${classPrefix}__footer`}>
            <div
              className={`${classPrefix}__footer__cancel`}
              onClick={onCancel}
            >
              {locale.cancel}
            </div>
            <div className={`${classPrefix}__footer__sure`} onClick={sure}>
              {locale.confirm}
            </div>
          </div>
        )}
      </div>
    </Popup>
  )
}

ShortPassword.defaultProps = defaultProps
ShortPassword.displayName = 'NutShortPassword'
