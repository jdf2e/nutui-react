import React, { useState } from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { skinActiveOverlay, skinBoard, skinIcons } from '../skin-assets'
import '../skin-demo.scss'

const Demo12 = () => {
  const [value, setValue] = useState(1)

  return (
    <Tabbar
      className="tabbar-skin-demo"
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
    >
      {skinIcons.map(({ normal, pressed }, index) => (
        <Tabbar.Item
          key={index}
          className="tabbar-skin-demo-item"
          title="文案"
          icon={(active) => (
            <span className="tabbar-skin-demo-icon">
              {active && (
                <img
                  src={skinActiveOverlay}
                  alt=""
                  style={{
                    position: 'absolute',
                    top: 5.8,
                    left: '50%',
                    width: 29.4,
                    height: 29.4,
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

export default Demo12
