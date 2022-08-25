// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { ReactElement } from 'react'
import * as ReactDOM from 'react-dom'

let createRoot
try {
  const mainVersion = Number((ReactDOM.version || '').split('.')[0])
  if (mainVersion >= 18 && ReactDOM.createRoot) {
    createRoot = ReactDOM.createRoot
  }
} catch (e) {
  console.log(e)
}

function legacyRender(node, container) {
  ReactDOM.render(node, container)
}

function concurrentRender(node, container) {
  const root = ReactDOM.createRoot(container)
  root.render(node)
}

export function render(node: ReactElement, container) {
  if (createRoot) {
    concurrentRender(node, container)
    return
  }
  legacyRender(node, container)
}
