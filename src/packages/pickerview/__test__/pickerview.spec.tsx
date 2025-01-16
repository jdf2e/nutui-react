import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PickerView } from '../pickerview'

test('should match snapshot', () => {
  const { container } = render(<PickerView />)
  expect(container).toMatchSnapshot()
})
