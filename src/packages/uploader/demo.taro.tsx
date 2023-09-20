import React, { useState, useRef } from 'react'
import Taro from '@tarojs/taro'
import { Dongdong, Loading1 } from '@nutui/icons-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Button, Uploader, Progress, Cell } from '@/packages/nutui.react.taro'
import '@/packages/uploader/demo.scss'
import Header from '@/sites/components/header'

export type FileItemStatus =
  | 'ready'
  | 'uploading'
  | 'success'
  | 'error'
  | 'removed'

export type FileType<T> = { [key: string]: T }

export class FileItem {
  status: FileItemStatus = 'ready'

  message = '准备中..'

  uid: string = new Date().getTime().toString()

  name?: string

  url?: string

  path?: string

  type?: string

  percentage: string | number = 0

  formData: FormData = new FormData()
}

interface uploadRefState {
  submit: () => void
  clear: () => void
}

interface T {
  '6114cef1': string
  '844759c9': string
  df9128ec: string
  '219481a6': string
  '29ab0c96': string
  '403b055e': string
  '25e04d44': string
  d06e873e: string
  ca3903f3: string
  uploadProgressAction: string
  '84aa6bce': string
  uploadListDefault: string
  uploadListShow: string
  uploadDefaultProgress: string
  a4afedb5: string
  '37c65f47': string
  bb5caa9c: string
  '27f1376e': string
  videoUploader: string
  '0e5eaea3': string
  b7454181: string
  '5c393e52': string
  e3217a8d: string
  uploadXhrCustom: string
  '67fffe24': string
  fcf01d1a: string
  clearBtnUpload: string
  '7db1a8b2': string
}
const UploaderDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '6114cef1': '文件文件文件文件1.png',
      '844759c9': '上传成功',
      df9128ec: '文件2.png',
      '219481a6': '上传失败',
      '29ab0c96': '文件3.png',
      '403b055e': '上传中...',
      '25e04d44': 'oversize触发文件大小不能超过50kb',
      d06e873e: 'start触发',
      ca3903f3: 'delete事件触发',
      uploadProgressAction: 'progress事件触发',
      '84aa6bce': '基础用法',
      uploadListDefault: '基础用法-上传列表展示',
      uploadListShow: '自定义上传按钮',
      uploadDefaultProgress: '自定义上传使用默认进度条',
      a4afedb5: '上传状态',
      '37c65f47': '自定义上传样式',
      bb5caa9c: '上传文件',
      '27f1376e': '直接调起摄像头（移动端生效）',
      videoUploader: '使用前摄像头拍摄3s视频并上传(仅支持微信小程序)',
      '0e5eaea3': '限制上传数量5个',
      b7454181: '限制上传大小（每个文件最大不超过50kb）',
      '5c393e52': '图片压缩（在beforeupload钩子中处理）',
      e3217a8d: '自定义数据 FormData、headers',
      uploadXhrCustom: '自定义 Taro.uploadFile 上传方式(before-xhr-upload)',
      '67fffe24': '选中文件后，通过按钮手动执行上传',
      fcf01d1a: '执行上传',
      clearBtnUpload: '手动清空上传',
      '7db1a8b2': '禁用状态',
    },
    'zh-TW': {
      '6114cef1': '檔1.png',
      '844759c9': '上傳成功',
      df9128ec: '檔2.png',
      '219481a6': '上傳失敗',
      '29ab0c96': '檔3.png',
      '403b055e': '上傳中...',
      '25e04d44': 'oversize觸發檔大小不能超過50kb',
      d06e873e: 'start觸發',
      ca3903f3: 'delete事件觸發',
      uploadProgressAction: 'progress事件觸發',
      '84aa6bce': '基础用法',
      uploadListDefault: '基础用法-上傳列表展示',
      uploadListShow: '自定義上傳按钮',
      uploadDefaultProgress: '自定義上傳使用默認進度條',
      a4afedb5: '上傳狀態',
      '37c65f47': '自定義上傳樣式',
      bb5caa9c: '上傳檔',
      '27f1376e': '直接調起攝像頭（移動端生效）',
      videoUploader: '使用前監視器拍攝3s視頻並上傳（僅支持微信小程式）',
      '0e5eaea3': '限制上傳數量5個',
      b7454181: '限制上傳大小（每個檔案最大不超過50kb）',
      '5c393e52': '圖片壓縮（在beforeupload鉤子中處理）',
      e3217a8d: '自定義數據 FormData、headers',
      uploadXhrCustom: '自定義 Taro.uploadFile 上傳方式(before-xhr-upload)',
      '67fffe24': '選取檔後，通過按鈕手動執行上傳',
      fcf01d1a: '執行上傳',
      clearBtnUpload: '手動清空上傳',
      '7db1a8b2': '禁用狀態',
    },
    'en-US': {
      '6114cef1': 'FileFileFileFile 1 .png',
      '844759c9': 'Upload successful',
      df9128ec: 'File 2 .png',
      '219481a6': 'Upload failed',
      '29ab0c96': 'File 3 .png',
      '403b055e': 'Uploading...',
      '25e04d44': 'The oversize trigger file size cannot exceed 50kb',
      d06e873e: 'start triggered',
      ca3903f3: 'The delete event is triggered',
      uploadProgressAction: 'The progress event is triggered',
      '84aa6bce': 'Basic usage',
      uploadListDefault: 'Basic usage - upload list dispaly',
      uploadListShow: 'Custom Upload Area',
      uploadDefaultProgress: 'Custom upload uses default progress bar',
      a4afedb5: 'Upload status',
      '37c65f47': 'Customize the upload style',
      bb5caa9c: 'Upload the file',
      '27f1376e': 'Direct camera up (mobile)',
      videoUploader:
        'Use the front camera to capture 3s video and upload it (only support WeChat applet)',
      '0e5eaea3': 'Limit the number of uploads to 5',
      b7454181: 'Limit upload size (maximum 50kb per file)',
      '5c393e52': 'Image compression (handled in a foreupload hook)',
      e3217a8d: 'Custom data FormData, headers',
      uploadXhrCustom: 'Custom xhr Taro.uploadFile method (before-xhr-upload)',
      '67fffe24':
        'After selecting Chinese, manually perform the upload via the button',
      fcf01d1a: 'Perform the upload',
      clearBtnUpload: 'Clear upload manually',
      '7db1a8b2': 'Disabled state',
    },
  })

  const [progressPercent, setProgressPercent] = useState(0)
  const uploadRef = useRef<uploadRefState>(null)
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const formData = {
    custom: 'test',
  }
  const defaultFileList: FileType<React.ReactNode>[] = [
    {
      name: translated['6114cef1'],
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: translated['844759c9'],
      type: 'image',
      uid: '122',
    },
    {
      name: translated.df9128ec,
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: translated['844759c9'],
      type: 'image',
      uid: '123',
    },
    {
      name: translated.df9128ec,
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'error',
      message: translated['219481a6'],
      type: 'image',
      uid: '124',
      errorIcon: 'star',
    },
    {
      name: translated['29ab0c96'],
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: translated['403b055e'],
      type: 'image',
      uid: '125',
    },
    {
      name: translated['29ab0c96'],
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: translated['403b055e'],
      type: 'image',
      uid: '126',
      loadingIcon: <Loading1 className="nut-icon-loading1" color="#fff" />,
    },
    {
      name: translated['29ab0c96'],
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: translated['403b055e'],
      type: 'image',
      uid: '127',
      loadingIcon: ' ',
    },
  ]
  const onOversize = (files: Taro.chooseImage.ImageFile[]) => {
    console.log(translated['25e04d44'], files)
  }
  const onStart = () => {
    console.log(translated.d06e873e)
  }
  const onProgress = ({ event, options, percentage }: any) => {
    setProgressPercent(percentage)
    console.log(translated.uploadProgressAction)
  }
  const onDelete = (file: FileItem, fileList: FileType<React.ReactNode>[]) => {
    console.log(translated.ca3903f3, file, fileList)
  }
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
  const submitUpload = () => {
    ;(uploadRef.current as uploadRefState).submit()
  }
  const clearUpload = () => {
    ;(uploadRef.current as uploadRefState).clear()
  }
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} bg-w`}>
        <h2>{translated['84aa6bce']}</h2>
        <Cell className="cell-wrap">
          <Uploader
            url={uploadUrl}
            onStart={onStart}
            style={{
              marginRight: '10px',
              marginBottom: '10px',
              '--nutui-uploader-picture-border': '1px solid red',
              '--nutui-uploader-picture-border-radius': '16px',
            }}
          />
          <Uploader
            url={uploadUrl}
            uploadLabel="商品主图"
            onStart={onStart}
            style={{ marginRight: '10px' }}
          />
          <Uploader
            url={uploadUrl}
            uploadIcon={<Dongdong />}
            onStart={onStart}
          />
        </Cell>

        <h2>{translated['84aa6bce']}</h2>
        <Cell>
          <Uploader previewType="list" url={uploadUrl} onStart={onStart} />
        </Cell>

        <h2>{translated.a4afedb5}</h2>
        <Uploader
          url={uploadUrl}
          defaultValue={defaultFileList}
          onDelete={onDelete}
          uploadIcon={<Dongdong />}
        />

        <h2>{translated.uploadListShow}</h2>
        <Uploader
          url={uploadUrl}
          defaultValue={defaultFileList}
          maxCount="10"
          multiple
          previewType="list"
        >
          <Button type="success" size="small">
            {translated.bb5caa9c}
          </Button>
        </Uploader>

        <h2>{translated['37c65f47']}</h2>
        <Uploader url={uploadUrl}>
          <Button type="success" size="small">
            {translated.bb5caa9c}
          </Button>
        </Uploader>

        <h2>{translated.uploadDefaultProgress}</h2>
        <Uploader url={uploadUrl} onProgress={onProgress}>
          <Button type="success" size="small">
            {translated.bb5caa9c}
          </Button>
        </Uploader>
        <br />
        <Progress
          percent={progressPercent}
          color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          animated
        />

        <h2>{translated['27f1376e']}</h2>
        <Uploader url={uploadUrl} sourceType={['camera']} />

        <h2>{translated.videoUploader}</h2>
        <Uploader
          url={uploadUrl}
          maxDuration={3}
          sourceType={['camera']}
          camera="front"
        />

        <h2>{translated['0e5eaea3']}</h2>
        <Uploader url={uploadUrl} maxCount="5" multiple />

        <h2>{translated.b7454181}</h2>
        <Uploader
          url={uploadUrl}
          multiple
          maxFileSize={1024 * 50}
          onOversize={onOversize}
        />

        <h2>{translated.e3217a8d}</h2>
        <Uploader url={uploadUrl} data={formData} headers={formData} />

        <h2>{translated.uploadXhrCustom}</h2>
        <Uploader
          url={uploadUrl}
          method="put"
          beforeXhrUpload={beforeXhrUpload}
        />

        <h2>{translated['67fffe24']}</h2>
        <Uploader
          url={uploadUrl}
          maxCount="5"
          autoUpload={false}
          ref={uploadRef}
        />
        <Button
          type="success"
          size="small"
          onClick={submitUpload}
          style={{ marginRight: '10px', marginTop: '20px' }}
        >
          {translated.fcf01d1a}
        </Button>
        <Button type="primary" size="small" onClick={clearUpload}>
          {translated.clearBtnUpload}
        </Button>

        <h2>{translated['7db1a8b2']}</h2>
        <Uploader disabled />
      </div>
    </>
  )
}

export default UploaderDemo
