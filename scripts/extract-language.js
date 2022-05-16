// 本文件用来提取组件中的中文文案，并生成 hash 格式的语言包，简化文案提取工作
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const fse = require('fs-extra')
const shelljs = require('shelljs')

// utils
function unique(arr) {
  return Array.from(new Set(arr))
}

function hash(str) {
  const hash = crypto.createHash('sha256')
  hash.update(str)
  return hash.digest('hex').slice(0, 8)
}

// 输入组件名称，例如 Input 组件， node scripts/extract-language.js Input
// 组件的 demo.tsx 中 demo 组件名字应该为 组件名称 + Demo，例如：InputDemo，CheckboxDemo 等
const pkg = process.argv[2]
const locals = ['zh-CN', 'zh-TW', 'en-US']

const demoFile = path.join(process.cwd(), `src/packages/${pkg.toLocaleLowerCase()}/demo.tsx`)
let demoContent = fs.readFileSync(demoFile).toString()

console.log(demoContent.match(/([0-9a-z]*[\u4e00-\u9fa5]+[0-9]*[\u4e00-\u9fa5()（）0-9a-z\/]*)/gi))

const matchingChinese = /([0-9a-z]*[\u4e00-\u9fa5]+[0-9]*[\u4e00-\u9fa5()（）0-9a-z\/]*)/gi
const unrepeatedChinese = unique(demoContent.match(matchingChinese))

const localTable = {}
const interfaceType = []

unrepeatedChinese.forEach((item) => {
  const k = hash(item)
  localTable[k] = item
  interfaceType.push(`"${k}": string`)
  // 要处理重复
  item = item.replace('(', '\\(').replace(')', '\\)').replace('（', '\\（').replace('）', '\\）')
  demoContent = demoContent
    .replace(new RegExp(`=\"${item}\"`, 'g'), `={translated['${k}']}`)
    .replace(new RegExp(`>\\s*${item}\\s*<`, 'g'), `>{translated['${k}']}<`)
    .replace(new RegExp(`\'${item}\'`, 'g'), `translated['${k}']`)
})

// interface
const interfaceTemplate = `interface T {
  ${interfaceType.join('\n  ')}
}`

const translate = {}
locals.forEach((item) => (translate[item] = localTable))
const translateHookTemplate = `
const [translated] = useTranslate<T>(${JSON.stringify(translate, ' ', 2)})
`

demoContent =
  `import { useTranslate } from '../../sites/assets/locale'\n` +
  demoContent.replace(
    `const ${pkg}Demo = () => {`,
    `
  ${interfaceTemplate}
  const ${pkg}Demo = () => {
    ${translateHookTemplate}
  `
  )

fse
  .outputFile(
    path.join(process.cwd(), `src/packages/${pkg.toLocaleLowerCase()}/demo.locale.tsx`),
    demoContent,
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
