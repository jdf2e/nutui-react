import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Steps } from '../steps'
import Step from '../../step'
import Button from '../../button'

test('should render horizontal class when props direction is to be horizontal', () => {
  const { getByTestId } = render(<Steps data-testid="steps-horizontal" direction="horizontal" />)
  expect(getByTestId('steps-horizontal')).toHaveClass('nut-steps-horizontal')
})

test('should render horizontal class when props direction is to be horizontal', () => {
  const { container } = render(
    <Steps current={1}>
      <Step activeIndex={1} title="步骤一">
        1
      </Step>
      <Step activeIndex={2} title="步骤二">
        2
      </Step>
      <Step activeIndex={3} title="步骤三">
        3
      </Step>
    </Steps>
  )
  expect(container.querySelectorAll('.nut-step')[0]).toHaveClass('nut-step-process')
})

test('should render dot class when props progressDot is to be true', async () => {
  const { getByTestId } = render(<Steps data-testid="steps-progressDot" progressDot={true} />)
  expect(getByTestId('steps-progressDot')).toHaveClass('nut-steps-dot')
})

test('should render horizontal class when props direction is to be horizontal', () => {
  const { container } = render(
    <Steps>
      <Step
        activeIndex={1}
        title="已完成"
        content="您的订单已经打包完成，商品已发出"
        icon="service"
        iconColor="blue"
        size="14px"
      >
        1
      </Step>
      <Step
        activeIndex={2}
        title="进行中"
        content="您的订单正在配送途中"
        icon="people"
        iconColor="blue"
        size="14px"
      >
        2
      </Step>
      <Step
        activeIndex={3}
        title="未开始"
        content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
        icon="location2"
        iconColor="blue"
        size="14px"
      >
        3
      </Step>
    </Steps>
  )
  expect(container.querySelectorAll('.nut-step-title')[0].innerHTML).toBe('已完成')
  expect(container.querySelectorAll('.nut-step-content')[1].innerHTML).toBe('您的订单正在配送途中')
  expect(container.querySelectorAll('.nutui-iconfont')[2]).toHaveClass('nut-icon-location2')
  expect(container.querySelectorAll('.nutui-iconfont')[2]).toHaveStyle({
    color: 'blue',
    width: '14px',
  })
})

test('should props current changes when trigger click', () => {
  const App = () => {
    const [current, setCurrent] = React.useState(1)
    const handleClick = () => {
      if (current >= 3) {
        setCurrent(1)
      } else {
        setCurrent(current + 1)
      }
    }
    return (
      <>
        <Steps current={current}>
          <Step activeIndex={1} title="已完成" content="您的订单已经打包完成，商品已发出">
            1
          </Step>
          <Step activeIndex={2} title="进行中" content="您的订单正在配送途中">
            2
          </Step>
          <Step
            activeIndex={3}
            title="未开始"
            content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
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
  expect(container.querySelectorAll('.nut-step')[1]).toHaveClass('nut-step-process')

  fireEvent.click(getByText('下一步'))
  expect(container.querySelectorAll('.nut-step')[2]).toHaveClass('nut-step-process')
})

test('should emited click when step trigger', () => {
  const handleClickStep = jest.fn()
  const { getByText } = render(
    <Steps current={1} clickStep={handleClickStep}>
      <Step activeIndex={1} title="已完成" content="您的订单已经打包完成，商品已发出">
        1
      </Step>
      <Step activeIndex={2} title="进行中" content="您的订单正在配送途中">
        2
      </Step>
      <Step
        activeIndex={3}
        title="未开始"
        content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
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
    <Steps current={1}>
      <Step activeIndex={1} title="已完成" content="您的订单已经打包完成，商品已发出">
        1
      </Step>
      <Step activeIndex={2} title="进行中" content="您的订单正在配送途中">
        2
      </Step>
      <Step
        activeIndex={3}
        title="未开始"
        renderContent={() => (
          <>
            <p>收货地址为：</p>
            <p>北京市经济技术开发区科创十一街18号院京东大厦</p>
          </>
        )}
      >
        3
      </Step>
    </Steps>
  )
  expect(container).toContainHTML('<p>收货地址为：</p>')
  expect(queryByText('北京市经济技术开发区科创十一街18号院京东大厦')).toBeTruthy()
})
