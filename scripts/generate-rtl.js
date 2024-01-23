const postcss = require('postcss')
const rtl = require('postcss-rtlcss')
const fs = require('fs')
const path = require('path')
const scss = require('postcss-scss')
const config = require('../src/config.json')

const components = config.nav.reduce(
  (prev, nav) => [...prev, ...nav.packages],
  []
)
console.log(components.length)

const plugins = [rtl({ mode: 'override' })]

components.forEach((component) => {
  const componentName = component.name.toLowerCase()
  if (componentName === 'icon') return
  // if (componentName === 'icon' || componentName === 'col') return
  // if(componentName !== 'col') return
  const readFrom = path.join(
    process.cwd(),
    `./src/packages/${componentName}/${componentName}.scss`
  )
  const writeTo = path.join(
    process.cwd(),
    `./src/packages/${componentName}/${componentName}.scss`
  )
  const css = fs.readFileSync(readFrom, 'utf8')
  postcss(plugins)
    .process(css, {syntax: scss,})
    .then((result) => {
      fs.writeFile(writeTo, result.css, () => {})
    })
})
