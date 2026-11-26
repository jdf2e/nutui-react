import fs from 'fs'
import path from 'path'
import sass from 'sass'

const compileCalendarScss = () => {
  const file = path.resolve(__dirname, '../calendar.scss')
  // 与 vite.config.mts 保持一致：相对 @import 由构建移除，变量在文件头注入
  const source = fs
    .readFileSync(file, 'utf8')
    .replace(/@import\s+['"](\.{2}?\/)[^'".]+(.s?css)['"];/g, '')
  return sass
    .compileString(`@import "styles/variables.scss";\n${source}`, {
      loadPaths: [path.resolve(__dirname, '../../../')],
      quietDeps: true,
      logger: { warn() {}, debug() {} },
    })
    .css.replace(/\r\n/g, '\n')
}

const declarations = (css: string, selector: string) => {
  const match = css.match(new RegExp(`(?:^|\\n)${selector} \\{([^}]*)\\}`))
  if (!match) {
    throw new Error(`未找到选择器 ${selector}`)
  }
  return match[1]
}

describe('calendar.scss', () => {
  const css = compileCalendarScss()
  const skyline = '.nut-calendar.nut-calendar-skyline'

  test('H5 / WebView 内容区保留块级滚动布局，可跨月滚动', () => {
    const content = declarations(css, '.nut-calendar-content')

    expect(content).toContain('display: block')
    expect(content).toContain('overflow-y: auto')
    expect(content).not.toContain('flex-direction: column')
  })

  test('H5 / WebView 日期保持 float 布局', () => {
    const days = declarations(css, '.nut-calendar-days')
    const day = declarations(css, '.nut-calendar-day')

    expect(days).not.toContain('display: flex')
    expect(day).toContain('float: left')
    expect(day).not.toContain('flex: 0 0')
  })

  test('Skyline 的 flex 覆盖限定在 nut-calendar-skyline 之下', () => {
    expect(declarations(css, `${skyline} .nut-calendar-content`)).toContain(
      'overflow-y: visible'
    )
    expect(declarations(css, `${skyline} .nut-calendar-days`)).toContain(
      'flex-wrap: wrap'
    )
    expect(declarations(css, `${skyline} .nut-calendar-day`)).toContain(
      'float: none'
    )
    expect(css).not.toMatch(/\n\.nut-calendar-skyline/)
  })
})
