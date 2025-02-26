import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DatePickerView } from '../datepickerview'

test('should match snapshot', () => {
  const { container } = render(<DatePickerView />)
  expect(container).toMatchSnapshot()
})
