import config from '@/sites/config/env'
import configs from '@/config.json'
import { useHistory } from 'react-router-dom'
import { makeAutoObservable, observable, computed, action, toJS } from 'mobx'
import { useEffect } from 'react'

interface VariablesMap {
  [key: string]: any
}

let cachedStyles = ''
let timer: any = null

class Store {
  init
  variables: any[]
  variablesMap: VariablesMap
  rawStyles
  pathname

  constructor() {
    this.init = false
    this.variables = []
    this.variablesMap = {}
    this.rawStyles = ''
    this.pathname = 'base'

    makeAutoObservable(this, {
      variables: observable,
      variablesMap: observable,
      rawStyles: observable,
      cssText: computed,
      formItems: computed,
      updateVariables: action,
      updateVariablesMap: action,
      updatePathname: action,
      updateVariablesByItem: action,
    })
  }

  get formItems() {
    const name = this.pathname
    console.log('name,,', name)
    const res = toJS(this.variables).filter(
      ({ lowerCaseName }) => lowerCaseName === name
    )
    console.log(res)
    return toJS(this.variables).filter(
      ({ lowerCaseName }) => lowerCaseName === name
    )
  }

  get cssText() {
    const variablesText = this.variables
      .map(({ key, value }) => `${key}:${value}`)
      .join(';')
    cachedStyles = cachedStyles || extractStyle(this.rawStyles)
    return `${variablesText};${cachedStyles}`
  }

  updatePathname(pathname: string) {
    console.log('updatePathname', pathname)
    this.pathname = pathname.replace('/', '').toLowerCase()
  }

  updateVariables(variables: any[]) {
    this.variables = variables
  }

  updateVariablesByItem(item: any) {
    this.variables.map((variable) => {
      const { lowerCaseName, key } = variable
      if (lowerCaseName == item.lowerCaseName && key == item.key) {
        variable.value = item.value
      }
    })
    this.updateIframeStyle()
  }

  updateVariablesMap(variablesMap: any) {
    this.variablesMap = variablesMap
  }

  updateRawStyles(style: string) {
    this.rawStyles = style
  }

  updateIframeStyle() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      const Sass = (window as any).Sass
      console.log('Sass', Sass)
      let beginTime = new Date().getTime()
      console.log('sass编译开始', beginTime)
      Sass &&
        Sass.compile(this.cssText, async (res: Obj) => {
          await awaitIframe()
          const iframe = window.frames[0] as any
          console.log(res.text)
          if (res.text && iframe) {
            console.log('sass编译成功', new Date().getTime() - beginTime)
            if (!iframe.__styleEl) {
              const style = iframe.document.createElement('style')
              style.id = 'theme'
              iframe.__styleEl = style
            }
            iframe.__styleEl.innerHTML = res.text
            iframe.document.head.appendChild(iframe.__styleEl)
          } else {
            console.log('sass编译失败', new Date().getTime() - beginTime)
            console.error(res)
          }

          if (res.status !== 0 && res.message) {
            console.log(res.message)
          }
        })
    }, 300)
  }
}

export const store = new Store()
const components = configs.nav
  .map(({ packages }) => packages.map(({ name }) => name))
  .flat(1)

const awaitIframe = async () => {
  while (
    !window.frames[0] ||
    !window.frames[0].document.querySelector('#nav')
  ) {
    await new Promise((r) => setTimeout(r, 100))
  }
}

const loadScript = async (url: string) =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.onload = resolve
    script.onerror = reject
    script.src = url
    document.head.appendChild(script)
  })

const zhKeyDesc = {
  '$primary-color': '全局主题色',
  '$primary-color-end': '全局主题色结束颜色（主题色渐变，例如 Button）',
} as any

type Obj = {
  [k: string]: any
}

