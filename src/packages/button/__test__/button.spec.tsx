import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Button } from '../button'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Button className="aa" style={{ margin: 8 }} type="primary" shape="round">
        主要按钮
      </Button>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
