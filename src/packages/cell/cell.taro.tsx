import React, { FunctionComponent, useContext } from 'react'
import classNames from 'classnames'
import { ITouchEvent, View, ViewProps } from '@tarojs/components'
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
  leading: null,
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
  Partial<CellTaroProps> & Omit<ViewProps, 'title' | 'content' | 'onClick'>
> & { Group: typeof CellGroup } = (props) => {
  const ctx = useContext(CellGroupContext)
  const {
    children,
    onClick,
    title,
    description,
    extra,
    leading,
    content,
    radius,
    align,
    isLast,
    className,
    style,
    clickable,
    ...rest
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

  return (
    <>
      <View
        hoverStyle={clickable ? { opacity: 0.7 } : undefined}
        className={classNames(classPrefix, className, {
          [`${classPrefix}-group-item`]: ctx?.group,
          [`${classPrefix}-clickable`]: clickable,
        })}
        onClick={(event) => handleClick(event)}
        style={baseStyle}
        {...rest}
      >
        {children || (
          <>
            {leading ? (
              <View className={`${classPrefix}-leading`}>{leading}</View>
            ) : null}
            {content ? (
              // 有 content 时说明文案与业务插槽需要通栏，改用 header + 通栏子块的结构
              <View className={`${classPrefix}-body`}>
                {title || extra ? (
                  // 结构 B 中标题与右侧区同行，纵向对齐需与根节点保持一致
                  <View
                    className={`${classPrefix}-header`}
                    style={{ alignItems: align }}
                  >
                    {title ? (
                      <View className={`${classPrefix}-title`}>{title}</View>
                    ) : null}
                    {extra ? (
                      <View className={`${classPrefix}-extra`}>{extra}</View>
                    ) : null}
                  </View>
                ) : null}
                {description ? (
                  <View className={`${classPrefix}-description`}>
                    {description}
                  </View>
                ) : null}
                <View className={`${classPrefix}-content`}>{content}</View>
              </View>
            ) : (
              <>
                {title || description ? (
                  <View className={`${classPrefix}-body`}>
                    {title ? (
                      <View className={`${classPrefix}-title`}>{title}</View>
                    ) : null}
                    {description ? (
                      <View className={`${classPrefix}-description`}>
                        {description}
                      </View>
                    ) : null}
                  </View>
                ) : null}
                {extra ? (
                  <View className={`${classPrefix}-extra`}>{extra}</View>
                ) : null}
              </>
            )}
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
