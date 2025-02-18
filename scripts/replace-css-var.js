/*
 * 通过 dist 目录下的 style/index.js 构建每个组件的 css 文件
 * */
const path = require('path')
const fs = require('fs')
const postcss = require('postcss')
const sass = require('sass')
const cssvariables = require('postcss-css-variables')
const config = require('../src/config.json')

const components = config.nav.reduce(
  (prev, nav) => [...prev, ...nav.packages],
  [],
)

const mixin = fs
  .readFileSync(path.join(__dirname, '../src/styles/mixins/text-ellipsis.scss'))
  .toString()
const variables = fs.readFileSync(
  path.join(__dirname, '../src/styles/variables.scss'),
).toString()

const theme = fs.readFileSync(
  path.join(__dirname, '../src/styles/theme-default.scss'),
).toString()

const exclude = ['icon']
components.forEach((component) => {
  const componentName = component.name.toLowerCase()
  if (exclude.includes(componentName)) return

  let content = fs
    .readFileSync(
      path.join(
        __dirname,
        `../src/packages/${componentName}/${componentName}.scss`,
      ),
    )
    .toString()
  let to = path.join(
    __dirname,
    `../src/packages/${componentName}/${componentName}.harmony.css`,
  )
  const matched = content.match(/@import.*?[;][\n\r]?/gi)
  if (matched) {
    matched.forEach((m) => {
      if (m.indexOf('styles') > -1) {
        content = content.replace(m, mixin)
      } else {
        content = content.replace(m, '')
      }
    })
  }

  const res = sass.compileString(theme + variables + content)
  postcss([
    cssvariables(/*options*/),
  ])
    .process(res.css, { to })
    .then((result) => {
      fs.writeFile(to, result.css, () => {
      })
    })
})
