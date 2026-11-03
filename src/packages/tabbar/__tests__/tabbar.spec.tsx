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

test('defaults to the standard surface and opts into frosted material', () => {
  const items = (
    <>
      <Tabbar.Item title="首页" icon={<Home />} />
      <Tabbar.Item title="我的" icon={<User />} />
    </>
  )
  const { container, rerender } = render(<Tabbar>{items}</Tabbar>)

  expect(container.querySelector('.nut-tabbar-backdrop')).toBeNull()
  expect(container.querySelector('.nut-tabbar-wrap')).toHaveClass(
    'nut-tabbar-wrap-2'
  )
  expect(container.querySelector('.nut-tabbar-wrap')?.parentElement).toBe(
    container.firstChild
  )

  rerender(<Tabbar material="frosted">{items}</Tabbar>)
  expect(container.querySelector('.nut-tabbar-backdrop')).toHaveAttribute(
    'aria-hidden',
    'true'
  )
  expect(container.querySelector('.nut-tabbar-skin-background')).toBeNull()

  rerender(
    <Tabbar material="frosted" skinBackground={<span>skin artwork</span>}>
      {items}
    </Tabbar>
  )
  expect(container.querySelector('.nut-tabbar-backdrop')).toBeNull()
  expect(
    container.querySelector('.nut-tabbar-skin-background')
  ).toHaveTextContent('skin artwork')
  expect(container.querySelectorAll('.nut-tabbar-item')).toHaveLength(2)
})

test('slides and scales the frosted active background when switching', async () => {
  const { container } = render(
    <Tabbar material="frosted">
      <Tabbar.Item title="首页" icon={<Home />} />
      <Tabbar.Item title="我的" icon={<User />} />
    </Tabbar>
  )
  const activeBackground = container.querySelector<HTMLElement>(
    '.nut-tabbar-active-background'
  )

  expect(activeBackground).toBeInTheDocument()
  expect(
    activeBackground?.style.getPropertyValue('--nutui-tabbar-select-index')
  ).toBe('0')
  expect(
    activeBackground?.style.getPropertyValue('--nutui-tabbar-item-count')
  ).toBe('2')
  expect(
    activeBackground?.querySelector('.nut-tabbar-active-background-inner')
  ).not.toHaveClass('nut-tabbar-active-background-inner-animating')

  fireEvent.click(container.querySelectorAll('.nut-tabbar-item')[1])

  await waitFor(() => {
    expect(
      activeBackground?.style.getPropertyValue('--nutui-tabbar-select-index')
    ).toBe('1')
    expect(
      activeBackground?.querySelector('.nut-tabbar-active-background-inner')
    ).toHaveClass('nut-tabbar-active-background-inner-animating')
  })
})

test('should render tabbar when default', () => {
  const { container } = render(
    <Tabbar>
      <Tabbar.Item title="首页" icon={<Home />} />
      <Tabbar.Item title="分类" icon={<Category />} />
      <Tabbar.Item title="逛" icon={<Hi />} />
      <Tabbar.Item title="购物车" icon={<Cart />} />
      <Tabbar.Item title="我的" icon={<User />} />
    </Tabbar>
  )

  expect(container.firstChild).toBeInTheDocument()
  expect(container.querySelectorAll('.nut-tabbar-item')).toHaveLength(5)
  expect(container.querySelectorAll('.nut-tabbar-item .nut-icon')).toHaveLength(
    5
  )
})

test('should render custom color and badge when using prop', () => {
  const { container } = render(
    <Tabbar inactiveColor="grey" activeColor="blue">
      <Tabbar.Item title="首页" icon={<Home />} value={11} />
      <Tabbar.Item title="分类" icon={<Category />} />
      <Tabbar.Item title="逛" icon={<Hi />} />
    </Tabbar>
  )
  const items = container.querySelectorAll<HTMLElement>('.nut-tabbar-item')

  expect(items[0].style.color).toBe('blue')
  expect(items[1].style.color).toBe('grey')
  expect(
    items[1].querySelector<HTMLElement>('.nut-tabbar-item-text')?.style.color
  ).toBe('grey')
  expect(items[0].querySelector('.nut-badge-sup')).toHaveTextContent('11')
  expect(items[0].querySelector('.nut-badge > .nut-icon')).toBeInTheDocument()
  expect(items[0].querySelector('.nut-tabbar-item-visual')).toBeNull()
})

