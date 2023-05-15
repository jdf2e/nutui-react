import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react'
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
  const [keysList, setKeysList] = useState<Array<any> | undefined>([])
  const defaultKey = () => {
    let leftBottomKey = {
      id: 'lock',
      type: 'lock',
    }
    if (custom) {
      const customKeys: Array<string> = Array.isArray(custom)
        ? custom
        : [custom]
      if (customKeys.length > 0) {
        const newCustomKey = customKeys[0]
        leftBottomKey = {
          id: newCustomKey,
          type: 'custom',
        }
      }
    }
    return [
      ...getBasicKeys(),
      leftBottomKey,
      { id: 0, type: 'number' },
      { id: 'delete', type: 'delete' },
    ]
  }

  const getBasicKeys = () => {
    const keys: Array<unknown> = []
    for (let i = 1; i <= 9; i++) {
      keys.push({ id: i, type: 'number' })
    }
    if (random) {
      return keys.sort(() => (Math.random() > 0.5 ? 1 : -1))
    }

    return keys
  }

  const genCustomKeys = () => {
    const keys = getBasicKeys()
    if (!custom) return []
    let customKeys = Array.isArray(custom) ? custom : [custom]
    if (customKeys.length > 2) {
      customKeys = [customKeys[0], customKeys[1]]
    }
    if (
      customKeys.length === 2 &&
      props.title &&
      props.type !== 'rightColumn'
    ) {
      customKeys = [customKeys[0]]
    }
    if (customKeys.length === 1) {
      if (props.title && props.type !== 'rightColumn') {
        keys.push(
          { id: customKeys[0], type: 'custom' },
          { id: 0, type: 'number' },
          { id: 'delete', type: 'delete' }
        )
      } else {
        keys.push(
          { id: 0, type: 'number' },
          { id: customKeys[0], type: 'custom' }
        )
      }
    } else if (customKeys.length === 2) {
      keys.push(
        { id: customKeys[0], type: 'custom' },
        { id: 0, type: 'number' },
        { id: customKeys[1], type: 'custom' }
      )
    }
    return keys
  }
  useEffect(() => {
    if (type === 'rightColumn') {
      setKeysList(genCustomKeys())
    } else {
      setKeysList(defaultKey())
    }
  }, [type])

  const handleClick = (item: { id: string; type: string }) => {
    if (item.type === 'number' || item.type === 'custom') {
      onChange && onChange(item.id)
    }
    if (item.type === 'lock') {
      onClose && onClose()
    }
    if (item.type === 'delete') {
      onDelete && onDelete()
    }
    if (item.type === 'finish') {
      onConfirm && onConfirm()
      onClose && onClose()
    }
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
              {keysList?.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className={classNames({
                      'keyboard-wrapper': true,
                      'keyboard-wrapper-large':
                        item.id === 0 &&
                        type === 'rightColumn' &&
                        Array.isArray(custom) &&
                        custom.length === 1,
                    })}
                  >
                    <div
                      className={classNames({
                        key: true,
                        lock: item.type === 'lock',
                        delete: item.type === 'delete',
                      })}
                      onClick={() => handleClick(item)}
                    >
                      {(item.type === 'number' || item.type === 'custom') && (
                        <div>{item.id}</div>
                      )}
                      {item.type === 'lock' && (
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
                    </div>
                  </div>
                )
              })}
            </div>
            {type === 'rightColumn' && (
              <div className={`${classPrefix}__sidebar`}>
                <div className="keyboard-wrapper">
                  <div
                    className={classNames({ key: true })}
                    onClick={() =>
                      handleClick({ id: 'delete', type: 'delete' })
                    }
                  >
                    <img
                      src="https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="keyboard-wrapper keyboard-finish"
                  onClick={() => handleClick({ id: 'finish', type: 'finish' })}
                >
                  <div
                    className={classNames({
                      key: true,
                      finish: true,
                    })}
                  >
                    {confirmText || locale.done}
                  </div>
                </div>
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
