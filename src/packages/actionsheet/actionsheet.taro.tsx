import React, { FunctionComponent, ReactNode } from 'react'
import Popup, { PopupProps } from '@/packages/popup/index.taro'
import { ComponentDefaults } from '@/utils/typings'

export type ItemType<T> = { [key: string]: T }

export interface ActionSheetProps extends PopupProps {
  visible: boolean
  description: ReactNode
  options: ItemType<string | boolean>[]
  optionKey: ItemType<string>
  cancelText: ReactNode
  onCancel: () => void
  onSelect: (item: ItemType<string | boolean>, index: number) => void
}
const defaultProps = {
  ...ComponentDefaults,
  visible: false,
  description: '',
  options: [],
  optionKey: { name: 'name', description: 'description' },
  cancelText: '',
  onCancel: () => {},
  onSelect: () => {},
} as unknown as ActionSheetProps
export const ActionSheet: FunctionComponent<
  Partial<ActionSheetProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'onSelect' | 'onClick'>
> = (props) => {
  const {
    children,
    cancelText,
    optionKey,
    title,
    subtitle,
    description,
    options,
    onCancel,
    onSelect,
    visible,
    className,
    style,
    ...rest
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-actionsheet'

  const cancelActionSheet = () => {
    onCancel && onCancel()
  }

  const chooseItem = (item: ItemType<string | boolean>, index: number) => {
    if (!item.disabled) {
      onSelect && onSelect(item, index)
    }
  }

  return (
    <Popup
      round
      visible={visible}
      position="bottom"
      title={title}
      subtitle={subtitle}
      className={classPrefix}
      onClose={() => {
        onCancel && onCancel()
      }}
    >
      <div className={`${classPrefix}-body ${className}`} style={style}>
        {description && (
          <div className={`${classPrefix}__description`}>{description}</div>
        )}
        {options.length ? (
          <div className={`${classPrefix}__list`}>
            {options.map((item, index) => {
              return (
                <div
                  className={`${classPrefix}__item ${
                    item.disabled ? 'disabled' : ''
                  } ${item.danger ? 'danger' : ''}`}
                  key={index}
                  onClick={() => chooseItem(item, index)}
                >
                  {item[optionKey.name]}
                  <div className={`${classPrefix}__item-description`}>
                    {item[optionKey.description]}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          children
        )}
        {cancelText && (
          <div
            className={`${classPrefix}__cancel`}
            onClick={() => cancelActionSheet()}
          >
            {cancelText}
          </div>
        )}
      </div>
    </Popup>
  )
}

ActionSheet.defaultProps = defaultProps
ActionSheet.displayName = 'NutActionSheet'
