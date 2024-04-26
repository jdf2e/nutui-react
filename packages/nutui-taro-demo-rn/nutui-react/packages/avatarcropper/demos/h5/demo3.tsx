import React, { useState } from 'react'
import { Cell, Avatar, AvatarCropper } from '@nutui/nutui-react'

const Demo3 = () => {
  const [imageUrl, setImageUrl] = useState(
    'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'
  )
  const cutImage = (data: any) => {
    setImageUrl(data)
  }
  return (
    <>
      <Cell>
        <AvatarCropper shape="round" onConfirm={cutImage}>
          <Avatar size="large" shape="round" src={imageUrl} />
        </AvatarCropper>
      </Cell>
    </>
  )
}
export default Demo3
