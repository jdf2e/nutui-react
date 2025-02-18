import { visitH5Demo, visitTaroDemo } from '../utils/visit-demo.cy.js'
import data from '../../../src/config.json'

const { nav } = data
export const checkH5Blank = () => {
  const componentArr = nav
    .map((i) => i.packages)
    .flat(Infinity)
    .filter((i) => i.show)
    .map((i) => i.name)

  it('check h5 demos blank', () => {
    componentArr.forEach((com) => {
      visitH5Demo(com)
    })
  })
}
export const checkTaroBlank = () => {
  it('check taro demos blank', () => {
    nav.forEach((item) => {
      const path = item.enName
      item.packages
        .filter((i) => i.show && i.taro && i.dd)
        .forEach((i) => {
          visitTaroDemo(path, i.name)
        })
    })
  })
}
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
