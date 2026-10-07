import React from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Check } from '@nutui/icons-react'
import { Checkbox } from '../checkbox'
import { CheckboxGroup } from '../../checkboxgroup/checkboxgroup'

test('should match snapshot', () => {
  const { asFragment } = render(
    <Checkbox labelPosition="left" label="复选框" checked />
  )
  expect(asFragment()).toMatchSnapshot()
})

test('should props correctly', () => {
  const handleChange = vi.fn(() => {})
  const { container, queryByText, getByTestId } = render(
    <Checkbox
      data-testid="checkbox"
      style={{ color: 'red' }}
      className="test"
      labelPosition="left"
      label="复选框"
      onChange={handleChange}
      disabled
    />
  )
  expect(
    container.querySelector('.nut-checkbox-label-disabled')
  ).toBeInTheDocument()
  expect(getByTestId('checkbox')).toHaveClass('test')
  expect(getByTestId('checkbox')).toHaveStyle('color: red')
  expect(queryByText('复选框')).toBeInTheDocument()

  fireEvent.click(getByTestId('checkbox'))

  expect(handleChange).not.toBeCalled()
})

test('round props correctly', () => {
  const { container, queryByText, getByTestId } = render(
    <Checkbox
      style={{ marginInlineEnd: '8px' }}
      shape="button"
      activeIcon={<Check className="nut-checkbox-button-icon-checked" />}
      className="test"
      label={
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>复选框</div>
        </div>
      }
      defaultChecked
    />
  )
  expect(
    container.querySelector('.nut-checkbox-button-icon-checked')
  ).toBeInTheDocument()
})

test('should fireEvent correctly', () => {
  const handleChange = vi.fn((value) => {
    value
  })
  const limit = vi.fn()
  const { getByTestId, container } = render(
    <CheckboxGroup
      data-testid="group"
      className="test"
      defaultValue={['1']}
      max={3}
      min={1}
      onLimit={limit}
      onChange={handleChange}
    >
      <Checkbox data-testid="checkbox1" value="1">
        组合复选框
      </Checkbox>
      <Checkbox data-testid="checkbox2" value="2">
        组合复选框
      </Checkbox>
      <Checkbox data-testid="checkbox3" value="3">
        组合复选框
      </Checkbox>
      <Checkbox data-testid="checkbox4" value="4">
        组合复选框
      </Checkbox>
    </CheckboxGroup>
  )

  fireEvent.click(getByTestId('checkbox3'))

  expect(handleChange).toBeCalled()
  expect(handleChange).toBeCalledWith(['1', '3'])

  expect(getByTestId('group')).toHaveClass('test')

  fireEvent.click(getByTestId('checkbox3'))
  fireEvent.click(getByTestId('checkbox1'))
  const icons = container.querySelectorAll('.nut-checkbox-icon-checked')
  expect(icons.length).toBe(1)
  expect(limit).toBeCalledWith('min')

  fireEvent.click(getByTestId('checkbox1'))
  fireEvent.click(getByTestId('checkbox2'))
  fireEvent.click(getByTestId('checkbox3'))
  fireEvent.click(getByTestId('checkbox4'))
  expect(limit).toBeCalledWith('max')
})

test('Render checkboxs by configuring options', () => {
  const handleChange = vi.fn()
  const options = [
    {
      label: '选项一',
      value: '1',
    },
    {
      label: '选项二',
      value: '2',
      disabled: true,
    },
    {
      label: '选项三',
      value: '3',
    },
  ]
  const { container, getByText } = render(
    <CheckboxGroup
      defaultValue={['1']}
      options={options}
      onChange={handleChange}
    />
  )

  expect(getByText('选项一')).toBeInTheDocument()
  expect(getByText('选项二')).toBeInTheDocument()
  expect(getByText('选项三')).toBeInTheDocument()

  const checkedIcons = container.querySelectorAll('.nut-checkbox-icon-checked')
  expect(checkedIcons.length).toBe(1)

  const disabledLabels = container.querySelectorAll(
    '.nut-checkbox-label-disabled'
  )
  expect(disabledLabels.length).toBe(1)
  expect(disabledLabels[0]).toHaveTextContent('选项二')

  // Click disabled option 2
  fireEvent.click(getByText('选项二'))
  expect(handleChange).not.toBeCalled()

  // Click enabled option 3
  fireEvent.click(getByText('选项三'))
  expect(handleChange).toBeCalledWith(['1', '3'])
})

