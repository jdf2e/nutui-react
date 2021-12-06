import React, { FunctionComponent, useState, useEffect } from 'react'
import Popup from '@/packages/popup'
import './actionsheet.scss'
import bem from '@/utils/bem'

export type ItemType<T> = { [key: string]: T }

export interface ActionSheetProps {
  cancelTxt: string
  optionTag: string
  optionSubTag: string
  chooseTagValue: string
  title: string
  color: string
  description: string
  menuItems: ItemType<string | boolean>[]
  cancel: () => void
  choose: (item: any, index: number) => void
  visible: boolean
  className: string
  style: React.CSSProperties
}
const defaultProps = {
  cancelTxt: '',
  optionTag: 'name',
  optionSubTag: 'subname',
  chooseTagValue: '',
  title: '',
  color: '#ee0a24',
  description: '',
  menuItems: [],
  cancel: () => {},
  choose: () => {},
  visible: false,
  className: '',
  style: {},
} as ActionSheetProps
export const ActionSheet: FunctionComponent<
  Partial<ActionSheetProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    cancelTxt,
    optionTag,
    optionSubTag,
    chooseTagValue,
    title,
    color,
    description,
    menuItems,
    cancel,
    choose,
    visible,
    className,
    style,
  } = { ...defaultProps, ...props }

  const [isShow, setIsShow] = useState(false)
  const b = bem('actionsheet')

  useEffect(() => {
    setIsShow(visible)
  }, [visible])

  const isHighlight = (item: ItemType<string | boolean>) => {
    return props.chooseTagValue && props.chooseTagValue === item[props.optionTag || 'name']
      ? props.color
      : '#1a1a1a'
  }

  const cancelActionSheet = () => {
    cancel && cancel()
  }

  const chooseItem = (item: ItemType<string | boolean>, index: number) => {
    if (!item.disable) {
      choose && choose(item, index)
    }
  }

  return (
    <Popup
      round
      visible={visible}
      position="bottom"
      onClose={() => {
        cancel && cancel()
      }}
    >
      <div className={`${b()} ${className}`} style={style}>
        {title && <div className={b('title')}>{title}</div>}
        {description && <div className={`${b('item')} desc`}>{description}</div>}
        {menuItems.length ? (
          <div className={b('menu')}>
            {menuItems.map((item, index) => {
              return (
                <div
                  className={`${b('item')} ${item.disable ? b('item-disabled') : ''}`}
                  style={{ color: isHighlight(item) }}
                  key={index}
                  onClick={() => chooseItem(item, index)}
                >
                  {item[optionTag]}
                  <div className="subdesc">{item[optionSubTag]}</div>
                </div>
              )
            })}
          </div>
        ) : null}
        {cancelTxt && (
          <div className={b('cancel')} onClick={() => cancelActionSheet()}>
            {cancelTxt}
          </div>
        )}
      </div>
    </Popup>
  )
}

ActionSheet.defaultProps = defaultProps
ActionSheet.displayName = 'NutActionSheet'
