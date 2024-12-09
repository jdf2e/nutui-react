import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SegmentedItem, Segmented } from '@nutui/nutui-react'

const defaultOptions = ['Daily', 'Weekly', 'Monthly']
test('Simple Value Testing', () => {
  const handleChange = vi.fn(() => {})
  const { queryByText } = render(
    <Segmented
      defaultValue={0}
      options={defaultOptions}
      onChange={handleChange}
    />
  )

  expect(queryByText('Weekly')).toBeInTheDocument()

  const secondItem = queryByText('Weekly')
  if (secondItem) {
    fireEvent.click(secondItem)
  }
  expect(handleChange).toBeCalled()
})

test('Complex Value Testing', () => {
  const defaultOptions: SegmentedItem[] = [
    {
      label: 'Apps',
      value: 'Apps',
    },
    {
      label: 'AfterSaleService',
      value: 'AfterSaleService',
    },
  ]
  const handleChange = vi.fn(() => {})
  const { container, queryByText } = render(
    <Segmented
      defaultValue={0}
      options={defaultOptions}
      onChange={handleChange}
    />
  )

  expect(queryByText('AfterSaleService')).toBeInTheDocument()
})
