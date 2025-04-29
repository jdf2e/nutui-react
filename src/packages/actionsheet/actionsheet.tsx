import React, { FunctionComponent } from 'react'
import { Close } from '@nutui/icons-react'
import Popup from '@/packages/popup/index'
import { ComponentDefaults } from '@/utils/typings'
import { mergeProps } from '@/utils/merge-props'
import { ActionSheetOption, WebActionSheetProps } from '@/types'

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
} as unknown as WebActionSheetProps
export const ActionSheet: FunctionComponent<
  Partial<WebActionSheetProps> &
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
      <div className={`${className}`} style={style}>
        {title && (
          <div className={`${classPrefix}-${position}-title`}>{title}</div>
        )}
        {options.length ? (
          <div className={`${classPrefix}-list`}>
            {options.map((item, index) => {
              const statusClass = `${item.disabled ? `${classPrefix}-item-disabled` : ''} ${item.danger ? `${classPrefix}-item-danger` : ''}`
              return (
                <div
                  className={`${classPrefix}-item ${statusClass} ${index !== options.length - 1 ? `${classPrefix}-item-border` : ''}`}
                  key={index}
                  onClick={() => chooseItem(item, index)}
                >
                  <div className={`${classPrefix}-item-name ${statusClass}`}>
                    {item[optionKey.name]}
                  </div>
                  <div
                    className={`${classPrefix}-item-description ${statusClass}`}
                  >
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
