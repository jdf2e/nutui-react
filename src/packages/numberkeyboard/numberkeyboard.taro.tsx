import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useState,
} from 'react'
import classNames from 'classnames'
import bem from '@/utils/bem'
import Popup from '@/packages/popup/index.taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'

export interface NextListObj {
  type: string
  id: string
}
export interface NumberKeyboardProps {
  confirmText: string
  title: string
  visible: boolean
  type: string
  customKey: Array<string>
  randomKeys: boolean
  popClass: string
  className: string
  style?: CSSProperties
  onChange?: (value: string) => void
  onDelete?: () => void
  onClose: () => void
}
const defaultProps = {
  confirmText: '',
  title: '',
  visible: false,
  type: 'default',
  customKey: [],
  className: '',
  randomKeys: false,
  popClass: '',
  onClose: () => {},
} as NumberKeyboardProps
export const NumberKeyboard: FunctionComponent<
  Partial<NumberKeyboardProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    title,
    confirmText,
    visible,
    type,
    customKey,
    randomKeys,
    popClass,
    style,
    className,
    onChange,
    onDelete,
    onClose,
  } = props
  const b = bem('numberkeyboard')
  const [show, setShow] = useState<boolean | undefined>(visible)
  const [clickKeyIndex, setClickKeyIndex] =
    useState<string | undefined>(undefined)
  const [keysList, setKeysList] = useState<Array<any> | undefined>([])
  useEffect(() => {
    setShow(visible)
  }, [visible])
  const defaultKey = () => {
    let leftBottomKey = {
      id: 'lock',
      type: 'lock',
    }
    if (customKey) {
      const customKeys: Array<string> = Array.isArray(customKey)
        ? customKey
        : [customKey]
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
    if (randomKeys) {
      return keys.sort(() => (Math.random() > 0.5 ? 1 : -1))
    }

    return keys
  }

  const genCustomKeys = () => {
    const keys = getBasicKeys()
    if (!customKey) return []
    let customKeys = Array.isArray(customKey) ? customKey : [customKey]
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
    if (props.type === 'rightColumn' || props.title !== '') {
      setKeysList(genCustomKeys())
    } else {
      setKeysList(defaultKey())
    }
  }, [])

  const onTouchstart = (
    item: { id: string; type: string },
    event: React.TouchEvent<HTMLElement>
  ) => {
    event.stopPropagation()
    setClickKeyIndex(item.id)
    if (item.type === 'number' || item.type === 'custom') {
      onChange && onChange(item.id)
    }
    if (item.type === 'lock') {
      onClose && onClose()
    }
    if (item.type === 'delete') {
      onDelete && onDelete()
    }
  }
  const onTouchMove = (event: React.TouchEvent<HTMLElement>) => {
    event.stopPropagation()
  }
  const onTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    event.preventDefault()
    setClickKeyIndex(undefined)
  }
  return (
    <div>
      <Popup
        visible={show}
        position="bottom"
        popClass={popClass}
        onClickOverlay={onClose}
        onClickCloseIcon={onClose}
        overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
      >
        <div className={`${b()} ${className}`} style={{ ...style }}>
          {title ? (
            <div className={b('header')}>
              <h3 className={b('header__tit')}>{title}</h3>
              {type === 'default' ? (
                <span className={b('header__close')} onClick={onClose}>
                  {locale.done}
                </span>
              ) : null}
            </div>
          ) : null}
          <div className={b('body')}>
            <div className={b('body__keys')}>
              {keysList?.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className={classNames({
                      'key-board-wrapper': true,
                      'key-board-wrapper-large':
                        item.id === 0 &&
                        type === 'rightColumn' &&
                        Array.isArray(customKey) &&
                        customKey.length === 1,
                    })}
                  >
                    <div
                      className={classNames({
                        key: true,
                        active: item.id === clickKeyIndex,
                        lock: item.type === 'lock',
                        delete: item.type === 'delete',
                      })}
                      onTouchStart={(event) => onTouchstart(item, event)}
                      onTouchMove={onTouchMove}
                      onTouchEnd={onTouchEnd}
                    >
                      {item.type === 'number' || item.type === 'custom' ? (
                        <div>{item.id}</div>
                      ) : null}
                      {item.type === 'lock' ? (
                        <img
                          src="https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
                          alt=""
                        />
                      ) : null}
                      {item.type === 'delete' ? (
                        <img
                          src="https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
                          alt=""
                        />
                      ) : null}
                    </div>
                  </div>
                )
              })}
            </div>
            {type === 'rightColumn' ? (
              <div className={b('sidebar')}>
                <div className="key-board-wrapper">
                  <div
                    className={classNames({
                      key: true,
                      active: clickKeyIndex === 'delete',
                    })}
                    onTouchStart={(event) =>
                      onTouchstart({ id: 'delete', type: 'delete' }, event)
                    }
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  >
                    <img
                      src="https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="key-board-wrapper key-board-finish"
                  onClick={onClose}
                >
                  <div
                    className={classNames({
                      key: true,
                      finish: true,
                      activeFinsh: clickKeyIndex === 'finish',
                    })}
                  >
                    {confirmText || locale.done}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Popup>
    </div>
  )
}

NumberKeyboard.defaultProps = defaultProps
NumberKeyboard.displayName = 'NutNumberKeyboard'
