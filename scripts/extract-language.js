// 本文件用来提取组件中的中文文案，并生成 hash 格式的语言包，简化文案提取工作
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const fse = require('fs-extra')
const shelljs = require('shelljs')

// 输入组件名称，例如 Input 组件， node scripts/extract-language.js Input
// 组件的 demo.tsx 中 demo 组件名字应该为 组件名称 + Demo，例如：InputDemo，CheckboxDemo 等
const pkg = process.argv[2]

function unique(arr) {
  return Array.from(new Set(arr))
}

const locales = ['zh-CN', 'zh-TW', 'en-US']

let fileContent = fs
  .readFileSync(path.join(process.cwd(), `src/packages/${pkg.toLocaleLowerCase()}/demo.tsx`))
  .toString()
console.log(fileContent.match(/([0-9a-z]*[\u4e00-\u9fa5]+[0-9]*[\u4e00-\u9fa5()（）0-9a-z\/]*)/gi))

const zh_CN = unique(
  fileContent.match(/([0-9a-z]*[\u4e00-\u9fa5]+[0-9]*[\u4e00-\u9fa5()（）0-9a-z\/]*)/gi)
)

function hash(str) {
  const hash = crypto.createHash('sha256')
  hash.update(str)
  return hash.digest('hex').slice(0, 8)
}

const lang = {}
const inter = []

zh_CN.forEach((item) => {
  const k = hash(item)
  lang[k] = item
  inter.push(`"${k}": string`)
  // 要处理重复
  item = item.replace('(', '\\(').replace(')', '\\)').replace('（', '\\（').replace('）', '\\）')
  fileContent = fileContent
    .replace(new RegExp(`=\"${item}\"`, 'g'), `={translated['${k}']}`)
    .replace(new RegExp(`>\\s*${item}\\s*<`, 'g'), `>{translated['${k}']}<`)
    .replace(new RegExp(`\'${item}\'`, 'g'), `translated['${k}']`)
})

// interface
const interfaceTpl = `interface T {
  ${inter.join('\n  ')}
}`
// console.log(interfaceTpl)

const translate = {}
locales.forEach((item) => (translate[item] = lang))
// hooks
const injectTpl = `
const [translated] = useTranslate<T>(${JSON.stringify(translate, ' ', 2)})
`
// console.log('const ${pkg}Demo = () => {')

fileContent =
  `import { useTranslate } from '../../sites/assets/locale'\n` +
  fileContent.replace(
    `const ${pkg}Demo = () => {`,
    `
  ${interfaceTpl}

  const ${pkg}Demo = () => {
    ${injectTpl}
  `
  )

// console.log(fileContent)

fse
  .outputFile(
    path.join(process.cwd(), `src/packages/${pkg.toLocaleLowerCase()}/demo.locale.tsx`),
    fileContent,
    'utf8'
  )
  .then(() => {
    shelljs.exec(
      `npx eslint --fix ${path.join(
        process.cwd(),
        `src/packages/${pkg.toLocaleLowerCase()}/demo.locale.tsx`
      )}`
    )
  })
