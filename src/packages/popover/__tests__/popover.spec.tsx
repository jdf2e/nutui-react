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
  const content = document.querySelectorAll('.nut-popover-content')[0]
  expect(content.className).toContain(
    'nut-popup-default nut-popover-content nut-popover-content-bottom'
  )
})

test('render popover position', async () => {
  const { container } = render(
    <Popover visible list={itemList} location="bottom-start">
      <Button type="primary" shape="square">
        基础用法
      </Button>
    </Popover>
  )
  const content = document.querySelectorAll('.nut-popover-content')[0]
  expect(content.className).toContain(
    'nut-popup-default nut-popover-content nut-popover-content-bottom-start'
  )
})

test('render popover position2', async () => {
  const { container } = render(
    <Popover visible list={itemList} location="bottom-start" arrowOffset={20}>
      <Button type="primary" shape="square">
        基础用法
      </Button>
    </Popover>
  )
  const content = document.querySelectorAll(
    '.nut-popover-arrow'
  )[0] as HTMLElement
  expect(content).toHaveAttribute('style', 'left: 36px;')
})

test('render popover position22', async () => {
  const { container } = render(
    <Popover visible list={itemList} arrowOffset={20}>
      <Button type="primary" shape="square">
        基础用法
      </Button>
    </Popover>
  )
  const content = document.querySelectorAll(
    '.nut-popover-arrow'
  )[0] as HTMLElement
  expect(content).toHaveAttribute('style', 'left: calc(50% + 20px);')
})

test('render popover position3', async () => {
  const { container } = render(
    <Popover visible list={itemList} location="left-start" arrowOffset={20}>
      <Button type="primary" shape="square">
        基础用法
      </Button>
    </Popover>
  )
  const content = document.querySelectorAll(
    '.nut-popover-arrow'
  )[0] as HTMLElement
  expect(content).toHaveAttribute('style', 'top: -4px;')
})

test('render popover position33', async () => {
  const { container } = render(
    <Popover visible list={itemList} location="left" arrowOffset={20}>
      <Button type="primary" shape="square">
        基础用法
      </Button>
    </Popover>
  )
  const content = document.querySelectorAll(
    '.nut-popover-arrow'
  )[0] as HTMLElement
  expect(content).toHaveAttribute('style', 'top: calc(50% - 20px);')
})

test('render position fixed ', async () => {
  const { container } = render(
    <div
      style={{
        position: 'fixed',
        bottom: 10,
        right: -10,
        zIndex: 1000,
      }}
    >
      <Popover
        className="demo-popover"
        visible
        list={itemList}
        location="top"
        offset={[12, 20]}
        style={{ marginRight: '30px' }}
      >
        <Button data-testid="a" type="primary" shape="square">
          position: fixed
        </Button>
      </Popover>
    </div>
  )
  const content = document.querySelectorAll(
    '.nut-popover-arrow'
  )[0] as HTMLElement
  fireEvent.click(document.documentElement)
  expect(content).toBeTruthy()
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
  const contentItem = document.querySelectorAll('.nut-popover-menu-item')[0]
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
  const contentItem = document.querySelectorAll('.nut-popover-menu-item')[0]
  fireEvent.click(contentItem)

  await waitFor(() => expect(choose).not.toBeCalled())
})
