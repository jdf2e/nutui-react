import React from 'react'
import { Button } from '../../src/packages/button/button'

it('playground', () => {
  cy.mount(<Button type="primary">123</Button>)
})
