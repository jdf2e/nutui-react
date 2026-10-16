import React, { FunctionComponent, useContext, ReactNode } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import Badge from '@/packages/badge/index.taro'
import TabbarContext from '@/packages/tabbar/context'
import { TaroTabbarItemProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  icon: null,
  value: '',
  dot: false,
  max: 99,
  top: '0',
  right: '0',
  direction: 'vertical',
} as TaroTabbarItemProps

export const TabbarItem: FunctionComponent<Partial<TaroTabbarItemProps>> = (
  props
) => {
  const ctx = useContext(TabbarContext)
  const {
    className,
    style,
    title,
    icon,
    value,
    dot,
    max,
    top,
    right,
    // @ts-ignore
    index,
    direction,
    onActiveClick,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const active = index === ctx?.selectIndex
  // 图标、标题和徽标可随 active 变化，布局判断要使用求值后的内容。
  const renderNodeWithActive = (
    node: ReactNode | ((active: boolean) => ReactNode)
  ) => {
    return typeof node === 'function' ? node(active) : node
  }
  const renderedIcon = renderNodeWithActive(icon)
  // Taro 图标需要可克隆的元素，以便注入当前状态的颜色
  const hasIcon = React.isValidElement(renderedIcon)
  const renderedTitle = renderNodeWithActive(title)
  const renderedValue = renderNodeWithActive(value)
  // 红点、非零数字和非空文字有对应的图标旁定位样式
  const hasDotOrLabelBadge =
    dot ||
    (typeof renderedValue === 'number' && renderedValue !== 0) ||
    (typeof renderedValue === 'string' && renderedValue !== '')
  // 只在材质背板的竖向图标上使用新定位，standard 沿用原有徽标样式
  const shouldUseIconBadgeLayout =
    !!ctx?.hasMaterialBackground &&
    direction !== 'horizontal' &&
    hasIcon &&
    hasDotOrLabelBadge &&
    props.top === undefined &&
    props.right === undefined
  // 空标题不占位，纯图标或图片内容按单内容布局居中
  const hasTitle =
    renderedTitle !== '' &&
    renderedTitle !== null &&
    renderedTitle !== undefined &&
    renderedTitle !== false
  const classPrefix = 'nut-tabbar-item'
  const tabbarItemClass = classNames(
    classPrefix,
    {
      [`${classPrefix}-active`]: active,
      [`${classPrefix}-large`]: !hasIcon || !hasTitle,
    },
    className
  )

  const badgeProps = {
    value: renderedValue,
    dot,
    max,
    top,
    right,
    color: ctx?.activeColor,
  }

  const renderTitleText = () => {
    return (
      hasTitle && (
        <View
          className={`${classPrefix}-text`}
          style={{
            color: active ? ctx?.activeColor : ctx?.inactiveColor,
          }}
        >
          {renderedTitle}
        </View>
      )
    )
  }

  const renderTitle = () => {
    return (
      <Badge size="normal" {...badgeProps}>
        {renderTitleText()}
      </Badge>
    )
  }

  const renderIcon = () => {
    const distIcon = renderedIcon
    // 鸿蒙差异处理，需要手动给icon一个color
    if (!React.isValidElement(distIcon)) return null
    return React.cloneElement(distIcon, {
      ...distIcon.props,
      color: active ? ctx?.activeColor : ctx?.inactiveColor,
    })
  }

  const renderIconAndTitle = () => {
    return (
      <>
        {shouldUseIconBadgeLayout ? (
          <View
            className={classNames(
              `${classPrefix}-visual`,
              `${classPrefix}-visual-icon`,
              // dot 为 true 时 Badge 显示红点；红点与数字/文字标签尺寸不同，需使用各自的定位偏移数值
              `${classPrefix}-visual-${dot ? 'dot' : 'text'}`
            )}
          >
            {renderIcon()}
            <Badge size="normal" {...badgeProps} />
          </View>
        ) : (
          <Badge size="normal" {...badgeProps} top={3}>
            {renderIcon()}
          </Badge>
        )}
        {renderTitleText()}
      </>
    )
  }

  const renderDualItem = () => {
    return dot ? null : (
      <>
        {renderIcon()}
        {renderTitleText()}
        <Badge {...badgeProps} />
      </>
    )
  }

  return (
    <View
      className={tabbarItemClass}
      style={{
        color: active ? ctx?.activeColor : ctx?.inactiveColor,
        ...style,
      }}
      onClick={() => (active ? onActiveClick?.() : ctx?.handleClick(index))}
      {...rest}
    >
      {direction === 'horizontal' && !dot ? (
        renderDualItem()
      ) : (
        <>{hasIcon ? renderIconAndTitle() : renderTitle()}</>
      )}
    </View>
  )
}

TabbarItem.displayName = 'NutTabbarItem'
