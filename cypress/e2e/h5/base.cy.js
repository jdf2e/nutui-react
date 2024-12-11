import { visitH5Demo } from '../utils/visit-demo'

describe('base components test', () => {
  it('Button', () => {
    visitH5Demo('Button')
  })
  it('Cell', () => {
    visitH5Demo('Cell')
  })
  it('ConfigProvider', () => {
    visitH5Demo('ConfigProvider')
  })
  it('Icon', () => {
    visitH5Demo('Icon')
  })
  it('Image', () => {
    visitH5Demo('Image')
  })
  it('Overlay', () => {
    visitH5Demo('Overlay')
  })
})
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
