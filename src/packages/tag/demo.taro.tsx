import React from 'react'
import Taro from '@tarojs/taro'
import { CircleClose } from '@nutui/icons-react-taro'
import { Cell, Tag } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'

const TagDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      tag: '标签',
      basic: '基础用法',
      style: '样式风格',
      customColor: '自定义颜色',
      plain: '空心样式',
      round: '圆角样式',
      mark: '标记样式',
      closeable: '可关闭标签',
      backgroundColor: '背景颜色',
      textColor: '文字颜色',
      plainColor: '空心颜色',
    },
    'en-US': {
      tag: 'Tag',
      basic: 'Basic Usage',
      style: 'Style',
      customColor: 'Custom Color',
      plain: 'Plain',
      round: 'Round',
      mark: 'Mark',
      closeable: 'Closeable',
      backgroundColor: 'Background Color',
      textColor: 'Text Color',
      plainColor: 'Plain Color',
    },
  })
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Cell.Group>
          <Cell
            title="primary"
            extra={<Tag type="primary">{translated.tag}</Tag>}
          />
          <Cell
            title="success"
            extra={<Tag type="success">{translated.tag}</Tag>}
          />
          <Cell
            title="danger"
            extra={<Tag type="danger">{translated.tag}</Tag>}
          />
          <Cell
            title="warning"
            extra={<Tag type="warning">{translated.tag}</Tag>}
          />
        </Cell.Group>

        <h2>{translated.style}</h2>
        <Cell.Group>
          <Cell
            title={translated.plain}
            extra={<Tag plain>{translated.tag}</Tag>}
          />
          <Cell
            title={translated.round}
            extra={
              <Tag round type="primary">
                {translated.tag}
              </Tag>
            }
          />
          <Cell
            title={translated.mark}
            extra={
              <Tag mark type="primary">
                {translated.tag}
              </Tag>
            }
          />
          <Cell
            title={translated.closeable}
            extra={
              <Tag
                closeable
                closeIcon={<CircleClose width={12} height={12} />}
                onClose={() => Taro.showToast({ title: 'Tag closed' })}
                type="primary"
              >
                {translated.tag}
              </Tag>
            }
          />
        </Cell.Group>

        <h2>{translated.customColor}</h2>
        <Cell.Group>
          <Cell
            title={translated.backgroundColor}
            extra={<Tag background="#FA685D">{translated.tag}</Tag>}
          />
          <Cell
            title={translated.textColor}
            extra={
              <Tag background="#E9E9E9" color="#999999">
                {translated.tag}
              </Tag>
            }
          />
          <Cell
            title="空心颜色"
            extra={
              <Tag background="#FA2400" plain>
                {translated.tag}
              </Tag>
            }
          />
        </Cell.Group>
      </div>
    </>
  )
}

export default TagDemo
