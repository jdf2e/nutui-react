import React from 'react'
import { Image, View } from '@tarojs/components'
import classNames from 'classnames'
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

const chars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

function decodeBase64(input: string): string {
  const str = input.replace(/=+$/, '')
  let output = ''
  for (
    let bc = 0, bs = 0, buffer: number, idx = 0;
    (buffer = str.charCodeAt(idx++));
    ~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
      ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
      : 0
  ) {
    buffer = chars.indexOf(String.fromCharCode(buffer))
  }
  return output
}

function encodeBase64(input: string): string {
  let output = ''
  for (
    let block = 0, charCode: number, idx = 0, map = chars;
    input.charAt(idx | 0) || ((map = '='), idx % 1);
    output += map.charAt(63 & (block >> (8 - (idx % 1) * 8)))
  ) {
    charCode = input.charCodeAt((idx += 3 / 4))
    block = (block << 8) | charCode
  }
  return output
}

function replaceSvgFill(base64Data: string, color: string): string {
  try {
    const rawSvg = decodeBase64(base64Data)
    let newSvg = rawSvg
    if (/fill="[^"]*"/.test(newSvg)) {
      newSvg = newSvg.replace(/fill="[^"]*"/g, `fill="${color}"`)
    } else {
      newSvg = newSvg.replace('<svg', `<svg fill="${color}"`)
    }
    return encodeBase64(newSvg)
  } catch (e) {
    return base64Data
  }
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
  let base64Content = ''

  const maskStr =
    finalStyle.mask ||
    finalStyle['-webkitMask'] ||
    finalStyle.WebkitMask ||
    finalStyle.maskImage ||
    finalStyle.WebkitMaskImage

  if (maskStr && typeof maskStr === 'string') {
    const match = maskStr.match(/data:image\/svg\+xml;base64,([A-Za-z0-9+/=]+)/)
    if (match) {
      ;[, base64Content] = match
    }
  }

  // 清除任何 mask 相关属性
  delete finalStyle.mask
  delete finalStyle['-webkitMask']
  delete finalStyle.WebkitMask
  delete finalStyle.maskImage
  delete finalStyle.WebkitMaskImage
  delete finalStyle.maskRepeat
  delete finalStyle.WebkitMaskRepeat
  delete finalStyle.maskPosition
  delete finalStyle.WebkitMaskPosition
  delete finalStyle.maskSize
  delete finalStyle.WebkitMaskSize

  let targetColor = color || finalStyle.color
  if (
    !targetColor &&
    finalStyle.backgroundColor &&
    finalStyle.backgroundColor !== 'currentColor'
  ) {
    targetColor = finalStyle.backgroundColor
  }

  // 绝不能保留 backgroundColor，否则小程序端会渲染出纯色背景方块
  delete finalStyle.backgroundColor

  const explicitWidth = getExplicitDimension(finalStyle.width, propWidth, size)
  const explicitHeight = getExplicitDimension(
    finalStyle.height,
    propHeight,
    size
  )

  if (base64Content) {
    let finalBase64 = base64Content
    if (targetColor && targetColor !== 'currentColor') {
      finalBase64 = replaceSvgFill(base64Content, targetColor)
    }
    const svgSrc = `data:image/svg+xml;base64,${finalBase64}`

    return (
      <Image
        className={classNames('nut-icon', className)}
        src={svgSrc}
        mode="aspectFit"
        style={{
          display: 'inline-flex',
          width: explicitWidth,
          height: explicitHeight,
          minWidth: explicitWidth,
          minHeight: explicitHeight,
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          ...finalStyle,
        }}
        onClick={onClick}
        {...rest}
      />
    )
  }

  return (
    <View
      className={classNames('nut-icon', className)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        boxSizing: 'border-box',
        width: explicitWidth,
        height: explicitHeight,
        minWidth: explicitWidth,
        minHeight: explicitHeight,
        ...finalStyle,
      }}
      onClick={onClick}
      {...rest}
    >
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
