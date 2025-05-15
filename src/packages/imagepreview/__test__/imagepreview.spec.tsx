import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ImagePreview } from '../imagepreview'
import { triggerDrag } from '@/utils/event-mocker'

describe('ImagePreview Component', () => {
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

  const mockOnChange = vi.fn()
  const mockOnClose = vi.fn()

  const setup = (props = {}) => {
    render(
      <ImagePreview
        images={images}
        videos={videos}
        visible
        closeIcon
        defaultValue={0}
        onChange={mockOnChange}
        onClose={mockOnClose}
        {...props}
      />
    )
  }

  afterEach(() => {
    vi.clearAllMocks()
  })

  test('renders correctly when visible', async () => {
    const { container } = render(
      <ImagePreview
        images={images}
        videos={videos}
        visible
        defaultValue={0}
        onChange={mockOnChange}
        onClose={mockOnClose}
      />
    )
    expect(screen.getByText('1/6')).toBeInTheDocument() // Assuming pagination is shown
    expect((await container).getElementsByTagName('img')[0]).toHaveAttribute(
      'src',
      '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    )
    // 验证视频元素
    const videoElements = container.getElementsByTagName('video')
    expect(videoElements.length).toBe(2)
    // 验证轮播容器
    expect(container.querySelector('.nut-swiper')).toBeInTheDocument()
  })

  test('calls onClose when close icon is clicked', async () => {
    const { container } = render(
      <ImagePreview images={images} visible closeIcon onClose={mockOnClose} />
    )
    const closeIcon = container.querySelector('.nut-imagepreview-close')
    expect(closeIcon).toBeInTheDocument()
    expect(closeIcon?.classList).toContain('top-right')
    fireEvent.click(closeIcon as Element)
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  test('closes on content click if closeOnContentClick is true', async () => {
    const { container } = render(
      <ImagePreview
        images={images}
        visible
        closeIcon
        closeOnContentClick
        onClose={mockOnClose}
      />
    )
    const imageElement = container.querySelector('.nut-image-default')
    fireEvent.click(imageElement as Element)
    expect(mockOnClose).toHaveBeenCalledTimes(1)
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

  test('does not close on content click if closeOnContentClick is false', () => {
    const { container } = render(
      <ImagePreview images={images} visible closeOnContentClick={false} />
    )
    const imageElement = container.querySelector('.nut-image-default')
    fireEvent.click(imageElement as Element)
    expect(mockOnClose).toHaveBeenCalledTimes(0)
  })

  test('handles zooming in and out on touch events', () => {
    const { container } = render(<ImagePreview images={images} visible />)
    const swiperIndicator = container.querySelector(
      '.nut-imagepreview'
    ) as Element

    // 测试放大
    // Simulate touch start for zoom in
    fireEvent.touchStart(swiperIndicator, {
      touches: [
        { pageX: 100, pageY: 100 },
        { pageX: 200, pageY: 200 },
      ],
    })

    // Simulate touch move for zooming
    fireEvent.touchMove(swiperIndicator, {
      touches: [
        { pageX: 100, pageY: 100 },
        { pageX: 300, pageY: 300 },
      ],
    })

    // Verify that scale function has been called or scale state has changed
    // Since we don't expose the scale, we may need to check the style if set
    expect((swiperIndicator as HTMLElement).style.transform).toContain('scale(')
    const transformAfterZoomIn = (swiperIndicator as HTMLElement).style
      .transform
    expect(transformAfterZoomIn).toMatch(/scale\([\d.]+\)/)
    // 测试缩小
    fireEvent.touchStart(swiperIndicator, {
      touches: [
        { pageX: 300, pageY: 300 },
        { pageX: 400, pageY: 400 },
      ],
    })
    fireEvent.touchMove(swiperIndicator, {
      touches: [
        { pageX: 300, pageY: 300 },
        { pageX: 350, pageY: 350 },
      ],
    })

    const transformAfterZoomOut = (swiperIndicator as HTMLElement).style
      .transform
    expect(transformAfterZoomOut).toMatch(/scale\(1\)/)

    // 测试触摸结束
    fireEvent.touchEnd(swiperIndicator)
  })

  test('autoPlay', async () => {
    const { container } = render(
      <ImagePreview images={images} videos={videos} visible autoPlay={2000} />
    )
    const swiper = container.querySelectorAll('.nut-swiper')[0]
    const swiperItem = container.querySelector('.nut-swiper-slide')
    triggerDrag(swiper, 220, 0)
    expect(swiperItem).toHaveStyle({
      transform: 'translate3d(100%,0,0)',
    })
  })
})
