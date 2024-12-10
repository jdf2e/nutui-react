import React, { FunctionComponent, ReactNode } from 'react'
import { View } from '@tarojs/components'
import Popup, { PopupProps } from '@/packages/popup/index.taro'
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
    Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'onSelect' | 'onClick'>
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
      <View className={`${className}`} style={style}>
        {options.length ? (
          <View className={`${classPrefix}-list`}>
            {options.map((item, index) => {
              const statusClass = `${item.disabled ? `${classPrefix}-item-disabled` : ''} ${item.danger ? `${classPrefix}-item-danger` : ''}`
              return (
                <View
                  className={`${classPrefix}-item ${statusClass}`}
                  key={index}
                  onClick={() => chooseItem(item, index)}
                >
                  <View className={`${classPrefix}-item-name ${statusClass}`}>
                    {item[optionKey.name]}
                  </View>
                  <View
                    className={`${classPrefix}-item-description ${statusClass}`}
                  >
                    {item[optionKey.description]}
                  </View>
                </View>
              )
            })}
          </View>
        ) : (
          children
        )}
        {cancelText && (
          <View
            className={`${classPrefix}-cancel`}
            onClick={() => cancelActionSheet()}
          >
            {cancelText}
          </View>
        )}
      </View>
      <View className={`${classPrefix}-safe-area`} />
    </Popup>
  )
}

ActionSheet.displayName = 'NutActionSheet'
