import { BaseProps } from './baseprops'
import { SimpleValue } from './baseatom'

export interface BaseWaterMark extends BaseProps {
  content: string
  fullPage: boolean
  zIndex: number
  gapX: number
  gapY: number
  startX: number
  startY: number
  width: number
  height: number
  image: string
  imageWidth: number
  imageHeight: number
  rotate: number
  color: string
  fontStyle: string
  fontFamily: string
  fontWeight: string
  fontSize: SimpleValue
}
