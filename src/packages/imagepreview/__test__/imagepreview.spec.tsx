import * as React from 'react'
import { render, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ImagePreview } from '../imagepreview'

const images = [
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg',
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
  },
]

const videos = [
  {
    source: {
      src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
      type: 'video/mp4',
    },
    options: {
      muted: true,
      controls: true,
    },
  },
  {
    source: {
      src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
      type: 'video/mp4',
    },
    options: {
      muted: true,
      controls: true,
    },
  },
]

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

test('basic usage test', () => {
  const { container } = render(<ImagePreview images={images} visible />)

  const element = container.querySelector(
    '.nut-imagepreview-pop'
  ) as HTMLElement
  expect(element.style.display).toEqual('')
})

test('test autoPlay', async () => {
  let _container: any
  act(() => {
    const { container } = render(
      <ImagePreview images={images} visible autoPlay={1000} />
    )
    _container = container
  })

  const element = _container.querySelector(
    '.nut-imagepreview-pop .nut-imagepreview-index'
  ) as HTMLElement
  expect(element).toHaveTextContent('1')

  await waitFor(
    async () => {
      await sleep(1100)
      expect(element).toHaveTextContent('2')
    },
    {
      timeout: 2000,
    }
  )
})

test('init page No.', async () => {
  const { container } = render(
    <ImagePreview images={images} visible defaultValue={3} />
  )

  const element = container.querySelector(
    '.nut-imagepreview-pop .nut-imagepreview-index'
  ) as HTMLElement
  expect(element).toHaveTextContent('3/4')
})

test('customize indicator and color', async () => {
  const { container } = render(
    <ImagePreview images={images} visible indicator indicatorColor="red" />
  )

  const swiperIndicator = container.querySelector('.nut-imagepreview-swiper')
  expect(swiperIndicator).toHaveAttribute(
    'style',
    '--nutui-indicator-color: red;'
  )
})

test('video surported in H5 env', async () => {
  const { container } = render(
    <ImagePreview images={images} videos={videos} visible />
  )

  const nutVideoPlayer = container.querySelector('.nut-video-player')
  expect(nutVideoPlayer).toBeInTheDocument()
})

test('closeIcon = true', async () => {
  const { container } = render(
    <ImagePreview images={images} videos={videos} visible closeIcon />
  )

  const closeIcon = container.querySelector('.nut-imagepreview-close')
  expect(closeIcon).toBeInTheDocument()
  expect(closeIcon?.classList).toContain('top-right')
})

test('custom closeIcon', async () => {
  const { container } = render(
    <ImagePreview images={images} videos={videos} visible closeIcon="close" />
  )

  const closeIcon = container.querySelector('.nut-imagepreview-close')
  expect(closeIcon?.innerHTML).toContain('close')
})

test('closeIconPosition', async () => {
  const { container } = render(
    <ImagePreview
      images={images}
      videos={videos}
      visible
      closeIcon
      closeIconPosition="bottom"
    />
  )

  const closeIcon = container.querySelector('.nut-imagepreview-close')
  expect(closeIcon?.classList).toContain('bottom')
})
