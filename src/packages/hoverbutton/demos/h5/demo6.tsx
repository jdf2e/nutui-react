/**
 * 基础用法
 */
import React from 'react'
import { HoverButton } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <>
      <HoverButton>
        <div
          className="nut-hoverbutton-item-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              lineHeight: 1,
              marginTop: 5,
              fontFamily: 'JD',
            }}
          >
            3
          </span>
          <div
            style={{
              height: 1,
              width: 20,
              background: '#1A1A1A',
              marginTop: 3,
              marginBottom: 3,
            }}
          />
          <div
            style={{
              fontSize: 10,
              lineHeight: '9px',
              fontFamily: 'JD',
            }}
          >
            238
          </div>
        </div>
      </HoverButton>
    </>
  )
}
export default Demo1
