import React, { FunctionComponent, ReactNode, useMemo, useState } from 'react'
import classNames from 'classnames'
import { ArrowDown } from '@nutui/icons-react'
import Popup from '@/packages/popup'
import { PopupProps } from '@/packages/popup/popup'
import { useConfig } from '@/packages/configprovider'
import { ComponentDefaults } from '@/utils/typings'

export interface NumberKeyboardProps extends PopupProps {
  visible: boolean
  rightActions: ReactNode
  confirmText?: string
  type: 'default' | 'rightColumn'
  custom: Array<string>
  random: boolean
  onChange?: (value: string) => void
  onDelete?: () => void
  onClose: () => void
  onConfirm?: () => void
}
const defaultProps = {
  ...ComponentDefaults,
  visible: false,
  rightActions: '',
  type: 'default',
  custom: [],
  random: false,
  onClose: () => {},
} as unknown as NumberKeyboardProps

export const NumberKeyboard: FunctionComponent<
  Partial<NumberKeyboardProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onClick' | 'title'>
> = (props) => {
  const { locale } = useConfig()
  const {
    title,
    rightActions,
    confirmText,
    visible,
    type,
    custom,
    random,
    style,
    className,
    onChange,
    onDelete,
    onClose,
    onConfirm,
    ...rest
  } = { ...defaultProps, ...props }
  const classPrefix = 'nut-numberkeyboard'

  const getBasicKeys = () => {
    const keys = new Array(9).fill(0).map((_, index) => {
      return {
        id: String(index + 1),
        type: 'num',
      }
    })
    return random ? keys.sort(() => (Math.random() > 0.5 ? 1 : -1)) : keys
  }

  const getCustomKeys = () => {
    const customKeys = [
      { id: 'close', type: 'close' },
      { id: '0', type: 'num' },
      { id: 'delete', type: 'delete' },
    ]
    if (!custom) return customKeys
    if (custom.length > 0) {
      customKeys[0] = { id: custom[0], type: 'custom' }
    }
    if (custom.length > 1) {
      customKeys[2] = { id: custom[1], type: 'custom' }
    }
    return customKeys
  }

  const keysList = useMemo(() => {
    return [...getBasicKeys(), ...getCustomKeys()]
  }, [type, random, custom])

  const DeleteIcon = () => {
    return (
      <svg viewBox="0 0 1024 1024" width="28" height="28">
        <path
          d="M875.594 186.122H390.803a51.162 51.162 0 0 0-36.18 14.986L79.91 475.821a51.166 51.166 0 0 0 0 72.358l274.714 274.712a51.164 51.164 0 0 0 36.179 14.986h484.791c46.033 0 83.484-37.45 83.484-83.483V269.606c.001-46.033-37.45-83.484-83.483-83.484zm32.32 568.274c0 17.85-14.473 32.318-32.32 32.318H390.803L116.089 512l274.714-274.714h484.791c17.849 0 32.32 14.47 32.32 32.32v484.789z"
          fill="currentColor"
        />
        <path
          d="M753.945 360.214l-121.43 121.429-121.43-121.429s-16.062-8.224-30.356 6.072c-14.295 14.295-6.073 30.357-6.073 30.357l121.43 121.428L486.8 627.357s-8.222 16.062 6.072 30.357c14.297 14.296 30.358 6.072 30.358 6.072l109.286-109.285 109.286 109.285s16.062 8.224 30.357-6.072c14.295-14.295 6.07-30.357 6.07-30.357L668.944 518.072l121.431-121.43s8.22-16.061-6.074-30.356c-14.294-14.296-30.356-6.072-30.356-6.072z"
          fill="currentColor"
        />
      </svg>
    )
  }

  const NumberKeyboardKey = (props: { item: any }) => {
    const { item } = props
    const [active, setActive] = useState(false)
    const onTouchStart = () => {
      setActive(true)
    }
    const onTouchEnd = (item: { id: string; type: string }) => {
      setActive(false)
      switch (item.type) {
        case 'num':
        case 'custom':
          onChange?.(item.id)
          break
        case 'close':
          onClose?.()
          break
        case 'delete':
          onDelete?.()
          break
        case 'confirm':
          onConfirm?.()
          break
        default:
          break
      }
    }
    const renderContent = (item: { id: string; type: string }) => {
      switch (item.type) {
        case 'num':
        case 'custom':
          return <div>{item.id}</div>
        case 'delete':
          return <DeleteIcon />
        case 'close':
          return <ArrowDown width={18} height={18} />
        case 'confirm':
          return <>{confirmText || locale.done}</>
        default:
          return null
      }
    }
    return (
      <div key={item.id} className={`${classPrefix}-body-wrapper`}>
        <div
          className={classNames({
            key: true,
            active,
            close: item.type === 'close',
            delete: item.type === 'delete',
            confirm: item.type === 'confirm',
          })}
          onTouchStart={() => onTouchStart()}
          onTouchEnd={() => onTouchEnd(item)}
          onTouchCancel={() => onTouchEnd(item)}
        >
          {renderContent(item)}
        </div>
      </div>
    )
  }

  return (
    <Popup
      {...rest}
      visible={visible}
      position="bottom"
      onOverlayClick={onClose}
      onCloseIconClick={onClose}
      zIndex={9999}
      overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
    >
      <div className={classNames(classPrefix, className)} style={style}>
        {title && (
          <div className={`${classPrefix}-header`}>
            <div className={`${classPrefix}-header-title`}>{title}</div>
            {type === 'default' && (
              <span
                className={`${classPrefix}-header-close`}
                onClick={onConfirm}
              >
                {rightActions || locale.done}
              </span>
            )}
          </div>
        )}
        <div className={`${classPrefix}-body`}>
          <div className={`${classPrefix}-body-keys`}>
            {keysList?.map((item: any) => {
              return <NumberKeyboardKey key={item.id} item={item} />
            })}
          </div>
          {type === 'rightColumn' && (
            <div className={`${classPrefix}-sidebar`}>
              <NumberKeyboardKey
                key="delete"
                item={{
                  id: 'delete',
                  type: 'delete',
                }}
              />
              <NumberKeyboardKey
                key="confirm"
                item={{
                  id: 'confirm',
                  type: 'confirm',
                }}
              />
            </div>
          )}
        </div>
      </div>
    </Popup>
  )
}

NumberKeyboard.displayName = 'NutNumberKeyboard'
