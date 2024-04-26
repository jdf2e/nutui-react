import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'

const AddressDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      customAddress: '选择自定义地址',
      selectCity: '选中省市区',
      existList: '选择已有地址',
      icon: '自定义图标',
      change: '自定义地址与已有地址切换',
      uncontrolled: '非受控方式',
    },
    'zh-TW': {
      customAddress: '選擇自定義地址',
      selectCity: '選中省市區',
      existList: '選擇已有地址',
      icon: '自定義圖標',
      change: '自定義地址與已有地址切換',
      uncontrolled: '非受控方式',
    },
    'en-US': {
      customAddress: 'Choose Custom Address',
      selectCity: 'Choose City',
      existList: 'Choose Exist Address',
      icon: 'Custom Icon',
      change: 'Custom Or Exist',
      uncontrolled: 'Uncontrolled',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.customAddress}</h2>
        <Demo1 />
        <h2>{translated.selectCity}</h2>
        <Demo2 />
        <h2>{translated.existList}</h2>
        <Demo3 />
        <h2>{translated.icon}</h2>
        <Demo4 />
        <h2>{translated.change}</h2>
        <Demo5 />
        <h2>{translated.uncontrolled}</h2>
        <Demo6 />
      </div>
    </>
  )
}

export default AddressDemo
