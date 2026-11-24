import React from 'react'
import { View } from '@tarojs/components'
import { configure } from '@nutui/icons-react-taro'

export interface SkylineIconProps {
  className?: string
  style?: React.CSSProperties
  color?: string
  onClick?: (e: any) => void
  children?: React.ReactNode
  size?: string | number
  width?: string | number
  height?: string | number
  [key: string]: any
}

const formatSize = (val?: string | number) => {
  if (val === undefined || val === null || val === '') return ''
  if (typeof val === 'number') return `${val}px`
  return Number.isNaN(Number(val)) ? val : `${val}px`
}

const getExplicitDimension = (
  styleDim?: string,
  propDim?: string | number,
  sizeDim?: string | number
) => {
  if (styleDim) return styleDim
  const formattedProp = formatSize(propDim)
  if (formattedProp) return formattedProp
  const formattedSize = formatSize(sizeDim)
  if (formattedSize) return formattedSize
  return '16px'
}

export const SkylineIcon: React.FC<SkylineIconProps> = ({
  className = '',
  style,
  color,
  onClick,
  children,
  size,
  width: propWidth,
  height: propHeight,
  ...rest
}) => {
  const finalStyle: any = { ...style }
  let maskUrl = ''

  if (finalStyle.mask && typeof finalStyle.mask === 'string') {
    const match = finalStyle.mask.match(/url\((['"]?)(.*?)\1\)/)
    if (match) {
      ;[, , maskUrl] = match
    }
    delete finalStyle.mask
    delete finalStyle['-webkitMask']
    delete finalStyle.WebkitMask
  }

  const explicitWidth = getExplicitDimension(finalStyle.width, propWidth, size)
  const explicitHeight = getExplicitDimension(
    finalStyle.height,
    propHeight,
    size
  )

  const iconStyle: any = {
    ...finalStyle,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    width: explicitWidth,
    height: explicitHeight,
    minWidth: explicitWidth,
    minHeight: explicitHeight,
  }

  if (maskUrl) {
    const maskVal = `url('${maskUrl}')`
    iconStyle.maskImage = maskVal
    iconStyle.WebkitMaskImage = maskVal
    iconStyle.maskRepeat = 'no-repeat'
    iconStyle.WebkitMaskRepeat = 'no-repeat'
    iconStyle.maskPosition = 'center'
    iconStyle.WebkitMaskPosition = 'center'
    iconStyle.maskSize = '100% 100%'
    iconStyle.WebkitMaskSize = '100% 100%'

    let targetColor = color || finalStyle.color
    if (!targetColor) {
      if (
        finalStyle.backgroundColor &&
        finalStyle.backgroundColor !== 'currentColor'
      ) {
        targetColor = finalStyle.backgroundColor
      } else {
        targetColor = '#333333'
      }
    }

    iconStyle.backgroundColor = targetColor
  }

  return (
    <View className={className} style={iconStyle} onClick={onClick} {...rest}>
      {children}
    </View>
  )
}

try {
  configure({
    tag: SkylineIcon as any,
  })
} catch (e) {
  // ignore
}

export default SkylineIcon
