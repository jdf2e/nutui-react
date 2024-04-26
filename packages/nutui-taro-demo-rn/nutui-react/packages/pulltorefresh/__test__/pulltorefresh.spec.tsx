import * as React from 'react'
import { render, fireEvent, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import PullToRefresh from '@/packages/pulltorefresh'
import Cell from '@/packages/cell'

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

  test('refreshing', async () => {
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
})
