import '@/packages/signature/demo.scss'
import React from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Signature } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'

interface T {
  basic: string
  title: string
  tips: string
}

const SignatureDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      title: '修改颜色和签字粗细',
      tips: 'Tips: 点击确认按钮, 控制台显示签名图片地址',
    },
    'zh-TW': {
      basic: '基本用法',
      title: '修改顏色和簽字粗細',
      tips: 'Tips: 點擊確認按鈕, 控製臺顯示簽名圖片地址',
    },
    'en-US': {
      basic: 'Basic Usage',
      title: 'Modify color and signature thickness',
      tips: 'Tips: Click the confirm button and the console will display the signature picture address',
    },
  })
  const confirm = (dataurl: string) => {
    console.log('图片地址', dataurl)
    // Taro.saveImageToPhotosAlbum({
    //   filePath: `${dataurl}`,
    //   success(res) {
    //     Taro.showToast({
    //       title: '保存成功',
    //     })
    //   },
    //   fail(err) {
    //     Taro.showToast({
    //       title: '保存失败',
    //     })
    //   },
    // })
  }
  const clear = () => {
    console.log('清除事件')
  }

  const demoStyles: React.CSSProperties = { margin: '1em 0' }
  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
        style={{ position: 'fixed', width: '100%' }}
      >
        <h2>{translated.basic}</h2>
        <Signature onConfirm={confirm} onClear={clear} />
        <p className="demo-tips demo1" style={demoStyles}>
          {translated.tips}
        </p>
        <h2> {translated.title}</h2>
        <Signature
          lineWidth={4}
          strokeStyle="green"
          onConfirm={confirm}
          onClear={clear}
          canvasId="testCanvas"
        />
        <p className="demo-tips demo2" style={demoStyles}>
          {translated.tips}
        </p>
      </div>
    </>
  )
}

export default SignatureDemo
