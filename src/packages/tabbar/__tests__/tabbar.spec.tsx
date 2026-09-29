import * as React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { parse } from 'postcss'
import * as sass from 'sass'

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

const renderTabbarItems = (count: number, props = {}) => {
  const onSwitch = vi.fn()
  const result = render(
    <Tabbar onSwitch={onSwitch} {...props}>
      {Array.from({ length: count }, (_, index) => (
        <Tabbar.Item key={index} title={`Item ${index + 1}`} icon={<Home />} />
      ))}
    </Tabbar>
  )

  return { ...result, onSwitch }
}

const compileTabbarStyles = (variables: string) =>
  sass.compileString(
    `@import '${variables}'; @import 'src/packages/tabbar/tabbar.scss';`,
    {
      loadPaths: [process.cwd()],
      silenceDeprecations: ['import', 'global-builtin'],
    }
  ).css

const getDeclarations = (css: string, selector: string) => {
  const declarations: Record<string, string> = {}
  parse(css).walkRules(selector, (rule) => {
    if (rule.selector === selector) {
      rule.walkDecls((declaration) => {
        declarations[declaration.prop] = declaration.value
      })
    }
  })
  return declarations
}

const getRootCustomProperties = (file: string) => {
  const declarations: Record<string, string> = {}
  const css = sass.compile(file, {
    silenceDeprecations: ['import', 'global-builtin'],
  }).css

  parse(css).walkRules((rule) => {
    if (
      rule.selector.split(',').some((selector) => selector.trim() === ':root')
    ) {
      rule.walkDecls(/^--nutui-tabbar-/, (declaration) => {
        declarations[declaration.prop] = declaration.value
      })
    }
  })

  return declarations
}

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

test('should keep controlled value while reporting a requested switch', () => {
  const { container, onSwitch } = renderTabbarItems(4, { value: 1 })
  const items = container.querySelectorAll('.nut-tabbar-item')

  expect(items[1]).toHaveClass('nut-tabbar-item-active')
  fireEvent.click(items[3])
  expect(onSwitch).toHaveBeenCalledWith(3)
  expect(items[1]).toHaveClass('nut-tabbar-item-active')
  expect(items[3]).not.toHaveClass('nut-tabbar-item-active')
})

test.each([
  { fixed: false, safeArea: false, expectedSafeArea: 0 },
  { fixed: true, safeArea: false, expectedSafeArea: 1 },
  { fixed: false, safeArea: true, expectedSafeArea: 1 },
  { fixed: true, safeArea: true, expectedSafeArea: 1 },
])(
  'should render one safe area for fixed=$fixed and safeArea=$safeArea',
  ({ fixed, safeArea, expectedSafeArea }) => {
    const { container } = renderTabbarItems(2, { fixed, safeArea })

    expect(container.querySelectorAll('.nut-safe-area')).toHaveLength(
      expectedSafeArea
    )
    expect(container.firstChild).toHaveClass('nut-tabbar', {
      exact: false,
    })
    expect(container.firstChild).toHaveClass(
      fixed ? 'nut-tabbar-fixed' : 'nut-tabbar'
    )
  }
)

test.each([
  'src/styles/variables.scss',
  'src/styles/variables-daojia.scss',
  'src/styles/variables-jmapp.scss',
  'src/styles/variables-jrkf.scss',
])('should compile the V16 base geometry with %s', (variables) => {
  const css = compileTabbarStyles(variables)
  const tabbar = getDeclarations(css, '.nut-tabbar')
  const wrap = getDeclarations(css, '.nut-tabbar-wrap')
  const item = getDeclarations(css, '.nut-tabbar-item')
  const active = getDeclarations(
    css,
    '.nut-tabbar-wrap:not(.nut-tabbar-wrap-horizontal) .nut-tabbar-item-active'
  )

  expect(tabbar.background).toBe('transparent')
  expect(wrap.height).toContain('52px')
  expect(wrap['box-sizing']).toBe('border-box')
  expect(wrap['margin-left']).toContain('--nutui-tabbar-horizontal-padding')
  expect(wrap['margin-right']).toContain('--nutui-tabbar-horizontal-padding')
  expect(wrap.padding).toContain('--nutui-tabbar-content-padding')
  expect(wrap['border-radius']).toContain('--nutui-tabbar-border-radius')
  expect(wrap['border-radius']).toContain('16px')
  expect(wrap['box-shadow']).toContain('--nutui-tabbar-box-shadow')
  expect(wrap['box-shadow']).toContain('6px')
  expect(item.height).toContain('--nutui-tabbar-content-height')
  expect(item['min-width']).toBe('0')
  expect(active.background).toContain('--nutui-tabbar-active-background')
  expect(active['border-radius']).toContain(
    '--nutui-tabbar-active-border-radius'
  )
})

test('should expose readable Tabbar colors in light and dark themes', () => {
  const light = getRootCustomProperties('src/styles/theme-default.scss')
  const dark = getRootCustomProperties('src/styles/theme-dark.scss')

  expect(light).toMatchObject({
    '--nutui-tabbar-background': 'var(--nutui-color-background-overlay)',
    '--nutui-tabbar-active-background': '#f0f2f7',
    '--nutui-tabbar-active-color': 'var(--nutui-color-primary)',
    '--nutui-tabbar-inactive-color': 'var(--nutui-color-title)',
  })
  expect(dark).toMatchObject({
    '--nutui-tabbar-background': 'var(--nutui-color-background-overlay)',
    '--nutui-tabbar-active-background': 'var(--nutui-color-background-sunken)',
    '--nutui-tabbar-active-color': 'var(--nutui-color-primary)',
    '--nutui-tabbar-inactive-color': 'var(--nutui-color-title)',
  })
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
  expect(tabbarItem[0].style.color).toEqual('blue')
  expect(tabbarItemText[0].innerText).toEqual('首页')
  expect(container.querySelectorAll('.nut-icon-HeartFill')).toHaveLength(1)
  expect(container.querySelectorAll('.nut-icon-Heart')).toHaveLength(0)
  expect(tabbarItemBadgeValue[0].innerText).toEqual('招手')
  fireEvent.click(tabbarItem[1])
  await waitFor(() => {
    expect(tabbarItem[0].style.color).toEqual('grey')
    expect(tabbarItemText[0].innerText).toEqual('首页2')
    expect(container.querySelectorAll('.nut-icon-HeartFill')).toHaveLength(0)
    expect(container.querySelectorAll('.nut-icon-Heart')).toHaveLength(1)
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

test('should only render icon', () => {
  const { container } = render(
    <Tabbar>
      <Tabbar.Item icon={<Home />} />
      <Tabbar.Item icon={<Category />} />
    </Tabbar>
  )

  expect(container.querySelectorAll('.nut-tabbar-item')).toHaveLength(2)
  expect(container.querySelectorAll('.nut-tabbar-item .nut-icon')).toHaveLength(
    2
  )
  expect(container.querySelectorAll('.nut-tabbar-item-text')).toHaveLength(0)
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
