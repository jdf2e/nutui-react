import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Cart, Category, Find, Home, My } from '@nutui/icons-react'
import { Tabbar } from '../tabbar'
import { TabbarItem } from '../../tabbaritem/tabbaritem'

test('should render tabbar when default', () => {
  const { container } = render(
    <>
      <Tabbar>
        <TabbarItem title="首页" icon={<Home width={20} height={20} />} />
        <TabbarItem title="分类" icon={<Category width={20} height={20} />} />
        <TabbarItem title="发现" icon={<Find width={20} height={20} />} />
        <TabbarItem title="购物车" icon={<Cart width={20} height={20} />} />
        <TabbarItem title="我的" icon={<My width={20} height={20} />} />
      </Tabbar>
    </>
  )

  expect(container.firstChild).toBeInTheDocument()
  expect(container.querySelectorAll('.nut-tabbar-item').length).toEqual(5)
  expect(
    container.querySelectorAll('.nut-tabbar-item__icon-box').length
  ).toEqual(10)
})

test('should render custom color and badge when using prop', () => {
  const { container } = render(
    <>
      <Tabbar unactiveColor="grey" activeColor="blue">
        <TabbarItem
          title="首页"
          icon={<Home width={20} height={20} />}
          num="11"
        />
        <TabbarItem title="分类" icon={<Category width={20} height={20} />} />
        <TabbarItem title="发现" icon={<Find width={20} height={20} />} />
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
        <TabbarItem title="首页" icon={<Home width={20} height={20} />} />
        <TabbarItem title="分类" icon={<Category width={20} height={20} />} />
      </Tabbar>
    </>
  )
  expect(container.innerHTML).toMatchSnapshot()
})

test('should match active tabbar by click', async () => {
  const { container } = render(
    <>
      <Tabbar unactiveColor="grey" activeColor="blue">
        <TabbarItem
          title="首页"
          icon={<Home width={20} height={20} />}
          num="11"
        />
        <TabbarItem title="分类" icon={<Category width={20} height={20} />} />
        <TabbarItem title="发现" icon={<Find width={20} height={20} />} />
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
        <TabbarItem
          title="首页"
          icon={<Home width={20} height={20} />}
          num="11"
        />
        <TabbarItem title="分类" icon={<Category width={20} height={20} />} />
        <TabbarItem title="发现" icon={<Find width={20} height={20} />} />
      </Tabbar>
    </>
  )

  const tabbarItem: NodeListOf<HTMLElement> =
    container.querySelectorAll('.nut-tabbar-item')
  fireEvent.click(tabbarItem[1])
  expect(onSwitch).toBeCalled()
})
