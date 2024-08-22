import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'vitest-canvas-mock'

import { Signature } from '../signature'
import Button from '@/packages/button'

test('props test', async () => {
  const App = () => {
    const confirm = (
      canvas: HTMLCanvasElement,
      dataurl: string,
      isSigned?: boolean
    ) => {
      console.log('confirm', isSigned, dataurl)
    }
    const clear = () => {
      console.log('clear')
    }
    const signatureRef = React.useRef<any>(null)

    return (
      <>
        <Signature
          className="test-signature"
          lineWidth={4}
          strokeStyle="green"
          ref={signatureRef}
          onConfirm={confirm}
          onClear={clear}
        />
        <div className="demo-btn">
          <Button
            type="default"
            size="small"
            style={{ margin: 8 }}
            data-testid="emit-click-1"
            onClick={() => signatureRef.current?.clear()}
          >
            重签
          </Button>
          <Button
            type="primary"
            size="small"
            data-testid="emit-click-2"
            onClick={() => signatureRef.current?.confirm()}
          >
            确认
          </Button>
        </div>
      </>
    )
  }
  const { container, getByTestId } = render(<App />)

  expect(container.querySelector('.nut-signature')).toHaveClass(
    'test-signature'
  )
  expect(container?.innerHTML).toMatchSnapshot()
  fireEvent.click(getByTestId('emit-click-2'))
  fireEvent.click(getByTestId('emit-click-1'))
})
