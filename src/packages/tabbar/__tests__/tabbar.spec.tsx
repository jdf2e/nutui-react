import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Tabbar } from '../tabbar'
import { TabbarItem } from '../../tabbaritem/tabbaritem'

test('should render tabbar when default', () => {
  const { container } = render(
    <>
      <Tabbar>
        <TabbarItem tabTitle="首页" icon="home" />
        <TabbarItem tabTitle="分类" icon="category" />
        <TabbarItem tabTitle="发现" icon="find" />
        <TabbarItem tabTitle="购物车" icon="cart" />
        <TabbarItem tabTitle="我的" icon="my" />
      </Tabbar>
    </>
  )

  expect(container.firstChild).toBeInTheDocument()
  expect(container.querySelectorAll('.nut-tabbar-item').length).toEqual(5)
  expect(
    container.querySelectorAll('.nut-tabbar-item__icon-box').length
  ).toEqual(10)
})

test('should render custom check and icon size when using visible', () => {
  const { container } = render(
    <>
      <Tabbar visible="1" active-color="blue" size="18px">
        <TabbarItem tabTitle="首页" icon="home" />
        <TabbarItem tabTitle="分类" icon="category" />
      </Tabbar>
    </>
  )
  expect(
    (container.querySelectorAll('.nut-icon')[1] as HTMLElement).style.fontSize
  ).toEqual('18px')
})

test('should render custom color and badge when using prop', () => {
  const { container } = render(
    <>
      <Tabbar unactiveColor="grey" activeColor="blue">
        <TabbarItem tabTitle="首页" icon="home" num="11" />
        <TabbarItem tabTitle="分类" icon="category" />
        <TabbarItem tabTitle="发现" icon="find" />
      </Tabbar>
    </>
  )

  const tabbarItem: NodeListOf<HTMLElement> =
    container.querySelectorAll('.nut-tabbar-item')

  expect(tabbarItem[0].style.color).toEqual('blue')
  expect(tabbarItem[1].style.color).toEqual('grey')
  expect(
    tabbarItem[0].querySelectorAll('.nut-tabbar-item__icon-box__tips').length
  ).toBeGreaterThan(0)
})

test('should render fixed element when using bottom prop', async () => {
  const { container } = render(
    <>
      <Tabbar bottom safeAreaInsetBottom>
        <TabbarItem tabTitle="首页" icon="home" />
        <TabbarItem tabTitle="分类" icon="category" />
      </Tabbar>
    </>
  )
  expect(container.innerHTML).toMatchSnapshot()
})

test('should match active tabbar by click', async () => {
  const { container } = render(
    <>
      <Tabbar unactiveColor="grey" activeColor="blue">
        <TabbarItem tabTitle="首页" icon="home" num="11" />
        <TabbarItem tabTitle="分类" icon="category" />
        <TabbarItem tabTitle="发现" icon="find" />
      </Tabbar>
    </>
  )

  const tabbarItem: NodeListOf<HTMLElement> =
    container.querySelectorAll('.nut-tabbar-item')
  expect(tabbarItem[0].style.color).toEqual('blue')
  fireEvent.click(tabbarItem[1])
  expect(tabbarItem[1].style.color).toEqual('blue')
  fireEvent.click(tabbarItem[2])
  expect(tabbarItem[2].style.color).toEqual('blue')
})

test('should show sure emitted when click', async () => {
  const onSwitch = jest.fn()
  const { container } = render(
    <>
      <Tabbar unactiveColor="grey" activeColor="blue" onSwitch={onSwitch}>
        <TabbarItem tabTitle="首页" icon="home" num="11" />
        <TabbarItem tabTitle="分类" icon="category" />
        <TabbarItem tabTitle="发现" icon="find" />
      </Tabbar>
    </>
  )

  const tabbarItem: NodeListOf<HTMLElement> =
    container.querySelectorAll('.nut-tabbar-item')
  fireEvent.click(tabbarItem[1])
  expect(onSwitch).toBeCalled()
})
