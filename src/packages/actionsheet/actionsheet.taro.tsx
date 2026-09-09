import React, { FunctionComponent, ReactNode } from 'react'
import { View, Image } from '@tarojs/components'
import Popup from '@/packages/popup/index.taro'
import { ComponentDefaults } from '@/utils/typings'
import { mergeProps } from '@/utils/merge-props'
import { ActionSheetOption, TaroActionSheetProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  visible: false,
  description: '',
  titleAlign: 'center',
  options: [],
  optionKey: { name: 'name', description: 'description', icon: 'icon' },
  columns: 5,
  position: 'bottom',
  closeIconPosition: 'top-right',
  cancelText: '',
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
    titleAlign,
    description,
    headerLeft,
    headerRight,
    options,
    columns,
    layout,
    onCancel,
    onSelect,
    visible,
    position,
    closeable,
    closeIconPosition,
    className,
    style,
    ...rest
  } = mergeProps(defaultProps, props)

  const classPrefix = 'nut-actionsheet'
  const isTop = position === 'top'
  const effectiveLayout = layout ?? (position === 'top' ? 'grid' : 'list')

  const chooseItem = (item: ActionSheetOption<ReactNode>, index: number) => {
    if (!item.disabled) {
      onSelect && onSelect(item, index)
    }
  }

  const nameKey = optionKey?.name || 'name'
  const descriptionKey = optionKey?.description || 'description'
  const iconKey = optionKey?.icon || 'icon'

  const hasIcon = (icon: ReactNode) =>
    icon !== undefined && icon !== null && icon !== ''
  const hasListIcon =
    effectiveLayout === 'list' && options.some((item) => hasIcon(item[iconKey]))

  // headerLeft/headerRight 为自定义槽,与默认关闭按钮同侧冲突时以槽位为准
  const closeAtLeft = closeIconPosition === 'top-left'
  const showClose = closeable && (closeAtLeft ? !headerLeft : !headerRight)

  const renderHeader = () => {
    if (!title && !description && !headerLeft && !headerRight) return null
    const showDescription = titleAlign === 'center' && description
    return (
      <View
        className={`${classPrefix}-header ${classPrefix}-header-${titleAlign}`}
      >
        {headerLeft && (
          <View className={`${classPrefix}-header-slot-left`}>
            {headerLeft}
          </View>
        )}
        {title && (
          <View className={`${classPrefix}-header-title`}>{title}</View>
        )}
        {showDescription && (
          <View className={`${classPrefix}-header-description`}>
            {description}
          </View>
        )}
        {headerRight && (
          <View className={`${classPrefix}-header-slot-right`}>
            {headerRight}
          </View>
        )}
      </View>
    )
  }

  const renderIcon = (icon: ReactNode) => {
    if (!hasIcon(icon)) return null
    const content =
      typeof icon === 'string' ? (
        <Image className={`${classPrefix}-grid-icon-img`} src={icon} />
      ) : (
        icon
      )
    return <View className={`${classPrefix}-grid-icon`}>{content}</View>
  }

  const renderListIcon = (icon: ReactNode) => {
    if (!hasIcon(icon)) return null
    const content =
      typeof icon === 'string' ? (
        <Image className={`${classPrefix}-item-icon-img`} src={icon} />
      ) : (
        icon
      )
    return <View className={`${classPrefix}-item-icon`}>{content}</View>
  }

  const renderGrid = () => {
    const cols = Number(columns) === 4 ? 4 : 5
    const itemWidth = 'var(--nutui-actionsheet-grid-item-width, 50px)'
    const columnGap =
      cols > 1
        ? `calc((100% - ${cols} * ${itemWidth} * var(--nut-scale-f, 1)) / ${cols - 1})`
        : '0'
    return (
      <View
        className={`${classPrefix}-grid ${cols === 4 ? `${classPrefix}-grid-cols-4` : ''}`}
        style={{ columnGap }}
      >
        {options.map((item, index) => (
          <View
            className={`${classPrefix}-grid-item`}
            key={index}
            onClick={() => chooseItem(item, index)}
          >
            {renderIcon(item[iconKey])}
            <View className={`${classPrefix}-grid-name`}>{item[nameKey]}</View>
          </View>
        ))}
      </View>
    )
  }

  const renderList = () => (
    <View
      className={`${classPrefix}-list ${hasListIcon ? `${classPrefix}-list-icon` : ''}`}
    >
      {options.map((item, index) => {
        const statusClass = `${item.disabled ? `${classPrefix}-item-disabled` : ''} ${item.danger ? `${classPrefix}-item-danger` : ''}`
        const textBlock = (
          <>
            <View className={`${classPrefix}-item-name ${statusClass}`}>
              {item[nameKey]}
            </View>
            <View className={`${classPrefix}-item-description ${statusClass}`}>
              {item[descriptionKey]}
            </View>
          </>
        )
        return (
          <View
            className={`${classPrefix}-item ${statusClass}`}
            key={index}
            onClick={() => chooseItem(item, index)}
          >
            {hasListIcon ? (
              <>
                {renderListIcon(item[iconKey])}
                <View className={`${classPrefix}-item-content`}>
                  {textBlock}
                </View>
              </>
            ) : (
              textBlock
            )}
          </View>
        )
      })}
    </View>
  )

  const renderContent = () => {
    if (!options.length) return children
    return effectiveLayout === 'grid' ? renderGrid() : renderList()
  }

  const renderCancel = () => {
    if (!cancelText) return null
    if (isTop) {
      return (
        <View
          className={`${classPrefix}-collapse`}
          onClick={() => onCancel && onCancel()}
        >
          {cancelText}
          <View className={`${classPrefix}-collapse-arrow`} />
        </View>
      )
    }
    return (
      <View
        className={`${classPrefix}-cancel`}
        onClick={() => onCancel && onCancel()}
      >
        {cancelText}
      </View>
    )
  }

  return (
    <Popup
      {...rest}
      round
      visible={visible}
      position={position}
      closeable={showClose}
      closeIconPosition={closeIconPosition}
      className={classPrefix}
      onClose={() => {
        onCancel && onCancel()
      }}
    >
      <View className={className} style={style}>
        {renderHeader()}
        {renderContent()}
        {renderCancel()}
      </View>
      {isTop ? null : <View className={`${classPrefix}-safe-area`} />}
    </Popup>
  )
}

ActionSheet.displayName = 'NutActionSheet'
