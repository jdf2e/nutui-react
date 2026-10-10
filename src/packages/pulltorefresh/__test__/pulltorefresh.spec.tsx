import * as React from 'react'
import { render, fireEvent, screen, act, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import PullToRefresh from '@/packages/pulltorefresh'
import Cell from '@/packages/cell'
import {
  PULL_TO_REFRESH_DEFAULT_ICON,
  PULL_TO_REFRESH_PRIMARY_ICON,
} from '@/packages/pulltorefresh/images'

describe('PullToRefresh', () => {
  const originWindowProto = Object.getPrototypeOf(window)
  beforeAll(() => {
    Object.setPrototypeOf(window, Window.prototype)
  })
  afterAll(() => {
    Object.setPrototypeOf(window, originWindowProto)
  })
  test('initialize render', async () => {
    render(
      <PullToRefresh>
        <Cell>1</Cell>
        <Cell>2</Cell>
        <Cell>3</Cell>
        <Cell>4</Cell>
        <Cell>5</Cell>
        <Cell>6</Cell>
      </PullToRefresh>
    )
    expect(screen.queryByText('下拉刷新')).not.toBeNull()
  })

  test('release status', async () => {
    const { container } = render(
      <PullToRefresh>
        <div data-testid="content">
          <Cell>1</Cell>
          <Cell>2</Cell>
          <Cell>3</Cell>
          <Cell>4</Cell>
          <Cell>5</Cell>
          <Cell>6</Cell>
        </div>
      </PullToRefresh>
    )
    const element: Element = container.querySelector(
      '.nut-pulltorefresh'
    ) as Element

    act(() => {
      fireEvent.mouseDown(element, {
        buttons: 1,
      })
      fireEvent.mouseMove(element, {
        buttons: 1,
        clientY: 300,
      })
    })

    expect(screen.getByText('松手刷新')).toBeInTheDocument()
  })

  test('keeps pulling / canRelease / refreshing, then collapses without a complete status', async () => {
    // 手动控制 resolve 时机，验证请求未结束期间会停留在 refreshing 态
    let finish: (value?: unknown) => void = () => {}
    const onRefresh = vi.fn(
      () =>
        new Promise((resolve) => {
          finish = resolve
        })
    )
    const { container } = render(
      <PullToRefresh onRefresh={onRefresh}>
        <div data-testid="content">
          <Cell>1</Cell>
          <Cell>2</Cell>
          <Cell>3</Cell>
          <Cell>4</Cell>
          <Cell>5</Cell>
          <Cell>6</Cell>
        </div>
      </PullToRefresh>
    )
    const element: Element = container.querySelector(
      '.nut-pulltorefresh'
    ) as Element

    // 1. 下拉未达阈值 -> pulling
    act(() => {
      fireEvent.mouseDown(element, {
        buttons: 1,
      })
      fireEvent.mouseMove(element, {
        buttons: 1,
        clientY: 20,
      })
    })
    expect(screen.getByText('下拉刷新')).toBeInTheDocument()

    // 2. 下拉超过阈值 -> canRelease
    act(() => {
      fireEvent.mouseMove(element, {
        buttons: 1,
        clientY: 300,
      })
    })
    expect(screen.getByText('松手刷新')).toBeInTheDocument()

    // 3. 松手且请求未结束 -> refreshing
    await act(async () => {
      fireEvent.mouseUp(element, {
        buttons: 1,
        clientY: 300,
      })
    })
    expect(onRefresh).toHaveBeenCalledTimes(1)
    expect(screen.getByText('刷新中')).toBeInTheDocument()

    // 4. 请求结束 -> 直接收起，不再有完成态文案
    await act(async () => {
      finish('done')
    })
    expect(screen.queryByText('刷新成功')).toBeNull()
    await waitFor(
      () => {
        expect(screen.getByText('下拉刷新')).toBeInTheDocument()
      },
      { timeout: 3000 }
    )
  })

  test('renders the built-in default icon without renderIcon', async () => {
    const { container } = render(
      <PullToRefresh>
        <Cell>1</Cell>
      </PullToRefresh>
    )
    const icon = container.querySelector('.nut-pulltorefresh-status-icon img')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('src', PULL_TO_REFRESH_DEFAULT_ICON)
  })

  test('renders the built-in reverse icon for type="primary"', async () => {
    const { container } = render(
      <PullToRefresh type="primary">
        <Cell>1</Cell>
      </PullToRefresh>
    )
    const icon = container.querySelector('.nut-pulltorefresh-status-icon img')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('src', PULL_TO_REFRESH_PRIMARY_ICON)
  })

  test('renderIcon takes over the built-in icon inside the icon area', async () => {
    const { container } = render(
      <PullToRefresh
        renderIcon={() => (
          <img
            data-testid="pulltorefresh-icon"
            src="pulltorefresh.gif"
            alt=""
          />
        )}
      >
        <Cell>1</Cell>
      </PullToRefresh>
    )

    const icon = screen.getByTestId('pulltorefresh-icon')
    expect(icon).toHaveAttribute('src', 'pulltorefresh.gif')
    // 自定义图标必须落在图标区容器内，scss 的尺寸规则才会命中它，
    // 否则图片会按原始尺寸撑开（200x200）
    expect(container.querySelector('.nut-pulltorefresh-status-icon img')).toBe(
      icon
    )
    // 自定义图标时不再渲染内置图标
    expect(
      container.querySelector('.nut-pulltorefresh-head-content-icons')
    ).toBeNull()
  })
})
