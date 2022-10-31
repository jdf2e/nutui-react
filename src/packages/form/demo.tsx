import React from 'react'
import { Form } from './form'
import { FormItem } from '../formitem/formitem'
import { Input } from '../input/input'
import Cell from '@/packages/cell'
import { useTranslate } from '../../sites/assets/locale'

interface T {
  basic: string
  title1: string
  title2: string
  title3: string
  name: string
  nameTip: string
  nameTip1: string
  age: string
  ageTip: string
  ageTip1: string
  ageTip2: string
  ageTip3: string
  tel: string
  telTip: string
  telTip1: string
  telTip2: string
  address: string
  addressTip: string
  addressTip1: string
  addressTip2: string
  remarks: string
  remarksTip: string
  add: string
  remove: string
  submit: string
  reset: string
  switch: string
  checkbox: string
  radiogroup: string
  option: (v: string) => `选项${v}`
  rate: string
  inputnumber: string
  range: string
  uploader: string
  success: string
  uploading: string
  asyncValidator: string
}

const FormDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      title1: '动态表单',
      title2: '表单校验',
      title3: '表单类型',
      name: '姓名',
      nameTip: '请输入姓名',
      nameTip1: '请输入姓名，blur 事件校验',
      age: '年龄',
      ageTip: '请输入年龄',
      ageTip1: '请输入年龄，必须数字且0-200区间',
      ageTip2: '必须输入数字',
      ageTip3: '必须输入0-200区间',
      tel: '联系电话',
      telTip: '请输入联系电话',
      telTip1: '异步校验电话格式',
      telTip2: '电话格式不正确',
      address: '地址',
      addressTip: '请输入地址',
      addressTip1: '请选择地址',
      addressTip2: '请选择所在地区',
      remarks: '备注',
      remarksTip: '请输入备注',
      add: '添加',
      remove: '删除',
      submit: '提交',
      reset: '重置提示状态',
      switch: '开关',
      checkbox: '复选框',
      radiogroup: '单选按钮',
      option: (v: string) => `选项${v}`,
      rate: '评分',
      inputnumber: '步进器',
      range: '滑块',
      uploader: '文件上传',
      success: '上传成功',
      uploading: '上传中...',
      asyncValidator: '模拟异步验证中',
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Dynamic Form',
      title2: 'Validate Form',
      title3: 'Form Type',
      name: 'Name',
      nameTip: 'Please enter your name',
      nameTip1: 'Please enter , blur event validate',
      age: 'Age',
      ageTip: 'Please enter age',
      ageTip1:
        'Please enter the age, which must be numeric and in the range of 0-200',
      ageTip2: 'You must enter a number',
      ageTip3: 'The range 0-200 must be entered',
      tel: 'Tel',
      telTip: 'Please enter tel',
      telTip1: 'Async check tel format',
      telTip2: 'Tel format is incorrect',
      address: 'Address',
      addressTip: 'Please enter address',
      addressTip1: 'Please select an address',
      addressTip2: 'Please select your region',
      remarks: 'Remarks',
      remarksTip: 'Please enter remarks',
      add: 'Add',
      remove: 'Remove',
      submit: 'Submit',
      reset: 'Reset prompt status',
      switch: 'Switch',
      checkbox: 'Checkbox',
      radiogroup: 'Radiogroup',
      option: (v: string) => `Option${v}`,
      rate: 'Rate',
      inputnumber: 'Inputnumber',
      range: 'Range',
      uploader: 'Upload file',
      success: 'Upload successful',
      uploading: 'Uploading',
      asyncValidator: 'Simulating asynchronous verification',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell>
          <Form>
            <FormItem label={translated.name} required>
              <Input placeholder={translated.nameTip} type="text" />
            </FormItem>
            <FormItem label={translated.age} required>
              <Input placeholder={translated.ageTip} type="text" />
            </FormItem>
            <FormItem label={translated.tel} required>
              <Input placeholder={translated.telTip} type="text" />
            </FormItem>
            <FormItem label={translated.address} required>
              <Input placeholder={translated.addressTip} type="text" />
            </FormItem>
            <FormItem label={translated.remarks} required>
              <Input placeholder={translated.remarksTip} type="text" />
            </FormItem>
          </Form>
        </Cell>
        <h2>{translated.title1}</h2>
        <Cell>
          <Form>
            <FormItem label={translated.name} required>
              <Input placeholder={translated.nameTip} type="text" />
            </FormItem>
            <FormItem label={translated.age} required>
              <Input placeholder={translated.ageTip} type="text" />
            </FormItem>
            <FormItem label={translated.tel} required>
              <Input placeholder={translated.telTip} type="text" />
            </FormItem>
            <FormItem label={translated.address} required>
              <Input placeholder={translated.addressTip} type="text" />
            </FormItem>
            <FormItem label={translated.remarks} required>
              <Input placeholder={translated.remarksTip} type="text" />
            </FormItem>
          </Form>
        </Cell>
        <h2>{translated.title2}</h2>
        <Cell>
          <Form>
            <FormItem label={translated.name} required>
              <Input placeholder={translated.nameTip} type="text" />
            </FormItem>
            <FormItem label={translated.age} required>
              <Input placeholder={translated.ageTip} type="text" />
            </FormItem>
            <FormItem label={translated.tel} required>
              <Input placeholder={translated.telTip} type="text" />
            </FormItem>
            <FormItem label={translated.address} required>
              <Input placeholder={translated.addressTip} type="text" />
            </FormItem>
            <FormItem label={translated.remarks} required>
              <Input placeholder={translated.remarksTip} type="text" />
            </FormItem>
          </Form>
        </Cell>
        <h2>{translated.title3}</h2>
        <Cell>
          <Form>
            <FormItem label={translated.name} required>
              <Input placeholder={translated.nameTip} type="text" />
            </FormItem>
            <FormItem label={translated.age} required>
              <Input placeholder={translated.ageTip} type="text" />
            </FormItem>
            <FormItem label={translated.tel} required>
              <Input placeholder={translated.telTip} type="text" />
            </FormItem>
            <FormItem label={translated.address} required>
              <Input placeholder={translated.addressTip} type="text" />
            </FormItem>
            <FormItem label={translated.remarks} required>
              <Input placeholder={translated.remarksTip} type="text" />
            </FormItem>
          </Form>
        </Cell>
      </div>
    </>
  )
}

export default FormDemo
