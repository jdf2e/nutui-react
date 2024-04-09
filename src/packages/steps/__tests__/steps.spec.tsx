import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Checklist, People, Service } from '@nutui/icons-react'
import { Steps } from '../steps'
import Step from '../../step'
import Button from '../../button'

test('should render horizontal class when props direction is to be horizontal', () => {
  const { getByTestId } = render(
    <Steps data-testid="steps-horizontal" direction="horizontal" />
  )
  expect(getByTestId('steps-horizontal')).toHaveClass('nut-steps-horizontal')
})

test('should render horizontal class when props direction is to be horizontal', () => {
  const { container } = render(
    <Steps value={1}>
      <Step value={1} title="步骤一">
        1
      </Step>
      <Step value={2} title="步骤二">
        2
      </Step>
      <Step value={3} title="步骤三">
        3
      </Step>
    </Steps>
  )
  expect(container.querySelectorAll('.nut-step')[0]).toHaveClass(
    'nut-step-process'
  )
})

test('should render dot class when props dot is to be true', async () => {
  const { getByTestId } = render(<Steps data-testid="steps-dot" dot />)
  expect(getByTestId('steps-dot')).toHaveClass('nut-steps-dot')
})

test('should render horizontal class when props direction is to be horizontal', () => {
  const { container } = render(
    <Steps>
      <Step
        value={1}
        title="已完成"
        description="您的订单已经打包完成，商品已发出"
        icon={<Service />}
      >
        1
      </Step>
      <Step
        value={2}
        title="进行中"
        description="您的订单正在配送途中"
        icon={<People />}
      >
        2
      </Step>
      <Step
        value={3}
        title="未开始"
        description="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
        icon={<Checklist />}
      >
        3
      </Step>
    </Steps>
  )
  expect(container.querySelectorAll('.nut-step-title')[0].innerHTML).toBe(
    '已完成'
  )
  expect(container.querySelectorAll('.nut-step-description')[1].innerHTML).toBe(
    '您的订单正在配送途中'
  )
  expect(container.querySelectorAll('.nut-icon')[2]).toHaveClass(
    'nut-icon-Checklist'
  )
})

test('should props value changes when trigger click', () => {
  const App = () => {
    const [value, setCurrent] = React.useState(1)
    const handleClick = () => {
      if (value >= 3) {
        setCurrent(1)
      } else {
        setCurrent(value + 1)
      }
    }
    return (
      <>
        <Steps value={value}>
          <Step
            value={1}
            title="已完成"
            description="您的订单已经打包完成，商品已发出"
          >
            1
          </Step>
          <Step value={2} title="进行中" description="您的订单正在配送途中">
            2
          </Step>
          <Step
            value={3}
            title="未开始"
            description="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
          >
            3
          </Step>
        </Steps>
        <Button onClick={handleClick}>下一步</Button>
      </>
    )
  }
  const { container, getByText } = render(<App />)

  fireEvent.click(getByText('下一步'))
  expect(container.querySelectorAll('.nut-step')[1]).toHaveClass(
    'nut-step-process'
  )

  fireEvent.click(getByText('下一步'))
  expect(container.querySelectorAll('.nut-step')[2]).toHaveClass(
    'nut-step-process'
  )
})

test('should emited click when step trigger', () => {
  const handleClickStep = vi.fn()
  const { getByText } = render(
    <Steps value={1} onStepClick={handleClickStep}>
      <Step
        value={1}
        title="已完成"
        description="您的订单已经打包完成，商品已发出"
      >
        1
      </Step>
      <Step value={2} title="进行中" description="您的订单正在配送途中">
        2
      </Step>
      <Step
        value={3}
        title="未开始"
        description="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
      >
        3
      </Step>
    </Steps>
  )
  fireEvent.click(getByText('2'))
  expect(handleClickStep).toBeCalled()
})

test('render step slot', () => {
  const { container, queryByText } = render(
    <Steps value={1}>
      <Step
        value={1}
        title="已完成"
        description="您的订单已经打包完成，商品已发出"
      >
        1
      </Step>
      <Step value={2} title="进行中" description="您的订单正在配送途中">
        2
      </Step>
      <Step
        value={3}
        title="未开始"
        description={
          <>
            <p>收货地址为：</p>
            <p>北京市经济技术开发区科创十一街18号院京东大厦</p>
          </>
        }
      >
        3
      </Step>
    </Steps>
  )
  expect(container).toContainHTML('<p>收货地址为：</p>')
  expect(
    queryByText('北京市经济技术开发区科创十一街18号院京东大厦')
  ).toBeTruthy()
})
