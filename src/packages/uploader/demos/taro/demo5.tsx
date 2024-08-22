import React, { useState } from 'react'
import { Uploader, Button, Progress } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const [progressPercent, setProgressPercent] = useState(0)
  const onProgress = ({ event, options, percentage }: any) => {
    setProgressPercent(percentage)
  }
  return (
    <>
      <Uploader url={uploadUrl} onProgress={onProgress}>
        <Button type="success" size="small">
          上传文件
        </Button>
      </Uploader>
      <br />
      <Progress
        percent={progressPercent}
        color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
        animated
      />
    </>
  )
}
export default Demo5
