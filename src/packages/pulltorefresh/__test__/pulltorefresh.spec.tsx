import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PullToRefresh from '@/packages/pulltorefresh'
import Cell from '@/packages/cell'

describe('PullToRefresh', () => {
  const originWindowProto = Object.getPrototypeOf(window)
  // const getBoundingClientRectMock = jest.spyOn(
  //   HTMLElement.prototype,
  //   'getBoundingClientRect'
  // )
  beforeAll(() => {
    Object.setPrototypeOf(window, Window.prototype)
    // getBoundingClientRectMock.mockReturnValue({
    //   height: 10,
    // } as DOMRect)
  })
  afterAll(() => {
    Object.setPrototypeOf(window, originWindowProto)
    // getBoundingClientRectMock.mockRestore()
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

    fireEvent.mouseDown(element, {
      buttons: 1,
    })
    fireEvent.mouseMove(element, {
      buttons: 1,
      clientY: 300,
    })
    expect(screen.getByText('松开刷新')).toBeInTheDocument()
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

    fireEvent.mouseDown(element, {
      buttons: 1,
    })
    fireEvent.mouseMove(element, {
      buttons: 1,
      clientY: 300,
    })
    fireEvent.mouseUp(element)
    expect(screen.getByText('加载中...')).toBeInTheDocument()
  })
})
