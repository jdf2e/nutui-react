import React, { FunctionComponent, useContext } from 'react'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { CellGroup } from '@/packages/cellgroup/cellgroup.taro'
import CellGroupContext from '@/packages/cellgroup/context'
import { useRtl } from '@/packages/configprovider/index.taro'
import { pxTransform } from '@/utils/taro/px-transform'
import { TaroCellProps } from '@/types'

interface CellTaroProps extends TaroCellProps {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => void
}

const defaultProps = {
  ...ComponentDefaults,
  title: null,
  description: null,
  extra: null,
  icon: null,
  content: null,
  radius: '6px',
  align: 'flex-start',
  clickable: false,
  isLast: false,
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => {},
} as CellTaroProps

const classPrefix = 'nut-cell'

export const Cell: FunctionComponent<
  Partial<CellTaroProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
> & { Group: typeof CellGroup } = (props) => {
  const ctx = useContext(CellGroupContext)
  const {
    children,
    onClick,
    title,
    description,
    extra,
    icon,
    content,
    radius,
    align,
    isLast,
    className,
    style,
    clickable,
  } = {
    ...defaultProps,
    ...props,
  }

  const rtl = useRtl()

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => {
    onClick(event)
  }

  const radiusNumber = Number(String(radius).replace(/[^\d]/g, ''))

  const baseStyle = {
    ...style,
    borderRadius: pxTransform(radiusNumber),
    alignItems: align,
  }

  // 结构 B 中标题与右侧区同行，纵向对齐需与根节点保持一致
  const headerStyle = { alignItems: align }

  const titleNode = title ? (
    <View className={`${classPrefix}-title`}>{title}</View>
  ) : null
  const descriptionNode = description ? (
    <View className={`${classPrefix}-description`}>{description}</View>
  ) : null
  const extraNode = extra ? (
    <View className={`${classPrefix}-extra`}>{extra}</View>
  ) : null

  const renderInner = () => {
    // 有 content 时说明文案与业务插槽需要通栏，改用 header + 通栏子块的结构
    if (content) {
      return (
        <View className={`${classPrefix}-body`}>
          {title || extra ? (
            <View className={`${classPrefix}-header`} style={headerStyle}>
              {titleNode}
              {extraNode}
            </View>
          ) : null}
          {descriptionNode}
          <View className={`${classPrefix}-content`}>{content}</View>
        </View>
      )
    }
    return (
      <>
        {title || description ? (
          <View className={`${classPrefix}-body`}>
            {titleNode}
            {descriptionNode}
          </View>
        ) : null}
        {extraNode}
      </>
    )
  }

  return (
    <>
      <View
        hoverStyle={{ opacity: clickable ? 0.7 : 1 }}
        className={`${classNames(
          [
            classPrefix,
            className,
            {
              [`${classPrefix}-group-item`]: ctx?.group,
            },
          ],
          clickable ? `${classPrefix}-clickable` : ''
        )}`}
        onClick={(event) => handleClick(event)}
        style={baseStyle}
      >
        {children || (
          <>
            {icon ? (
              <View className={`${classPrefix}-icon`}>{icon}</View>
            ) : null}
            {renderInner()}
          </>
        )}
      </View>
      {ctx?.divider && !isLast ? (
        <View
          className={classNames([
            {
              [`${classPrefix}-divider`]: true,
              [`${classPrefix}-divider-rtl`]: rtl,
            },
          ])}
        >
          <View className={`${classPrefix}-divider-inner`} />
        </View>
      ) : null}
    </>
  )
}

Cell.displayName = 'NutCell'
Cell.Group = CellGroup