test('should render fixed element when using bottom prop', () => {
  const { container } = render(
    <Tabbar fixed safeArea>
      <Tabbar.Item title="首页" icon={<Home />} />
      <Tabbar.Item title="分类" icon={<Category />} />
    </Tabbar>
  )

  expect(container.firstChild).toHaveClass('nut-tabbar-fixed')
  expect(container.querySelectorAll('.nut-tabbar-item')).toHaveLength(2)
  expect(container.querySelectorAll('.nut-safe-area')).toHaveLength(1)
  expect(container.innerHTML).toMatchSnapshot()
})

test('should match active tabbar by click', async () => {
  const { container } = render(
    <Tabbar material="frosted" inactiveColor="grey" activeColor="blue">
      <Tabbar.Item
        title={(active) => (active ? '首页' : '首页2')}
        icon={(active) => (active ? <HeartFill /> : <Heart />)}
        value={(active) => (active ? '招手' : '22')}
      />
      <Tabbar.Item
        title="我的"
        icon={(active) => (active ? <Hi /> : null)}
        value={8}
      />
      <Tabbar.Item title="我的" icon={<Hi />} dot />
      <Tabbar.Item title="我的" icon={<Hi />} dot />
    </Tabbar>
  )
  const items = container.querySelectorAll<HTMLElement>('.nut-tabbar-item')

  expect(items[0].style.color).toBe('blue')
  expect(items[0].querySelector('.nut-tabbar-item-text')).toHaveTextContent(
    '首页'
  )
  expect(container.querySelectorAll('.nut-icon-HeartFill')).toHaveLength(1)
  expect(items[0].querySelector('.nut-badge-sup')).toHaveTextContent('招手')
  expect(items[1]).toHaveClass('nut-tabbar-item-large')
  expect(items[1].querySelector('.nut-tabbar-item-visual')).toBeNull()
  expect(items[1].querySelector('.nut-tabbar-item-text')).toHaveTextContent(
    '我的'
  )
  expect(items[1].querySelector('.nut-badge-sup')).toHaveTextContent('8')

  fireEvent.click(items[1])
  await waitFor(() => {
    expect(items[0].style.color).toBe('grey')
    expect(items[0].querySelector('.nut-tabbar-item-text')).toHaveTextContent(
      '首页2'
    )
    expect(container.querySelectorAll('.nut-icon-Heart')).toHaveLength(1)
    expect(items[0].querySelector('.nut-badge-sup')).toHaveTextContent('22')
    expect(items[1].style.color).toBe('blue')
    expect(items[1]).not.toHaveClass('nut-tabbar-item-large')
    expect(
      items[1].querySelector('.nut-tabbar-item-visual-icon')
    ).not.toBeNull()
  })
})

test('clicking the current item again calls onActiveClick without arguments', () => {
  const onActiveClick = vi.fn()
  const { container } = render(
    <Tabbar>
      <Tabbar.Item title="首页" icon={<Home />} value={11} />
      <Tabbar.Item
        title="分类"
        icon={<Category />}
        onActiveClick={onActiveClick}
      />
      <Tabbar.Item title="逛" icon={<Hi />} />
    </Tabbar>
  )
  const items = container.querySelectorAll('.nut-tabbar-item')

  fireEvent.click(items[1])
  expect(onActiveClick).not.toHaveBeenCalled()
  fireEvent.click(items[1])
  expect(onActiveClick).toHaveBeenCalledTimes(1)
  expect(onActiveClick).toHaveBeenCalledWith()
})

test('should only render title', () => {
  const { container } = render(
    <Tabbar inactiveColor="grey" activeColor="blue">
      <Tabbar.Item title="首页" value={11} />
      <Tabbar.Item title="分类" />
      <Tabbar.Item title="逛" />
    </Tabbar>
  )
  const items = container.querySelectorAll('.nut-tabbar-item')

  expect(items).toHaveLength(3)
  expect(items[0]).toHaveClass('nut-tabbar-item-large')
  expect(items[0].querySelector('.nut-tabbar-item-text')).toHaveTextContent(
    '首页'
  )
  expect(items[0].querySelector('.nut-badge-sup')).toHaveTextContent('11')
  expect(container.querySelector('.nut-tabbar-item-visual')).toBeNull()
  expect(container.innerHTML).toMatchSnapshot()
})

