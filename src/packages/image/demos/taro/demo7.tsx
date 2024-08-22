import React from 'react'
import { Image } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  const modes = [
    'top',
    'bottom',
    'center',
    'left',
    'right',
    'top left',
    'top right',
    'bottom left',
    'bottom right',
  ]
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {modes.map((mode) => {
          return (
            <div style={{ width: 100, height: 100 }} key={mode}>
              <Image src={src} mode={mode as any} width="80" height="80" />
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Demo7
