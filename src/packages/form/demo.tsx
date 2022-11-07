import React, { useState } from 'react'
import { Form } from './form'
import { FormItem } from '../formitem/formitem'
import { Input } from '../input/input'
import Cell from '@/packages/cell'
import { useTranslate } from '../../sites/assets/locale'
import TextArea from '../textarea'
import Button from '../button'
import Switch from '../switch'
import Checkbox from '../checkbox'
import Radio from '../radio'
import Rate from '../rate'
import InputNumber from '../inputnumber'
import Range from '../range'
import { Uploader, FileItem, FileType } from '../uploader/uploader'

const { RadioGroup } = Radio

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

  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const defaultFileList: FileType<string>[] = [
    {
      name: '文件1.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: '上传成功',
      type: 'image',
      uid: '123',
    },
    {
      name: '文件2.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上传中...',
      type: 'image',
      uid: '125',
    },
  ]
  const onDelete = (file: FileItem, fileList: FileItem[]) => {
    // console.log(translated.ca3903f3, file, fileList)
  }

  const [text, setText] = useState('请选择地址')
  const [normal, setNormal] = useState(false)
  const [province, setProvince] = useState([
    { id: 1, name: '北京', title: 'B' },
    { id: 2, name: '广西', title: 'G' },
    { id: 3, name: '江西', title: 'J' },
    { id: 4, name: '四川', title: 'S' },
    { id: 5, name: '浙江', title: 'Z' },
  ])

  const [city, setCity] = useState([])

  const [country, setCountry] = useState([])
  const [town, setTown] = useState([])

  const [address, setAddress] = useState({
    province,
    city,
    country,
    town,
  })

  const onChange = (cal) => {
    const name = address[cal.next]
    setTimeout(() => {
      switch (cal.next) {
        case 'city':
          setCity([
            { id: 7, name: '朝阳区', title: 'C' },
            { id: 8, name: '崇文区', title: 'C' },
            { id: 9, name: '昌平区', title: 'C' },
            { id: 6, name: '石景山区', title: 'S' },
            { id: 3, name: '八里庄街道', title: 'B' },
            { id: 10, name: '北苑', title: 'B' },
          ])
          break
        case 'country':
          setCountry([
            { id: 3, name: '八里庄街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
            { id: 4, name: '常营乡', title: 'C' },
          ])
          break
        default:
          setNormal(false)
      }
    }, 200)
  }
  const close = (val) => {
    console.log(val)
    setNormal(false)

    if ((val.data as AddressResult).addressStr) {
      setText((val.data as AddressResult).addressStr)
    }
  }

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell>
          <Form>
            <FormItem label={translated.name} required>
              <Input
                className="nut-input-text"
                placeholder={translated.nameTip}
                type="text"
              />
            </FormItem>
            <FormItem label={translated.remarks} required>
              <TextArea placeholder={translated.remarksTip} />
            </FormItem>
          </Form>
        </Cell>
        <h2>{translated.title1}</h2>
        <Cell>
          <Form>
            <FormItem label={translated.name} required>
              <Input placeholder={translated.nameTip} type="text" />
            </FormItem>
            <FormItem label={translated.tel} required>
              <Input placeholder={translated.telTip} type="text" />
            </FormItem>
            <Cell>
              <Button
                type="default"
                size="small"
                style={{ marginRight: '10px' }}
              >
                {translated.add}
              </Button>
              <Button
                type="default"
                size="small"
                style={{ marginRight: '10px' }}
              >
                {translated.remove}
              </Button>
              <Button
                type="primary"
                size="small"
                style={{ marginRight: '10px' }}
              >
                {translated.submit}
              </Button>
              <Button type="default" size="small">
                {translated.reset}
              </Button>
            </Cell>
          </Form>
        </Cell>
        <h2>{translated.title2}</h2>
        <Cell>
          <Form>
            <FormItem label={translated.name} required>
              <Input placeholder={translated.nameTip1} type="text" />
            </FormItem>
            <FormItem label={translated.age} required>
              <Input placeholder={translated.ageTip1} type="text" />
            </FormItem>
            <FormItem label={translated.tel} required>
              <Input placeholder={translated.telTip2} type="text" />
            </FormItem>
            <FormItem label={translated.address} required>
              <Input placeholder={translated.addressTip} type="text" />
            </FormItem>
            <Cell>
              <Button
                type="primary"
                size="small"
                style={{ marginRight: '10px' }}
              >
                {translated.submit}
              </Button>
              <Button type="default" size="small">
                {translated.reset}
              </Button>
            </Cell>
          </Form>
        </Cell>
        <h2>{translated.title3}</h2>
        <Cell>
          <Form>
            <FormItem label={translated.switch} required>
              <Switch checked />
            </FormItem>
            <FormItem label={translated.checkbox} required>
              <Checkbox
                textPosition="right"
                label={translated.checkbox}
                checked={false}
              />
            </FormItem>
            <FormItem label={translated.radiogroup} required>
              <RadioGroup>
                <Radio value="1">选项1</Radio>
                <Radio value="2">选项2</Radio>
                <Radio value="3">选项3</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label={translated.rate} required>
              <Rate modelValue={3} />
            </FormItem>
            <FormItem label={translated.inputnumber} required>
              <InputNumber modelValue={3} min="10" max="20" />
            </FormItem>
            <FormItem label={translated.range} required>
              <Range modelValue={0} max={10} min={-10} />
            </FormItem>
            <FormItem label={translated.uploader} required>
              <Uploader
                url={uploadUrl}
                defaultFileList={defaultFileList}
                onRemove={onDelete}
                maximum="3"
                multiple
                uploadIcon="dongdong"
              />
            </FormItem>
            {/* <FormItem label={translated.address} required>
              <Address
                modelValue={normal}
                province={province}
                city={city}
                country={country}
                town={town}
                customAddressTitle="请选择所在地区"
                onChange={onChange}
                onClose={close}
              />
            </FormItem> */}
          </Form>
        </Cell>
      </div>
    </>
  )
}

export default FormDemo
