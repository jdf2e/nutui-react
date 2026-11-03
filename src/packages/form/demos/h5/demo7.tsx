import React from 'react'
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
  Toast,
  DatePicker,
} from '@nutui/nutui-react'
import { ArrowRight } from '@nutui/icons-react'

// 大屏适配：组件内部尺寸/字号都按 --nut-scale-f 缩放
const scalePx = (value: number) => `calc(${value}px * var(--nut-scale-f, 1))`

// 标签栏：标签 68x30、列间距 8、行间距 12，最多 3 列 / 3 行
// 间距由 gap 统一控制，需清掉 Group 默认的 margin，否则行高会被撑大
const tagGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: `${scalePx(12)} ${scalePx(8)}`,
  // 68 * 3 + 8 * 2 = 220px，一行最多 3 个
  maxWidth: scalePx(220),
  // 30 * 3 + 12 * 2 = 114px，最多 3 行
  maxHeight: scalePx(114),
  overflow: 'hidden',
  // 清掉 Group 默认的 margin，否则行高会被撑大
  '--nutui-checkboxgroup-checkbox-margin': '0',
  '--nutui-checkboxgroup-checkbox-margin-bottom': '0',
} as React.CSSProperties

// 清掉按钮默认内边距，尺寸完全由内部文案容器决定
// 背景、选中态（浅红底 + 红边框 + 红字）走 Checkbox 默认主题样式
const tagItemStyle = {
  flex: 'none',
  margin: 0,
  '--nutui-checkbox-button-border-radius': '6px',
  '--nutui-checkbox-button-padding': '0',
} as React.CSSProperties

// 标签文案直接作为 children 传入，自己撑出 68x30（扣掉按钮 1px 边框）并单行居中
// 字号固定 12px，避免大屏下字号被放大把文案挤成两行
const tagTextStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '66px',
  height: '28px',
  fontSize: '12px',
  whiteSpace: 'nowrap',
}

const Demo7 = () => {
  const tagOptions = [
    { value: 1, label: '标签名称' },
    { value: 2, label: '标签名称' },
    { value: 3, label: '标签名称' },
  ]

  const pickerOptions = [
    { value: 1, label: 'BeiJing' },
    { value: 2, label: 'NanJing' },
    { value: 3, label: 'WuXi' },
    { value: 4, label: 'DaQing' },
    { value: 5, label: 'SuiHua' },
    { value: 6, label: 'WeiFang' },
    { value: 7, label: 'ShiJiaZhuang' },
  ]

  const submitFailed = (error: any) => {
    Toast.show({ content: JSON.stringify(error), icon: 'fail' })
  }

  const submitSucceed = (values: any) => {
    Toast.show({ content: JSON.stringify(values), icon: 'success' })
  }
  return (
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
      <Form.Item label="Label item" name="label_item">
        <Checkbox.Group style={tagGroupStyle}>
          {tagOptions.map((tag) => (
            <Checkbox
              key={tag.value}
              style={tagItemStyle}
              shape="button"
              value={tag.value}
            >
              <span style={tagTextStyle}>{tag.label}</span>
            </Checkbox>
          ))}
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
                        ?.label
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
        label="DatePicker"
        name="DatePicker"
        trigger="onConfirm"
        getValueFromEvent={(...args) => {
          return new Date(args[1].join('/'))
        }}
        onClick={(event, ref: any) => {
          ref.open()
        }}
        initialValue={new Date()}
      >
        <DatePicker>
          {(value: any) => {
            return (
              <Cell
                style={{
                  padding: 0,
                  '--nutui-cell-divider-border-bottom': '0',
                }}
                className="nutui-cell--clickable"
                title={
                  value ? new Date(value).toLocaleDateString() : 'Please select'
                }
                extra={<ArrowRight />}
                align="center"
              />
            )
          }}
        </DatePicker>
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
  )
}

export default Demo7
