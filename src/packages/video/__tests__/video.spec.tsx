import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Video } from '../video'
import Button from '@/packages/button'

test('video base info', () => {
  const App = () => {
    const source = {
      src: 'xxx.mp4',
      type: 'video/mp4',
    }
    const options = {
      controls: true,
      autoplay: true,
      playsinline: true,
      loop: true,
      poster:
        'https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp',
    }
    return <Video source={source} options={options} />
  }

  const { container } = render(<App />)
  const sourceDom = container.querySelector('.nut-video source')
  expect(sourceDom?.getAttribute('src')).toBe('xxx.mp4')
  expect(container).toMatchSnapshot()
})

test('video ref call', () => {
  const pause = vi.fn()
  // 确保在每个测试后清理 mock
  afterEach(() => {
    pause.mockClear()
  })
  const App = () => {
    const source = {
      src: 'xxx.mp4',
      type: 'video/mp4',
    }
    const options = {
      controls: true,
      autoplay: true,
      playsinline: true,
      loop: true,
      poster:
        'https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp',
    }
    const itemRef = React.useRef<HTMLVideoElement>(null)

    return (
      <>
        <Video
          ref={itemRef}
          source={source}
          options={options}
          onPause={pause}
        />
        <Button
          size="small"
          data-testid="emit-click"
          onClick={() => itemRef?.current?.pause()}
        >
          暂停一下
        </Button>
      </>
    )
  }

  const { getByTestId } = render(<App />)
  fireEvent.click(getByTestId('emit-click'))
  expect(pause).toHaveBeenCalledTimes(1)
})
