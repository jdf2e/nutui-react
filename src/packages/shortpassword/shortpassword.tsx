import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react'
import bem from '@/utils/bem'
import Popup from '@/packages/popup'
import Icon from '@/packages/icon'
import { useConfig } from '@/packages/configprovider'

import { IComponent, ComponentDefaults } from '@/utils/typings'

export interface ShortPasswordProps extends IComponent {
  title: string
  desc: string
  tips: string
  visible: boolean
  modelValue: string | number
  errorMsg: string
  noButton: boolean
  closeOnClickOverlay: boolean
  length: string | number
  className: string
  style?: CSSProperties
  onChange: (value: string | number) => void
  onOk: (value: string | number) => void
  onCancel: () => void
  onClose: () => void
  onTips: () => void
  onComplete: (value: string | number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  desc: '',
  tips: '',
  visible: false,
  modelValue: '',
  errorMsg: '',
  noButton: true,
  closeOnClickOverlay: true,
  length: 6, // 1~6
  className: '',
  onChange: (value: number | string) => {},
  onOk: (value: number | string) => {},
  onCancel: () => {},
  onClose: () => {},
  onTips: () => {},
  onComplete: (value: number | string) => {},
} as ShortPasswordProps
export const ShortPassword: FunctionComponent<
  Partial<ShortPasswordProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    title,
    desc,
    tips,
    visible,
    modelValue,
    errorMsg,
    noButton,
    closeOnClickOverlay,
    length,
    style,
    className,
    onChange,
    onOk,
    onTips,
    onCancel,
    onClose,
    onComplete,
    iconClassPrefix,
    iconFontClassName,
    ...reset
  } = props
  const b = bem('shortpassword')
  const textInput = useRef<HTMLInputElement>(null)
  const range = (val: number) => {
    return Math.min(Math.max(4, val), 6)
  }
  const [innerVisible, setInnerVisible] = useState<boolean | undefined>(visible)
  const [comLen, setComLen] = useState<number>(range(Number(length)))
  const [inputValue, setInputValue] = useState<number | string>('')
  useEffect(() => {
    setInnerVisible(visible)
  }, [visible])
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
    console.log(isIOS, isAndroid)
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
    onOk && onOk(inputValue)
  }

  return (
    <div>
      <Popup
        style={{
          padding: '32px 24px 28px 24px',
          borderRadius: '12px',
          textAlign: 'center',
        }}
        visible={innerVisible}
        closeable
        close-on-click-overlay={closeOnClickOverlay}
        onClickOverlay={onClose}
        onClickCloseIcon={onClose}
      >
        <div className={`${b()} ${className}`} style={{ ...style }} {...reset}>
          <div className={b('title')}>
            {title || locale.shortpassword.title}
          </div>
          <div className={b('subtitle')}>
            {desc || locale.shortpassword.desc}
          </div>

          <div className={b('input')}>
            <input
              ref={textInput}
              className={b('input-real')}
              type="number"
              style={systemStyle()}
              maxLength={6}
              value={inputValue}
              onChange={(e) => changeValue(e)}
            />
            <div className={b('input-site')} />
            <div className={b('input-fake')} onClick={() => focus()}>
              {[...new Array(comLen).keys()].map((item, index) => {
                return (
                  <div className={b('input-fake__li')} key={index}>
                    {String(inputValue).length > index ? (
                      <div className={b('input-fake__li__icon')} />
                    ) : null}
                  </div>
                )
              })}
            </div>
          </div>
          <div className={b('message')}>
            <div className={b('message__error')}>{errorMsg}</div>
            {tips || locale.shortpassword.tips ? (
              <div className={b('message__forget')}>
                <Icon
                  classPrefix={iconClassPrefix}
                  fontClassName={iconFontClassName}
                  className="icon"
                  size="11px"
                  name="tips"
                />
                <div onClick={onTips}>{tips || locale.shortpassword.tips}</div>
              </div>
            ) : null}
          </div>
          {!noButton ? (
            <div className={b('footer')}>
              <div className={b('footer__cancel')} onClick={onCancel}>
                {locale.cancel}
              </div>
              <div className={b('footer__sure')} onClick={() => sure()}>
                {locale.confirm}
              </div>
            </div>
          ) : null}
        </div>
      </Popup>
    </div>
  )
}

ShortPassword.defaultProps = defaultProps
ShortPassword.displayName = 'NutShortPassword'
