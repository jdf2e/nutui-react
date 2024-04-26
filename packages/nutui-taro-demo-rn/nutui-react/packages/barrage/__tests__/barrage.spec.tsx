import * as React from 'react'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Barrage } from '../barrage'
import Button from '../../button'

const barrageList = [
  '画美不看',
  '不明觉厉',
  '喜大普奔',
  '男默女泪',
  '累觉不爱',
  '爷青结-',
]

test('should danmu list props', async () => {
  const App = () => {
    return <Barrage duration={300} list={barrageList} />
  }
  const { container } = render(<App />)

  await waitFor(
    () => {
      container.querySelectorAll('.barrage-item').forEach((item) => {
        expect(Number(item.getAttribute('data-index'))).toBeLessThan(
          barrageList.length
        )
      })
    },
    { timeout: 4000 }
  )

  await waitFor(
    () => {
      const el = container.querySelectorAll('.barrage-item')[0]
      const wrapper = container.querySelectorAll('.nut-barrage')[0]

      const elScrollDuration = Math.ceil(
        (el.clientWidth / wrapper.clientWidth) * 300
      )
      expect(container.querySelectorAll('.barrage-item')[0]).toHaveStyle({
        animationDuration: `${300 + elScrollDuration}ms`,
      })
    },
    { timeout: 4000 }
  )
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
        <Barrage rows={3} list={barrageList} gapY={30} ref={barrageRef} />
        <Button type="danger" onClick={addBarrage}>
          随机添加
        </Button>
      </>
    )
  }
  const { container } = render(<App />)

  await waitFor(
    () => {
      expect(container.querySelectorAll('.barrage-item')[1]).toHaveStyle({
        top: '50px',
      })
    },
    { timeout: 4000 }
  )

  await waitFor(
    () => {
      container.querySelectorAll('.barrage-item').forEach((item) => {
        if (Number(item.getAttribute('data-index')) + 1 >= barrageList.length) {
          const idx = Number(item.getAttribute('data-index'))
          expect(idx).toBe(barrageList.length - 1)
        }
      })
    },
    { timeout: 4000 }
  )
})
