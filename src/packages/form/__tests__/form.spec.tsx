import * as React from 'react'
import { useEffect } from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form, { FormInstance } from '@/packages/form'
import Input from '@/packages/input'

beforeAll(() => {
  // @ts-ignore
  global.IS_REACT_ACT_ENVIRONMENT = false
})
test('form set initialValues', () => {
  const { container } = render(
    <Form initialValues={{ username: 'NutUI-React' }}>
      <Form.Item name="username">
        <Input />
      </Form.Item>
    </Form>
  )
  expect(container.querySelector('.nut-input-native')).toHaveValue(
    'NutUI-React'
  )
})

test('formItem set initialValue', () => {
  const { container } = render(
    <Form>
      <Form.Item name="username" initialValue="NutUI-React">
        <Input />
      </Form.Item>
    </Form>
  )
  expect(container.querySelector('.nut-input-native')).toHaveValue(
    'NutUI-React'
  )
})

test('Both form and formItem set initialValue(s)', () => {
  const { container } = render(
    <Form initialValues={{ username: 'NutUI-React-Form' }}>
      <Form.Item name="username" initialValue="NutUI-React-FormItem">
        <Input />
      </Form.Item>
    </Form>
  )
  expect(container.querySelector('.nut-input-native')).toHaveValue(
    'NutUI-React-Form'
  )
})
test('Both form and formItem set initialValue(s) to submit', async () => {
  const handleSubmit = vi.fn()
  const { container } = render(
    <Form
      initialValues={{ username: 'NutUI-React-Form', age: 18 }}
      onFinish={handleSubmit}
    >
      <Form.Item name="username" label="UserName" initialValue="NutUI-React">
        <Input />
      </Form.Item>
      <Form.Item name="age" label="Age" initialValue="30">
        <Input />
      </Form.Item>
      <Form.Item name="phone" label="Phone" initialValue="123456">
        <Input />
      </Form.Item>
    </Form>
  )
  const form = container.querySelector('form') as Element
  fireEvent.submit(form)
  await waitFor(() => {
    expect(handleSubmit).toBeCalled()
    expect(handleSubmit).toBeCalledWith(
      expect.objectContaining({
        username: 'NutUI-React-Form',
        age: 18,
        phone: '123456',
      })
    )
  })
})
test('form validateTrigger', async () => {
  const { container, rerender } = render(
    <Form>
      <Form.Item
        label="字段A"
        name="username"
        required
        validateTrigger="onBlur"
        rules={[{ required: true, message: '请输入字段A' }]}
      >
        <Input placeholder="请输入字段A" type="text" />
      </Form.Item>
    </Form>
  )
  const input = container.querySelector('.nut-input-native')
  if (input) {
    fireEvent.focus(input)
    fireEvent.blur(input)
    await waitFor(() => {
      const errorMessage = container.querySelector('.nut-form-item-body-tips')
      expect(errorMessage).toBeTruthy()
    })
  }
  rerender(
    <Form initialValues={{ username: 'NutUI-React' }}>
      <Form.Item
        label="字段A"
        name="username"
        required
        validateTrigger={['onBlur']}
        rules={[{ required: true, message: '请输入字段A' }]}
      >
        <Input placeholder="请输入字段A" type="text" />
      </Form.Item>
    </Form>
  )
  if (input) {
    fireEvent.focus(input)
    fireEvent.blur(input)
    await waitFor(() => {
      const errorMessage = container.querySelector('.nut-form-item-body-tips')
      expect(errorMessage).toBeTruthy()
    })
  }
})

test('useForm', () => {
  const App = () => {
    const [form] = Form.useForm()
    useEffect(() => {
      form.setFieldsValue({ username: 'NutUI-React' })
      form.getFieldsValue(['username'])
    }, [])
    return (
      <Form form={form}>
        <Form.Item name="username">
          <Input />
        </Form.Item>
      </Form>
    )
  }
  const { container } = render(<App />)
  expect(container.querySelector('.nut-input-native')).toHaveValue(
    'NutUI-React'
  )
})

