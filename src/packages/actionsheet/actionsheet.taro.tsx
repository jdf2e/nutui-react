import React, { FunctionComponent } from 'react'
import { View } from '@tarojs/components'
import { Close } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import Popup from '@/packages/popup/index.taro'
import { ComponentDefaults } from '@/utils/typings'
import { mergeProps } from '@/utils/merge-props'
import { ActionSheetOption, TaroActionSheetProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  visible: false,
  description: '',
  options: [],
  optionKey: { name: 'name', description: 'description' },
  cancelText: '',
  position: 'bottom',
  onCancel: () => {},
  onSelect: () => {},
} as unknown as TaroActionSheetProps
export const ActionSheet: FunctionComponent<
  Partial<TaroActionSheetProps> &
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
    position,
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
      title={title}
      round
      visible={visible}
      position={position}
      description={description}
      className={`${classPrefix} ${classPrefix}-${position}`}
      onClose={() => {
        onCancel?.()
      }}
      closeable={position === 'top'}
      closeIcon={<Close className={`${classPrefix}-close-icon`} />}
    >
      <View className={`${className}`} style={style}>
        {options.length ? (
          <View className={`${classPrefix}-list`}>
            {options.map((item, index) => {
              const statusClass = `${item.disabled ? `${classPrefix}-item-disabled` : ''} ${item.danger ? `${classPrefix}-item-danger` : ''}`
              return (
                <View
                  className={classNames(`${classPrefix}-item`, statusClass, {
                    [`${classPrefix}-item-border`]:
                      index !== options.length - 1,
                  })}
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
