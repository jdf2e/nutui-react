import * as React from 'react'
import { act, render, fireEvent, waitFor } from '@testing-library/react'
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
import { normalizeTabbarItems } from '../utils'
import FixedBottomDemo from '../demos/h5/demo9'

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
    if (rule.selector === selector && rule.parent?.type === 'root') {
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

test('uses a rounded bottom-bar material behind interactive navigation', () => {
  const onSwitch = vi.fn()
  const { container } = render(
    <Tabbar onSwitch={onSwitch} agent={<button type="button">Agent</button>}>
      <Tabbar.Item title="首页" icon={<Home />} />
      <Tabbar.Item title="我的" icon={<User />} />
    </Tabbar>
  )
  const wrap = container.querySelector('.nut-tabbar-wrap')!
  const backdrop = wrap.querySelector('.nut-tabbar-backdrop') as HTMLElement

  expect(backdrop).toHaveClass('nut-materialview')
  expect(backdrop).toHaveAttribute('aria-hidden', 'true')
  expect(wrap.firstElementChild).toBe(backdrop)
  expect(backdrop.style.borderRadius).toBe('16px')
  expect(backdrop.style.backdropFilter).toBe('blur(3PX)')
  expect(backdrop.style.backgroundColor).toBe('rgba(255, 255, 255, 0.8)')
  expect(wrap.querySelectorAll('.nut-tabbar-item')).toHaveLength(2)
  expect(container.querySelector('.nut-tabbar-agent')).toContainElement(
    container.querySelector('.nut-tabbar-agent button')
  )

  fireEvent.click(wrap.querySelectorAll('.nut-tabbar-item')[1])
  expect(onSwitch).toHaveBeenCalledWith(1)
})

test('uses a supplied skin instead of the material while keeping items interactive', () => {
  const onSwitch = vi.fn()
  const { container } = render(
    <Tabbar
      skinBackground={<img src="/skin-board.png" alt="" />}
      onSwitch={onSwitch}
    >
      <Tabbar.Item title="首页" icon={<Home />} />
      <Tabbar.Item title="我的" icon={<User />} />
    </Tabbar>
  )
  const wrap = container.querySelector('.nut-tabbar-wrap')!
  const skin = wrap.querySelector('.nut-tabbar-skin-background')!
  const items = wrap.querySelectorAll('.nut-tabbar-item')

  expect(wrap.querySelector('.nut-materialview')).toBeNull()
  expect(skin).toHaveAttribute('aria-hidden', 'true')
  expect(skin).toContainElement(wrap.querySelector('img'))
  expect(items).toHaveLength(2)
  fireEvent.click(items[1])
  expect(onSwitch).toHaveBeenCalledWith(1)

  const css = compileTabbarStyles('src/styles/variables.scss')
  const backdrop = getDeclarations(
    css,
    '.nut-tabbar-wrap > .nut-tabbar-skin-background'
  )
  expect(backdrop.position).toBe('absolute')
  expect(backdrop.overflow).toBe('hidden')
  expect(backdrop['border-radius']).toContain('--nutui-tabbar-border-radius')
})

test('uses the dark bottom-bar material when the site theme changes', async () => {
  document.documentElement.classList.remove('nut-theme-dark')
  const { container, unmount } = render(<Tabbar />)
  const backdrop = container.querySelector(
    '.nut-tabbar-backdrop'
  ) as HTMLElement

  expect(backdrop.style.backgroundColor).toBe('rgba(255, 255, 255, 0.8)')

  await act(async () => {
    document.documentElement.classList.add('nut-theme-dark')
  })
  expect(backdrop.style.backgroundColor).toBe('rgba(20, 23, 26, 0.8)')

  await act(async () => {
    document.documentElement.classList.remove('nut-theme-dark')
  })
  expect(backdrop.style.backgroundColor).toBe('rgba(255, 255, 255, 0.8)')
  unmount()
})

test('uses the dark material inside a themed application container', async () => {
  const { container } = render(
    <div className="app-theme">
      <Tabbar />
    </div>
  )
  const theme = container.querySelector('.app-theme') as HTMLElement
  const backdrop = container.querySelector(
    '.nut-tabbar-backdrop'
  ) as HTMLElement

  await act(async () => {
    theme.classList.add('nut-theme-dark')
  })
  expect(backdrop.style.backgroundColor).toBe('rgba(20, 23, 26, 0.8)')
})

test('keeps the light material when the page theme is light and the system is dark', () => {
  document.documentElement.classList.remove('nut-theme-dark')
  vi.stubGlobal('matchMedia', () => ({
    matches: true,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))
  try {
    const { container } = render(<Tabbar />)
    const backdrop = container.querySelector(
      '.nut-tabbar-backdrop'
    ) as HTMLElement
    expect(backdrop.style.backgroundColor).toBe('rgba(255, 255, 255, 0.8)')
  } finally {
    vi.unstubAllGlobals()
  }
})

test('keeps item z-index inside its own Tabbar when a fixed Tabbar overlaps it', () => {
  const css = compileTabbarStyles('src/styles/variables.scss')
  const tabbar = getDeclarations(css, '.nut-tabbar')
  const fixed = getDeclarations(css, '.nut-tabbar-fixed')
  const item = getDeclarations(css, '.nut-tabbar-wrap > .nut-tabbar-item')

  expect(tabbar.position).toBe('relative')
  expect(tabbar['z-index']).toBe('0')
  expect(fixed.position).toBe('fixed')
  expect(item['z-index']).toBe('1')
})

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

test('renders one caller-owned Agent entry without changing ordinary tab selection', () => {
  const onAgentClick = vi.fn()
  const onSwitch = vi.fn()
  const onActiveClick = vi.fn()
  const { container } = render(
    <Tabbar
      value={0}
      onSwitch={onSwitch}
      agent={
        <button type="button" onClick={onAgentClick}>
          Agent entry
        </button>
      }
    >
      <Tabbar.Item title="首页" icon={<Home />} onActiveClick={onActiveClick} />
      <Tabbar.Item title="我的" icon={<User />} />
    </Tabbar>
  )

  expect(container.querySelectorAll('.nut-tabbar-agent')).toHaveLength(1)
  expect(container.querySelectorAll('.nut-tabbar-item')).toHaveLength(2)
  fireEvent.click(container.querySelector('.nut-tabbar-agent button')!)
  expect(onAgentClick).toHaveBeenCalledTimes(1)
  expect(onSwitch).not.toHaveBeenCalled()
  expect(onActiveClick).not.toHaveBeenCalled()

  fireEvent.click(container.querySelectorAll('.nut-tabbar-item')[1])
  expect(onSwitch).toHaveBeenCalledWith(1)
  expect(container.querySelectorAll('.nut-tabbar-item')[0]).toHaveClass(
    'nut-tabbar-item-active'
  )
})

test('omits the Agent layout when the supplied slot is empty', () => {
  const { container, rerender } = render(
    <Tabbar agent={false}>
      <Tabbar.Item title="首页" />
      <Tabbar.Item title="我的" />
    </Tabbar>
  )

  expect(container.querySelector('.nut-tabbar-agent')).toBeNull()
  expect(container.querySelector('.nut-tabbar-has-agent')).toBeNull()

  rerender(
    <Tabbar agent={<span>Custom Agent</span>}>
      <Tabbar.Item title="首页" />
      <Tabbar.Item title="我的" />
    </Tabbar>
  )
  expect(container.querySelector('.nut-tabbar-agent')).toHaveTextContent(
    'Custom Agent'
  )
  expect(container.querySelector('.nut-tabbar-has-agent')).toBeInTheDocument()
})

test('indexes only rendered Tabbar Items across conditional and Fragment children', () => {
  const onSwitch = vi.fn()
  const { container } = render(
    <Tabbar onSwitch={onSwitch}>
      <Tabbar.Item title="首页" />
      {null}
      {false}
      <>
        <Tabbar.Item title="分类" />
        {undefined}
        <Tabbar.Item title="我的" />
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

test('keeps keyed Fragment groups distinct when a preceding group is removed', () => {
  const groups = (includeFirst: boolean) => (
    <>
      {includeFirst &&
        React.createElement(
          React.Fragment,
          { key: 'first' },
          <Tabbar.Item key="shared" title="First" />
        )}
      {React.createElement(
        React.Fragment,
        { key: 'second' },
        <Tabbar.Item key="shared" title="Second" />
      )}
    </>
  )

  const before = normalizeTabbarItems(groups(true), Tabbar.Item)
  const after = normalizeTabbarItems(groups(false), Tabbar.Item)
  expect(before[0].key).not.toBe(before[1].key)
  expect(before[1].key).toBe(after[0].key)
})

test.each([2, 3, 4, 5])(
  'keeps %i ordinary items outside the Agent slot',
  (count) => {
    const { container, onSwitch } = renderTabbarItems(count, {
      agent: <span>Agent</span>,
    })
    const items = container.querySelectorAll('.nut-tabbar-item')
    expect(items).toHaveLength(count)
    expect(container.querySelector('.nut-tabbar-agent')).toHaveTextContent(
      'Agent'
    )
    fireEvent.click(items[count - 1])
    expect(onSwitch).toHaveBeenCalledWith(count - 1)
  }
)

test.each([
  { fixed: false, safeArea: false, expectedSafeArea: 0 },
  { fixed: true, safeArea: false, expectedSafeArea: 1 },
  { fixed: false, safeArea: true, expectedSafeArea: 1 },
  { fixed: true, safeArea: true, expectedSafeArea: 1 },
])(
  'keeps one Agent and $expectedSafeArea safe area for fixed=$fixed, safeArea=$safeArea',
  ({ fixed, safeArea, expectedSafeArea }) => {
    const { container } = renderTabbarItems(3, {
      agent: <span>Agent</span>,
      fixed,
      safeArea,
    })
    expect(container.querySelectorAll('.nut-tabbar-agent')).toHaveLength(1)
    expect(container.querySelectorAll('.nut-safe-area')).toHaveLength(
      expectedSafeArea
    )
  }
)

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
  expect(wrap['box-shadow']).toBeUndefined()
  expect(wrap.background).toBeUndefined()
  expect(item.height).toContain('--nutui-tabbar-content-height')
  expect(item['min-width']).toBe('0')
  expect(active.background).toContain('--nutui-tabbar-active-background')
  expect(active['border-radius']).toContain(
    '--nutui-tabbar-active-border-radius'
  )
})

test.each([
  'src/styles/variables.scss',
  'src/styles/variables-daojia.scss',
  'src/styles/variables-jmapp.scss',
  'src/styles/variables-jrkf.scss',
])(
  'positions only the MaterialView layer under navigation with %s',
  (variables) => {
    const css = compileTabbarStyles(variables)
    const wrap = getDeclarations(css, '.nut-tabbar-wrap')
    const backdrop = getDeclarations(
      css,
      '.nut-tabbar-wrap > .nut-tabbar-backdrop'
    )
    const item = getDeclarations(css, '.nut-tabbar-wrap > .nut-tabbar-item')
    expect(wrap.overflow).toBeUndefined()
    expect(wrap.background).toBeUndefined()
    expect(wrap['box-shadow']).toBeUndefined()
    expect(wrap['backdrop-filter']).toBeUndefined()
    expect(wrap['-webkit-backdrop-filter']).toBeUndefined()
    expect(backdrop.position).toBe('absolute')
    expect(backdrop.top).toBe('0')
    expect(backdrop.right).toBe('0')
    expect(backdrop.bottom).toBe('0')
    expect(backdrop.left).toBe('0')
    expect(backdrop['pointer-events']).toBe('none')
    expect(backdrop.overflow).toBe('hidden')
    expect(backdrop['border-radius']).toContain('--nutui-tabbar-border-radius')
    expect(backdrop['border-radius']).toContain('16px')
    expect(item.position).toBe('relative')
    expect(item['z-index']).toBe('1')
  }
)

test.each([
  'src/styles/variables.scss',
  'src/styles/variables-daojia.scss',
  'src/styles/variables-jmapp.scss',
  'src/styles/variables-jrkf.scss',
])('should compile responsive Agent geometry with %s', (variables) => {
  const css = compileTabbarStyles(variables)
  const main = getDeclarations(css, '.nut-tabbar-main')
  const agent = getDeclarations(css, '.nut-tabbar-agent')
  const wrap = getDeclarations(css, '.nut-tabbar-has-agent .nut-tabbar-wrap')

  expect(main.position).toBe('relative')
  expect(main.height).toContain('52px')
  expect(agent.width).toContain('--nutui-tabbar-agent-source-size')
  expect(agent.height).toBe(agent.width)
  expect(agent.left).toContain('--nutui-tabbar-agent-source-size')
  expect(agent.left).toContain('--nutui-tabbar-agent-outset')
  expect(agent.transform).toBe('translateX(-100%)')
  expect(wrap['margin-left']).toContain('--nutui-tabbar-agent-source-size')
  expect(wrap['margin-left']).toContain('--nutui-tabbar-agent-gap')
  expect(wrap['margin-left']).toContain('--nutui-tabbar-agent-outset')
})

test('should expose readable Tabbar colors in light and dark themes', () => {
  const light = getRootCustomProperties('src/styles/theme-default.scss')
  const dark = getRootCustomProperties('src/styles/theme-dark.scss')

  expect(light).toMatchObject({
    '--nutui-tabbar-active-background': '#f0f2f7',
    '--nutui-tabbar-active-color': 'var(--nutui-color-primary)',
    '--nutui-tabbar-inactive-color': 'var(--nutui-color-title)',
  })
  expect(dark).toMatchObject({
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

test('clicking the current item again calls onActiveClick without arguments', () => {
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
  expect(onActiveClick).not.toHaveBeenCalled()
  fireEvent.click(tabbarItem[1])
  expect(onActiveClick).toHaveBeenCalledTimes(1)
  expect(onActiveClick).toHaveBeenCalledWith()
})

test('fixed bottom demo shows back-to-top only on the active home item after scrolling', () => {
  const onBackToTop = vi.fn()
  const { container, rerender } = render(
    <FixedBottomDemo scrollTop={0} onBackToTop={onBackToTop} />
  )
  const items = container.querySelectorAll<HTMLElement>('.nut-tabbar-item')

  fireEvent.click(items[0])
  expect(onBackToTop).not.toHaveBeenCalled()
  expect(container.querySelector('[aria-label="返回顶部"]')).toBeNull()

  rerender(<FixedBottomDemo scrollTop={160} onBackToTop={onBackToTop} />)
  expect(items[0].querySelector('[aria-label="返回顶部"]')).not.toBeNull()
  fireEvent.click(items[0])
  expect(onBackToTop).toHaveBeenCalledTimes(1)

  fireEvent.click(items[1])
  expect(container.querySelector('[aria-label="返回顶部"]')).toBeNull()
  fireEvent.click(items[0])
  expect(onBackToTop).toHaveBeenCalledTimes(1)
  fireEvent.click(items[0])
  expect(onBackToTop).toHaveBeenCalledTimes(2)

  rerender(<FixedBottomDemo scrollTop={0} onBackToTop={onBackToTop} />)
  expect(container.querySelector('[aria-label="返回顶部"]')).toBeNull()
  fireEvent.click(items[0])
  expect(onBackToTop).toHaveBeenCalledTimes(2)
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

test('icon(active) follows ordinary item selection', () => {
  const onSwitch = vi.fn()
  const icon = (active: boolean) => (
    <img src={active ? '/pressed.png' : '/normal.png'} alt="" />
  )
  const { container } = render(
    <Tabbar defaultValue={0} onSwitch={onSwitch}>
      <Tabbar.Item title="首页" icon={icon} />
      <Tabbar.Item title="我的" icon={icon} />
    </Tabbar>
  )
  const items = container.querySelectorAll('.nut-tabbar-item')
  expect(items).toHaveLength(2)
  expect(items[0].querySelector('img')).toHaveAttribute('src', '/pressed.png')
  expect(items[1].querySelector('img')).toHaveAttribute('src', '/normal.png')

  fireEvent.click(items[1])
  expect(onSwitch).toHaveBeenCalledTimes(1)
  expect(onSwitch).toHaveBeenCalledWith(1)
  expect(items[1].querySelector('img')).toHaveAttribute('src', '/pressed.png')
})
