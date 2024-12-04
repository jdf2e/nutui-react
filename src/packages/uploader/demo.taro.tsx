import React from 'react'
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
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
import Header from '@/sites/components/header'

const UploaderDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      uploadListDefault: '基础用法-上传列表展示',
      uploadStatus: '上传状态',
      limitedQuantity: '限制上传数量',
      limitSize: '限制上传大小（每个文件最大不超过50kb）',
      beforeUpload: '自定义上传前的处理',
      manualExecution: '选中文件后，通过按钮手动执行上传',
      disabled: '禁用状态',
      customDeleteIcon: '自定义删除icon',
      camera: '直接调起摄像头（移动端生效）',
    },
    'zh-TW': {
      basic: '基础用法',
      uploadListDefault: '基础用法-上傳列表展示',
      uploadStatus: '上傳狀態',
      limitedQuantity: '限制上傳數量',
      beforeUpload: '自定義上傳前的處理',
      limitSize: '限制上傳大小',
      manualExecution: '選取檔後，通過按鈕手動執行上傳',
      disabled: '禁用狀態',
      customDeleteIcon: '自定義刪除icon',
      camera: '直接調起攝像頭（移動端生效）',
    },
    'en-US': {
      basic: 'Basic usage',
      uploadListDefault: 'Basic usage - upload list dispaly',
      uploadStatus: 'Upload status',
      beforeUpload: 'Beforeupload Usage',
      limitedQuantity: 'Limit the number of uploads',
      limitSize: 'Limit upload size (maximum 50kb per file)',
      manualExecution:
        'After selecting Chinese, manually perform the upload via the button',
      disabled: 'Disabled state',
      customDeleteIcon: 'Custom DeleteIcon',
      camera: 'Direct camera up (mobile)',
    },
  })

  return (
    <>
      <Header />
      <ScrollView
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} padding`}
      >
        {' '}
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.uploadStatus}</View>
        <Demo2 />
        <View className="h2">{translated.limitedQuantity}</View>
        <Demo3 />
        <View className="h2">{translated.limitSize}</View>
        <Demo4 />
        <View className="h2">{translated.beforeUpload}</View>
        <Demo5 />
        <View className="h2">{translated.disabled}</View>
        <Demo6 />
        <View className="h2">{translated.customDeleteIcon}</View>
        <Demo7 />
        <View className="h2">{translated.camera}</View>
        <Demo8 />
        <View className="h2">{translated.manualExecution}</View>
        <Demo9 />
        <View className="h2">{translated.uploadListDefault}</View>
        <Demo10 />
      </ScrollView>
    </>
  )
}

export default UploaderDemo
