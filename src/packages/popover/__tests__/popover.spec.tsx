import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Popover from '../index'
import Button from '@/packages/button'

const itemList = [
  {
    key: 'key1',
    name: 'option1',
  },
  {
    key: 'key2',
    name: 'option2',
  },
  {
    key: 'key3',
    name: 'option3',
  },
]

const itemListDisabled = [
  {
    key: 'key1',
    name: 'option1',
    disabled: true,
  },
  {
    key: 'key2',
    name: 'option2',
    disabled: true,
  },
  {
    key: 'key3',
    name: 'option3',
  },
]

test('render popover content', async () => {
  const { container } = render(
    <Popover visible list={itemList}>
      <Button type="primary" shape="square">
        基础用法
      </Button>
    </Popover>
  )
  const content = container.querySelectorAll('.nut-popover-content')[0]
  expect(content.className).toContain(
    'nut-popup-default nut-popover-content nut-popover-content--bottom'
  )
})

test('should emit onchoose event when clicking the action', async () => {
  const choose = jest.fn()
  const { container } = render(
    <Popover visible list={itemList} onSelect={choose}>
      <Button type="primary" shape="square">
        明朗风格
      </Button>
    </Popover>
  )
  const contentItem = container.querySelectorAll('.nut-popover-menu-item')[0]
  fireEvent.click(contentItem)
  await waitFor(() => expect(choose.mock.calls[0][0].name).toEqual('option1'))
  await waitFor(() => expect(choose.mock.calls[0][1]).toBe(0))
})

test('should not emit select event when the action is disabled', async () => {
  const choose = jest.fn()
  const { container } = render(
    <Popover visible list={itemListDisabled} onSelect={choose}>
      <Button type="primary" shape="square">
        明朗风格
      </Button>
    </Popover>
  )
  const contentItem = container.querySelectorAll('.nut-popover-menu-item')[0]
  fireEvent.click(contentItem)

  await waitFor(() => expect(choose).not.toBeCalled())
})
