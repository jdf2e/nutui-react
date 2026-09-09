import React, { FunctionComponent, ReactNode } from 'react'
import Popup from '@/packages/popup/index'
import { ComponentDefaults } from '@/utils/typings'
import { mergeProps } from '@/utils/merge-props'
import { ActionSheetOption, WebActionSheetProps } from '@/types'

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
      <div
        className={`${classPrefix}-header ${classPrefix}-header-${titleAlign}`}
      >
        {headerLeft && (
          <div className={`${classPrefix}-header-slot-left`}>{headerLeft}</div>
        )}
        {title && <div className={`${classPrefix}-header-title`}>{title}</div>}
        {showDescription && (
          <div className={`${classPrefix}-header-description`}>
            {description}
          </div>
        )}
        {headerRight && (
          <div className={`${classPrefix}-header-slot-right`}>
            {headerRight}
          </div>
        )}
      </div>
    )
  }

  const renderIcon = (icon: ReactNode) => {
    if (!hasIcon(icon)) return null
    const content =
      typeof icon === 'string' ? (
        <img className={`${classPrefix}-grid-icon-img`} src={icon} alt="" />
      ) : (
        icon
      )
    return <div className={`${classPrefix}-grid-icon`}>{content}</div>
  }

  const renderListIcon = (icon: ReactNode) => {
    if (!hasIcon(icon)) return null
    const content =
      typeof icon === 'string' ? (
        <img className={`${classPrefix}-item-icon-img`} src={icon} alt="" />
      ) : (
        icon
      )
    return <div className={`${classPrefix}-item-icon`}>{content}</div>
  }

  const renderGrid = () => {
    const cols = Number(columns) === 4 ? 4 : 5
    const itemWidth = 'var(--nutui-actionsheet-grid-item-width, 50px)'
    const columnGap =
      cols > 1
        ? `calc((100% - ${cols} * ${itemWidth} * var(--nut-scale-f, 1)) / ${cols - 1})`
        : '0'
    return (
      <div
        className={`${classPrefix}-grid ${cols === 4 ? `${classPrefix}-grid-cols-4` : ''}`}
        style={{ columnGap }}
      >
        {options.map((item, index) => (
          <div
            className={`${classPrefix}-grid-item`}
            key={index}
            onClick={() => chooseItem(item, index)}
          >
            {renderIcon(item[iconKey])}
            <div className={`${classPrefix}-grid-name`}>{item[nameKey]}</div>
          </div>
        ))}
      </div>
    )
  }

  const renderList = () => (
    <div
      className={`${classPrefix}-list ${hasListIcon ? `${classPrefix}-list-icon` : ''}`}
    >
      {options.map((item, index) => {
        const statusClass = `${item.disabled ? `${classPrefix}-item-disabled` : ''} ${item.danger ? `${classPrefix}-item-danger` : ''}`
        const textBlock = (
          <>
            <div className={`${classPrefix}-item-name ${statusClass}`}>
              {item[nameKey]}
            </div>
            <div className={`${classPrefix}-item-description ${statusClass}`}>
              {item[descriptionKey]}
            </div>
          </>
        )
        return (
          <div
            className={`${classPrefix}-item ${statusClass}`}
            key={index}
            onClick={() => chooseItem(item, index)}
          >
            {hasListIcon ? (
              <>
                {renderListIcon(item[iconKey])}
                <div className={`${classPrefix}-item-content`}>{textBlock}</div>
              </>
            ) : (
              textBlock
            )}
          </div>
        )
      })}
    </div>
  )

  const renderContent = () => {
    if (!options.length) return children
    return effectiveLayout === 'grid' ? renderGrid() : renderList()
  }

  const renderCancel = () => {
    if (!cancelText) return null
    if (isTop) {
      return (
        <div
          className={`${classPrefix}-collapse`}
          onClick={() => onCancel && onCancel()}
        >
          {cancelText}
          <i className={`${classPrefix}-collapse-arrow`} />
        </div>
      )
    }
    return (
      <div
        className={`${classPrefix}-cancel`}
        onClick={() => onCancel && onCancel()}
      >
        {cancelText}
      </div>
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
      <div className={className} style={style}>
        {renderHeader()}
        {renderContent()}
        {renderCancel()}
      </div>
      {isTop ? null : <div className={`${classPrefix}-safe-area`} />}
    </Popup>
  )
}

ActionSheet.displayName = 'NutActionSheet'
