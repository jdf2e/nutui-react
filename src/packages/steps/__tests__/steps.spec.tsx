import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Check, Transit, Service } from '@nutui/icons-react'
import { Steps } from '../steps'
import Step from '../../step'
import Button from '../../button'

describe('Steps', () => {
  test('should render horizontal class when props direction is to be horizontal', () => {
    const { getByTestId } = render(
      <Steps data-testid="steps-horizontal" direction="horizontal" />
    )
    expect(getByTestId('steps-horizontal')).toHaveClass('nut-steps-horizontal')
  })

  test('should render vertical class when props direction is to be vertical', () => {
    const { getByTestId } = render(
      <Steps data-testid="steps-vertical" direction="vertical" />
    )
    expect(getByTestId('steps-vertical')).toHaveClass('nut-steps-vertical')
  })

  test('should render correct status class when props status is provided', () => {
    const { getByTestId } = render(
      <Steps data-testid="steps-status" status="business" />
    )
    expect(getByTestId('steps-status')).toHaveClass(
      'nut-steps-horizontal-business'
    )
  })

  test('should render correct type class when props type is provided', () => {
    const { getByTestId } = render(
      <Steps data-testid="steps-type" type="dot" />
    )
    expect(getByTestId('steps-type')).toHaveClass('nut-steps-horizontal-dot')
  })

  test('should render correct layout class when props layout is provided', () => {
    const { getByTestId } = render(
      <Steps data-testid="steps-layout" layout="double" />
    )
    expect(getByTestId('steps-layout')).toHaveClass(
      'nut-steps-horizontal-double'
    )
  })

  test('should render correct count class when props count is provided', () => {
    const { getByTestId } = render(
      <Steps data-testid="steps-count" count={3}>
        <Step value={1} title="步骤一" />
        <Step value={2} title="步骤二" />
        <Step value={3} title="步骤三" />
      </Steps>
    )
    expect(getByTestId('steps-count')).toHaveClass(
      'nut-steps-horizontal-count-3'
    )
  })

  test('should render correct step status when value is provided', () => {
    const { container } = render(
      <Steps value={1} status="dynamic">
        <Step value={1} title="步骤一" />
        <Step value={2} title="步骤二" />
        <Step value={3} title="步骤三" />
      </Steps>
    )
    // 检查状态类
    const steps = container.querySelectorAll('.nut-step')
    expect(steps[0]).toHaveClass('nut-step-process')
    expect(steps[1]).toHaveClass('nut-step-wait')
    expect(steps[2]).toHaveClass('nut-step-wait')
  })

  test('should render correct icon when icon prop is provided', () => {
    const { container } = render(
      <Steps type="icon">
        <Step
          value={1}
          title="已完成"
          description="您的订单已经打包完成，商品已发出"
          icon={<Service />}
        />
        <Step
          value={2}
          title="进行中"
          description="您的订单正在配送途中"
          icon={<Transit />}
        />
        <Step
          value={3}
          title="未开始"
          description="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
          icon={<Check />}
        />
      </Steps>
    )
    expect(container.querySelectorAll('.nut-step-title')[0].innerHTML).toBe(
      '已完成'
    )
    expect(
      container.querySelectorAll('.nut-step-description')[1].innerHTML
    ).toBe('您的订单正在配送途中')
    expect(container.querySelectorAll('.nut-step-head-icon')).toHaveLength(3)
  })

  test('should update value when clicking next button', () => {
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
          <Steps value={value} status="dynamic">
            <Step
              value={1}
              title="已完成"
              description="您的订单已经打包完成，商品已发出"
            />
            <Step value={2} title="进行中" description="您的订单正在配送途中" />
            <Step
              value={3}
              title="未开始"
              description="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
            />
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

  test('should trigger onStepClick when step is clicked', () => {
    const handleClickStep = vi.fn()
    const { getByText } = render(
      <Steps value={1} onStepClick={handleClickStep}>
        <Step
          value={1}
          title="已完成"
          description="您的订单已经打包完成，商品已发出"
        />
        <Step value={2} title="进行中" description="您的订单正在配送途中" />
        <Step
          value={3}
          title="未开始"
          description="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
        />
      </Steps>
    )
    fireEvent.click(getByText('2'))
    expect(handleClickStep).toBeCalled()
  })

  test('should render step slot correctly', () => {
    const { container, queryByText } = render(
      <Steps value={1}>
        <Step
          value={1}
          title="已完成"
          description="您的订单已经打包完成，商品已发出"
        />
        <Step value={2} title="进行中" description="您的订单正在配送途中" />
        <Step
          value={3}
          title="未开始"
          description={
            <>
              <p>收货地址为：</p>
              <p>北京市经济技术开发区科创十一街18号院京东大厦</p>
            </>
          }
        />
      </Steps>
    )
    expect(container).toContainHTML('<p>收货地址为：</p>')
    expect(
      queryByText('北京市经济技术开发区科创十一街18号院京东大厦')
    ).toBeTruthy()
  })

  test('should render different step types correctly', () => {
    const { container } = render(
      <Steps>
        <Step value={1} title="步骤一" type="text" />
        <Step value={2} title="步骤二" type="dot" />
        <Step value={3} title="步骤三" type="icon" icon={<Check />} />
      </Steps>
    )
    expect(container.querySelectorAll('.nut-step-head-text')).toHaveLength(1)
    expect(container.querySelectorAll('.nut-step-head-dot')).toHaveLength(1)
    expect(container.querySelectorAll('.nut-step-head-icon')).toHaveLength(1)
  })

  test('should render different step states correctly', () => {
    const { container } = render(
      <Steps value={1} status="dynamic">
        <Step value={1} title="步骤一" />
        <Step value={2} title="步骤二" />
        <Step value={3} title="步骤三" />
      </Steps>
    )
    expect(container.querySelectorAll('.nut-step-process')).toHaveLength(1)
    expect(container.querySelectorAll('.nut-step-wait')).toHaveLength(2)
  })
})
