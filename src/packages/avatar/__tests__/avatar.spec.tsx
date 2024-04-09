import * as React from 'react'
import { User } from '@nutui/icons-react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Avatar } from '../avatar'

const classPrefix = `nut-avatar`

test('size props', () => {
  const { getByTestId } = render(
    <>
      <Avatar data-testid="size-small" size="small" />
      <Avatar data-testid="size-large" size="large" />
      <Avatar data-testid="size-num" size="30" />
    </>
  )
  expect(getByTestId('size-small')).toHaveClass(`${classPrefix}-small`)
  expect(getByTestId('size-large')).toHaveClass(`${classPrefix}-large`)
  expect(getByTestId('size-num').style.width).toBe('30px')
})

test('shape props', () => {
  const { getByTestId } = render(
    <Avatar data-testid="avatar-shape" shape="square" />
  )
  expect(getByTestId('avatar-shape')).toHaveClass(`${classPrefix}-square`)
})

test('bgColor props', () => {
  const { getByTestId } = render(
    <Avatar data-testid="avatar-bgColor" background="#000000" />
  )
  expect(getByTestId('avatar-bgColor').style.backgroundColor).toBe('#000000')
})

test('color props', () => {
  const { getByTestId } = render(
    <Avatar data-testid="avatar-color" color="rgb(153, 153, 153)" />
  )
  expect(getByTestId('avatar-color').style.color).toBe('rgb(153, 153, 153)')
})

test('icon props', () => {
  const { container } = render(<Avatar icon={<User />} />)
  expect(container.querySelector('.nut-icon')).toHaveClass('nut-icon-User')
})

test('url props', () => {
  const { container } = render(
    <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
  )
  expect(container.querySelector('img')).toHaveAttribute(
    'src',
    'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png'
  )
})

test('alt props', () => {
  const { container } = render(
    <Avatar
      src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      alt="我是alt"
    />
  )
  expect(container.querySelector('img')?.getAttribute('alt')).toBe('我是alt')
})

test('should emit active-avatarror event', () => {
  const activeAvatar = vi.fn()
  const { getByTestId } = render(
    <Avatar data-testid="avatar-click" onClick={activeAvatar} />
  )
  fireEvent.click(getByTestId('avatar-click'))
  expect(activeAvatar).toBeCalled()
})
