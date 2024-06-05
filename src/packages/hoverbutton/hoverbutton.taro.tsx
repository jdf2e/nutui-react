import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import Taro, { pxTransform } from '@tarojs/taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider/index.taro'
import HoverButtonItem, {
  HoverButtonItemProps,
} from '@/packages/hoverbuttonitem/index.taro'
import SafeArea from '@/packages/safearea/index.taro'

export interface HoverButtonProps extends BasicComponent, HoverButtonItemProps {
  zIndex: number
  tabbarHeight?: number
}

const defaultProps = {
  ...ComponentDefaults,
} as HoverButtonProps

const classPrefix = 'nut-hoverbutton'

export const HoverButton: FunctionComponent<
  Partial<HoverButtonProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
> & {
  Item: typeof HoverButtonItem
} = (props) => {
  const { children, zIndex, tabbarHeight, className, style, icon, onClick } = {
    ...defaultProps,
    ...props,
  }

  const rtl = useRtl()

  const baseStyle = { ...style }

  if (tabbarHeight) {
    const bottom = tabbarHeight + 16
    baseStyle.bottom = [
      Taro.ENV_TYPE.HARMONYHYBRID,
      Taro.ENV_TYPE.HARMONY,
    ].includes(
      // @ts-ignore
      Taro.getEnv()
    )
      ? pxTransform(bottom)
      : bottom
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
