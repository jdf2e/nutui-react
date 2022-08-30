import * as React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Grid } from '../grid'
import { GridItem } from '../../griditem/griditem'
import Avatar from '@/packages/avatar'

test('should match snapshot', () => {
  const { container } = render(
    <>
      <Grid>
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
      </Grid>
    </>
  )
  expect(container).toMatchSnapshot()
})

test('render with column num', () => {
  const { container } = render(
    <>
      <Grid columnNum={3}>
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
      </Grid>
    </>
  )

  const regionItem = container.querySelector('.nut-grid-item')
  expect(regionItem).toHaveStyle('flex-basis:33.333333333333336%')
})

test('render with props gutter', () => {
  const { container } = render(
    <>
      <Grid gutter={3}>
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
      </Grid>
    </>
  )

  const regionItem = container.querySelector('.nut-grid-item')
  expect(regionItem).toHaveStyle('padding-right:3px')
})

test('render with props reverse', () => {
  const { container } = render(
    <>
      <Grid reverse>
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
      </Grid>
    </>
  )

  const regionItem = container.querySelector('.nut-grid-item')
  const item = regionItem?.querySelector('.nut-grid-item__content')
  expect(item).toHaveClass('nut-grid-item__content--reverse')
})

test('render with props direction horizontal', () => {
  const { container } = render(
    <>
      <Grid direction="horizontal">
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
      </Grid>
    </>
  )

  const regionItem = container.querySelector('.nut-grid-item')
  const item = regionItem?.querySelector('.nut-grid-item__content')
  expect(item).toHaveClass('nut-grid-item__content--horizontal')
})

test('render with custom', () => {
  const { container } = render(
    <>
      <Grid columnNum="3" iconColor="#fa2c19">
        <GridItem icon="dongdong" text="文本" />
        <GridItem
          icon="dongdong"
          text="文本"
          iconColor="#478EF2"
          iconSize="40"
        />
        <GridItem icon="dongdong" text="文本" />
      </Grid>
    </>
  )

  const gridItem = container.querySelectorAll('.nut-grid-item')
  expect(gridItem.length).toBe(3)
  const one = gridItem[0].querySelector('.nutui-iconfont')
  const two = gridItem[1].querySelector('.nutui-iconfont')
  expect(one).toHaveStyle('color: rgb(250, 44, 25)')
  expect(two).toHaveStyle(
    'color: rgb(71, 142, 242); font-size: 40px; width: 40px; height: 40px;'
  )
})

test('render with custom content', () => {
  const { container } = render(
    <>
      <Grid direction="horizontal">
        <GridItem icon="dongdong" text={<span>More</span>} />
        <GridItem
          text={
            <Avatar
              className="demo-avatar"
              icon="my"
              color="#fff"
              bgColor="#FA2C19"
            />
          }
        />
        <GridItem
          icon={
            <Avatar
              className="demo-avatar"
              icon="my"
              color="#fff"
              bgColor="#FA2C19"
            />
          }
        />
        <GridItem>
          <Avatar
            size="large"
            icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
        </GridItem>
      </Grid>
    </>
  )

  expect(container).toMatchSnapshot()
})

test('render with props center', () => {
  const { container } = render(
    <>
      <Grid center>
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
        <GridItem icon="dongdong" text="文本" />
      </Grid>
    </>
  )

  const regionItem = container.querySelector('.nut-grid-item')
  const item = regionItem?.querySelector('.nut-grid-item__content')
  expect(item).toHaveClass('nut-grid-item__content--center')
})
