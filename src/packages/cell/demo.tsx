import React from 'react'
import { My, Right } from '@nutui/icons-react'
import { useTranslate } from '../../sites/assets/locale'
import { Cell } from './cell'
import { CellGroup } from '../cellgroup/cellgroup'
import { Switch } from '../switch/switch'
import Toast from '../toast'
import './demo.scss'

interface T {
  basic: string
  extra: string
  description: string
  title: string
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
  title6: string
  title7: string
  description1: string
  link: string
  urlJump: string
  content: string
  customRight: string
  clickEventToast: string
}

const CellDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      extra: '描述文字',
      description: '使用 nut-cell-group 支持 title description',
      title: '我是标题',
      title1: '我是描述',
      title2: '点击测试',
      title3: '圆角设置 0',
      title4: '链接 | 分组用法',
      title5: '垂直居中',
      title6: '自定义标题区域',
      title7: '分组用法',
      description1: '单元格之间不显示下边线',
      link: '链接',
      urlJump: 'URL 跳转',
      content: '自定义内容',
      customRight: '自定义右侧区域',
      clickEventToast: '点击事件',
    },
    'zh-TW': {
      basic: '基础用法',
      extra: '描述文字',
      description: '使用 nut-cell-group 支持 title description',
      title: '我是標題',
      title1: '我是描述',
      title2: '點擊測試',
      title3: '圓角設置 0',
      title4: '鏈接 | 分組用法',
      title5: '垂直居中',
      title6: '自定義標題區域',
      title7: '分組用法',
      description1: '單元格之間不顯示下邊線',
      link: '鏈接',
      urlJump: 'URL 跳轉',
      content: '自定義內容',
      customRight: '自定義右側區域',
      clickEventToast: '点击事件',
    },
    'en-US': {
      basic: 'Basic Usage',
      extra: 'extra',
      description: 'Usage nut-cell-group support title description',
      title: 'Title',
      title1: 'Description',
      title2: 'Click Test',
      title3: 'Round Radius 0',
      title4: 'Link | CellGroup Usage',
      title5: 'Vertical Center',
      title6: 'Customize the title area',
      title7: 'Grouping usage',
      description1: 'The bottom edge is not displayed between cells',
      link: 'Link',
      urlJump: 'URL Jump',
      content: 'Customize Content',
      customRight: 'Customize the right area',
      clickEventToast: 'Click Test',
    },
  })

  const testClick = (
    event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    Toast.show(translated.clickEventToast)
  }

  const onJumpclick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    url: string
  ) => {
    const replace = false
    if (url) {
      replace ? window.location.replace(url) : (window.location.href = url)
    }
  }

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell title={translated.title} extra={translated.extra} />
        <Cell
          title={translated.title}
          description={translated.title1}
          extra={translated.extra}
        />
        <Cell
          title={translated.title2}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => testClick(event)}
        />
        <Cell title={translated.title3} radius="0" />
        <h2>{translated.content}</h2>
        <Cell>
          <div>{translated.content}</div>
        </Cell>

        <h2>{translated.title6}</h2>
        <Cell
          title={
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <My />
              <span style={{ marginLeft: '5px' }}>{translated.title}</span>
            </div>
          }
          description={
            <span>
              {translated.title1} <b style={{ color: 'red' }}>1</b>
            </span>
          }
          extra={translated.extra}
        />
        <CellGroup title={translated.customRight}>
          <Cell title="Switch" extra={<Switch defaultChecked />} />
        </CellGroup>
        <h2>{translated.title5}</h2>
        <Cell
          align="center"
          title={translated.title}
          description={translated.title1}
          extra={translated.extra}
        />
        <CellGroup
          title={translated.title4}
          description={translated.description}
        >
          <Cell
            className="nutui-cell--clickable"
            title={translated.link}
            align="center"
            extra={<Right />}
          />
          <Cell
            className="nutui-cell--clickable"
            title={translated.urlJump}
            extra={
              <>
                <span style={{ marginRight: '5px' }}>https://jd.com</span>
                <Right />
              </>
            }
            align="center"
            onClick={(
              event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
            ) => onJumpclick(event, 'https://jd.com')}
          />
        </CellGroup>
        <CellGroup
          divider={false}
          title={translated.title7}
          description={translated.description1}
        >
          <Cell title={translated.title} extra={translated.extra} />
          <Cell title={translated.title} extra={translated.extra} />
        </CellGroup>
      </div>
    </>
  )
}

export default CellDemo
