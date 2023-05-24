import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Tips } from '@nutui/icons-react'
import classNames from 'classnames'
import Popup from '@/packages/popup'
import { useConfig } from '@/packages/configprovider'
import { ComponentDefaults } from '@/utils/typings'
import { PopupProps } from '../popup/popup'

export interface ShortPasswordProps extends PopupProps {
  title: ReactNode
  description: ReactNode
  tips: ReactNode
  visible: boolean
  modelValue: string | number
  error: ReactNode
  hideFooter: boolean
  length: number
  autoFocus: boolean
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
  onChange: (value: number | string) => {},
  onConfirm: (value: number | string) => {},
  onCancel: () => {},
  onClose: () => {},
  onTips: () => {},
  onComplete: (value: number | string) => {},
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
    modelValue,
    error,
    hideFooter,
    length,
    style,
    className,
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
  const textInput = useRef<HTMLInputElement>(null)
  const range = (val: number) => {
    return Math.min(Math.max(4, val), 6)
  }
  const [comLen, setComLen] = useState<number>(range(length as number))
  const [inputValue, setInputValue] = useState<number | string>('')
  useEffect(() => {
    if (typeof modelValue !== 'undefined') {
      setInputValue(modelValue)
    }
  }, [modelValue])
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value
    if (String(inputValue).length > comLen) {
      inputValue = inputValue.slice(0, comLen)
    }
    setInputValue(inputValue)
    if (String(inputValue).length === comLen) {
      onComplete && onComplete(inputValue)
    }
    onChange && onChange(inputValue)
  }
  const systemStyle = () => {
    const u = navigator.userAgent
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 // g
    const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
    let style = {}
    if (isIOS) {
      style = {
        paddingRight: '1200px',
      }
    }
    if (isAndroid) {
      style = {
        opacity: 0,
        zIndex: 10,
      }
    }
    return style
  }
  const focus = () => {
    if (textInput.current) {
      textInput.current.focus()
    }
  }
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
        <div className={`${classPrefix}__subtitle`}>
          {description || locale.shortpassword.description}
        </div>

        <div className={`${classPrefix}__input`}>
          <input
            ref={textInput}
            className={`${classPrefix}__input-real`}
            type="number"
            style={systemStyle()}
            maxLength={6}
            value={inputValue}
            autoFocus={autoFocus}
            onChange={(e) => changeValue(e)}
          />
          <div className={`${classPrefix}__input-site`} />
          <div className={`${classPrefix}__input-fake`} onClick={() => focus()}>
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
