import React, { FunctionComponent, ReactNode, useMemo, useState } from 'react'
import classNames from 'classnames'
import { ArrowDown } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import Popup from '@/packages/popup/index.taro'
import { PopupProps } from '@/packages/popup/popup.taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
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
    const style = {
      background: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAnCAYAAABJ0cukAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOUNBQTQ0MkY3RTMxMUVBQjIzNEJCQkYxNDZGQjg5OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOUNBQTQ0M0Y3RTMxMUVBQjIzNEJCQkYxNDZGQjg5OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM5Q0FBNDQwRjdFMzExRUFCMjM0QkJCRjE0NkZCODk4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5Q0FBNDQxRjdFMzExRUFCMjM0QkJCRjE0NkZCODk4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+T12ahwAABClJREFUeNrUWVtIFFEY3pkdrbaCiAINK81VW3d2102pjKLtoXoJrNAswoeEXoyilx7sJXvIh6CHAoMg6yEfSpdECIqE0jCMbMm9qCVYUmR5S8huXmZO39nWOI7mzsy6uzqgM/vvzNnv+y/n/84ZjhBiWMwHF+kA+fn5y0ZHRzNwuTomgDnui9/vfzMvBJxWa7bE87W4tMbY8S8MhNz0BQLVugnY7fZdGORZPNNHJmSPUSf47QD/PN75z3NcpqD1IVEU8wC+dZojDIajyMu6WAG322zBmQf/7LzGnHeAdRtjmuAIKYoleMWxQnUEHA6HVZLldsb0m3oehdQQzzQSVILPJLIcYEw/4HkK/kG86yAsAZvNtgng3059hte/Gf56/uFCaGR8mIJdj3m2hzGNGAkpRM4vCPBzErBYLMko2A//DIQMoQ0WtgcCjWFnCVGswEzxCecqLc0y9Nyww2ariYhAbm7umgRB6GNM/QTgfT7fEzWD4t7dOK0D4TKAcrtcLkENeNx/gUoSpOnx4Gc9BHJyclZNjI8PMqY+judp2jSr1iuENDPi5fDX4WG32WxeogL81NGRIEk3NBNAh10uS9IIY/oIbxR6vd4WLXmJAq9Ayl1kTAUmk8mNyJrUgDfK8hFPV9dnTQSCHiLkO/Ndb8jzrXqKawYJQg4gsu6srKyV4cC/7ujo1CqneRSPxNh74PligPdE3PYVIDHuY6PRWCxPTp7VC35KSvwjwBpwdPP4gXYc86ZdZnr6Pf7S9HqexUs9z0qBLprz8wn+PzWRFknaKGsgjwlvCdLGH42GQ0lg+dqkMP+Enj+lF/yMWYgnJD1qEhhphOWgS2E2yQZDJWa/lEgIvGIa0D2HKJZGA7yiBgaZqO9AermdFstGXQR8fn+BootW4wfPRBE8zXmXoia2SYLgpsJRVwqBBJ2N+pnueRVhPR8l8MGCnaWw8wDCDSWQoasGQCKJnpjGcwkkKqMBfo7ZyQklQCOxWVcRg4QDXmhkSJRjsGvRAD8HCTuNhNPpXKtLzHn9/n0orBqm052GvL2lcfepTMs8PwsJqyRJRbrlNFpBCUBcYWaKE2h4tampqUtV6pP60HNtapuUksTY2NidiLcWUQPnMOhlxvQoITGxxOPxDIVdR2dnb/V2dr7Umn50/Q31261JC4UhUQYSVUxdtPCCUAK10RuvZeQ0LRQ2tD7fddxdyuT3TijJehATF/yinqmJ2wB+jCGRA11TH9xiXAwEQpG4i0gcZHLPjHSqF0Vx76IgEIpEA9a7+3H5K2RK4jnuPvTToXgR0LW9Htpap71iAzPVNsUIMH0XMdXkfLrfD9BdanifksiKW/5w3Emj3mcHBgb6kpKTn6KYzfBCehzg10H6lHPzMdIWq9U8znEpsXE6N4rTO9TjSGgPanG/pfwjwABn1PZcM5XI0AAAAABJRU5ErkJggg0KLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTkwMjA5MzIyMjIxMzkzMzc2NzAwNjg0MC0tDQo=') no-repeat center`,
      backgroundSize: '100% 100%',
      width: '28px',
      height: '24px',
    }
    return <View style={style} />
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
          return <ArrowDown size={18} />
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
