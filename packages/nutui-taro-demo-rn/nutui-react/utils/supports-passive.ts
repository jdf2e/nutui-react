import { canUseDom } from './can-use-dom'

export let passiveSupported = false

if (canUseDom) {
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        passiveSupported = true
      },
    })
    window.addEventListener('test-passive-supported', null as never, opts)
  } catch (e) {
    console.log(e)
  }
}
