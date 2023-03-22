import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useState,
} from 'react'
import { Close } from '@nutui/icons-react'
import classNames from 'classnames'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface TagProps extends BasicComponent {
  type: TagType
  color: string
  textColor: string
  plain: boolean
  round: boolean
  mark: boolean
  closeable: boolean
  closeIcon: React.ReactNode
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
  closeIcon: null,
  prefixCls: 'nut-tag',
  onClose: (e: any) => {},
  onClick: (e: MouseEvent) => {},
} as TagProps
export const Tag: FunctionComponent<Partial<TagProps>> = (props) => {
  const {
    className,
    style,
    color,
    plain,
    type,
    round,
    prefixCls,
    children,
    mark,
    closeable,
    closeIcon,
    textColor,
    onClick,
    onClose,
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
    className,
  ])
  const classes = () => {
    const prefixCls = 'nut-tag'
    return classNames({
      [prefixCls]: true,
      [`${prefixCls}--${type}`]: type,
      [`${prefixCls}--plain`]: plain,
      [`${prefixCls}--round`]: round,
      [`${prefixCls}--mark`]: mark,
      [`${prefixCls}--close`]: closeable,
      [`${className}`]: className,
    })
  }
  const handleClick = (e: any) => {
    if (props.onClick) {
      props.onClick(e)
    }
  }
  // 综合考虑 textColor、color、plain 组合使用时的效果
  const getStyle = (): CSSProperties => {
    const style: CSSProperties = {}
    // 标签内字体颜色
    if (textColor) {
      style.color = textColor
    } else if (color && plain) {
      style.color = color
    }
    // 标签背景与边框颜色
    if (plain) {
      style.background = '#fff'
      style.borderColor = color
    } else if (color) {
      style.background = color
    }
    return style
  }
  return (
    <>
      {closeable ? (
        isTagShow && (
          <div
            className={btnName}
            style={{ ...style, ...getStyle() }}
            onClick={(e) => handleClick(e)}
          >
            {children && <span className="nut-tag-text">{children}</span>}
            {React.isValidElement(closeIcon) ? (
              <i
                className="nut-tag-custom-icon"
                onClick={(e) => {
                  setIsTagShow(false)
                  props.onClose && props.onClose(e)
                }}
              >
                {closeIcon}
              </i>
            ) : (
              <Close
                width={12}
                height={12}
                onClick={(e) => {
                  setIsTagShow(false)
                  props.onClose && props.onClose(e)
                }}
              />
            )}
          </div>
        )
      ) : (
        <div
          className={btnName}
          style={{ ...style, ...getStyle() }}
          onClick={(e) => handleClick(e)}
        >
          {children && <span className="nut-tag-text">{children}</span>}
        </div>
      )}
    </>
  )
}

Tag.defaultProps = defaultProps
Tag.displayName = 'NutTag'
