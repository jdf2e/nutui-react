import React from 'react'
import { useTranslate } from '../../sites/assets/locale'

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
import Demo11 from './demos/h5/demo11'
import Demo12 from './demos/h5/demo12'
import Demo13 from './demos/h5/demo13'
import Demo14 from './demos/h5/demo14'

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
      compress: '图片压缩（在beforeupload钩子中处理）',
      custom: '自定义数据 FormData、headers',
      uploadXhrCustom: '自定义 xhr 上传方式(before-xhr-upload)',
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
      compress: '圖片壓縮（在beforeupload鉤子中處理）',
      custom: '自定義數據 FormData、headers',
      uploadXhrCustom: '自定義 xhr 上傳方式(before-xhr-upload)',
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
      compress: 'Image compression (handled in a foreupload hook)',
      custom: 'Custom data FormData, headers',
      uploadXhrCustom: 'Custom xhr upload method (before-xhr-upload)',
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
        <h2>{translated.limitedQuantity}</h2>
        <Demo7 />
        <h2>{translated.limitSize}</h2>
        <Demo8 />
        <h2>{translated.compress}</h2>
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
