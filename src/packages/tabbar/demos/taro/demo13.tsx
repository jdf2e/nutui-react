import React, { useState } from 'react'
import { Image, View } from '@tarojs/components'
import { Tabbar } from '@nutui/nutui-react-taro'
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
        <Image
          src={skinBoard}
          mode="scaleToFill"
          style={{ width: '100%', height: '100%' }}
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
            <View
              className="nut-tabbar-skin-icon"
              style={{ position: 'relative' }}
            >
              {active && (
                <Image
                  src={skinActiveOverlay}
                  mode="aspectFit"
                  style={{
                    position: 'absolute',
                    top: '5.8px',
                    left: '50%',
                    width: '29.4px',
                    height: '29.4px',
                    transform: 'translateX(-50%)',
                  }}
                />
              )}
              <Image
                src={active ? pressed : normal}
                mode="aspectFit"
                style={{
                  position: 'relative',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>
          )}
        />
      ))}
    </Tabbar>
  )
}

export default Demo13
