import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useState,
} from 'react'
import Icon from '@/packages/icon/index.taro'

import { IComponent, ComponentDefaults } from '@/utils/typings'

export interface TagProps extends IComponent {
  type: TagType
  color: string
  textColor: string
  plain: boolean
  round: boolean
  mark: boolean
  closeable: boolean
  prefixCls: string
  onClick: (e: MouseEvent) => void
  onClose: (e?: any) => void
  children?: React.ReactNode
}

export type TagType = 'default' | 'primary' | 'success' | 'warning' | 'danger'

const defaultProps = {
  ...ComponentDefaults,
  type: 'default',
  color: '',
  textColor: '',
  plain: false,
  round: false,
  mark: false,
  closeable: false,
  prefixCls: 'nut-tag',
  onClose: (e: any) => {},
  onClick: (e: MouseEvent) => {},
} as TagProps
export const Tag: FunctionComponent<Partial<TagProps>> = (props) => {
  const {
    color,
    plain,
    type,
    round,
    prefixCls,
    children,
    mark,
    closeable,
    textColor,
    onClick,
    onClose,
    iconClassPrefix,
    iconFontClassName,
  } = {
    ...defaultProps,
    ...props,
  }
  const [btnName, setBtnName] = useState('')
  const [isTagShow, setIsTagShow] = useState(true)
  useEffect(() => {
    setBtnName(classes())
  }, [
    type,
    color,
    textColor,
    plain,
    round,
    mark,
    closeable,
    prefixCls,
    onClick,
    onClose,
  ])
  const classes = () => {
    const prefixCls = 'nut-tag'
    return `${prefixCls}
    ${type ? `${prefixCls}--${type}` : ''}
    ${plain ? `${prefixCls}--plain` : ''}
    ${round ? `${prefixCls}--round` : ''}
    ${mark ? `${prefixCls}--mark` : ''}
    ${closeable ? `${prefixCls}--close` : ''}`
  }
  const handleClick = (e: any) => {
    if (props.onClick) {
      props.onClick(e)
    }
  }
  const getStyle = () => {
    const style: CSSProperties = {}
    if (textColor) {
      style.color = textColor
      if (plain) {
        style.background = '#fff'
      } else if (color) {
        style.background = color
      }
    } else if (color) {
      style.color = '#fff'
      style.background = color
    }
    return style
  }
  return (
    <div>
      {closeable ? (
        isTagShow && (
          <div
            className={`${btnName}`}
            style={getStyle()}
            onClick={(e) => handleClick(e)}
          >
            {children && <span className="text">{children}</span>}
            <Icon
              classPrefix={iconClassPrefix}
              fontClassName={iconFontClassName}
              className="_icon"
              name="close"
              size="12"
              onClick={(e) => {
                setIsTagShow(false)
                if (props.onClose) {
                  props.onClose(e)
                }
              }}
            />
          </div>
        )
      ) : (
        <div
          className={`${btnName}`}
          style={getStyle()}
          onClick={(e) => handleClick(e)}
        >
          {children && <span className="text">{children}</span>}
        </div>
      )}
    </div>
  )
}

Tag.defaultProps = defaultProps
Tag.displayName = 'NutTag'
