import React, { useState } from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { skinActiveOverlay, skinBoard, skinIcons } from '../skin-assets'

const Demo13 = () => {
  const [value, setValue] = useState(1)

  return (
    <Tabbar
      value={value}
      onSwitch={setValue}
      activeColor="#171A26"
      inactiveColor="#171A26"
      skinBackground={
        <img
          src={skinBoard}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
        />
      }
      style={
        {
          '--nutui-tabbar-active-background': 'transparent',
        } as React.CSSProperties
      }
    >
      {skinIcons.map(({ normal, pressed }, index) => (
        <Tabbar.Item
          key={index}
          title="文案"
          icon={(active) => (
            <span
              className="nut-tabbar-skin-icon"
              style={{ position: 'relative' }}
            >
              {active && (
                <img
                  src={skinActiveOverlay}
                  alt=""
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    width: 40,
                    height: 40,
                    transform: 'translateX(-50%)',
                  }}
                />
              )}
              <img
                src={active ? pressed : normal}
                alt=""
                style={{
                  position: 'relative',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </span>
          )}
        />
      ))}
    </Tabbar>
  )
}

export default Demo13
