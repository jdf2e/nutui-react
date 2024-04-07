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
import Demo15 from './demos/h5/demo15'

const CheckboxDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      uncontrolled: '非受控',
      controlled: '受控',
      basic: '基础用法',
      checkbox: '复选框',
      disbaled: '禁用状态',
      selective: '半选状态',
      customSize: '自定义尺寸',
      customIcon: '自定义图标',
      triggerEvent: '点击触发事件',
      Disabled: '禁用',
      selectAndCancel: '全选和取消',
      options: '配置 options 渲染复选按钮',
      max: 'checkboxGroup使用，限制最大可选数（3个）, 至少选择数（1个）',
      threeState: '全选/半选/取消',
      list: '列表',
    },
    'zh-TW': {
      uncontrolled: '非受控',
      controlled: '受控',
      basic: '基礎用法',
      checkbox: '復選框',
      disbaled: '禁用狀態',
      selective: '半選狀態',
      customSize: '自定義尺寸',
      customIcon: '自定義圖標',
      triggerEvent: '點擊觸發事件',
      Disabled: '禁用',
      selectAndCancel: '全選和取消',
      options: '配置 options 渲染復選按鈕',
      max: 'checkboxGroup使用，限製最大可選數（3個）, 至少選擇數（1個）',
      threeState: '全選/半選/取消',
      list: '列表',
    },
    'en-US': {
      uncontrolled: 'Uncontrolled',
      controlled: 'Controlled',
      basic: 'Basic Usage',
      checkbox: 'Checkbox',
      disbaled: 'Disabled State',
      selective: 'Half-selected State',
      customSize: 'Custom Size',
      customIcon: 'Custom Icon',
      triggerEvent: 'Click Trigger Event',
      Disabled: 'Checkbox.Group Disabled',
      selectAndCancel: 'Select All And Cancel',
      options: 'Configure Options To Render Check Buttons',
      max: 'Used by checkboxGroup, limit the maximum number of options (3), and the minimum number of choices (1)',
      threeState: 'Select All/Half/Cancel',
      list: 'List',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.uncontrolled}</h2>
        <Demo1 />
        <h2>{translated.controlled}</h2>
        <Demo2 />
        <h2>{translated.basic}</h2>
        <Demo3 />
        <h2>{translated.selective}</h2>
        <Demo4 />
        <h2>{translated.disbaled}</h2>
        <Demo5 />
        <h2>{translated.customSize}</h2>
        <Demo6 />
        <h2>{translated.customIcon}</h2>
        <Demo7 />
        <h2>{translated.triggerEvent}</h2>
        <Demo8 />
        <h2>Checkbox.Group</h2>
        <Demo9 />
        <h2>{translated.Disabled}</h2>
        <Demo10 />
        <h2>{translated.selectAndCancel}</h2>
        <Demo11 />
        <h2>{translated.max}</h2>
        <Demo12 />
        <h2>{translated.threeState}</h2>
        <Demo13 />
        <h2>{translated.options}</h2>
        <Demo14 />
        <h2>{translated.list}</h2>
        <Demo15 />
      </div>
    </>
  )
}

export default CheckboxDemo
