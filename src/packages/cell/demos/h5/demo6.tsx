import React from 'react'
import { Cell, Button } from '@nutui/nutui-react'
import { ArrowRight, User } from '@nutui/icons-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo6 = ({ t }: propsType) => {
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
      <Cell.Group>
        <Cell
          className="nutui-cell-clickable"
          title={t.link}
          align="center"
          extra={<ArrowRight />}
        />
        <Cell
          className="nutui-cell-clickable"
          title={t.jump}
          extra={
            <>
              <span style={{ marginRight: '5px' }}>https://jd.com</span>
              <ArrowRight />
            </>
          }
          align="center"
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => onJumpclick(event, 'https://jd.com')}
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <span style={{ fontWeight: '500' }}>{t.title}</span>
              <span
                style={{
                  color: '#888B94',
                  fontSize: '10px',
                  marginLeft: '5px',
                  lineHeight: 1.5,
                }}
              >
                {t.description}
              </span>
            </div>
          }
          extra={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              More
              <ArrowRight
                width={12}
                height={12}
                style={{ marginLeft: '5px' }}
              />
            </div>
          }
        />
        <Cell>
          <div style={{ minHeight: '50px' }}>{t.customContent}</div>
        </Cell>
        <Cell
          align="center"
          title={
            <div
              style={{
                color: '#888B94',
                fontSize: '12px',
              }}
            >
              {t.description}
            </div>
          }
          extra={
            <Button type="primary" size="small">
              Action
            </Button>
          }
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <User style={{ marginRight: '5px' }} /> {t.title}
            </div>
          }
          extra={<ArrowRight />}
        />
        <Cell>
          <div style={{ minHeight: '50px' }}>{t.customContent}</div>
        </Cell>
        <Cell
          align="center"
          extra={
            <Button type="primary" size="small">
              Action
            </Button>
          }
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <div
              style={{ display: 'flex', alignItems: 'center', color: 'blue' }}
            >
              {t.title}
            </div>
          }
        />
        <Cell>
          <div style={{ color: '#26bf26' }}>{t.customContent}</div>
        </Cell>
      </Cell.Group>
    </>
  )
}
export default withTranslation(Demo6)
