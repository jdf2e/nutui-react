import React from 'react'
import { Image, Cell } from '@nutui/nutui-react'

const Demo8 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  const imageData = [1, 2, 3, 4, 5, 6]
  const placeholderImg = (
    <img
      alt=""
      width="100%"
      height="150px"
      src="https://img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png"
    />
  )
  const style = `
    .lazy-box{
      width:100%
    }
    .lazy-box .nut-image{
      margin-bottom: 10px;
    }
  `
  return (
    <>
      <style>{style}</style>
      <Cell>
        <div className="lazy-box">
          {imageData.map((item) => {
            return (
              <Image
                key={item}
                height="150"
                src={src}
                lazy
                loading={placeholderImg}
                error={placeholderImg}
              />
            )
          })}
        </div>
      </Cell>
    </>
  )
}
export default Demo8
