import React, { FunctionComponent, MouseEvent } from 'react'
import classNames from 'classnames'
import { Left } from '@nutui/icons-react-taro'
import Overlay from '@/packages/overlay/index.taro'
import bem from '@/utils/bem'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

type Direction = 'right' | 'left'
type Position = {
  top?: string
  bottom?: string
}

export interface FixedNavProps extends BasicComponent {
  className: string
  visible: boolean
  overlay: boolean
  list: Array<any>
  activeText: string
  inactiveText: string
  position: Position
  type: Direction
  onChange: (v: any) => void
  onSelected: (item: any, e: any) => void
  content: React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  className: 'nut-fixednav',
  activeText: '',
  inactiveText: '',
  type: 'right',
  position: {
    top: 'auto',
    bottom: 'auto',
  },
} as FixedNavProps

export const FixedNav: FunctionComponent<
  Partial<FixedNavProps> & React.HTMLAttributes<HTMLDivElement>
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
    onSelected,
    type,
    childern,
    content,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('fixednav')

  const classes = classNames(
    {
      active: visible,
    },
    type,
    className,
    b('')
  )

  const onSelectCb = (event: MouseEvent, item: any): void => {
    onSelected(item, event)
  }

  const onUpdateValue = (value = !visible): void => {
    onChange(value)
  }

  return (
    <div className={classes} style={position} {...rest}>
      {overlay && (
        <Overlay
          visible={visible}
          zIndex={200}
          onClick={() => onUpdateValue(false)}
        />
      )}
      <div className="list">
        {childern || (
          <div className="nut-fixednav__list">
            {list.map((item: any, index) => {
              return (
                <div
                  className="nut-fixednav__list-item"
                  onClick={(event) => onSelectCb(event, item)}
                  key={item.id || index}
                >
                  <img src={item.icon} alt="" />
                  <div className="nut-fixednav__list-text">{item.text}</div>
                  {item.num && <div className="b">{item.num}</div>}
                </div>
              )
            })}
          </div>
        )}
      </div>

      <div className="nut-fixednav__btn" onClick={() => onUpdateValue()}>
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
