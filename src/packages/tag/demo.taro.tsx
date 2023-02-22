import React from 'react'
import Taro from '@tarojs/taro'
import { CellGroup, Cell, Tag } from '@/packages/nutui.react.taro'
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
        <CellGroup>
          <Cell
            title="primary"
            linkSlot={<Tag type="primary">{translated.tag}</Tag>}
          />
          <Cell
            title="success"
            linkSlot={<Tag type="success">{translated.tag}</Tag>}
          />
          <Cell
            title="danger"
            linkSlot={<Tag type="danger">{translated.tag}</Tag>}
          />
          <Cell
            title="warning"
            linkSlot={<Tag type="warning">{translated.tag}</Tag>}
          />
        </CellGroup>

        <h2>{translated.style}</h2>
        <CellGroup>
          <Cell
            title={translated.plain}
            linkSlot={<Tag plain>{translated.tag}</Tag>}
          />
          <Cell
            title={translated.round}
            linkSlot={
              <Tag round type="primary">
                {translated.tag}
              </Tag>
            }
          />
          <Cell
            title={translated.mark}
            linkSlot={
              <Tag mark type="primary">
                {translated.tag}
              </Tag>
            }
          />
          <Cell
            title={translated.closeable}
            linkSlot={
              <Tag
                closeable
                iconSize="14px"
                onClose={() => Taro.showToast({ title: 'Tag closed' })}
                type="primary"
              >
                {translated.tag}
              </Tag>
            }
          />
        </CellGroup>

        <h2>{translated.customColor}</h2>
        <CellGroup>
          <Cell
            title={translated.backgroundColor}
            linkSlot={<Tag color="#FA685D">{translated.tag}</Tag>}
          />
          <Cell
            title={translated.textColor}
            linkSlot={
              <Tag color="#E9E9E9" textColor="#999999">
                {translated.tag}
              </Tag>
            }
          />
          <Cell
            title="空心颜色"
            linkSlot={
              <Tag color="#FA2400" plain>
                {translated.tag}
              </Tag>
            }
          />
        </CellGroup>
      </div>
    </>
  )
}

export default TagDemo
