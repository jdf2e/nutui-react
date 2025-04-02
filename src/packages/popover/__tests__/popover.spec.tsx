import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Tips, Close } from '@nutui/icons-react'
import Popover from '../index'
import Button from '@/packages/button'
import { FullPosition } from '@/types'

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

const itemListOne = [
  {
    key: 'key1',
    name: 'option1',
    icon: <Tips />,
    action: {
      icon: <Close />,
      onClick: (e: any) => {
        console.log('onclick 1')
        e.stopPropagation()
      },
    },
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
      <Button type="primary">基础用法</Button>
    </Popover>
  )
  const content = document.querySelectorAll('.nut-popover-content')[0]
  expect(content.className).toContain(
    'nut-popup-none nut-popover-content nut-popover-content-bottom'
  )
})

test('render popover content dark', async () => {
  const { container } = render(
    <Popover visible list={itemListOne} theme="dark" location="right">
      <Button type="primary">基础用法</Button>
    </Popover>
  )
  const content = document.querySelectorAll('.nut-popover')[0]
  expect(content.className).toContain('nut-popover-dark')
  expect(container).toMatchSnapshot()
})

test('render popover position', async () => {
  render(
    <Popover visible list={itemList} location="bottom-left">
      <Button type="primary">基础用法</Button>
    </Popover>
  )
  const content = document.querySelectorAll('.nut-popover-content')[0]
  expect(content.className).toContain(
    'nut-popup-none nut-popover-content nut-popover-content-bottom-left'
  )
})

test('render popover position with arrowOffset', async () => {
  const { rerender } = render(
    <Popover visible list={itemList} location="bottom-left" arrowOffset={20}>
      <Button type="primary">基础用法</Button>
    </Popover>
  )

  const checkArrowStyles = (location: FullPosition, expectedStyles: string) => {
    rerender(
      <Popover visible list={itemList} location={location} arrowOffset={20}>
        <Button type="primary">基础用法</Button>
      </Popover>
    )
    content = document.querySelectorAll('.nut-popover-arrow')[0]
    expect(content).toHaveAttribute('style', expectedStyles)
  }

  let content = document.querySelectorAll('.nut-popover-arrow')[0]
  expect(content).toHaveAttribute('style', 'left: 36px;')

  checkArrowStyles('bottom', 'left: calc(50% + 20px);')
  checkArrowStyles('bottom-right', 'right: -4px;')
  checkArrowStyles('left', 'top: calc(50% - 20px);')
  checkArrowStyles('left-bottom', 'bottom: 36px;')
  checkArrowStyles('left-top', 'top: -4px;')
  checkArrowStyles('right', 'top: calc(50% - 20px);')
  checkArrowStyles('right-bottom', 'bottom: 36px;')
  checkArrowStyles('right-top', 'top: -4px;')
  checkArrowStyles('top-right', 'right: -4px;')
  checkArrowStyles('top-left', 'left: 36px;')
  checkArrowStyles('top', 'left: calc(50% + 20px);')
})

test('render position fixed ', async () => {
  const close = vi.fn()
  const click = vi.fn()
  const { getByTestId } = render(
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
        <Button data-testid="a" type="primary">
          position: fixed
        </Button>
      </Popover>
    </div>
  )
  const item = document.querySelectorAll('.nut-popover-item-name')
  fireEvent.click(item[0])
  expect(click).toBeCalled()
  expect(close).toBeCalled()
  fireEvent.click(getByTestId('a'))
  await waitFor(() => {
    fireEvent.scroll(getByTestId('aa'), { target: { scrollTop: 10 } })
    const item1 = document.querySelectorAll('.nut-popover-item-name')
    expect(item1.length).toBe(3)
  })
})

test('should emit onchoose event when clicking the action', async () => {
  const choose = vi.fn()
  render(
    <Popover visible list={itemList} onSelect={choose}>
      <Button type="primary">明朗风格</Button>
    </Popover>
  )
  const contentItem = document.querySelectorAll('.nut-popover-item')[0]
  fireEvent.click(contentItem)
  await waitFor(() => expect(choose.mock.calls[0][0].name).toEqual('option1'))
  await waitFor(() => expect(choose.mock.calls[0][1]).toBe(0))
})

test('should not emit select event when the action is disabled', async () => {
  const choose = vi.fn()
  render(
    <Popover visible list={itemListDisabled} onSelect={choose}>
      <Button type="primary">明朗风格</Button>
    </Popover>
  )
  const contentItem = document.querySelectorAll('.nut-popover-item')[0]
  fireEvent.click(contentItem)
  await waitFor(() => expect(choose).not.toBeCalled())
})

test('click event', async () => {
  const close = vi.fn()
  const close1 = vi.fn()
  const open = vi.fn()
  const { getByTestId, rerender } = render(
    <div>
      <Popover visible targetId="popid" list={itemListOne} />
      <Button type="primary" id="popid">
        自定义目标元素
      </Button>
      <span data-testid="closeid" onClick={close}>
        点击消失
      </span>
    </div>
  )
  fireEvent.click(getByTestId('closeid'))
  await waitFor(() =>
    expect(document.querySelectorAll('.nut-popover')[0]).toHaveStyle({
      visibility: 'hidden',
    })
  )

  rerender(
    <>
      <Popover
        visible
        targetId="popid"
        list={itemListOne}
        location="left-bottom"
        onOpen={open}
        onClose={close1}
        data-testid="popoverid"
      />
      <Button type="primary" id="popid" data-testid="popid">
        自定义目标元素
      </Button>
    </>
  )
  fireEvent.click(getByTestId('popid'))
  await waitFor(() => {
    expect(document.querySelectorAll('.nut-popover')[0]).toHaveStyle({
      visibility: 'hidden',
    })
  })
})
