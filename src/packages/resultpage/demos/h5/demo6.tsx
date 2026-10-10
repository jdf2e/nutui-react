import React, { useState } from 'react'
import { Popup, Cell, ResultPage, Button } from '@nutui/nutui-react'

const contentStyle: React.CSSProperties = {
  height: '196px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const actionsStyle: React.CSSProperties = {
  height: '92px',
  padding: '8px',
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  boxShadow: '0px 0.5px 0px #FFFFFF inset, 0px 8px 40px rgba(0, 0, 0, 0.12)',
}

const actionButtonStyle: React.CSSProperties = {
  flex: 1,
}

const Demo6 = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Cell title="半弹层内嵌结果反馈" onClick={() => setVisible(true)} />
      <Popup
        visible={visible}
        position="bottom"
        onClose={() => setVisible(false)}
        style={{ height: '282px' }}
      >
        <div className="demo-content" style={contentStyle}>
          <ResultPage
            title="反馈标题"
            description="内容描述可折行，建议最多不超过两行建议最多不超过两行"
            status="success"
          />
        </div>
        <div className="demo-actions" style={actionsStyle}>
          <Button type="service" size="large" style={actionButtonStyle}>
            操作按钮
          </Button>
          <Button type="primary" size="large" style={actionButtonStyle}>
            操作按钮
          </Button>
        </div>
      </Popup>
    </>
  )
}
export default Demo6
