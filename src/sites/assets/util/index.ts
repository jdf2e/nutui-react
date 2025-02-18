import { nav } from '@/config.json'

const ua = navigator.userAgent.toLowerCase()
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua)

const getComponentName = () => {
  const s = window.location.hash.split('/')
  const cname = s[s.length - 1].toLowerCase()
  const component: any = {}
  nav.forEach((item: any) => {
    item.packages.forEach((sItem: any) => {
      if (sItem.name.toLowerCase() == cname) {
        component.name = sItem.name
        component.cName = sItem.cName
        return
      }
    })
  })
  return component
}

export { isMobile, getComponentName}
