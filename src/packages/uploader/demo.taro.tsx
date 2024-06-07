import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
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
    },
  })

  return (
    <>
      <Header />
      <ScrollView
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} bg-w`}
      >
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.basic}</View>
        <Demo2 />
        <View className="h2">{translated.uploadStatus}</View>
        <Demo3 />
        <View className="h2">{translated.uploadListDefault}</View>
        <Demo4 />
        <View className="h2">{translated.uploadDefaultProgress}</View>
        <Demo5 />
        <View className="h2">{translated.camera}</View>
        <Demo6 />
        <View className="h2">{translated.videoUploader}</View>
        <Demo7 />
        <View className="h2">{translated.limitedQuantity}</View>
        <Demo8 />
        <View className="h2">{translated.limitSize}</View>
        <Demo9 />
        <View className="h2">{translated.custom}</View>
        <Demo10 />
        <View className="h2">{translated.uploadXhrCustom}</View>
        <Demo11 />
        <View className="h2">{translated.manualExecution}</View>
        <Demo12 />
        <View className="h2">{translated.disabled}</View>
        <Demo13 />
      </ScrollView>
    </>
  )
}

export default UploaderDemo
