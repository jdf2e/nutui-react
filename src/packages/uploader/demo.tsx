import React, { useRef } from 'react'
import { useTranslate } from '../../sites/assets/locale'
import { Uploader, FileItem, FileType } from './uploader'
import Button from '@/packages/button'

interface uploadRefState {
  submit: () => void
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
  '84aa6bce': string
  a4afedb5: string
  '37c65f47': string
  bb5caa9c: string
  '27f1376e': string
  '0e5eaea3': string
  b7454181: string
  '5c393e52': string
  e3217a8d: string
  '67fffe24': string
  fcf01d1a: string
  '7db1a8b2': string
}
const UploaderDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '6114cef1': '文件1.png',
      '844759c9': '上传成功',
      df9128ec: '文件2.png',
      '219481a6': '上传失败',
      '29ab0c96': '文件3.png',
      '403b055e': '上传中...',
      '25e04d44': 'oversize触发文件大小不能超过50kb',
      d06e873e: 'start触发',
      ca3903f3: 'delete事件触发',
      '84aa6bce': '基础用法',
      a4afedb5: '上传状态',
      '37c65f47': '自定义上传样式',
      bb5caa9c: '上传文件',
      '27f1376e': '直接调起摄像头（移动端生效）',
      '0e5eaea3': '限制上传数量5个',
      b7454181: '限制上传大小（每个文件最大不超过50kb）',
      '5c393e52': '图片压缩（在beforeupload钩子中处理）',
      e3217a8d: '自定义数据 FormData、headers',
      '67fffe24': '选中文件后，通过按钮手动执行上传',
      fcf01d1a: '执行上传',
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
      '84aa6bce': '基础用法',
      a4afedb5: '上傳狀態',
      '37c65f47': '自定義上傳樣式',
      bb5caa9c: '上傳檔',
      '27f1376e': '直接調起攝像頭（移動端生效）',
      '0e5eaea3': '限制上傳數量5個',
      b7454181: '限制上傳大小（每個檔案最大不超過50kb）',
      '5c393e52': '圖片壓縮（在beforeupload鉤子中處理）',
      e3217a8d: '自定義數據 FormData、headers',
      '67fffe24': '選取檔後，通過按鈕手動執行上傳',
      fcf01d1a: '執行上傳',
      '7db1a8b2': '禁用狀態',
    },
    'en-US': {
      '6114cef1': 'File 1 .png',
      '844759c9': 'Upload successful',
      df9128ec: 'File 2 .png',
      '219481a6': 'Upload failed',
      '29ab0c96': 'File 3 .png',
      '403b055e': 'Uploading...',
      '25e04d44': 'The oversize trigger file size cannot exceed 50kb',
      d06e873e: 'start triggered',
      ca3903f3: 'The delete event is triggered',
      '84aa6bce': 'Basic usage',
      a4afedb5: 'Upload status',
      '37c65f47': 'Customize the upload style',
      bb5caa9c: 'Upload the file',
      '27f1376e': 'Direct camera up (mobile)',
      '0e5eaea3': 'Limit the number of uploads to 5',
      b7454181: 'Limit upload size (maximum 50kb per file)',
      '5c393e52': 'Image compression (handled in a foreupload hook)',
      e3217a8d: 'Custom data FormData, headers',
      '67fffe24': 'After selecting Chinese, manually perform the upload via the button',
      fcf01d1a: 'Perform the upload',
      '7db1a8b2': 'Disabled state',
    },
  })

  const uploadRef = useRef<uploadRefState>(null)
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const formData = {
    custom: 'test',
  }
  const defaultFileList: FileType<string>[] = [
    {
      name: translated['6114cef1'],
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
    },
    {
      name: translated['29ab0c96'],
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: translated['403b055e'],
      type: 'image',
      uid: '125',
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
    return new Promise((resolve) => canvas.toBlob((blob) => resolve(blob), type, quality))
  }
  const onOversize = (files: File[]) => {
    console.log(translated['25e04d44'], files)
  }
  const onStart = () => {
    console.log(translated.d06e873e)
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
  const submitUpload = () => {
    ;(uploadRef.current as uploadRefState).submit()
  }
  return (
    <>
      <div className="demo bg-w">
        <h2>{translated['84aa6bce']}</h2>
        <Uploader url={uploadUrl} start={onStart} />

        <h2>{translated.a4afedb5}</h2>
        <Uploader
          url={uploadUrl}
          defaultFileList={defaultFileList}
          removeImage={onDelete}
          maximum="3"
          multiple
          uploadIcon="dongdong"
        />
        <h2>{translated['37c65f47']}</h2>
        <Uploader url={uploadUrl}>
          <Button type="success" size="small">
            {translated.bb5caa9c}
          </Button>
        </Uploader>
        <h2>{translated['27f1376e']}</h2>
        <Uploader url={uploadUrl} capture />
        <h2>{translated.a4afedb5}</h2>
        <Uploader url={uploadUrl} multiple removeImage={onDelete} />
        <h2>{translated['0e5eaea3']}</h2>
        <Uploader url={uploadUrl} multiple maximum="5" />
        <h2>{translated.b7454181}</h2>
        <Uploader url={uploadUrl} multiple maximize={1024 * 50} oversize={onOversize} />
        <h2>{translated['5c393e52']}</h2>
        <Uploader url={uploadUrl} multiple beforeUpload={beforeUpload} />
        <h2>{translated.e3217a8d}</h2>
        <Uploader url={uploadUrl} data={formData} headers={formData} withCredentials />
        <h2>{translated['67fffe24']}</h2>
        <Uploader url={uploadUrl} maximum="5" autoUpload={false} ref={uploadRef} />
        <br />
        <Button type="success" size="small" onClick={submitUpload}>
          {translated.fcf01d1a}
        </Button>
        <h2>{translated['7db1a8b2']}</h2>
        <Uploader disabled />
      </div>
    </>
  )
}

export default UploaderDemo
