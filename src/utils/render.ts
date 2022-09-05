import { ReactElement } from 'react'
import * as ReactDOM from 'react-dom'
import { Root, RootOptions } from 'react-dom/client'

type CR = (container: Element | DocumentFragment, options?: RootOptions) => Root
type IR = typeof ReactDOM & {
  createRoot: CR
}

let createRoot: CR | undefined
try {
  const mainVersion = Number((ReactDOM.version || '').split('.')[0])
  if (mainVersion >= 18 && (ReactDOM as IR).createRoot) {
    createRoot = (ReactDOM as IR).createRoot
  }
} catch (e) {
  console.log(e)
}

function legacyRender(node: any, container: any) {
  ReactDOM.render(node, container)
}

function concurrentRender(node: any, container: any) {
  const root = (ReactDOM as IR).createRoot(container)
  root.render(node)
}

export function render(node: ReactElement, container: any) {
  if (createRoot) {
    concurrentRender(node, container)
    return
  }
  legacyRender(node, container)
}
