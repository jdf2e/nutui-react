import React from 'react'
import { Uploader } from '@nutui/nutui-react-taro'

const Demo11 = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const beforeXhrUpload = (taroUploadFile: any, options: any) => {
    const uploadTask = taroUploadFile({
      url: options.url,
      filePath: options.taroFilePath,
      fileType: options.fileType,
      header: {
        'Content-Type': 'multipart/form-data',
        ...options.headers,
      },
      formData: options.formData,
      name: options.name,
      success(response: { errMsg: any; statusCode: number; data: string }) {
        if (options.xhrState === response.statusCode) {
          options.onSuccess?.(response, options)
        } else {
          options.onFailure?.(response, options)
        }
      },
      fail(e: any) {
        options.onFailure?.(e, options)
      },
    })
    options.onStart?.(options)
    uploadTask.progress(
      (res: {
        progress: any
        totalBytesSent: any
        totalBytesExpectedToSend: any
      }) => {
        options.onProgress?.(res, options)
      }
    )
  }
  return (
    <Uploader url={uploadUrl} method="put" beforeXhrUpload={beforeXhrUpload} />
  )
}
export default Demo11
