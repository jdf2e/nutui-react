import React from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Signature } from '@/packages/nutui.react.taro'

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
      tips: 'Tips: 点击确认按钮,下方显示签名图片',
    },
    'zh-TW': {
      basic: '基本用法',
      title: '修改顏色和簽字粗細',
      tips: 'Tips: 點擊確認按鈕,下方顯示簽名圖片',
    },
    'en-US': {
      basic: 'Basic Usage',
      title: 'Modify color and signature thickness',
      tips: 'Tips: click the confirm button, and the signature image is displayed below',
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
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Signature confirm={confirm} clear={clear} />
        <p className="demo-tips demo1" style={demoStyles}>
          {translated.tips}
        </p>
        <h2> {translated.title}</h2>
        <Signature
          lineWidth={4}
          strokeStyle="green"
          confirm={confirm}
          clear={clear}
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
