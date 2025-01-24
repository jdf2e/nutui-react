// 创建组件模板
const prompts = require('@inquirer/prompts')
const path = require('path')
const fs = require('fs').promises
const config = require('../src/config.json')
const demoModel = require('./demo')
const nav = config.nav

const newCpt = {
  version: '3.0.0',
  name: '',
  type: '',
  cName: '',
  desc: '',
  sort: '',
  show: true,
  taro: true,
  v15: false,
  dd: true,
  author: '',
}

async function init() {
  const answers = {}
  answers.name = await prompts.input({
    message: '组件英文名(每个单词的首字母都大写，如TextBox)：',
    validate: (value) => {
      const repeat = nav?.some((category) =>
        category.packages.some((pkg) => pkg.name === value)
      )
      if (repeat) return '该组件名已存在！'
      const pass = value && value.match(/^[A-Z]/)
      return pass ? true : '不能为空，且每个单词的首字母都要大写，如TextBox'
    },
  })
  answers.cName = await prompts.input({
    message: '组件中文名(十个字以内)：',
    validate: (value) =>
      value && value.length <= 10 ? true : '不能为空，且不能超过十个字符',
  })
  answers.desc = await prompts.input({
    message: '组件描述(五十个字以内)：',
  })
  answers.type = await prompts.rawlist({
    message: '请选择组件类型(输入编号)：目前只支持组建模板',
    choices: ['component'],
    validate: (value) =>
      /^[1-4]$/.test(value) ? true : '输入有误！请输入选项前编号',
  })
  answers.sort = await prompts.input({
    message:
      '请选择组件分类(输入编号)：1基础组件，2布局组件，3导航组件，4数据录入，5操作反馈，6展示组件，7特色组件',
    validate: (value) =>
      /^[1-7]$/.test(value) ? true : '输入有误！请输入选项前编号',
  })
  answers.author = await prompts.input({
    message: '组件作者(可署化名):',
  })

  Object.assign(newCpt, answers)
  await createNew()
}

async function ensureDir(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true })
  } catch (err) {
    console.error(`Error creating directory ${dirPath}:`, err)
    throw err
  }
}

async function createFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content)
    console.log(`Created file: ${filePath}`)
  } catch (err) {
    console.error(`Error writing file ${filePath}:`, err)
    throw err
  }
}

async function createIndexJs() {
  const destPath = path.join('src/packages', newCpt.name.toLowerCase())
  await ensureDir(destPath)
  if (newCpt.type === 'method') return
  console.log('Generated index.js file successfully')
}

async function createReact() {
  const nameLc = newCpt.name.toLowerCase()
  const name = newCpt.name
  const dirPath = path.join(__dirname, `../src/packages/${nameLc}/`)
  await ensureDir(dirPath)

  const files = [
    { path: `${nameLc}.tsx`, content: demoModel(name).react },
    { path: `index.ts`, content: demoModel(name).index },
    { path: `types.ts`, content: demoModel(name).types },
  ]

  for (const file of files) {
    const filePath = path.join(dirPath, file.path)
    await createFile(filePath, file.content)
  }
}

async function createReactTaro() {
  const nameLc = newCpt.name.toLowerCase()
  const name = newCpt.name
  const dirPath = path.join(__dirname, `../src/packages/${nameLc}/`)
  await ensureDir(dirPath)

  const files = [
    { path: `${nameLc}.taro.tsx`, content: demoModel(name).taroreact },
    { path: `index.taro.ts`, content: demoModel(name).taroindex },
  ]

  for (const file of files) {
    const filePath = path.join(dirPath, file.path)
    await createFile(filePath, file.content)
  }
}

async function createDemo() {
  const nameLc = newCpt.name.toLowerCase()
  const name = newCpt.name
  const dirPath = path.join(__dirname, `../src/packages/${nameLc}`)
  const demosPath = path.join(dirPath, 'demos')
  const h5Path = path.join(demosPath, 'h5')

  await ensureDir(h5Path)

  const files = [
    { path: path.join(dirPath, `demo.tsx`), content: demoModel(name).demo },
    { path: path.join(h5Path, `demo1.tsx`), content: demoModel(name).demoitem },
  ]

  for (const file of files) {
    await createFile(file.path, file.content)
  }
}

async function createTaroDemo() {
  const nameLc = newCpt.name.toLowerCase()
  const name = newCpt.name
  const dirPath = path.join(__dirname, `../src/packages/${nameLc}`)
  const demosPath = path.join(dirPath, 'demos')
  const taroDirPath = path.join(demosPath, 'taro')

  await ensureDir(taroDirPath)

  const files = [
    {
      path: path.join(dirPath, `demo.taro.tsx`),
      content: demoModel(name).tarodemo,
    },
    {
      path: path.join(taroDirPath, `demo1.tsx`),
      content: demoModel(name).tarodemoitem,
    },
  ]

  for (const file of files) {
    await createFile(file.path, file.content)
  }
}

async function addToPackageJson() {
  const sort = newCpt.sort
  newCpt.sort = nav[sort - 1].packages.length + 1
  nav[sort - 1].packages.push(newCpt)
  nav[sort - 1].packages.sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
  )

  config.nav = nav
  const filePath = path.join(__dirname, `../src/config.json`)

  await createFile(filePath, JSON.stringify(config, null, 2))
}

async function createScss() {
  const nameLc = newCpt.name.toLowerCase()
  const dirPath = path.join(__dirname, `../src/packages/${nameLc}`)
  await ensureDir(dirPath)

  const content = `.nut-${nameLc} {}`
  const filePath = path.join(dirPath, `${nameLc}.scss`)

  await createFile(filePath, content)
}

async function createDoc() {
  const nameLc = newCpt.name.toLowerCase()
  const { name, cName, desc } = newCpt
  const dirPath = path.join(__dirname, `../src/packages/${nameLc}`)
  await ensureDir(dirPath)

  const content = demoModel(name, cName, desc).doc
  const filePath = path.join(dirPath, `doc.md`)

  await createFile(filePath, content)
}

async function createTest() {
  const nameLc = newCpt.name.toLowerCase()
  const { name } = newCpt
  const dirPath = path.join(__dirname, `../src/packages/${nameLc}`)
  const testFolderPath = path.join(dirPath, `__test__`)

  await ensureDir(testFolderPath)

  const content = demoModel(name).test
  const filePath = path.join(testFolderPath, `${nameLc}.spec.tsx`)

  await createFile(filePath, content)
}

async function createNew() {
  const tasks = [
    createIndexJs(),
    createReact(),
    createReactTaro(),
    createDemo(),
    createTaroDemo(),
    createScss(),
    createDoc(),
    createTest(),
    addToPackageJson(),
  ]

  try {
    await Promise.all(tasks)
    console.log('组件模板生成完毕，请开始你的表演~')
    process.exit()
  } catch (err) {
    console.error('Error during component creation:', err)
    process.exit(1)
  }
}

function createComponent() {
  init().catch((err) => {
    console.error('Error during component creation:', err)
    process.exit(1)
  })
}

createComponent()
