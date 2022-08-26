import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Popover from '../index'
import Button from '@/packages/button'

const itemList = [
  {
    name: '选项一',
  },
  {
    name: '选项二',
  },
  {
    name: '选项三',
  },
]

const itemListDisabled = [
  {
    name: '选项一',
    disabled: true,
  },
  {
    name: '选项二',
    disabled: true,
  },
  {
    name: '选项三',
  },
]

const iconItemList = [
  {
    name: '选项一',
    icon: 'my2',
  },
  {
    name: '选项二',
    icon: 'cart2',
  },
  {
    name: '选项三',
    icon: 'location2',
  },
]

test('render popover content', async () => {
  const { container } = render(
    <Popover visible list={itemList}>
      <Button type="primary" shape="square">
        明朗风格
      </Button>
    </Popover>
  )
  const content = container.querySelectorAll('.popover-content')[0]
  expect(content.className).toContain(
    'popover-content-show popover-content popover-content--bottom'
  )
})

test('should emit onchoose event when clicking the action', async () => {
  const choose = jest.fn()
  const { container } = render(
    <Popover visible list={itemList} onChoose={choose}>
      <Button type="primary" shape="square">
        明朗风格
      </Button>
    </Popover>
  )
  const contentItem = container.querySelectorAll('.popover-menu-item')[0]
  fireEvent.click(contentItem)
  await waitFor(() => expect(choose.mock.calls[0][0].name).toEqual('选项一'))
  await waitFor(() => expect(choose.mock.calls[0][1]).toBe(0))
})

test('should not emit select event when the action is disabled', async () => {
  const choose = jest.fn()
  const { container } = render(
    <Popover visible list={itemListDisabled} onChoose={choose}>
      <Button type="primary" shape="square">
        明朗风格
      </Button>
    </Popover>
  )
  const contentItem = container.querySelectorAll('.popover-menu-item')[0]
  fireEvent.click(contentItem)

  await waitFor(() => expect(choose).not.toBeCalled())
})
