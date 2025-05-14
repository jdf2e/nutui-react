import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo11 from './demos/h5/demo11'

const AddressDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      elevator: '电梯方式的地址展示',
      cascaderAddress: '级联方式的地址展示',
      selectCity: '选中省市区',
      existList: '选择已有地址',
      customIcon: '自定义图标',
      change: '自定义地址与已有地址切换',
      uncontrolled: '非受控方式',
    },
    'zh-TW': {
      elevator: '電梯方式的地址展示',
      cascaderAddress: '級聯方式的地址展示',
      selectCity: '選中省市區',
      existList: '選擇已有地址',
      customIcon: '自定義圖標',
      change: '自定義地址與已有地址切換',
      uncontrolled: '非受控方式',
    },
    'en-US': {
      elevator: 'Elevator Address',
      cascaderAddress: 'Choose Cascader Address',
      selectCity: 'Choose City',
      existList: 'Choose Exist Address',
      customIcon: 'Custom Icon',
      change: 'Custom Or Exist',
      uncontrolled: 'Uncontrolled',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.elevator}</h2>
        <Demo11 />
        <h2>{translated.cascaderAddress}</h2>
        <Demo1 />
        <h2>{translated.selectCity}</h2>
        <Demo2 />
        <h2>{translated.existList}</h2>
        <Demo3 />
        <h2>{translated.customIcon}</h2>
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
