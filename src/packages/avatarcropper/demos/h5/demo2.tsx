import React, { useState } from 'react'
import { Cell, Avatar, AvatarCropper, Button } from '@nutui/nutui-react'
import { Refresh, Retweet } from '@nutui/icons-react'

const Demo2 = () => {
  const [imageUrl, setImageUrl] = useState(
    'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'
  )
  const cutImage = (data: any) => {
    setImageUrl(data)
  }
  return (
    <>
      <Cell>
        <AvatarCropper
          toolbarPosition="top"
          editText="修改"
          onConfirm={cutImage}
          toolbar={[
            <Button type="danger" key="cancel">
              取消
            </Button>,
            <Refresh key="reset" />,
            <Retweet key="rotate" />,
            <Button type="success" key="confirm">
              确认
            </Button>,
          ]}
        >
          <Avatar size="large" src={imageUrl} />
        </AvatarCropper>
      </Cell>
    </>
  )
}
export default Demo2
