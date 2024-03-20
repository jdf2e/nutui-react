import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SubSideNavBar from '@/packages/subsidenavbar'
import SideNavBarItem from '@/packages/sidenavbaritem'

test('should match snapshot', () => {
  const { asFragment } = render(
    <SubSideNavBar title="一级标题" value="1-0" open={false}>
      <SideNavBarItem title="一级内容1" value="1-01" />
    </SubSideNavBar>
  )
  expect(asFragment()).toMatchSnapshot()
})
test('navigation should be hide', async () => {
  const { container } = render(
    <>
      <SubSideNavBar
        data-testid="SubSideNavBar-click"
        title="一级标题"
        value="1-0"
        open={false}
      >
        <SideNavBarItem title="一级内容1" value="1-01" />
      </SubSideNavBar>
    </>
  )

  expect(container.querySelector('.nut-subsidenavbar-list')).toHaveClass(
    'sidenavbar-hide'
  )
})
test('should emit titleClick event', async () => {
  const titleClick = vi.fn()
  const { getByTestId } = render(
    <>
      <SubSideNavBar
        data-testid="SubSideNavBar-click"
        title="一级标题"
        value="1-0"
        onClick={titleClick}
      >
        <SideNavBarItem title="一级内容1" value="1-01" />
      </SubSideNavBar>
    </>
  )
  fireEvent.click(getByTestId('SubSideNavBar-click'))
  expect(titleClick).toBeCalled()
})
