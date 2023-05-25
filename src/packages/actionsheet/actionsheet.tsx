import React, { FunctionComponent, ReactNode } from 'react'
import Popup from '@/packages/popup'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type ItemType<T> = { [key: string]: T }

export interface ActionSheetProps extends BasicComponent {
  visible: boolean
  title: ReactNode
  description: ReactNode
  options: ItemType<string | boolean>[]
  optionKey: ItemType<string>
  cancelText: ReactNode
  onCancel: () => void
  onSelect: (item: any, index: number) => void
}
const defaultProps = {
  ...ComponentDefaults,
  visible: false,
  title: '',
  description: '',
  options: [],
  optionKey: { name: 'name', description: 'description' },
  cancelText: '',
  onCancel: () => {},
  onSelect: () => {},
} as ActionSheetProps
export const ActionSheet: FunctionComponent<
  Partial<ActionSheetProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'onSelect'>
> = (props) => {
  const {
    children,
    cancelText,
    optionKey,
    title,
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
    if (!item.disable) {
      onSelect && onSelect(item, index)
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
      <div className={`${classPrefix} ${className}`} style={style} {...rest}>
        {title && <div className={`${classPrefix}__title`}>{title}</div>}
        {description && (
          <div className={`${classPrefix}__description`}>{description}</div>
        )}
        {options.length ? (
          <div className={`${classPrefix}__list`}>
            {options.map((item, index) => {
              return (
                <div
                  className={`${classPrefix}__item ${
                    item.disable ? 'disabled' : ''
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
