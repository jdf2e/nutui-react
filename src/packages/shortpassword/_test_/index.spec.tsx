import * as React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ShortPassword } from '../shortpassword'

beforeAll(() => {
  // @ts-ignore
  global.IS_REACT_ACT_ENVIRONMENT = false
})
test('should render shortpassword when visible is true', async () => {
  const { container } = render(<ShortPassword visible value="123" />)
  const li = container.querySelectorAll('.nut-shortpassword-input-fake-li')
  expect(li.length).toBe(6)
  const icon = container.querySelectorAll(
    '.nut-shortpassword-input-fake-li-icon'
  )
  expect(icon.length).toBe(3)
})
test('should render buttonShortpassword and error msg when hideFooter is false ', () => {
  let value = 0
  let inputValue = ''
  const onCancel = () => {
    value = 1
  }
  const onConfirm = (value: string) => {
    inputValue = value
  }
  const { container } = render(
    <ShortPassword
      visible
      value="123"
      length={4}
      hideFooter={false}
      error="错误信息"
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  )
  const psdLength = container.querySelectorAll(
    '.nut-shortpassword-input-fake-li'
  )
  expect(psdLength.length).toBe(4)
  const error = container.querySelector('.nut-shortpassword-message-error')
  expect(error).toBeTruthy()
  expect((error as HTMLElement).innerHTML).toBe('错误信息')
  const cancle = container.querySelector('.nut-shortpassword-footer-cancel')
  expect(cancle).toBeTruthy()
  const sure = container.querySelector('.nut-shortpassword-footer-sure')
  expect(sure).toBeTruthy()
  fireEvent.click(cancle as HTMLElement)
  expect(value).toBe(1)
  fireEvent.click(sure as HTMLElement)
  expect(inputValue).toBe('123')
})

test('should limit input value when input', async () => {
  let inputValue = ''
  const onChange = (value: string) => {
    inputValue = value
  }
  const { container } = render(
    <ShortPassword
      visible
      value="123456789"
      hideFooter={false}
      onChange={onChange}
    />
  )
  const sure = container.querySelector('.nut-shortpassword-footer-sure')
  expect(sure).toBeTruthy()
  fireEvent.click(sure as HTMLElement)
  expect(inputValue).toBe('123456')
})

test('should ref open or close', async () => {
  const ref = React.createRef<any>()
  const { container } = render(<ShortPassword ref={ref} value="123456789" />)
  ref.current?.open()
  waitFor(() => {
    const element = container.querySelector('.nut-shortpassword-title')
    expect(element).toBeTruthy()
  })
  ref.current?.close()
  waitFor(() => {
    const element = container.querySelector('.nut-shortpassword-title')
    expect(element).toBeFalsy()
  })
})
