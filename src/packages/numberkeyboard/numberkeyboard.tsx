import React, { FunctionComponent, ReactNode, useMemo, useState } from 'react'
import classNames from 'classnames'
import Popup from '@/packages/popup'
import { useConfig } from '@/packages/configprovider'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface NextListObj {
  type: string
  id: string
}
export interface NumberKeyboardProps extends BasicComponent {
  visible: boolean
  title?: ReactNode
  confirmText?: string
  overlay?: boolean
  type: 'default' | 'rightColumn'
  custom: Array<string>
  random: boolean
  popClass?: string
  onChange?: (value: string) => void
  onDelete?: () => void
  onClose?: () => void
  onConfirm?: () => void
}
const defaultProps = {
  ...ComponentDefaults,
  visible: false,
  type: 'default',
  custom: [],
  random: false,
} as NumberKeyboardProps

export const NumberKeyboard: FunctionComponent<
  Partial<NumberKeyboardProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'title'>
> = (props) => {
  const { locale } = useConfig()
  const {
    title,
    confirmText,
    visible,
    overlay,
    type,
    custom,
    random,
    popClass,
    style,
    className,
    onChange,
    onDelete,
    onClose,
    onConfirm,
  } = props
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

  const NumberKeyboardKey = (props: { item: any }) => {
    const { item } = props
    const [active, setActive] = useState(false)
    const onTouchStart = () => {
      setActive(true)
    }
    const onTouchEnd = (item: { id: string; type: string }) => {
      setActive(false)
      if (item.type === 'num' || item.type === 'custom') {
        onChange && onChange(item.id)
      }
      if (item.type === 'close') {
        onClose && onClose()
      }
      if (item.type === 'delete') {
        onDelete && onDelete()
      }
      if (item.type === 'confirm') {
        onConfirm && onConfirm()
      }
    }
    return (
      <div key={item.id} className="keyboard-wrapper">
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
          {(item.type === 'num' || item.type === 'custom') && (
            <div>{item.id}</div>
          )}
          {item.type === 'close' && (
            <img
              src="https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
              alt=""
            />
          )}
          {item.type === 'delete' && (
            <img
              src="https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
              alt=""
            />
          )}
          {item.type === 'confirm' && <>{confirmText || locale.done}</>}
        </div>
      </div>
    )
  }

  return (
    <div>
      <Popup
        visible={visible}
        position="bottom"
        className={popClass}
        onClickOverlay={onClose}
        overlay={overlay}
        onClickCloseIcon={onClose}
        overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
      >
        <div className={classNames(classPrefix, className)} style={style}>
          {title && (
            <div className={`${classPrefix}__header`}>
              <h3 className={`${classPrefix}__header__tit`}>{title}</h3>
              {type === 'default' && (
                <span
                  className={`${classPrefix}__header__close`}
                  onClick={onClose}
                >
                  {locale.done}
                </span>
              )}
            </div>
          )}
          <div className={`${classPrefix}__body`}>
            <div className={`${classPrefix}__body__keys`}>
              {keysList?.map((item: any) => {
                return <NumberKeyboardKey key={item.id} item={item} />
              })}
            </div>
            {type === 'rightColumn' && (
              <div className={`${classPrefix}__sidebar`}>
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
    </div>
  )
}

NumberKeyboard.defaultProps = defaultProps
NumberKeyboard.displayName = 'NutNumberKeyboard'
