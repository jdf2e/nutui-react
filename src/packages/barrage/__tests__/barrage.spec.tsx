import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Barrage } from '../barrage'
import Button from '../../button'

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}
const list = ['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结-']

test('should danmu list props', async () => {
  const App = () => {
    return <Barrage speeds={300} barrageList={list} />
  }
  const { container } = render(<App />)
  await sleep(4000)

  container.querySelectorAll('.barrage-item').forEach((item) => {
    expect(Number(item.getAttribute('data-index'))).toBeLessThan(list.length)
  })

  expect(container.querySelectorAll('.barrage-item')[0]).toHaveStyle({ animationDuration: '300ms' })
})

test('should danmu rows top', async () => {
  const App = () => {
    const barrageRef = React.useRef<any>(null)
    const addBarrage = () => {
      const n = Math.random()
      if (barrageRef.current) {
        barrageRef.current.add(`随机——${String(n).substr(2, 10)}`)
      }
    }
    return (
      <>
        <Barrage rows={3} barrageList={list} top={30} ref={barrageRef} />
        <Button type="danger" onClick={addBarrage}>
          随机添加
        </Button>
      </>
    )
  }
  const { container } = render(<App />)
  await sleep(4000)

  expect(container.querySelectorAll('.barrage-item')[1]).toHaveStyle({ top: '50px' })

  container.querySelectorAll('.barrage-item').forEach((item) => {
    if (Number(item.getAttribute('data-index')) + 1 >= list.length) {
      const idx = Number(item.getAttribute('data-index'))
      expect(idx).toBe(list.length - 1)
    }
  })
})
