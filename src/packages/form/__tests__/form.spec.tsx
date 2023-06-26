import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '../index'
import Input from '@/packages/input'

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
  expect(container.querySelectorAll('.required')).toHaveLength(1)
})

test('form set change value', () => {
  const handleSubmit = jest.fn()
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
  expect(handleSubmit).toBeCalled()
  expect(handleSubmit).toBeCalledWith(
    expect.objectContaining({
      username: 'NutUI React Taro',
    })
  )
})

test('form onFinishFailed', () => {
  const handleFailed = jest.fn()
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
  fireEvent.submit(form)
  expect(handleFailed).toBeCalled()
  // Expected: ObjectContaining {"field": "username", "fieldValue": "NutUI React Taro", "message": "min 50"}
  // Received: {"username": "NutUI React Taro"}, [{"field": "username", "fieldValue": "NutUI React Taro", "message": "min 50"}]
  expect(handleFailed).toBeCalledWith({ username: 'NutUI React Taro' }, [
    {
      field: 'username',
      fieldValue: 'NutUI React Taro',
      message: 'min 50',
    },
  ])
})
