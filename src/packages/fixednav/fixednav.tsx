import React, { FunctionComponent, useState, useEffect, MouseEvent, HTMLProps } from 'react'
import Icon from '@/packages/icon'
import Overlay from '@/packages/overlay'
import bem from '@/utils/bem'
import classNames from 'classnames'

type Direction = 'right' | 'left'
type Position = {
  top?: string
  bottom?: string
}
export interface FixedNavProps {
  fixednavClass: string
  visible: boolean
  overlay: boolean
  navList: Array<object>
  activeText: string
  unActiveText: string
  position: Position
  type: Direction
  onChange: (v: any) => void
  onSelected: Function
  slotList: HTMLProps<HTMLElement>
  slotBtn: HTMLProps<HTMLElement>
}

const defaultProps = {
  fixednavClass: 'nut-fixednav',
  activeText: '收起导航',
  unActiveText: '快速导航',
  type: 'right',
  position: {
    top: 'auto',
    bottom: 'auto',
  },
} as FixedNavProps

export const FixedNav: FunctionComponent<
  Partial<FixedNavProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    fixednavClass,
    overlay,
    visible,
    navList,
    activeText,
    unActiveText,
    position,
    onChange,
    onSelected,
    type,
    slotList,
    slotBtn,
    ...rest
  } = { ...defaultProps, ...props }

  const b = bem('fixednav')

  const classes = classNames(
    {
      active: visible,
    },
    type,
    fixednavClass,
    b('')
  )

  const onSelectCb = (event: MouseEvent, item: any): void => {
    onSelected(item, event)
  }

  const onUpdateValue = (value: boolean = !visible): void => {
    onChange(value)
  }

  // const [classNames, setClassNames] = useState('')

  // const classes = () => {
  //   return `${fixednavClass} ${type} ${visible ? 'active' : ''}`
  // }

  // useEffect(() => {
  //   setClassNames(classes())
  // }, [visible])

  return (
    <div className={classes} style={position} {...rest}>
      {overlay && (
        <Overlay visible={visible} zIndex={200} onClick={() => onUpdateValue(false)}></Overlay>
      )}
      <div className="list">
        {slotList ? (
          slotList
        ) : (
          <div className="nut-fixednav__list">
            {navList.map((item: any, index) => {
              return (
                <div
                  className="nut-fixednav__list-item"
                  onClick={(event) => onSelectCb(event, item)}
                  key={item.id || index}
                >
                  <img src={item.icon} />
                  <div className="span">{item.text}</div>
                  {item.num && <div className="b">{item.num}</div>}
                </div>
              )
            })}
          </div>
        )}
      </div>

      <div className="nut-fixednav__btn" onClick={() => onUpdateValue()}>
        {slotBtn ? (
          slotBtn
        ) : (
          <>
            <Icon name="left" color="#fff" />
            <div className="text">{visible ? activeText : unActiveText}</div>
          </>
        )}
      </div>
    </div>
  )
}

FixedNav.defaultProps = defaultProps
FixedNav.displayName = 'NutFixedNav'
