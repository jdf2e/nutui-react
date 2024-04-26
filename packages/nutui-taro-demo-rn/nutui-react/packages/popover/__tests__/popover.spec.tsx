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
  const close = vi.fn()
  const click = vi.fn()
  const { container, getByTestId } = render(
    <div
      style={{
        height: '200px',
        overflowY: 'scroll',
        position: 'relative',
      }}
      data-testid="aa"
    >
      <div style={{ height: '100px' }} />
      <Popover
        className="demo-popover"
        visible
        list={itemList}
        location="top"
        offset={[12, 20]}
        style={{ marginRight: '30px' }}
        onClick={click}
        onClose={close}
      >
        <Button data-testid="a" type="primary" shape="square">
          position: fixed
        </Button>
      </Popover>
    </div>
  )
  const item = document.querySelectorAll('.nut-popover-menu-item-name')
  fireEvent.click(item[0])
  expect(click).toBeCalled()
  expect(close).toBeCalled()
  fireEvent.click(getByTestId('a'))
  await waitFor(() => {
    fireEvent.scroll(getByTestId('aa'), { target: { scrollTop: 10 } })

    const item1 = document.querySelectorAll('.nut-popover-menu-item-name')
    expect(item1.length).toBe(3)
  })
})

test('should emit onchoose event when clicking the action', async () => {
  const choose = vi.fn()
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
  const choose = vi.fn()
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
