import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider/index'
import HoverButtonItem, {
  HoverButtonItemProps,
} from '@/packages/hoverbuttonitem/index'
import SafeArea from '@/packages/safearea/index'
import { UI_BOTTOM_DISTANCE } from '@/packages/hoverbutton/utils'

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
    const bottom = tabbarHeight + UI_BOTTOM_DISTANCE
    baseStyle.bottom = `${bottom}px`
  }

  if (typeof zIndex !== 'undefined') {
    baseStyle.zIndex = zIndex
  }

  return (
    <div
      className={classNames([`${classPrefix}-container`, className], {
        [`${classPrefix}-container-rtl`]: rtl,
      })}
      style={baseStyle}
    >
      <div className={classPrefix}>
        {children ||
          (icon && <HoverButtonItem icon={icon} onClick={onClick} />)}
      </div>
      <SafeArea position="bottom" />
    </div>
  )
}

HoverButton.displayName = 'NutHoverButton'
HoverButton.Item = HoverButtonItem
