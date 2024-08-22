import React from 'react'
import { Uploader } from '@nutui/nutui-react'

const Demo11 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const beforeXhrUpload = (xhr: XMLHttpRequest, options: any) => {
    if (options.method.toLowerCase() === 'put') {
      xhr.send(options.sourceFile)
    } else {
      xhr.send(options.formData)
    }
  }

  return (
    <Uploader url={uploadUrl} method="put" beforeXhrUpload={beforeXhrUpload} />
  )
}
export default Demo11
