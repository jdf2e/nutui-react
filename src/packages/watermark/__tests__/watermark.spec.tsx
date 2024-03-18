import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'vitest-canvas-mock'

import { WaterMark } from '../watermark'

test('video base info', () => {
  const App = () => {
    return <WaterMark color="#fa2c19" content="nut-ui" />
  }
  const { container } = render(<App />)
  expect(container.querySelectorAll('.nut-watermark').length).toBe(1)
  expect(container.querySelectorAll('.nut-watermark-full-page').length).toBe(1)
})
