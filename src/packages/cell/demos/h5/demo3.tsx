import React from 'react'
import { Cell, Checkbox } from '@nutui/nutui-react'
import { Tips } from '@nutui/icons-react'

const iconLarge =
  'https://img30.360buyimg.com/img/jfs/t1/526019/31/8316/531/6ab2789eF8aa57258/0276028028153f64.png'

const tagStyle: React.CSSProperties = {
  fontSize: 10,
  lineHeight: '14px',
  color: 'var(--nutui-color-primary, #ff0f23)',
  border: '0.5px solid rgba(255, 173, 190, 1)',
  borderRadius: 'var(--nutui-radius-xs, 2px)',
  padding: '2px 4px',
}

const Demo3 = () => {
  const titleNode = (
    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
      <span>标题文案</span>
      <Tips
        width={12}
        height={12}
        color="var(--nutui-color-text-help, #888b94)"
        style={{ marginLeft: 4 }}
      />
    </div>
  )

  const descriptionNode = (
    <div>
      <div style={{ display: 'flex', marginTop: 4, marginBottom: 4 }}>
        <div style={tagStyle}>立减5元+再返18元支付券</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>二级信息</span>
        <Tips width={12} height={12} style={{ marginLeft: 4 }} />
      </div>
    </div>
  )

  return (
    <Cell
      align="center"
      style={{
        '--nutui-cell-description-margin': '0px',
        '--nutui-cell-icon-align-self': 'flex-start',
      }}
      icon={<img src={iconLarge} style={{ width: 20, height: 20 }} alt="" />}
      title={titleNode}
      description={descriptionNode}
      extra={
        <Checkbox
          style={{ marginRight: 'calc(-8px * var(--nut-scale-f, 1))' }}
        />
      }
    />
  )
}
export default Demo3
