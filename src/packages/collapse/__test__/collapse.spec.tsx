import * as React from 'react'
// import * as renderer from 'react-test-renderer'

import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ArrowDown, ArrowRight } from '@nutui/icons-react'
import { Collapse } from '../collapse'
import { CollapseItem } from '../../collapseitem/collapseitem'

test('should match snapshot', () => {
  const { asFragment } = render(
    <>
      <Collapse activeName={['1', '2']} expandIcon={<ArrowDown />}>
        <CollapseItem title="标题1" name="1">
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </CollapseItem>
        <CollapseItem title="标题2" name="2">
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </CollapseItem>
        <CollapseItem title="标题3" name="3" disabled>
          京东“厂直优品计划”首推“政府优品馆”
        </CollapseItem>
      </Collapse>
    </>
  )
  expect(asFragment()).toMatchSnapshot()
})

test('prop icon iconSize iconColor', () => {
  const { getByTestId, container } = render(
    <>
      <Collapse activeName={['1', '2']} expandIcon={<ArrowDown />}>
        <CollapseItem title="标题1" name="1">
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </CollapseItem>
        <CollapseItem title="标题2" name="2">
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </CollapseItem>
        <CollapseItem title="标题3" name="3" disabled>
          京东“厂直优品计划”首推“政府优品馆”
        </CollapseItem>
      </Collapse>
    </>
  )
  expect(
    container.querySelector('.nut-collapse-item-icon .nut-icon')
  ).toHaveClass('nut-icon-ArrowDown')
})

test('prop activeName', () => {
  const { container } = render(
    <>
      <Collapse activeName={['1', '2']} expandIcon={<ArrowDown />}>
        <CollapseItem title="标题1" name="1">
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </CollapseItem>
        <CollapseItem title="标题2" name="2">
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </CollapseItem>
        <CollapseItem title="标题3" name="3" disabled>
          京东“厂直优品计划”首推“政府优品馆”
        </CollapseItem>
      </Collapse>
    </>
  )

  setTimeout(() => {
    expect(container.querySelector('.nut-collapse-item-content')).toHaveStyle(
      'height: 66px'
    )
  }, 100)
})

test('prop rotate', () => {
  const { getByTestId, container } = render(
    <>
      <Collapse
        activeName={['1']}
        accordion
        expandIcon={<ArrowRight />}
        rotate={180}
      >
        <CollapseItem
          title="标题1"
          name="1"
          expandIcon={<ArrowDown />}
          data-testid="collapse-one"
        >
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </CollapseItem>
        <CollapseItem title="标题2" name="2" expandIcon={<ArrowDown />}>
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </CollapseItem>
        <CollapseItem title="标题3" name="3" expandIcon={<ArrowDown />}>
          京东“厂直优品计划”首推“政府优品馆”
        </CollapseItem>
      </Collapse>
    </>
  )
  fireEvent.click(getByTestId('collapse-one'))
  setTimeout(() => {
    expect(
      getByTestId('collapse-one').querySelector('.nut-collapse-item-icon')
    ).toHaveStyle('transform: translateY(-50%) rotate(180deg);')
  }, 100)
})

test('prop title extra', () => {
  const { getByTestId, container } = render(
    <>
      <Collapse activeName={['1']} accordion expandIcon={<ArrowRight />}>
        <CollapseItem
          title="标题1"
          extra="副标题"
          name="1"
          data-testid="collapse-one"
        >
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </CollapseItem>
        <CollapseItem title="标题2" name="2" expandIcon={<ArrowDown />}>
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </CollapseItem>
        <CollapseItem title="标题3" name="3" expandIcon={<ArrowDown />}>
          京东“厂直优品计划”首推“政府优品馆”
        </CollapseItem>
      </Collapse>
    </>
  )
  expect(
    getByTestId('collapse-one').querySelector('.nut-collapse-item-title')
  ).toHaveTextContent('标题1')
  expect(
    getByTestId('collapse-one').querySelector('.nut-collapse-item-extra')
  ).toHaveTextContent('副标题')
  expect(getByTestId('collapse-one').querySelector('.nut-icon')).toHaveClass(
    'nut-icon-ArrowRight'
  )
})

test('event onChange & prop disabled', () => {
  const handleChange = jest.fn()
  const { getByTestId } = render(
    <>
      <Collapse defaultActiveName={['1']} onChange={handleChange}>
        <CollapseItem title="标题1" name="1" data-testid="item1">
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </CollapseItem>
        <CollapseItem title="标题2" name="2" data-testid="item2">
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </CollapseItem>
        <CollapseItem title="标题3" name="3" data-testid="item3" disabled>
          京东“厂直优品计划”首推“政府优品馆”
        </CollapseItem>
      </Collapse>
    </>
  )
  const item1 = getByTestId('item1').querySelector('.nut-collapse-item-title')
  const item2 = getByTestId('item2').querySelector('.nut-collapse-item-title')
  const item3 = getByTestId('item3').querySelector('.nut-collapse-item-title')
  fireEvent.click(item3 as Element)
  expect(handleChange).not.toBeCalled()
  fireEvent.click(item2 as Element)
  expect(handleChange).toBeCalledWith(['1', '2'], '2', true)
  setTimeout(() => {
    fireEvent.click(item1 as Element)
    expect(handleChange).toBeCalledWith(
      ['1', '2'],
      '2',
      true,
      ['2'],
      '1',
      false
    )
  }, 0)
})

test('event onChange & prop accordion', () => {
  const handleChange = jest.fn()
  const { getByTestId } = render(
    <>
      <Collapse defaultActiveName="1" accordion onChange={handleChange}>
        <CollapseItem title="标题1" name="1" data-testid="item1">
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </CollapseItem>
        <CollapseItem title="标题2" name="2" data-testid="item2">
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </CollapseItem>
        <CollapseItem title="标题3" name="3" data-testid="item3" disabled>
          京东“厂直优品计划”首推“政府优品馆”
        </CollapseItem>
      </Collapse>
    </>
  )
  const item2 = getByTestId('item2').querySelector('.nut-collapse-item-title')
  const item3 = getByTestId('item3').querySelector('.nut-collapse-item-title')
  fireEvent.click(item3 as Element)
  expect(handleChange).not.toBeCalled()
  fireEvent.click(item2 as Element)
  expect(handleChange).toBeCalledWith('2', '2', true)
  setTimeout(() => {
    fireEvent.click(item2 as Element)
    expect(handleChange).toBeCalledWith('2', '2', true, '', '2', false)
  }, 0)
})
