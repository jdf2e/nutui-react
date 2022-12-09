import React from 'react'
import { Ellipsis } from './ellipsis'
import Cell from '@/packages/cell'
import { useTranslate } from '../../sites/assets/locale'

interface T {
  basic: string
  header: string
  end: string
  middle: string
  rows: string
  expand: string
}
const EllipsisDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      header: '头部省略',
      end: '尾部省略',
      middle: '中间省略',
      rows: '多行省略',
      expand: '展开收起',
    },
    'en-US': {
      basic: 'Basic Usage',
      header: 'Leading',
      end: 'Tailing',
      middle: 'Middle',
      rows: 'Multi-line',
      expand: 'Expand & Collapse',
    },
  })
  const content =
    'NutUI 上线后我们研发团队也在不断的优化、测试、使用、迭代的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'

  return (
    <>
      <div className="demo">
        <h2>{translated.header}</h2>
        <Cell>
          <Ellipsis content={content} direction="start" />
        </Cell>
        <h2>{translated.end}</h2>
        <Cell>
          <Ellipsis content={content} direction="end" />
        </Cell>
        <h2>{translated.middle}</h2>
        <Cell>
          <Ellipsis content={content} direction="middle" />
        </Cell>
        <h2>{translated.rows}</h2>
        <Cell>
          <Ellipsis content={content} direction="start" rows="3" />
        </Cell>
        <h2>{translated.expand}</h2>
        <Cell>
          <Ellipsis
            content={content}
            direction="start"
            expandText="展开"
            collapseText="收起"
          />
        </Cell>
        <Cell>
          <Ellipsis
            content={content}
            direction="middle"
            expandText="展开"
            collapseText="收起"
          />
        </Cell>
        <Cell>
          <Ellipsis
            content={content}
            direction="end"
            rows="3"
            expandText="展开"
            collapseText="收起"
          />
        </Cell>
      </div>
    </>
  )
}

export default EllipsisDemo
