import TestUtils from '@tarojs/test-utils-react'
import '@testing-library/jest-dom'
import { Checkbox } from '../checkbox.taro'

const testUtils = new TestUtils()
const execFn = (desc: string, component: any, props: object, cb: any) => {
  it(desc, async () => {
    await testUtils.mount(component, {
      props,
    })
    cb()
    testUtils.unmout()
  })
}
describe('checkbox-taro', () => {
  execFn(
    'should match snapshot',
    Checkbox,
    {
      labelPosition: 'left',
      label: '复选框',
      checked: true,
    },
    () => {
      expect(testUtils.html()).toMatchSnapshot()
    }
  )

  execFn(
    'should props correctly',
    Checkbox,
    {
      style: { color: 'red' },
      className: 'test',
      labelPosition: 'left',
      label: '复选框',
      disabled: true,
    },
    () => {
      expect(
        testUtils.queries.querySelector('.nut-checkbox-label-disabled')
      ).toBeInTheDocument()
      expect(testUtils.queries.querySelector('.nut-checkbox')).toHaveClass(
        'test'
      )
      expect(testUtils.queries.querySelector('.nut-checkbox')).toHaveStyle(
        'color: red'
      )
      expect(testUtils.queries.queryByText('复选框')).toBeInTheDocument()
    }
  )

  execFn(
    'Render checkboxs by configure indeterminate',
    Checkbox,
    {
      value: '1',
      checked: true,
      label: 'labe1',
      indeterminate: true,
    },
    () => {
      expect(
        testUtils.queries.querySelector('.nut-checkbox-icon-indeterminate')
      ).toBeTruthy()
    }
  )

  execFn(
    'Render checkboxs by configure disabled',
    Checkbox,
    {
      value: '1',
      checked: true,
      label: 'labe1',
      disabled: true,
    },
    () => {
      expect(
        testUtils.queries.querySelector('.nut-checkbox-icon-disabled')
      ).toBeTruthy()
    }
  )

  execFn(
    'Render checkboxs by configure disabled and indeterminate',
    Checkbox,
    {
      value: '1',
      checked: true,
      label: 'labe1',
      disabled: true,
      indeterminate: true,
    },
    () => {
      expect(
        testUtils.queries.querySelector('.nut-checkbox-icon-indeterminate')
      ).toBeTruthy()
      expect(
        testUtils.queries.querySelector('.nut-checkbox-icon-indeterminate')
      ).toHaveClass('nut-checkbox-icon-disabled')
    }
  )
})
