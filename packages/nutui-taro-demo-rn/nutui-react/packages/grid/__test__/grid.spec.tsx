import * as React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Image as ImageIcon } from '@nutui/icons-react'
import { Grid } from '../grid'
import Avatar from '@/packages/avatar'
import Image from '@/packages/image'

test('should match snapshot', () => {
  const { container } = render(
    <>
      <Grid>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
      </Grid>
    </>
  )
  expect(container).toMatchSnapshot()
})

test('render with column num', () => {
  const { container } = render(
    <>
      <Grid columns={3}>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
      </Grid>
    </>
  )

  const regionItem = container.querySelector('.nut-grid-item')
  expect(regionItem).toHaveStyle('flex-basis:33.333333333333336%')
})

test('render with props gap', () => {
  const { container } = render(
    <>
      <Grid gap={3}>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
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
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
      </Grid>
    </>
  )

  const regionItem = container.querySelector('.nut-grid-item')
  const item = regionItem?.querySelector('.nut-grid-item-content')
  expect(item).toHaveClass('nut-grid-item-content-reverse')
})

test('render with props direction horizontal', () => {
  const { container } = render(
    <>
      <Grid direction="horizontal">
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
      </Grid>
    </>
  )

  const regionItem = container.querySelector('.nut-grid-item')
  const item = regionItem?.querySelector('.nut-grid-item-content')
  expect(item).toHaveClass('nut-grid-item-content-horizontal')
})

test('render with custom', () => {
  const { container } = render(
    <>
      <Grid columns="3">
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon width={40} height={40} color="#478EF2" />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
      </Grid>
    </>
  )

  const gridItem = container.querySelectorAll('.nut-grid-item')
  expect(gridItem.length).toBe(3)
  const two = gridItem[1].querySelector('.nut-icon')
  expect(two).toHaveStyle({
    color: '#478EF',
    height: '40px',
    width: '40px',
  })
})

test('render with custom content', () => {
  const { container } = render(
    <>
      <Grid direction="horizontal">
        <Grid.Item text={<span>More</span>}>
          <ImageIcon />
        </Grid.Item>
        <Grid.Item
          text={
            <Avatar
              className="demo-avatar"
              icon={<ImageIcon color="#fff" />}
              background="#FA2C19"
            />
          }
        />
        <Grid.Item>
          <Avatar
            className="demo-avatar"
            icon={<ImageIcon color="#fff" />}
            background="#FA2C19"
          />
        </Grid.Item>
        <Grid.Item>
          <Avatar
            size="large"
            icon={
              <Image src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
            }
          />
        </Grid.Item>
      </Grid>
    </>
  )

  expect(container).toMatchSnapshot()
})

test('render with props center', () => {
  const { container } = render(
    <>
      <Grid center>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
        <Grid.Item text="文本">
          <ImageIcon />
        </Grid.Item>
      </Grid>
    </>
  )

  const regionItem = container.querySelector('.nut-grid-item')
  const item = regionItem?.querySelector('.nut-grid-item-content')
  expect(item).toHaveClass('nut-grid-item-content-center')
})
