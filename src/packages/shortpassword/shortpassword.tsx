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

export interface ShortPasswordProps {
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
  change: (value: string | number) => void
  onOk: (value: string | number) => void
  onCancel: () => void
  onClose: () => void
  onTips: () => void
  complete: (value: string | number) => void
}
const defaultProps = {
  title: '请输入密码',
  desc: '您使用了虚拟资产，请进行验证',
  tips: '忘记密码',
  visible: false,
  modelValue: '',
  errorMsg: '',
  noButton: true,
  closeOnClickOverlay: true,
  length: 6, // 1~6
  className: '',
  change: (value: number | string) => {},
  onOk: (value: number | string) => {},
  onCancel: () => {},
  onClose: () => {},
  onTips: () => {},
  complete: (value: number | string) => {},
} as ShortPasswordProps
export const ShortPassword: FunctionComponent<
  Partial<ShortPasswordProps> & React.HTMLAttributes<HTMLDivElement>
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
    change,
    onOk,
    onTips,
    onCancel,
    onClose,
    complete,
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
    if (modelValue) {
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
      complete && complete(inputValue)
    }
    change && change(inputValue)
  }
  const systemStyle = () => {
    const u = navigator.userAgent
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 // g
    const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
    if (isIOS) {
      return {
        paddingRight: '1200px',
      }
    }
    if (isAndroid) {
      return {
        opacity: 0,
        zIndex: 10,
      }
    }
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
            {locale.shortpassword.title || title}
          </div>
          <div className={b('subtitle')}>
            {locale.shortpassword.desc || desc}
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
            {tips ? (
              <div className={b('message__forget')}>
                <Icon className="icon" size="11px" name="tips" />
                <div onClick={onTips}>{locale.shortpassword.tips || tips}</div>
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
