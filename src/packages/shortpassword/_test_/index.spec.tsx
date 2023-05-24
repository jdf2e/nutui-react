import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ShortPassword } from '../shortpassword'

test('should render shortpassword when visible is true', async () => {
  const { container } = render(<ShortPassword visible value="123" />)
  const li = container.querySelectorAll('.nut-shortpassword__input-fake__li')
  expect(li.length).toBe(6)
  const icon = container.querySelectorAll(
    '.nut-shortpassword__input-fake__li__icon'
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
    '.nut-shortpassword__input-fake__li'
  )
  expect(psdLength.length).toBe(4)
  const error = container.querySelector('.nut-shortpassword__message__error')
  expect(error).toBeTruthy()
  expect((error as HTMLElement).innerHTML).toBe('错误信息')
  const cancle = container.querySelector('.nut-shortpassword__footer__cancel')
  expect(cancle).toBeTruthy()
  const sure = container.querySelector('.nut-shortpassword__footer__sure')
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
  const sure = container.querySelector('.nut-shortpassword__footer__sure')
  expect(sure).toBeTruthy()
  fireEvent.click(sure as HTMLElement)
  expect(inputValue).toBe('123456')
})