test('individual disabled takes precedence when group disabled is false', () => {
  const handleChange = vi.fn()
  const { getByTestId } = render(
    <CheckboxGroup disabled={false} onChange={handleChange}>
      <Checkbox data-testid="c1" value="1">
        Option 1
      </Checkbox>
      <Checkbox data-testid="c2" value="2" disabled>
        Option 2
      </Checkbox>
    </CheckboxGroup>
  )

  fireEvent.click(getByTestId('c2'))
  expect(handleChange).not.toBeCalled()

  fireEvent.click(getByTestId('c1'))
  expect(handleChange).toBeCalledWith(['1'])
})

test('toggle and reverse imperative methods work with options', () => {
  const ref = React.createRef<any>()
  const options = [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
  ]
  render(<CheckboxGroup ref={ref} defaultValue={['a']} options={options} />)

  // Toggle all off
  act(() => {
    ref.current?.toggle(false)
  })
  // Toggle all on
  act(() => {
    ref.current?.toggle(true)
  })
  // Reverse
  act(() => {
    ref.current?.reverse()
  })
})

test('Render checkboxs by configure indeterminate', () => {
  const { container } = render(
    <Checkbox value="1" checked label="labe1" indeterminate />
  )
  expect(
    container.querySelector('.nut-checkbox-icon-indeterminate')
  ).toBeTruthy()
})

test('Render checkboxs by configure disabled', () => {
  const { container } = render(
    <Checkbox value="1" checked label="labe1" disabled />
  )
  expect(container.querySelector('.nut-checkbox-icon-disabled')).toBeTruthy()
})

test('Render checkboxs by configure disabled and indeterminate', () => {
  const { container } = render(
    <Checkbox value="1" checked label="labe1" disabled indeterminate />
  )
  expect(
    container.querySelector('.nut-checkbox-icon-indeterminate')
  ).toBeTruthy()
  expect(
    container.querySelector('.nut-checkbox-icon-indeterminate')
  ).toHaveClass('nut-checkbox-icon-disabled')
})

test('list model should fireEvent correctly', () => {
  const handleChange = vi.fn((value) => {
    value
  })
  const limit = vi.fn()
  const { getByTestId, container } = render(
    <CheckboxGroup
      data-testid="group"
      className="test"
      defaultValue={['1']}
      max={3}
      min={1}
      list
      onLimit={limit}
      onChange={handleChange}
    >
      <Checkbox data-testid="checkbox1" value="1">
        组合复选框
      </Checkbox>
      <Checkbox data-testid="checkbox2" value="2">
        组合复选框
      </Checkbox>
      <Checkbox data-testid="checkbox3" value="3">
        组合复选框
      </Checkbox>
      <Checkbox data-testid="checkbox4" value="4">
        组合复选框
      </Checkbox>
    </CheckboxGroup>
  )

  fireEvent.click(getByTestId('checkbox3'))

  expect(handleChange).toBeCalled()
  expect(handleChange).toBeCalledWith(['1', '3'])

  expect(getByTestId('group')).toHaveClass('test')

  fireEvent.click(getByTestId('checkbox3'))
  fireEvent.click(getByTestId('checkbox1'))
  const icons = container.querySelectorAll('.nut-checkbox-icon-checked')
  expect(icons.length).toBe(1)
  expect(limit).toBeCalledWith('min')

  fireEvent.click(getByTestId('checkbox1'))
  fireEvent.click(getByTestId('checkbox2'))
  fireEvent.click(getByTestId('checkbox3'))
  fireEvent.click(getByTestId('checkbox4'))
  expect(limit).toBeCalledWith('max')
})

test('Render checkbox with no label', () => {
  const { container } = render(<Checkbox data-testid="nolabel" />)
  expect(container.querySelector('.nut-checkbox-nolabel')).toBeTruthy()
  expect(container.querySelector('.nut-checkbox-label')).toBeFalsy()
})
