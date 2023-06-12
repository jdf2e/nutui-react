import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import {
  Input,
  Form,
  TextArea,
  Button,
  Picker,
  Radio,
  Checkbox,
  InputNumber,
  Switch,
  Uploader,
  Rate,
  Range,
} from '@/packages/nutui.react.taro'
import { FormItemRuleWithoutValidator } from './types'
import Header from '@/sites/components/header'

interface T {
  basic: string
  title1: string
  title10: string
  title2: string
  title3: string
  title4: string
  title5: string
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
  gender: string
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
      title3: '带有初始值表单校验',
      title4: 'Form.useForm 对表单数据域进行交互。',
      title5: '表单类型',
      name: '姓名',
      nameTip: '请输入姓名',
      nameTip1: '请输入姓名',
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
      gender: '性别',
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
      title3: 'InitialValue Validate Type',
      title4: 'Interact with form data fields via Form.useForm',
      title5: 'Form Type',
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
      reset: 'Reset alert state',
      switch: 'Switch',
      checkbox: 'Checkbox',
      gender: 'Gender',
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

  const submitFailed = (error: any) => {
    // Toast.show({ content: JSON.stringify(error), icon: 'fail' })
  }

  const submitSucceed = (values: any) => {
    // Toast.show({ content: JSON.stringify(values), icon: 'success' })
  }

  const [form] = Form.useForm()

