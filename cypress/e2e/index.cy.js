import './taro/base.cy'
import './taro/layout.cy'
import './taro/nav.cy'
import './taro/dentry.cy'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
