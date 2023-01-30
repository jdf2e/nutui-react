import React from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import {
  Cell,
  Form,
  Input,
  TextArea,
  Switch,
  Checkbox,
  Radio,
  Range,
  Rate,
} from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'

interface T {
  basic: string
  title1: string
  title10: string
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
  // option: (v: string) => `选项${v}`
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
      title10: '顶部对齐',
      title2: '表单校验',
      title3: '表单类型',
      name: '姓名',
      nameTip: '请输入姓名',
      nameTip1: '请输入姓名',
      age: '年龄',
      ageTip: '请输入年龄',
      ageTip1: '请输入年龄',
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
      // option: (v: string) => `选项${v}`,
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
      title10: 'Top Align',
      title2: 'Validate Form',
      title3: 'Form Type',
      name: 'Name',
      nameTip: 'Please enter your name',
      nameTip1: 'Please enter name',
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
      radiogroup: 'RadioGroup',
      // option: (v: string) => `Option${v}`,
      rate: 'Rate',
      inputnumber: 'Inputnumber',
      range: 'Range',
      uploader: 'Upload file',
      success: 'Upload successful',
      uploading: 'Uploading',
      asyncValidator: 'Simulating asynchronous verification',
    },
  })

  // 动态表单
  const submitFailed = (error: any) => {
    // Toast.fail('callback: submitFailed error')
    console.log('failed error', error)
  }

  const submitSucceed = (obj: any) => {
    // Toast.success('succeed')
    console.log('succeed', obj)
  }

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Form>
          <Form.Item label={translated.name} name="username">
            <Input
              className="nut-input-text"
              placeholder={translated.nameTip}
              type="text"
            />
          </Form.Item>
          <Form.Item label={translated.remarks} name="remark">
            <TextArea placeholder={translated.remarksTip} />
          </Form.Item>
        </Form>
        <h2>{translated.title10}</h2>
        <Form labelPosition="Top">
          <Form.Item label={translated.name} name="username">
            <Input
              className="nut-input-text"
              placeholder={translated.nameTip}
              type="text"
            />
          </Form.Item>
          <Form.Item label={translated.remarks} name="remark">
            <TextArea placeholder={translated.remarksTip} />
          </Form.Item>
        </Form>
        {/* <h2>{translated.title1}</h2>
        <Form
          onFinish={(obj) => submitSucceed(obj)}
          onFinishFailed={(error) => submitFailed(error)}
        >
          <Form.Item
            label={translated.name}
            name="username"
            rules={[{ required: true, message: translated.nameTip }]}
          >
            <Input placeholder={translated.nameTip} type="text" />
          </Form.Item>
          <Form.Item label={translated.tel} name="tel">
            <Input placeholder={translated.telTip} type="tel" />
          </Form.Item>
          <Cell>
            <input type="submit" value={translated.submit} />
          </Cell>
        </Form> */}
        <h2>{translated.title2}</h2>
        <Form
          onFinish={(obj) => submitSucceed(obj)}
          onFinishFailed={(error) => submitFailed(error)}
        >
          <Form.Item
            label={translated.name}
            name="username"
            rules={[{ required: true, message: translated.nameTip }]}
          >
            <Input placeholder={translated.nameTip1} type="text" />
          </Form.Item>
          <Form.Item label={translated.age} name="age">
            <Input placeholder={translated.ageTip1} type="number" />
          </Form.Item>
          <Form.Item label={translated.tel} name="tel">
            <Input placeholder={translated.telTip2} type="number" />
          </Form.Item>
          <Form.Item label={translated.address} name="address">
            <Input placeholder={translated.addressTip} type="text" />
          </Form.Item>
          <Cell>
            <input type="submit" value={translated.submit} />
          </Cell>
        </Form>
        <h2>{translated.title3}</h2>
        <Form
          onFinish={(obj) => submitSucceed(obj)}
          onFinishFailed={(error) => submitFailed(error)}
        >
          <Form.Item label={translated.switch} name="switch">
            <Switch />
          </Form.Item>
          <Form.Item label={translated.checkbox} name="checkbox">
            <Checkbox
              textPosition="right"
              label={translated.checkbox}
              checked={false}
            />
          </Form.Item>
          <Form.Item label={translated.radiogroup} name="radiogroup">
            <Radio.RadioGroup>
              <Radio value="1">选项1</Radio>
              <Radio value="2">选项2</Radio>
              <Radio value="3">选项3</Radio>
            </Radio.RadioGroup>
          </Form.Item>
          <Form.Item label={translated.rate} name="rate">
            <Rate modelValue={0} />
          </Form.Item>
          {/* <Form.Item label={translated.inputnumber} name="inputnumber">
              <InputNumber modelValue={3} min="10" max="20" />
            </Form.Item> */}
          <Form.Item label={translated.range} name="range">
            <Range modelValue={0} max={10} min={-10} />
          </Form.Item>
          {/* <Form.Item label={translated.uploader} name="uploader">
              <Uploader
                url={uploadUrl}
                defaultFileList={defaultFileList}
                onRemove={onDelete}
                maximum="3"
                multiple
                uploadIcon="dongdong"
              />
            </Form.Item> */}
          <Cell>
            <input type="submit" value={translated.submit} />
          </Cell>
        </Form>
      </div>
    </>
  )
}

export default FormDemo
