import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Cell } from '../../cell/cell'
import { CellGroup } from '../cellgroup'

test('prop title description extra', () => {
  const { container } = render(
    <CellGroup title="链接 | 分组用法">
      <Cell title="链接" />
      <Cell title="URL 跳转" extra="https://jd.com" />
    </CellGroup>
  )
  expect(container.querySelectorAll('.nut-cell-group-title')[0].innerHTML).toBe(
    '链接 | 分组用法'
  )
  expect(container.querySelectorAll('.nut-cell').length).toEqual(2)
  expect(container).toMatchSnapshot()
})
