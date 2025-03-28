import * as React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import {
  Cart,
  Category,
  Heart,
  HeartFill,
  Hi,
  Home,
  User,
} from '@nutui/icons-react'
import { Tabbar } from '../tabbar'

test('should render tabbar when default', () => {
  const { container } = render(
    <>
      <Tabbar>
        <Tabbar.Item title="首页" icon={<Home />} />
        <Tabbar.Item title="分类" icon={<Category />} />
        <Tabbar.Item title="逛" icon={<Hi />} />
        <Tabbar.Item title="购物车" icon={<Cart />} />
        <Tabbar.Item title="我的" icon={<User />} />
      </Tabbar>
    </>
  )

  expect(container.firstChild).toBeInTheDocument()
  expect(container.querySelectorAll('.nut-tabbar-item').length).toEqual(5)
  expect(
    container.querySelectorAll('.nut-tabbar-item .nut-icon').length
  ).toEqual(5)
})

test('should render custom color and badge when using prop', () => {
  const { container } = render(
    <>
      <Tabbar inactiveColor="grey" activeColor="blue">
        <Tabbar.Item title="首页" icon={<Home />} value={11} />
        <Tabbar.Item title="分类" icon={<Category />} />
        <Tabbar.Item title="逛" icon={<Hi />} />
      </Tabbar>
    </>
  )

  const tabbarItem: NodeListOf<HTMLElement> =
    container.querySelectorAll('.nut-tabbar-item')

  expect(tabbarItem[0].style.color).toEqual('blue')
  expect(tabbarItem[1].style.color).toEqual('grey')
})

test('should render fixed element when using bottom prop', async () => {
  const { container } = render(
    <>
      <Tabbar fixed safeArea>
        <Tabbar.Item title="首页" icon={<Home />} />
        <Tabbar.Item title="分类" icon={<Category />} />
      </Tabbar>
    </>
  )
  expect(container.innerHTML).toMatchSnapshot()
})

test('should match active tabbar by click', async () => {
  const { container } = render(
    <>
      <Tabbar inactiveColor="grey" activeColor="blue">
        <Tabbar.Item
          title={(active) => (active ? '首页' : '首页2')}
          icon={(active) => (active ? <HeartFill /> : <Heart />)}
          value={(active) => (active ? '招手' : '22')}
        />
        <Tabbar.Item title="我的" icon={<Hi />} dot />
        <Tabbar.Item title="我的" icon={<Hi />} dot />
        <Tabbar.Item title="我的" icon={<Hi />} dot />
      </Tabbar>
    </>
  )

  const tabbarItem: NodeListOf<HTMLElement> =
    container.querySelectorAll('.nut-tabbar-item')
  const tabbarItemText: NodeListOf<HTMLElement> = container.querySelectorAll(
    '.nut-tabbar-item-text'
  )
  const tabbarItemBadgeValue: NodeListOf<HTMLElement> =
    container.querySelectorAll('.nut-badge-sup')
  const tabbarItemActiveIcon: NodeListOf<HTMLElement> =
    container.querySelectorAll('.nut-icon-HeartFill')
  const tabbarItemIcon: NodeListOf<HTMLElement> =
    container.querySelectorAll('.nut-icon-Heart')
  expect(tabbarItem[0].style.color).toEqual('blue')
  expect(tabbarItemText[0].innerText).toEqual('首页')
  expect(tabbarItemActiveIcon.length).toEqual(1)
  expect(tabbarItemIcon.length).toEqual(0)
  expect(tabbarItemBadgeValue[0].innerText).toEqual('招手')
  fireEvent.click(tabbarItem[1])
  waitFor(() => {
    expect(tabbarItem[0].style.color).toEqual('grey')
    expect(tabbarItemText[0].innerText).toEqual('首页2')
    expect(tabbarItemActiveIcon.length).toEqual(0)
    expect(tabbarItemIcon.length).toEqual(1)
    expect(tabbarItemBadgeValue[0].innerText).toEqual('22')
    expect(tabbarItem[1].style.color).toEqual('blue')
  })
})

test('double click', async () => {
  const onActiveClick = vi.fn()
  const { container } = render(
    <>
      <Tabbar>
        <Tabbar.Item title="首页" icon={<Home />} value={11} />
        <Tabbar.Item
          title="分类"
          icon={<Category />}
          onActiveClick={onActiveClick}
        />
        <Tabbar.Item title="逛" icon={<Hi />} />
      </Tabbar>
    </>
  )

  const tabbarItem: NodeListOf<HTMLElement> =
    container.querySelectorAll('.nut-tabbar-item')
  fireEvent.click(tabbarItem[1])
  fireEvent.click(tabbarItem[1])
  expect(onActiveClick).toBeCalled()
})

test('should show sure emitted when click', async () => {
  const onSwitch = vi.fn()
  const { container } = render(
    <>
      <Tabbar inactiveColor="grey" activeColor="blue" onSwitch={onSwitch}>
        <Tabbar.Item title="首页" icon={<Home />} value={11} />
        <Tabbar.Item title="分类" icon={<Category />} />
        <Tabbar.Item title="逛" icon={<Hi />} />
      </Tabbar>
    </>
  )

  const tabbarItem: NodeListOf<HTMLElement> =
    container.querySelectorAll('.nut-tabbar-item')
  fireEvent.click(tabbarItem[1])
  expect(onSwitch).toBeCalled()
})

test('should only render title', async () => {
  const onSwitch = vi.fn()
  const { container } = render(
    <>
      <Tabbar inactiveColor="grey" activeColor="blue" onSwitch={onSwitch}>
        <Tabbar.Item title="首页" value={11} />
        <Tabbar.Item title="分类" />
        <Tabbar.Item title="逛" />
      </Tabbar>
    </>
  )
  expect(container.innerHTML).toMatchSnapshot()
})

test('render item size 2 and direction is horizontal', async () => {
  const { container } = render(
    <>
      <Tabbar direction="horizontal">
        <Tabbar.Item title="首页" icon={<Home />} value="招手" />
        <Tabbar.Item title="我的" icon={<Hi />} dot />
      </Tabbar>
    </>
  )
  expect(container.innerHTML).toMatchSnapshot()
})
