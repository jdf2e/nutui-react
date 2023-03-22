import React, { FunctionComponent, useState, useRef, useEffect } from 'react'
import { useReady, nextTick, createSelectorQuery } from '@tarojs/taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { getRectByTaro } from '@/utils/useClientRect'

export type Direction = 'start' | 'end' | 'middle'

type EllipsisedValue = {
  leading?: string | undefined
  tailing?: string | undefined
}

export interface EllipsisProps {
  content: string
  direction: string
  rows: number | string
  expandText: string
  collapseText: string
  symbol: string
  lineHeight: number | string
  onClick: () => void
  onChange: (type: string) => void
}

const defaultProps = {
  content: '',
  direction: 'end',
  rows: 1,
  expandText: '',
  collapseText: '',
  symbol: '...',
  lineHeight: '20',
} as EllipsisProps
export const Ellipsis: FunctionComponent<
  Partial<EllipsisProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    children,
    content,
    direction,
    rows,
    expandText,
    collapseText,
    symbol,
    lineHeight,
    onClick,
    onChange,
  } = { ...defaultProps, ...props }
  let maxHeight: any = 0 // 当行的最大高度
  const [exceeded, setExceeded] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const ellipsis = useRef<EllipsisedValue>({
    leading: '',
    tailing: '',
  })
  const root = useRef<HTMLDivElement>(null)
  const rootContain = useRef<HTMLDivElement>(null)
  const symbolContain = useRef<HTMLDivElement>(null)
  const [contentCopy, setContentCopy] = useState(content)
  let lineH = 0 // 当行的最大高度
  let originHeight = 0 // 原始高度
  const refRandomId = Math.random().toString(36).slice(-8)
  const widthRef: any = useRef('auto')
  let widthBase = [14, 10, 7, 8.4, 10] // 中、英(大)、英(小)、数字、其他字符的基础宽度
  let symbolTextWidth: any = widthBase[0] * 0.7921
  const chineseReg = /^[\u4e00-\u9fa5]+$/ // 汉字
  const digitReg = /^[0-9]+$/ // 数字
  const letterUpperReg = /^[A-Z]+$/ // 字母
  const letterLowerReg = /^[a-z]+$/ // 字母

  const init = () => {
    setExceeded(false)
    setExpanded(false)
    setContentCopy(content)
    nextTick(() => {
      getSymbolInfo()
      getReference()
    })
  }

  useReady(() => init())

  useEffect(() => init(), [content])

  // 获取省略号宽度
  const getSymbolInfo = async () => {
    const refe = await getRectByTaro(symbolContain?.current)
    symbolTextWidth = refe.width
      ? Math.ceil(refe.width)
      : Math.ceil(widthBase[0] * 0.7921)
  }

  const symbolText = () => {
    if (direction === 'end' || direction === 'middle') {
      return `${symbol}${expandText}`
    }
    return `${symbol}${expandText}${symbol}`
  }

  const getReference = async () => {
    const element = root.current

    const query = createSelectorQuery()
    query.select(`#${(element as any).id}`) &&
      query
        .select(`#${(element as any).id}`)
        .fields(
          {
            computedStyle: [
              'width',
              'height',
              'lineHeight',
              'paddingTop',
              'paddingBottom',
              'fontSize',
            ],
          },
          (res) => {
            if (!res) return
            lineH = pxToNumber(
              res.lineHeight === 'normal' ? lineHeight : res.lineHeight
            )
            maxHeight = Math.floor(
              lineH * (Number(rows) + 0.5) +
                pxToNumber(res.paddingTop) +
                pxToNumber(res.paddingBottom)
            )

            originHeight = pxToNumber(res.height)

            widthRef.current = res.width

            // 设置基础字符
            const bsize = pxToNumber(res.fontSize)
            widthBase = [
              bsize,
              bsize * 0.72,
              bsize * 0.53,
              bsize * 0.4,
              bsize * 0.75,
            ]

            calcEllipse()
          }
        )
        .exec()
  }

  // 计算省略号的位置
  const calcEllipse = async () => {
    const refe = await getRectByTaro(rootContain.current)

    if (refe.height <= maxHeight) {
      setExceeded(false)
    } else {
      const rowNum = Math.floor(content.length / (originHeight / lineH - 1)) // 每行的字数

      if (direction === 'middle') {
        const end = content.length
        ellipsis.current.leading = tailorContent(
          0,
          rowNum * (Number(rows) + 0.5),
          'end'
        )
        ellipsis.current.tailing = tailorContent(
          content.length - rowNum * (Number(rows) + 0.5),
          end,
          'start'
        )
      } else if (direction === 'end') {
        const end = rowNum * (Number(rows) + 0.5)
        ellipsis.current.leading = tailorContent(0, end)
      } else {
        const start = content.length - rowNum * (Number(rows) + 0.5) - 5

        ellipsis.current.tailing = tailorContent(start, content.length)
      }

      // 进行兜底判断，是否符合要求
      assignContent()
      setTimeout(() => {
        verifyEllipsis()
      }, 100)
    }
  }

  // 验证省略号
  const verifyEllipsis = async () => {
    const refe = await getRectByTaro(rootContain.current)
    if (refe && refe.height && refe.height > maxHeight) {
      if (direction === 'end') {
        ellipsis.current.leading = ellipsis.current?.leading?.slice(
          0,
          ellipsis.current?.leading.length - 1
        )
      } else {
        ellipsis.current.tailing = ellipsis.current?.tailing?.slice(
          1,
          ellipsis.current?.tailing.length
        )
      }

      assignContent()
      setTimeout(() => {
        verifyEllipsis()
      }, 100)
    }
  }
  const assignContent = () => {
    const newContent = `${ellipsis.current?.leading || ''}${
      ellipsis.current?.leading ? symbol : ''
    }${expandText || ''}${ellipsis.current?.tailing ? symbol : ''}${
      ellipsis.current?.tailing || ''
    }`
    setContentCopy(newContent)
  }
  // 计算省略号
  const tailorContent = (left: number, right: number, type = '') => {
    const threeDotWidth = symbolTextWidth

    const direc = direction === 'middle' && type ? type : direction

    setExceeded(true)

    let widthPart = -1
    const start = left
    const end = right
    let cutoff = 0
    let marking = 0

    if (direc === 'end') {
      marking = start
      cutoff = end
    } else {
      marking = end
      cutoff = start
    }

    const contentWidth =
      pxToNumber(widthRef.current) * Number(rows) - threeDotWidth
    const contentPartWidth =
      direction === 'middle' ? contentWidth / 2 : contentWidth

    while (widthPart < contentPartWidth) {
      const zi = content[marking]
      if (chineseReg.test(zi)) {
        widthPart = Number(widthPart + widthBase[0])
      } else if (letterUpperReg.test(zi)) {
        widthPart = Number(widthPart + widthBase[1])
      } else if (letterLowerReg.test(zi)) {
        widthPart = Number(widthPart + widthBase[2])
      } else if (digitReg.test(zi)) {
        widthPart = Number(widthPart + widthBase[3])
      } else {
        widthPart = Number(widthPart + widthBase[4])
      }
      cutoff = marking

      direc === 'end' ? marking++ : marking--
    }

    if (direc === 'end') {
      return content.slice(0, cutoff)
    }
    return content.slice(cutoff, end)
  }

  const pxToNumber = (value: string | null | number) => {
    if (!value) return 0
    const match = (value as string).match(/^\d*(\.\d*)?/)
    return match ? Number(match[0]) : 0
  }

  // 展开收起
  const clickHandle = (type: number) => {
    if (type === 1) {
      setExpanded(true)
      onChange && onChange('expand')
    } else {
      setExpanded(false)
      onChange && onChange('collapse')
    }
  }

  // 文本点击
  const handleClick = () => {
    onClick && onClick()
  }
  return (
    <>
      <div
        className="nut-ellipsis"
        onClick={handleClick}
        ref={root}
        id={`root${refRandomId}`}
      >
        <div>
          {!exceeded ? (
            <div className="nut-ellipsis-wordbreak">{content}</div>
          ) : null}
          {exceeded && !expanded ? (
            <>
              <div className="nut-ellipsis-wordbreak">
                {ellipsis.current?.leading}
                {ellipsis.current?.leading && symbol}
                {expandText ? (
                  <span
                    className="nut-ellipsis-text"
                    onClick={(e) => {
                      e.stopPropagation()
                      clickHandle(1)
                    }}
                  >
                    {expandText}
                  </span>
                ) : null}
                {ellipsis.current?.tailing && symbol}
                {ellipsis.current?.tailing}
              </div>
            </>
          ) : null}
          {exceeded && expanded ? (
            <>
              {content}
              {expandText ? (
                <span
                  className="nut-ellipsis-text"
                  onClick={(e) => {
                    e.stopPropagation()
                    clickHandle(2)
                  }}
                >
                  {collapseText}
                </span>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
      <div
        className="nut-ellipsis-copy"
        ref={rootContain}
        id={`rootContain${refRandomId}`}
        style={{ width: `${widthRef}` }}
      >
        <div>{contentCopy}</div>
      </div>
      <div
        className="nut-ellipsis-copy"
        ref={symbolContain}
        id={`symbolContain${refRandomId}`}
        style={{ display: 'inline' }}
      >
        {symbolText()}
      </div>
    </>
  )
}

Ellipsis.defaultProps = defaultProps
Ellipsis.displayName = 'NutEllipsis'
