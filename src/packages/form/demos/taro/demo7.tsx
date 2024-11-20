import React from 'react'
import Taro from '@tarojs/taro'
import {
  Form,
  Input,
  Cell,
  Switch,
  Checkbox,
  Radio,
  Picker,
  Uploader,
  Button,
  Rate,
  Range,
} from '@nutui/nutui-react-taro'
import { ArrowRight } from '@nutui/icons-react-taro'

const Demo7 = () => {
  const pickerOptions = [
    { value: 4, text: 'BeiJing' },
    { value: 1, text: 'NanJing' },
    { value: 2, text: 'WuXi' },
    { value: 8, text: 'DaQing' },
    { value: 9, text: 'SuiHua' },
    { value: 10, text: 'WeiFang' },
    { value: 12, text: 'ShiJiaZhuang' },
  ]
  const submitFailed = (error: any) => {
    Taro.showToast({ title: JSON.stringify(error), icon: 'error' })
  }

  const submitSucceed = (values: any) => {
    Taro.showToast({ title: JSON.stringify(values), icon: 'success' })
  }
  return (
    <>
      <Form
        style={{ '--nutui-form-item-label-width': '120px' }}
        footer={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Button nativeType="submit" type="primary">
              提交
            </Button>
            <Button nativeType="reset" style={{ marginLeft: '20px' }}>
              重置
            </Button>
          </div>
        }
        onFinish={(values) => submitSucceed(values)}
        onFinishFailed={(values, errors) => submitFailed(errors)}
      >
        <Form.Item label="Input" name="form_input">
          <Input placeholder="placeholder" />
        </Form.Item>
        <Form.Item label="Switch" name="switch" valuePropName="checked">
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
              return (
                <Cell
                  style={{
                    padding: 0,
                    '--nutui-cell-divider-border-bottom': '0',
                  }}
                  className="nutui-cell--clickable"
                  title={
                    value.length
                      ? pickerOptions.filter((po) => po.value === value[0])[0]
                          ?.text
                      : 'Please select'
                  }
                  extra={<ArrowRight />}
                  align="center"
                />
              )
            }}
          </Picker>
        </Form.Item>
        <Form.Item
          label="Uploader"
          name="files"
          initialValue={[
            {
              name: 'file1.png',
              url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
              status: 'success',
              message: 'success',
              type: 'image',
              uid: '122',
            },
          ]}
        >
          <Uploader url="https://my-json-server.typicode.com/linrufeng/demo/posts" />
        </Form.Item>
      </Form>
    </>
  )
}

export default Demo7
