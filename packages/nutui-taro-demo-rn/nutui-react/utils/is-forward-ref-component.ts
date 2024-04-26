import React from 'react'

export function isForwardRefComponent(component: any) {
  return (
    component.type &&
    component.type.$$typeof &&
    // eslint-disable-next-line react/display-name
    React.forwardRef(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      () => {}
    ).$$typeof === component.type.$$typeof
  )
}
