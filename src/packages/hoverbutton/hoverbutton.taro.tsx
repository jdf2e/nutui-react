import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider/index.taro'
import HoverButtonItem from '@/packages/hoverbuttonitem/index.taro'
import SafeArea from '@/packages/safearea/index.taro'
import pxTransform from '@/utils/px-transform'
import { UI_BOTTOM_DISTANCE } from '@/packages/hoverbutton/utils'
import { TaroHoverButtonProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
} as TaroHoverButtonProps

const classPrefix = 'nut-hoverbutton'

export const HoverButton: FunctionComponent<Partial<TaroHoverButtonProps>> & {
  Item: typeof HoverButtonItem
} = (props) => {
  const { children, zIndex, tabbarHeight, className, style, icon, onClick } = {
    ...defaultProps,
    ...props,
  }

  const rtl = useRtl()

  const baseStyle = { ...style }

  if (tabbarHeight) {
    baseStyle.bottom = pxTransform(tabbarHeight + UI_BOTTOM_DISTANCE)
  }

  if (typeof zIndex !== 'undefined') {
    baseStyle.zIndex = zIndex
  }

  return (
    <View
      className={classNames([`${classPrefix}-container`, className], {
        [`${classPrefix}-container-rtl`]: rtl,
      })}
      style={baseStyle}
    >
      <View className={classPrefix}>
        {children ||
          (icon && <HoverButtonItem icon={icon} onClick={onClick} />)}
      </View>
      <SafeArea position="bottom" />
    </View>
  )
}

HoverButton.displayName = 'NutHoverButton'
HoverButton.Item = HoverButtonItem
