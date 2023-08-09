import React, { FunctionComponent, MouseEvent } from 'react'
import classNames from 'classnames'
import { Left } from '@nutui/icons-react'
import Overlay from '@/packages/overlay'
import { useConfig } from '@/packages/configprovider'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type FixedNavDirection = 'right' | 'left'
export type FixedNavPosition = {
  top?: string
  bottom?: string
}

export interface FixedNavProps extends BasicComponent {
  visible: boolean
  overlay: boolean
  list: Array<any>
  activeText: string
  inactiveText: string
  position: FixedNavPosition
  type: FixedNavDirection
  onChange: (item: any) => void
  onSelect: (item: any, event: MouseEvent) => void
  content: React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  activeText: '',
  inactiveText: '',
  type: 'right',
  position: {
    top: 'auto',
    bottom: 'auto',
  },
} as FixedNavProps

export const FixedNav: FunctionComponent<
  Partial<FixedNavProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'onSelect' | 'content'
    >
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    overlay,
    visible,
    list,
    activeText,
    inactiveText,
    position,
    onChange,
    onSelect,
    type,
    children,
    style,
    content,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-fixednav'

  const classes = classNames(
    {
      active: visible,
    },
    type,
    className,
    classPrefix
  )

  const handleClick = (item: any, event: MouseEvent): void => {
    onSelect(item, event)
  }

  const onUpdateValue = (value = !visible): void => {
    onChange(value)
  }

  return (
    <div
      className={classes}
      style={{
        ...position,
        ...style,
      }}
      {...rest}
    >
      {overlay && (
        <Overlay
          visible={visible}
          style={{ '--nutui-overlay-zIndex': 200 }}
          onClick={() => onUpdateValue(false)}
        />
      )}
      <div className="list">
        {children || (
          <div className={`${classPrefix}__list`}>
            {list.map((item: any, index) => {
              return (
                <div
                  className={`${classPrefix}__list-item`}
                  onClick={(event) => handleClick(item, event)}
                  key={item.id || index}
                >
                  <img src={item.icon} alt="" />
                  <div className={`${classPrefix}__list-text`}>{item.text}</div>
                  {item.num && <div className="b">{item.num}</div>}
                </div>
              )
            })}
          </div>
        )}
      </div>

      <div className={`${classPrefix}__btn`} onClick={() => onUpdateValue()}>
        {content || (
          <>
            <Left color="#fff" />
            <div className="text">
              {visible
                ? activeText || locale.fixednav.activeText
                : inactiveText || locale.fixednav.inactiveText}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

FixedNav.defaultProps = defaultProps
FixedNav.displayName = 'NutFixedNav'
