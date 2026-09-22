import React, { FunctionComponent, useContext } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import CellGroup from '@/packages/cellgroup'
import CellGroupContext from '@/packages/cellgroup/context'
import { useRtl } from '@/packages/configprovider'
import { WebCellProps } from '@/types'

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
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
} as WebCellProps

const classPrefix = 'nut-cell'

export const Cell: FunctionComponent<
  Partial<WebCellProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
> & { Group: typeof CellGroup } = (props) => {
  const ctx = useContext(CellGroupContext)
  const {
    children,
    clickable,
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
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const rtl = useRtl()
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick(event)
  }

  const baseStyle = {
    ...style,
    borderRadius: Number.isNaN(Number(radius)) ? String(radius) : `${radius}px`,
    alignItems: align,
  }

  // 结构 B 中标题与右侧区同行，纵向对齐需与根节点保持一致
  const headerStyle = { alignItems: align }

  const titleNode = title ? (
    <div className={`${classPrefix}-title`}>{title}</div>
  ) : null
  const descriptionNode = description ? (
    <div className={`${classPrefix}-description`}>{description}</div>
  ) : null
  const extraNode = extra ? (
    <div className={`${classPrefix}-extra`}>{extra}</div>
  ) : null

  const renderInner = () => {
    // 有 content 时说明文案与业务插槽需要通栏，改用 header + 通栏子块的结构
    if (content) {
      return (
        <div className={`${classPrefix}-body`}>
          {title || extra ? (
            <div className={`${classPrefix}-header`} style={headerStyle}>
              {titleNode}
              {extraNode}
            </div>
          ) : null}
          {descriptionNode}
          <div className={`${classPrefix}-content`}>{content}</div>
        </div>
      )
    }
    return (
      <>
        {title || description ? (
          <div className={`${classPrefix}-body`}>
            {titleNode}
            {descriptionNode}
          </div>
        ) : null}
        {extraNode}
      </>
    )
  }

  return (
    <>
      <div
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
        {...rest}
      >
        {children || (
          <>
            {icon ? <div className={`${classPrefix}-icon`}>{icon}</div> : null}
            {renderInner()}
          </>
        )}
      </div>
      {ctx?.divider && !isLast ? (
        <div
          className={classNames([
            {
              [`${classPrefix}-divider`]: true,
              [`${classPrefix}-divider-rtl`]: rtl,
            },
          ])}
        >
          <div className={`${classPrefix}-divider-inner`} />
        </div>
      ) : null}
    </>
  )
}

Cell.displayName = 'NutCell'
Cell.Group = CellGroup
