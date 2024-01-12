import React from 'react'
import { Failure } from '@nutui/icons-react'
import { Tag } from './tag'
import Cell from '@/packages/cell'
import { useTranslate } from '@/sites/assets/locale'

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
      imageText: '图文',
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
      imageText: 'image-text',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell.Group>
          <Cell
            title="primary"
            extra={<Tag type="primary">{translated.tag}</Tag>}
          />
          <Cell title="info" extra={<Tag type="info">{translated.tag}</Tag>} />

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
              <Tag closeable onClose={() => alert('Tag closed')} type="primary">
                {translated.tag}
              </Tag>
            }
          />
          <Cell
            title={translated.closeable}
            extra={
              <Tag
                closeable
                closeIcon={<Failure width={8} height={8} />}
                onClose={() => alert('Tag closed')}
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
            title={translated.plainColor}
            extra={
              <Tag background="#FA2400" plain>
                {translated.tag}
              </Tag>
            }
          />
        </Cell.Group>
        <h2>{translated.imageText}</h2>
        <Cell
          title="info"
          extra={
            <Tag type="info">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  height="10"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAsCAMAAAAgsQpJAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwAdEr+crtuABfTnao8pUMpddzJFO9SD9HUAAAFqSURBVDjLjVVbAoMgDBN5CfhC5P5XXYtuDilivyaEpg0p67oiJufnvmvF4FTEkOEZ52z8xrLVYb1EhJEjT1BXpV1gVzmsbxoN/PYVoIC9cTg/GJ6aSdycsw3Ab8juIYXIKlY0+V4kWGO0BNDfEgI5aDWVQJBmbS9BqPK4BhVeAR0JhKZDCRQFbiX0xbWN6EXd5WWWUJJTJvBEkbCmCpcoQh9G1AjNmIHyzpKvMrCaLuXB5awgtI8aiMvWN3K0514zuJmycxWLo2yWnR9jpK7ljM38NtHucqiO4WVe/ohLFjoul/bsxQ2Ev4yi/pysUKO8auR0TqbxOcm6jsta1Lmn1ySqXEfobWQZ7HhsrP535CZNgoprMdFEPt95ep/eQBP+LtUIuvKQuMLXdVGyqhZBnS0y8yQZFmAPgCwMW+SMeE2MGslyQjXOLm/9A8yI8Y0KT1MtiLa6Eei5NLsvApTc3iDTePauRa1hOD/vACHPGH6amQAAAABJRU5ErkJggg=="
                  alt=""
                />
                {translated.tag}
              </div>
            </Tag>
          }
        />
      </div>
    </>
  )
}

export default TagDemo