// 提取样式代码，只保留有使用变量的行
const extractStyle = (style: string) => {
  if (!store.variables.length) {
    return ''
  }
  // import 由于 React 版本的 sass 依赖放在了 sass 文件中，所以在这里需要剔除
  style = style
    .split('\n')
    .filter((str) => !/^(\s+)?@import/.test(str))
    .join('\n')
  // comment
  style = style
    .split('\n')
    .filter((str) => !/^(\s+)?\/\//.test(str))
    .join('\n')
  // todo: parse mixin
  style = style
    .split('\n')
    .filter((str) => !/^(\s+)?@include/.test(str))
    .join('\n')

  style = style.replace(
    /(?:({|;|\s|\n))[\w-]+:([^;{}]|;base64)+;(?!base64)/g,
    (matched) => {
      const matchedKey = matched.match(/\$[\w-]+\b/g)
      if (matchedKey && matchedKey.some((k) => store.variablesMap[k])) {
        return matched
      }
      return ''
    }
  )

  return style
}

const getInputType = (value: string) => {
  if (/^\d+$/.test(value)) {
    return 'number'
  }
  if (/^#[A-Za-z0-9]+$/.test(value)) {
    return 'hex'
  }
  if (
    /^(rgb|hsl)a?\((\s*\/?\s*[+-]?\d*(\.\d+)?%?,?\s*){3,5}\)/gim.test(value)
  ) {
    return 'rgb'
  }

  return 'input'
}
// 提取变量
const extractVariables = (
  matched: string[],
  name: string,
  lowerCaseName: string
) =>
  matched.reduce((res, str) => {
    const extract = str
      .replace(/\s+!default/, '')
      .match(/(.*):(?:\s+)?([\s\S]*)(?:\s+)?;/)

    if (extract) {
      const key = extract[1]
      const value = extract[2]
      res.push({
        name, // 组件名
        lowerCaseName, // 组件名小写
        key, // 变量名
        key_zh: zhKeyDesc[key],
        rawValue: value, // 原始值
        computedRawValue: '', // 计算后的原始值
        value, // 编辑的值
        // 编辑的类型
        inputType: getInputType(value),
      })
    }
    return res
  }, [] as Obj[])

const parseSassVariables = (text: string, components: string[]) => {
  const matchedComponentVariables = components
    .map((name) => {
      const lowerCaseName = name.toLowerCase()
      const reg = new RegExp(
        `(?<!\\/\\/(\\s+)?)\\$(${name}|${lowerCaseName})\\b[\\w-]+:([^;{}]|;base64)+;(?!base64)`,
        'g'
      )
      const matched = text.match(reg)
      if (matched) {
        return extractVariables(matched, name, lowerCaseName)
      }
    })
    .filter(Boolean)
    .flat(2)

  const baseVariablesReg = new RegExp(
    `\\$(?!(${matchedComponentVariables
      .map((item) => (item && `${item.name}|${item.lowerCaseName}`) || '')
      .join('|')})\\b)[\\w-]+:[^:]+;`,
    'g'
  )

  const variables = matchedComponentVariables as Obj[]
  const matchedBaseVariables = text.match(baseVariablesReg)

  // 组件变量以外的都作为基础变量
  if (matchedBaseVariables) {
    variables.unshift(...extractVariables(matchedBaseVariables, 'Base', 'base'))
  }

  return variables
}

const getRawFileText = async function (url: string) {
  const response = await fetch(url)
  const res = await response.text()
  return res
}

const getSassVariables = async () => {
  // vite 启动模式 bug 待修复
  const rawVariablesText = await getRawFileText(
    `${config.themeUrl}/styles/variables.scss_source`
  )
  console.log(rawVariablesText)
  const rawVariables = parseSassVariables(rawVariablesText, components)

  // 固定自定义主题的访问链接: https://nutui.jd.com/theme/?theme=自定义变量的文件地址#/
  // e.g. https://nutui.jd.com/theme/?theme=xxx.com%2variables.scss#/
  // vite issue https://github.com/vitejs/vite/issues/6894
  const params = new URLSearchParams(window.location.search)
  const customUrl = params.get('theme')
  if (customUrl) {
    const customVariablesText = await getRawFileText(customUrl)
    const customVariables = parseSassVariables(customVariablesText, components)

    // merge
    rawVariables.forEach((item) => {
      const custom = customVariables.find(({ key }) => key === item.key)
      if (custom) {
        item.value = custom.value
      }
    })
  }

  const variablesMap = rawVariables.reduce((map, item) => {
    map[item.key] = 1
    return map
  }, {})
  store.updateVariables(rawVariables)
  store.updateVariablesMap(variablesMap)
}

export const getRawSassStyle = async (): Promise<void> => {
  const style = await getRawFileText(
    `${config.themeUrl}/styles/sass-styles.scss_source`
  )
  store.updateRawStyles(style)
}

export const initSass = async () => {
  await loadScript('https://cdnout.com/sass.js/sass.sync.min.js')
  await Promise.all([getSassVariables(), getRawSassStyle()])
}

export const useThemeEditor = () => {
  const history = useHistory()
  useEffect(() => {
    const pathname = history.location.pathname
    const pathnameArr = pathname.split('/')

    store.updatePathname(
      pathname.endsWith('/') === '/'
        ? '/Base'
        : pathnameArr[pathnameArr.length - 1]
    )
  }, [history.location.pathname])

  useEffect(() => {
    const innerAsync = async () => {
      await initSass()
    }
    innerAsync()
  }, [])
}
