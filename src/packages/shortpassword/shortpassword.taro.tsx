import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react'
import { Tips } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import Popup from '@/packages/popup/index.taro'
import { useConfig } from '@/packages/configprovider/index.taro'
import { ComponentDefaults } from '@/utils/typings'
import { PopupProps } from '@/packages/popup/popup.taro'

export interface ShortPasswordProps extends PopupProps {
  title: ReactNode
  description: ReactNode
  tips: ReactNode
  visible: boolean
  value: string | number
  error: ReactNode
  hideFooter: boolean
  length: number
  autoFocus: boolean
  onFocus: () => void
  onChange: (value: string | number) => void
  onConfirm: (value: string | number) => void
  onCancel: () => void
  onClose: () => void
  onTips: () => void
  onComplete: (value: string | number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  visible: false,
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
    style,
    className,
    onFocus,
    onChange,
    onConfirm,
    onTips,
    onCancel,
    onClose,
    onComplete,
    autoFocus,
    ...rest
  } = props
  const classPrefix = 'nut-shortpassword'
  const range = (val: number) => {
    return Math.min(Math.max(4, val), 6)
  }
  const [comLen, setComLen] = useState<number>(range(length as number))
  const [inputValue, setInputValue] = useState<number | string>('')
  useEffect(() => {
    if (typeof value !== 'undefined') {
      setInputValue(value)
    }
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
      onClickOverlay={onClose}
      onClickCloseIcon={onClose}
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
                  {String(inputValue).length > index ? (
                    <div className={`${classPrefix}__input-fake__li__icon`} />
                  ) : null}
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
