import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Cell } from '../../cell/cell'
import { CellGroup } from '../cellgroup'

const classPrefix = `nut-avatar`

test('prop title description subtitle', () => {
  const { container } = render(
    <CellGroup title="链接 | 分组用法">
      <Cell title="链接" />
      <Cell title="URL 跳转" extra="https://jd.com" />
    </CellGroup>
  )
  expect(
    container.querySelectorAll('.nut-cell-group__title')[0].innerHTML
  ).toBe('链接 | 分组用法')
  expect(container.querySelectorAll('.nut-cell').length).toEqual(2)
  expect(container).toMatchSnapshot()
})
