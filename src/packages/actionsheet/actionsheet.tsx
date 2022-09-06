import React, { FunctionComponent } from 'react'
import Popup from '@/packages/popup'
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
  onCancel: () => void
  onChoose: (item: any, index: number) => void
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
  onCancel: () => {},
  onChoose: () => {},
  visible: false,
  className: '',
  style: {},
} as ActionSheetProps
export const ActionSheet: FunctionComponent<
  Partial<ActionSheetProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    cancelTxt,
    optionTag,
    optionSubTag,
    chooseTagValue,
    title,
    color,
    description,
    menuItems,
    onCancel,
    onChoose,
    visible,
    className,
    style,
    ...rest
  } = { ...defaultProps, ...props }

  const b = bem('actionsheet')

  const isHighlight = (item: ItemType<string | boolean>) => {
    return props.chooseTagValue &&
      props.chooseTagValue === item[props.optionTag || 'name']
      ? props.color
      : '#1a1a1a'
  }

  const cancelActionSheet = () => {
    onCancel && onCancel()
  }

  const chooseItem = (item: ItemType<string | boolean>, index: number) => {
    if (!item.disable) {
      onChoose && onChoose(item, index)
    }
  }

  return (
    <Popup
      round
      visible={visible}
      position="bottom"
      onClose={() => {
        onCancel && onCancel()
      }}
    >
      <div className={`${b()} ${className}`} style={style} {...rest}>
        {title && <div className={b('title')}>{title}</div>}
        {description && (
          <div className={`${b('item')} desc`}>{description}</div>
        )}
        {menuItems.length ? (
          <div className={b('menu')}>
            {menuItems.map((item, index) => {
              return (
                <div
                  className={`${b('item')} ${
                    item.disable ? b('item-disabled') : ''
                  }`}
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
        ) : (
          children
        )}
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
