import { ReactElement } from 'react'
import * as ReactDOM from 'react-dom'
import { Root, RootOptions } from 'react-dom/client'

type CR = (container: Element | DocumentFragment, options?: RootOptions) => Root
type IR = {
  createRoot: CR
} & typeof ReactDOM

let createRoot: CR | undefined
const { version } = ReactDOM as any
const reactDOMClone = {
  ...ReactDOM,
} as IR
try {
  const mainVersion = Number((version || '').split('.')[0])
  if (mainVersion >= 18) {
    createRoot = reactDOMClone.createRoot
  }
} catch (e) {
  console.log(e)
}

function legacyRender(node: any, container: any) {
  ReactDOM.render(node, container)
}

function concurrentRender(node: any, container: any) {
  if (createRoot) {
    const root = createRoot(container)
    root.render(node)
  }
}

export function render(node: ReactElement, container: any) {
  if (createRoot) {
    concurrentRender(node, container)
    return
  }
  legacyRender(node, container)
}