test('render item size 2 and direction is horizontal', () => {
  const { container } = render(
    <Tabbar direction="horizontal">
      <Tabbar.Item title="首页" icon={<Home />} value="招手" />
      <Tabbar.Item title="我的" icon={<Hi />} dot />
    </Tabbar>
  )

  expect(
    container.querySelector('.nut-tabbar-wrap-horizontal')
  ).toBeInTheDocument()
  expect(container.querySelectorAll('.nut-tabbar-item')).toHaveLength(2)
  expect(container.querySelector('.nut-tabbar-item-visual')).toBeNull()
  expect(
    container.querySelector('.nut-tabbar-item .nut-badge-sup')
  ).toHaveTextContent('招手')
  expect(container.innerHTML).toMatchSnapshot()
})

test('addonBefore does not occupy a navigation index', () => {
  const onAddonBeforeClick = vi.fn()
  const onSwitch = vi.fn()
  const { container } = render(
    <Tabbar
      onSwitch={onSwitch}
      addonBefore={
        <button type="button" onClick={onAddonBeforeClick}>
          Addon before entry
        </button>
      }
    >
      <Tabbar.Item title="首页" />
      <Tabbar.Item title="我的" />
    </Tabbar>
  )
  const items = container.querySelectorAll('.nut-tabbar-item')

  expect(container.querySelectorAll('.nut-tabbar-addon-before')).toHaveLength(1)
  expect(items).toHaveLength(2)
  fireEvent.click(container.querySelector('.nut-tabbar-addon-before button')!)
  expect(onAddonBeforeClick).toHaveBeenCalledTimes(1)
  expect(onSwitch).not.toHaveBeenCalled()
  fireEvent.click(items[1])
  expect(onSwitch).toHaveBeenCalledWith(1)
})

test('indexes rendered children across conditional and Fragment children', () => {
  const WrappedItem = React.memo(function WrappedItem(
    props: React.ComponentProps<typeof Tabbar.Item>
  ) {
    return <Tabbar.Item {...props} />
  })
  WrappedItem.displayName = Tabbar.Item.displayName
  const onSwitch = vi.fn()
  const { container } = render(
    <Tabbar onSwitch={onSwitch}>
      <Tabbar.Item title="首页" />
      {null}
      {false}
      <>
        <Tabbar.Item title="分类" />
        {undefined}
        <WrappedItem title="我的" />
      </>
      <span>not a tab</span>
    </Tabbar>
  )
  const items = container.querySelectorAll('.nut-tabbar-item')

  expect(items).toHaveLength(3)
  expect(container.querySelector('.nut-tabbar-wrap > span')).toBeNull()
  fireEvent.click(items[2])
  expect(onSwitch).toHaveBeenCalledWith(2)
})

test('keeps dot, number and text badges on their content', () => {
  const { container } = render(
    <Tabbar material="frosted">
      <Tabbar.Item title="红点" icon={<Home />} dot />
      <Tabbar.Item title="数字" icon={<Category />} value={8} />
      <Tabbar.Item icon={<img src="/image.png" alt="" />} value="最多四字" />
      <Tabbar.Item title="纯文本" value={5} />
    </Tabbar>
  )
  const items = container.querySelectorAll('.nut-tabbar-item')

  expect(
    items[0].querySelector(
      '.nut-tabbar-item-visual-icon.nut-tabbar-item-visual-dot .nut-badge-dot'
    )
  ).toBeInTheDocument()
  expect(
    items[1].querySelector(
      '.nut-tabbar-item-visual-icon.nut-tabbar-item-visual-text .nut-badge-sup'
    )
  ).toHaveTextContent('8')
  expect(
    items[2].querySelector(
      '.nut-tabbar-item-visual-icon.nut-tabbar-item-visual-text .nut-badge-sup'
    )
  ).toHaveTextContent('最多四字')
  expect(items[2].querySelector('.nut-tabbar-item-text')).toBeNull()
  expect(items[3].querySelector('.nut-tabbar-item-visual')).toBeNull()
  expect(items[3].querySelector('.nut-badge-sup')).toHaveTextContent('5')
})
