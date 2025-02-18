import React from 'react'
import { useTranslate } from '@/sites/assets/locale'

import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'
import Demo9 from './demos/h5/demo9'
import Demo10 from './demos/h5/demo10'

const UploaderDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      uploadListDefault: '基础用法-上传列表展示',
      uploadStatus: '上传状态',
      camera: '直接调起摄像头（移动端生效）',
      limitedQuantity: '限制上传数量',
      limitSize: '限制上传大小（每个文件最大不超过50kb）',
      beforeUpload: '自定义上传前的处理',
      manualExecution: '选中文件后，通过按钮手动执行上传',
      disabled: '禁用状态',
      customDeleteIcon: '自定义删除icon',
    },
    'zh-TW': {
      basic: '基础用法',
      uploadListDefault: '基础用法-上傳列表展示',
      uploadStatus: '上傳狀態',
      camera: '直接調起攝像頭（移動端生效）',
      limitedQuantity: '限制上傳數量',
      beforeUpload: '自定義上傳前的處理',
      limitSize: '限制上傳大小',
      manualExecution: '選取檔後，通過按鈕手動執行上傳',
      disabled: '禁用狀態',
      customDeleteIcon: '自定義刪除icon',
    },
    'en-US': {
      basic: 'Basic usage',
      uploadListDefault: 'Basic usage - upload list dispaly',
      uploadStatus: 'Upload status',
      beforeUpload: 'Beforeupload Usage',
      camera: 'Direct camera up (mobile)',
      limitedQuantity: 'Limit the number of uploads',
      limitSize: 'Limit upload size (maximum 50kb per file)',
      manualExecution:
        'After selecting Chinese, manually perform the upload via the button',
      disabled: 'Disabled state',
      customDeleteIcon: 'Custom DeleteIcon',
    },
  })

  return (
    <>
      <div className="demo bg-w">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.uploadStatus}</h2>
        <Demo2 />
        <h2>{translated.limitedQuantity}</h2>
        <Demo3 />
        <h2>{translated.limitSize}</h2>
        <Demo4 />
        <h2>{translated.beforeUpload}</h2>
        <Demo5 />
        <h2>{translated.disabled}</h2>
        <Demo6 />
        <h2>{translated.customDeleteIcon}</h2>
        <Demo7 />
        <h2>{translated.camera}</h2>
        <Demo8 />
        <h2>{translated.manualExecution}</h2>
        <Demo9 />
        <h2>{translated.uploadListDefault}</h2>
        <Demo10 />
      </div>
    </>
  )
}

export default UploaderDemo
