import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import { Close } from '@nutui/icons-react'
import classNames from 'classnames'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type TagType = 'default' | 'primary' | 'success' | 'warning' | 'danger'

export interface TagProps extends BasicComponent {
  type: TagType
  background: string
  color: string
  plain: boolean
  round: boolean
  mark: boolean
  closeable: boolean
  closeIcon: ReactNode
  onClick: (e: MouseEvent) => void
  onClose: (e?: any) => void
}

const defaultProps = {
  ...ComponentDefaults,
  type: 'default',
  background: '',
  color: '',
  plain: false,
  round: false,
  mark: false,
  closeable: false,
  closeIcon: null,
  onClose: (e: any) => {},
  onClick: (e: MouseEvent) => {},
} as TagProps
export const Tag: FunctionComponent<Partial<TagProps>> = (props) => {
  const {
    className,
    style,
    background,
    plain,
    type,
    round,
    children,
    mark,
    closeable,
    closeIcon,
    color,
    onClick,
    onClose,
  } = {
    ...defaultProps,
    ...props,
  }
  const [tagClass, setTagClass] = useState('')
  const [visible, setVisible] = useState(true)
  const classPrefix = 'nut-tag'
  const classes = () => {
    return classNames({
      [classPrefix]: true,
      [`${classPrefix}--${type}`]: type,
      [`${classPrefix}--plain`]: plain,
      [`${classPrefix}--round`]: round,
      [`${classPrefix}--mark`]: mark,
      [`${classPrefix}--close`]: closeable,
      [`${className}`]: className,
    })
  }
  useEffect(() => {
    setTagClass(classes())
  }, [type, background, color, plain, round, mark, closeable, className])

  const handleClick = (e: any) => {
    onClick && onClick(e)
  }
  // 综合考虑 color、background、plain 组合使用时的效果
  const getStyle = (): CSSProperties => {
    const style: CSSProperties = {}
    // 标签内字体颜色
    if (color) {
      style.color = color
    } else if (background && plain) {
      style.color = background
    }
    // 标签背景与边框颜色
    if (plain) {
      style.borderColor = background
    } else if (background) {
      style.background = background
    }
    return style
  }
  return (
    <>
      {closeable ? (
        visible && (
          <div
            className={tagClass}
            style={{ ...style, ...getStyle() }}
            onClick={(e) => handleClick(e)}
          >
            {children && (
              <span className={`${classPrefix}-text`}>{children}</span>
            )}
            {React.isValidElement(closeIcon) ? (
              <i
                className={`${classPrefix}-custom-icon`}
                onClick={(e) => {
                  setVisible(false)
                  onClose && onClose(e)
                }}
              >
                {closeIcon}
              </i>
            ) : (
              <Close
                width={12}
                height={12}
                onClick={(e) => {
                  setVisible(false)
                  onClose && onClose(e)
                }}
              />
            )}
          </div>
        )
      ) : (
        <div
          className={tagClass}
          style={{ ...style, ...getStyle() }}
          onClick={(e) => handleClick(e)}
        >
          {children && (
            <span className={`${classPrefix}-text`}>{children}</span>
          )}
        </div>
      )}
    </>
  )
}

Tag.defaultProps = defaultProps
Tag.displayName = 'NutTag'
