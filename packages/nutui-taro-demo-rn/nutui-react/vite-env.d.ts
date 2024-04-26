// eslint-disable-next-line react/no-typos
import 'react'

declare module 'react' {
  interface CSSProperties {
    // Allow any CSS Custom Properties
    [index: `--${string}`]: any
  }
}
