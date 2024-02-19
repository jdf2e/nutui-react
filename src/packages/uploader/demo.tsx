import React, { useState, useRef } from 'react'
import { Dongdong, Loading, Star } from '@nutui/icons-react'
import { useTranslate } from '../../sites/assets/locale'
import { Uploader } from './uploader'
import { FileItem } from './file-item'
import Button from '@/packages/button'
import Cell from '@/packages/cell'
import Progress from '@/packages/progress'
import './demo.scss'

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
  uploadDefaultProgress: string
  a4afedb5: string
  bb5caa9c: string
  '27f1376e': string
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
      '6114cef1': '文件文件文件文件1文件文件文件文件1文件文件文件文件1.png',
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
      uploadDefaultProgress: '自定义上传使用默认进度条',
      a4afedb5: '上传状态',
      bb5caa9c: '上传文件',
      '27f1376e': '直接调起摄像头（移动端生效）',
      '0e5eaea3': '限制上传数量5个',
      b7454181: '限制上传大小（每个文件最大不超过50kb）',
      '5c393e52': '图片压缩（在beforeupload钩子中处理）',
      e3217a8d: '自定义数据 FormData、headers',
      uploadXhrCustom: '自定义 xhr 上传方式(before-xhr-upload)',
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
      uploadDefaultProgress: '自定義上傳使用默認進度條',
      a4afedb5: '上傳狀態',
      bb5caa9c: '上傳檔',
      '27f1376e': '直接調起攝像頭（移動端生效）',
      '0e5eaea3': '限制上傳數量5個',
      b7454181: '限制上傳大小（每個檔案最大不超過50kb）',
      '5c393e52': '圖片壓縮（在beforeupload鉤子中處理）',
      e3217a8d: '自定義數據 FormData、headers',
      uploadXhrCustom: '自定義 xhr 上傳方式(before-xhr-upload)',
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
      uploadDefaultProgress: 'Custom upload uses default progress bar',
      a4afedb5: 'Upload status',
      bb5caa9c: 'Upload the file',
      '27f1376e': 'Direct camera up (mobile)',
      '0e5eaea3': 'Limit the number of uploads to 5',
      b7454181: 'Limit upload size (maximum 50kb per file)',
      '5c393e52': 'Image compression (handled in a foreupload hook)',
      e3217a8d: 'Custom data FormData, headers',
      uploadXhrCustom: 'Custom xhr upload method (before-xhr-upload)',
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
  const defaultFileList: FileItem[] = [
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
      failIcon: <Star style={{ color: 'white' }} />,
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
      loadingIcon: <Loading className="nut-icon-Loading" color="#fff" />,
    },
    {
      name: translated['29ab0c96'],
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: translated['403b055e'],
      type: 'image',
      uid: '127',
      loadingIcon: null,
    },
  ]
  const fileToDataURL = (file: Blob): Promise<any> => {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onloadend = (e) => resolve((e.target as FileReader).result)
      reader.readAsDataURL(file)
    })
  }
  const dataURLToImage = (dataURL: string): Promise<HTMLImageElement> => {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.src = dataURL
    })
  }
  const canvastoFile = (
    canvas: HTMLCanvasElement,
    type: string,
    quality: number
  ): Promise<Blob | null> => {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), type, quality)
    })
  }
  const onOversize = (files: File[]) => {
    console.log(translated['25e04d44'], files)
  }
  const onStart = () => {
    console.log(translated.d06e873e)
  }
  const onProgress = ({ event, options, percentage }: any) => {
    setProgressPercent(percentage)
    console.log(translated.uploadProgressAction)
  }
  const onDelete = (file: FileItem, fileList: FileItem[]) => {
    console.log(translated.ca3903f3, file, fileList)
  }
  const beforeUpload = async (files: File[]) => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    const base64 = await fileToDataURL(files[0])
    const img = await dataURLToImage(base64)
    canvas.width = img.width
    canvas.height = img.height
    context.clearRect(0, 0, img.width, img.height)
    context.drawImage(img, 0, 0, img.width, img.height)
    const blob = (await canvastoFile(canvas, 'image/jpeg', 0.5)) as Blob
    const f = await new File([blob], files[0].name, { type: files[0].type })
    return [f]
  }
  const beforeXhrUpload = (xhr: XMLHttpRequest, options: any) => {
    if (options.method.toLowerCase() === 'put') {
      xhr.send(options.sourceFile)
    } else {
      xhr.send(options.formData)
    }
  }
  const submitUpload = () => {
    ;(uploadRef.current as uploadRefState).submit()
  }
  const clearUpload = () => {
    ;(uploadRef.current as uploadRefState).clear()
  }
  return (
    <>
      <div className="demo bg-w demo-uploader">
        <h2>{translated['84aa6bce']}</h2>
        <Cell style={{ flexWrap: 'wrap', paddingBottom: '0px' }}>
          <Uploader
            url={uploadUrl}
            onStart={onStart}
            style={{
              marginInlineEnd: '10px',
              marginBottom: '10px',
            }}
            onChange={(v) => {
              console.log('outer onChange', v)
            }}
          />
          <Uploader
            url={uploadUrl}
            uploadLabel="商品主图"
            onStart={onStart}
            style={{ marginInlineEnd: '2px', marginBottom: '10px' }}
          />
          <Uploader
            url={uploadUrl}
            uploadIcon={<Dongdong />}
            onStart={onStart}
            style={{ marginBottom: '10px' }}
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

        <h2>{translated.uploadListDefault}</h2>
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
        <Uploader url={uploadUrl} capture />

        <h2>{translated['0e5eaea3']}</h2>
        <Uploader url={uploadUrl} multiple maxCount="5" />

        <h2>{translated.b7454181}</h2>
        <Uploader
          url={uploadUrl}
          multiple
          maxFileSize={1024 * 50}
          onOversize={onOversize}
        />

        <h2>{translated['5c393e52']}</h2>
        <Uploader url={uploadUrl} multiple beforeUpload={beforeUpload} />

        <h2>{translated.e3217a8d}</h2>
        <Uploader
          url={uploadUrl}
          data={formData}
          headers={formData}
          withCredentials
        />

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
        <br />
        <div style={{ display: 'flex' }}>
          <Button
            type="success"
            size="small"
            onClick={submitUpload}
            style={{ marginInlineEnd: '10px' }}
          >
            {translated.fcf01d1a}
          </Button>
          <Button type="primary" size="small" onClick={clearUpload}>
            {translated.clearBtnUpload}
          </Button>
        </div>

        <h2>{translated['7db1a8b2']}</h2>
        <Uploader disabled />
      </div>
    </>
  )
}

export default UploaderDemo
