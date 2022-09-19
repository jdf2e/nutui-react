import React, { FunctionComponent, MouseEvent } from 'react'
import classNames from 'classnames'
import Icon from '@/packages/icon'
import Overlay from '@/packages/overlay'
import bem from '@/utils/bem'
import { useConfig } from '@/packages/configprovider'
import { IComponent, ComponentDefaults } from '@/utils/typings'

type Direction = 'right' | 'left'
type Position = {
  top?: string
  bottom?: string
}

export interface FixedNavProps extends IComponent {
  fixednavClass: string
  visible: boolean
  overlay: boolean
  navList: Array<any>
  activeText: string
  unActiveText: string
  position: Position
  type: Direction
  onChange: (v: any) => void
  onSelected: (v: any, event: MouseEvent) => void
  slotList: React.ReactNode
  slotBtn: React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  fixednavClass: 'nut-fixednav',
  activeText: '',
  unActiveText: '',
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
    iconClassPrefix,
    iconFontClassName,
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
    fixednavClass,
    b('')
  )

  const onSelectCb = (event: MouseEvent, item: any): void => {
    onSelected(item, event)
  }

  const onUpdateValue = (value = !visible): void => {
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
        <Overlay
          visible={visible}
          zIndex={200}
          onClick={() => onUpdateValue(false)}
        />
      )}
      <div className="list">
        {slotList || (
          <div className="nut-fixednav__list">
            {navList.map((item: any, index) => {
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
        {slotBtn || (
          <>
            <Icon
              classPrefix={iconClassPrefix}
              fontClassName={iconFontClassName}
              name="left"
              color="#fff"
            />
            <div className="text">
              {visible
                ? activeText || locale.fixednav.activeText
                : unActiveText || locale.fixednav.unActiveText}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

FixedNav.defaultProps = defaultProps
FixedNav.displayName = 'NutFixedNav'
