import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ShortPassword } from '../shortpassword'

test('should render shortpassword when visible is true', async () => {
  const { container } = render(<ShortPassword visible modelValue={123} />)
  const input = container.querySelector('.nut-shortpassword__input-real')
  expect(input).toBeTruthy()
  const psdLength = container.querySelectorAll(
    '.nut-shortpassword__input-fake__li'
  )
  expect(psdLength.length).toBe(6)
  expect((input as HTMLInputElement).value).toBe('123')
})
test('should render buttonShortpassword and error msg when hideFooter is false ', () => {
  let value = 0
  let inputValue: number | string = ''
  const onCancel = () => {
    value = 1
  }
  const onOk = (value: number | string) => {
    inputValue = value
  }
  const { container } = render(
    <ShortPassword
      visible
      modelValue={123}
      length={4}
      hideFooter={false}
      errorMsg="错误信息"
      onCancel={onCancel}
      onOk={onOk}
    />
  )
  const input = container.querySelector('.nut-shortpassword__input-real')
  expect(input).toBeTruthy()
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
  expect(inputValue).toBe(123)
})

test('should limit input value when input', async () => {
  let value = 0
  const onChange = (v: string | number) => {
    value = Number(v)
  }
  const { container } = render(
    <ShortPassword visible modelValue={123} length={4} onChange={onChange} />
  )
  container.querySelector('input')?.focus()
  fireEvent.change(container.querySelector('input')!, {
    target: { value: '111111' },
  })
  expect(value).toBe(1111)
})