  const onMenuChange = (value: string | number | boolean) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: '👨' })
        break
      case 'female':
        form.setFieldsValue({ note: '👩' })
        break
      default:
    }
  }

  // 函数校验
  const customValidator = (
    rule: FormItemRuleWithoutValidator,
    value: string
  ) => {
    return /^\d+$/.test(value)
  }

  const valueRangeValidator = (
    rule: FormItemRuleWithoutValidator,
    value: string
  ) => {
    return /^(\d{1,2}|1\d{2}|200)$/.test(value)
  }

  const pickerOptions = [
    { value: 4, text: '北京市' },
    { value: 1, text: '南京市' },
    { value: 2, text: '无锡市' },
    { value: 8, text: '大庆市' },
    { value: 9, text: '绥化市' },
    { value: 10, text: '潍坊市' },
    { value: 12, text: '乌鲁木齐市' },
  ]

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Form
          labelPosition="right"
          footer={
            <>
              <Button formType="submit" block type="primary">
                提交
              </Button>
            </>
          }
        >
          <Form.Item
            required
            rules={[{ required: true, message: '姓名不能为空' }]}
            label="姓名"
            name="username"
          >
            <Input
              className="nut-input-text"
              placeholder="请输入姓名"
              type="text"
            />
          </Form.Item>
          <Form.Item label="地址" name="address">
            <TextArea
              placeholder="请输入地址"
              maxLength={100}
              style={{ height: '22px' }}
            />
          </Form.Item>
          <Form.Item
            label="数量"
            name="num"
            getValueFromEvent={(...args) => args[0]}
          >
            <InputNumber />
          </Form.Item>
        </Form>
        <h2>{translated.title2}</h2>
        <Form
          onFinish={(values) => submitSucceed(values)}
          onFinishFailed={(values, errors) => submitFailed(errors)}
          footer={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Button formType="submit" type="primary">
                提交
              </Button>
              <Button formType="reset" style={{ marginLeft: '20px' }}>
                重置
              </Button>
            </div>
          }
        >
          <Form.Item
            label={translated.name}
            name="username"
            rules={[{ required: true, message: translated.nameTip }]}
          >
            <Input placeholder={translated.nameTip1} type="text" />
          </Form.Item>
          <Form.Item
            label={translated.age}
            name="age"
            rules={[
              { required: true, message: translated.ageTip },
              { validator: customValidator, message: translated.ageTip2 },
              { validator: valueRangeValidator, message: translated.ageTip3 },
            ]}
          >
            <Input placeholder={translated.ageTip1} type="text" />
          </Form.Item>
          <Form.Item
            label={translated.tel}
            name="tel"
            rules={[{ required: true, message: translated.telTip }]}
          >
            <Input placeholder={translated.telTip2} type="number" />
          </Form.Item>
          <Form.Item
            label={translated.address}
            name="address"
            rules={[{ required: true, message: translated.addressTip }]}
          >
            <Input placeholder={translated.addressTip} type="text" />
          </Form.Item>
        </Form>

        <h2>{translated.title3}</h2>
        <Form
          initialValues={{ username: 'LiSi', age: 20 }}
          onFinish={(values) => submitSucceed(values)}
          onFinishFailed={(values, errors) => submitFailed(errors)}
          footer={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Button formType="submit" type="primary">
                提交
              </Button>
              <Button formType="reset" style={{ marginLeft: '20px' }}>
                重置
              </Button>
            </div>
          }
        >
          <Form.Item
            label={translated.name}
            name="username"
            rules={[{ required: true, message: translated.nameTip }]}
            initialValue="ZhangSan"
          >
            <Input placeholder={translated.nameTip1} type="text" />
          </Form.Item>
          <Form.Item label={translated.age} name="age">
            <Input
              placeholder={translated.ageTip1}
              type="number"
              defaultValue="18"
            />
          </Form.Item>
        </Form>

        <h2>{translated.title4}</h2>
        <Form
          form={form}
          onFinish={(values) => submitSucceed(values)}
          onFinishFailed={(values, errors) => submitFailed(errors)}
        >
          <Form.Item
            label={translated.name}
            name="username"
            rules={[{ required: true, message: translated.nameTip }]}
          >
            <Input placeholder={translated.nameTip1} type="text" />
          </Form.Item>
          <Form.Item label="标注" name="note">
            <Input placeholder="请输入标注" type="string" />
          </Form.Item>
          <Form.Item label={translated.gender} name="gender">
            <Radio.Group onChange={onMenuChange}>
              <Radio value="male">男性</Radio>
              <Radio value="female">女性</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>

        <h2>{translated.title5}</h2>
        <Form
          footer={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Button formType="submit" type="primary">
                提交
              </Button>
              <Button formType="reset" style={{ marginLeft: '20px' }}>
                重置
              </Button>
            </div>
          }
          onFinish={(values) => submitSucceed(values)}
          onFinishFailed={(values, errors) => submitFailed(errors)}
        >
          <Form.Item label="Input" name="form_input">
            <Input placeholder="Input something" />
          </Form.Item>
          <Form.Item label="Switch" name="switch">
            <Switch />
          </Form.Item>
          <Form.Item label="Checkbox" name="checkbox">
            <Checkbox labelPosition="right" label="Option 1" />
          </Form.Item>
          <Form.Item label="Check Group" name="checkbox_group">
            <Checkbox.Group>
              <Checkbox labelPosition="right" label="Option 1" value={1} />
              <Checkbox labelPosition="right" label="Option 2" value={2} />
            </Checkbox.Group>
          </Form.Item>
          <Form.Item label="Radio" name="radio">
            <Radio value="1">Radio 1</Radio>
          </Form.Item>
          <Form.Item label="Radio Group" name="radio_group">
            <Radio.Group>
              <Radio value="1">Radio 1</Radio>
              <Radio value="2">Radio 2</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Rate" name="rate">
            <Rate defaultValue={0} />
          </Form.Item>
          <Form.Item label="Range" name="range">
            <Range max={10} min={-10} />
          </Form.Item>
          <Form.Item
            label="Picker"
            name="picker"
            trigger="onConfirm"
            getValueFromEvent={(...args) => args[1]}
            onClick={(event, ref: any) => {
              ref.open()
            }}
          >
            <Picker options={[pickerOptions]}>
              {(value: any) => {
                return value.length
                  ? pickerOptions.filter((po) => po.value === value[0])[0]?.text
                  : 'Please Select'
              }}
            </Picker>
          </Form.Item>
          <Form.Item
            label="Uploader"
            name="files"
            initialValue={[
              {
                name: '文件文件文件1.png',
                url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
                status: 'success',
                message: '上传成功',
                type: 'image',
                uid: '122',
              },
            ]}
          >
            <Uploader url="https://my-json-server.typicode.com/linrufeng/demo/posts" />
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default FormDemo
