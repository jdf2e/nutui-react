import React from 'react'
import Taro from '@tarojs/taro'

import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'
import Demo8 from './demos/taro/demo8'
import Demo9 from './demos/taro/demo9'
import Demo10 from './demos/taro/demo10'
import Demo11 from './demos/taro/demo11'
import Demo12 from './demos/taro/demo12'
import Demo13 from './demos/taro/demo13'
import Demo14 from './demos/taro/demo14'

const UploaderDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      uploadListDefault: '基础用法-上传列表展示',
      uploadDefaultProgress: '自定义上传使用默认进度条',
      uploadStatus: '上传状态',
      camera: '直接调起摄像头（移动端生效）',
      limitedQuantity: '限制上传数量5个',
      limitSize: '限制上传大小（每个文件最大不超过50kb）',
      videoUploader: '使用前摄像头拍摄3s视频并上传(仅支持微信小程序)',
      custom: '自定义数据 FormData、headers',
      uploadXhrCustom: '自定义 Taro.uploadFile 上传方式(before-xhr-upload)',
      manualExecution: '选中文件后，通过按钮手动执行上传',
      disabled: '禁用状态',
      customDeleteIcon: '自定义删除icon',
    },
    'zh-TW': {
      basic: '基础用法',
      uploadListDefault: '基础用法-上傳列表展示',
      uploadDefaultProgress: '自定義上傳使用默認進度條',
      uploadStatus: '上傳狀態',
      camera: '直接調起攝像頭（移動端生效）',
      limitedQuantity: '限制上傳數量5個',
      limitSize: '限制上傳大小（每個檔案最大不超過50kb）',
      videoUploader: '使用前鏡頭拍攝3s影片並上傳(僅支援微信小程式)',
      custom: '自定義數據 FormData、headers',
      uploadXhrCustom: '自定義 Taro.uploadFile 上傳方式(before-xhr-upload)',
      manualExecution: '選取檔後，通過按鈕手動執行上傳',
      disabled: '禁用狀態',
      customDeleteIcon: '自定義刪除icon',
    },
    'en-US': {
      basic: 'Basic usage',
      uploadListDefault: 'Basic usage - upload list dispaly',
      uploadDefaultProgress: 'Custom upload uses default progress bar',
      uploadStatus: 'Upload status',
      camera: 'Direct camera up (mobile)',
      limitedQuantity: 'Limit the number of uploads to 5',
      limitSize: 'Limit upload size (maximum 50kb per file)',
      videoUploader:
        'Use the front camera to shoot 3s video and upload it (only support wechat mini program)',
      custom: 'Custom data FormData, headers',
      uploadXhrCustom: 'Custom xhr Taro.uploadFile method (before-xhr-upload)',
      manualExecution:
        'After selecting Chinese, manually perform the upload via the button',
      disabled: 'Disabled state',
      customDeleteIcon: 'Custom DeleteIcon',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} bg-w`}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.basic}</h2>
        <Demo2 />
        <h2>{translated.uploadStatus}</h2>
        <Demo3 />
        <h2>{translated.uploadListDefault}</h2>
        <Demo4 />
        <h2>{translated.uploadDefaultProgress}</h2>
        <Demo5 />
        <h2>{translated.camera}</h2>
        <Demo6 />
        <h2>{translated.videoUploader}</h2>
        <Demo7 />
        <h2>{translated.limitedQuantity}</h2>
        <Demo8 />
        <h2>{translated.limitSize}</h2>
        <Demo9 />
        <h2>{translated.custom}</h2>
        <Demo10 />
        <h2>{translated.uploadXhrCustom}</h2>
        <Demo11 />
        <h2>{translated.manualExecution}</h2>
        <Demo12 />
        <h2>{translated.disabled}</h2>
        <Demo13 />
        <h2>{translated.customDeleteIcon}</h2>
        <Demo14 />
      </div>
    </>
  )
}

export default UploaderDemo
