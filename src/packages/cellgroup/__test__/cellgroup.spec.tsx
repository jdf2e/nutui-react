import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Cell } from '../../cell/cell'
import { CellGroup } from '../cellgroup'

const classPrefix = `nut-avatar`

test('prop title desc subtitle', () => {
  const { container } = render(
    <CellGroup title="链接 | 分组用法">
      <Cell title="链接" isLink />
      <Cell
        title="URL 跳转"
        desc="https://jd.com"
        isLink
        url="https://jd.com"
      />
    </CellGroup>
  )
  expect(
    container.querySelectorAll('.nut-cell-group__title')[0].innerHTML
  ).toBe('链接 | 分组用法')
  expect(container.querySelectorAll('.nut-cell').length).toEqual(2)
  expect(container).toMatchSnapshot()
})
