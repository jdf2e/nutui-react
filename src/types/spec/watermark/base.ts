import { BaseProps } from '../../base/props'
import { SimpleValue } from '../../base/atoms'

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
