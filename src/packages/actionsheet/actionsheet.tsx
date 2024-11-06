import React, { FunctionComponent, ReactNode } from 'react'
import Popup, { PopupProps } from '@/packages/popup/index'
import { ComponentDefaults } from '@/utils/typings'
import { mergeProps } from '@/utils/merge-props'

export type ActionSheetOption<T> = { [key: string]: T }

export interface ActionSheetProps extends PopupProps {
  visible: boolean
  description: ReactNode
  options: ActionSheetOption<string | boolean>[]
  optionKey: ActionSheetOption<string>
  cancelText: ReactNode
  onCancel: () => void
  onSelect: (item: ActionSheetOption<string | boolean>, index: number) => void
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
  } = mergeProps(defaultProps, props)

  const classPrefix = 'nut-actionsheet'

  const cancelActionSheet = () => {
    onCancel && onCancel()
  }

  const chooseItem = (
    item: ActionSheetOption<string | boolean>,
    index: number
  ) => {
    if (!item.disabled) {
      onSelect && onSelect(item, index)
    }
  }

  return (
    <Popup
      {...rest}
      round
      visible={visible}
      position="bottom"
      title={title}
      description={description}
      className={classPrefix}
      onClose={() => {
        onCancel && onCancel()
      }}
    >
      <div className={`${className}`} style={style}>
        {options.length ? (
          <div className={`${classPrefix}-list`}>
            {options.map((item, index) => {
              return (
                <div
                  className={`${classPrefix}-item ${
                    item.disabled ? 'disabled' : ''
                  } ${item.danger ? 'danger' : ''}`}
                  key={index}
                  onClick={() => chooseItem(item, index)}
                >
                  {item[optionKey.name]}
                  <div className={`${classPrefix}-item-description`}>
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
            className={`${classPrefix}-cancel`}
            onClick={() => cancelActionSheet()}
          >
            {cancelText}
          </div>
        )}
      </div>
      <div className={`${classPrefix}-safe-area`} />
    </Popup>
  )
}

ActionSheet.displayName = 'NutActionSheet'
