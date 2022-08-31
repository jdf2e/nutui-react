import React, { HTMLAttributes } from 'react'

interface TriggerProps {
  // eslint-disable-next-line react/require-default-props
  className?: string | undefined
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode
  forwardedRef: React.RefObject<HTMLElement>
}
/**
 * 过滤ref
 */
export function fillRef<T>(ref: React.Ref<T>, node: T) {
  if (typeof ref === 'function') {
    ref(node)
  } else if (typeof ref === 'object' && ref && 'current' in ref) {
    ;(ref as any).current = node
  }
}

/**
 * 将ref合并到一个ref函数中以支持ref传递
 */
export function composeRef<T>(...refs: React.Ref<T>[]): React.Ref<T> {
  return (node: T) => {
    refs.forEach((ref) => {
      fillRef(ref, node)
    })
  }
}

export default class Trigger extends React.Component<TriggerProps, unknown> {
  fireEvents(type: string, e: Event) {
    const childCallback = (this.props.children as React.ReactElement).props[
      type
    ]
    if (childCallback) {
      childCallback(e)
    }
    const callback = (this.props as any)[type]
    if (callback) {
      callback(e)
    }
  }

  render() {
    const { children, className = '' } = this.props
    const child = React.Children.only(children) as React.ReactElement
    const newChildProps: HTMLAttributes<HTMLElement> & { key: string } = {
      key: 'trigger',
    }

    if (child && child.props && child.props.className) {
      newChildProps.className = className
    }
    const cloneProps: any = {
      ...newChildProps,
    }
    cloneProps.ref = composeRef(this.props.forwardedRef, (child as any).ref)
    const trigger = React.cloneElement(child, cloneProps) as JSX.Element
    return trigger
  }
}