test('form set footer', () => {
  const { container } = render(
    <Form
      initialValues={{ username: 'NutUI-React' }}
      footer={<div className="test-footer">test footer</div>}
    >
      <Form.Item name="username" required label="UserName">
        <Input />
      </Form.Item>
    </Form>
  )
  expect(container.querySelectorAll('.test-footer')).toHaveLength(1)
})

test('form set required', () => {
  const { container } = render(
    <Form initialValues={{ username: 'NutUI-React' }}>
      <Form.Item name="username" required label="UserName">
        <Input />
      </Form.Item>
    </Form>
  )
  expect(
    container.querySelectorAll('.nut-form-item-label-required')
  ).toHaveLength(1)
})

test('form set change value', async () => {
  const handleSubmit = vi.fn()
  const { container } = render(
    <Form initialValues={{ username: 'NutUI-React' }} onFinish={handleSubmit}>
      <Form.Item name="username" required label="UserName">
        <Input />
      </Form.Item>
    </Form>
  )
  const inputEl = container.querySelector('.nut-input-native') as Element
  const form = container.querySelector('form') as Element
  fireEvent.change(inputEl, { target: { value: 'NutUI React Taro' } })
  fireEvent.submit(form)
  await waitFor(() => {
    expect(handleSubmit).toBeCalled()
    expect(handleSubmit).toBeCalledWith(
      expect.objectContaining({
        username: 'NutUI React Taro',
      })
    )
  })
})

test('form onFinishFailed', async () => {
  const handleFailed = vi.fn()
  const { container } = render(
    <Form
      initialValues={{ username: 'NutUI-React' }}
      onFinishFailed={handleFailed}
    >
      <Form.Item
        name="username"
        required
        label="UserName"
        rules={[
          { required: true, message: 'required' },
          {
            min: 50,
            message: 'min 50',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  )
  const inputEl = container.querySelector('.nut-input-native') as Element
  const form = container.querySelector('form') as Element

  fireEvent.change(inputEl, { target: { value: 'NutUI React Taro' } })
  fireEvent.reset(form)
  fireEvent.submit(form)
  await waitFor(() => {
    expect(handleFailed).toBeCalled()
    expect(handleFailed).toBeCalledWith({ username: 'NutUI-React' }, [
      {
        field: 'username',
        fieldValue: 'NutUI-React',
        message: 'min 50',
      },
    ])
  })
})

test('form validator onFinishFailed', async () => {
  const handleFailed = vi.fn()
  const { container } = render(
    <Form
      initialValues={{ username: 'NutUI-React' }}
      onFinishFailed={handleFailed}
    >
      <Form.Item
        name="username"
        required
        label="UserName"
        rules={[
          { required: true, message: 'required' },
          {
            validator: (_, value) => {
              // eslint-disable-next-line
              return Promise.reject('validator fail')
            },
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  )
  const inputEl = container.querySelector('.nut-input-native') as Element
  const form = container.querySelector('form') as Element

  fireEvent.change(inputEl, { target: { value: 'NutUI React Taro' } })
  fireEvent.submit(form)

  await waitFor(() => {
    expect(handleFailed).toBeCalled()
    expect(handleFailed).toBeCalledWith({ username: 'NutUI React Taro' }, [
      {
        field: 'username',
        fieldValue: 'NutUI React Taro',
        message: 'validator fail',
      },
    ])
  })
})

test('no-style and render function', async () => {
  const ref = React.createRef<FormInstance>()
  const { container } = render(
    <Form ref={ref} divider labelPosition="right">
      <Form.Item label="字段A" name="username">
        <Input
          className="test-userName"
          placeholder="请输入字段A"
          type="text"
        />
      </Form.Item>
      <Form.Item label="字段D" name="address" shouldUpdate>
        {({ getFieldValue }) => {
          const value = getFieldValue('username')
          console.log('字段D value', value)
          if (!value) return null
          return (
            <Input
              className="related-input"
              placeholder="字段D"
              maxLength={100}
            />
          )
        }}
      </Form.Item>
    </Form>
  )
  ref.current?.setFieldsValue({ username: 'test' })
  waitFor(() => {
    const relatedInput = container.querySelector('.related-input')
    expect(relatedInput).toBeTruthy()
  })
})
