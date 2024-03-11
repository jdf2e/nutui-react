const fs = require('fs')
const path = require('path')

const extractH5Demos = () => {
  const markdownFilePath = path.join(__dirname, 'doc.md')
  let markdownContent = fs.readFileSync(markdownFilePath, 'utf-8')
  const outputDirectory = path.join(__dirname, 'demos/h5')
  const tsxRegex = /```tsx([\s\S]*?)```/g
  let match
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true })
  }

  let counter = 0
  while ((match = tsxRegex.exec(markdownContent)) !== null) {
    if (counter > 0) {
      let codeContent = match[1]
      codeContent = codeContent.replace(/const App/g, `const Demo${counter}`)
      codeContent = codeContent.replace(
        /export default App/g,
        `export default Demo${counter}`
      )
      const fileName = `/demos/h5/demo${counter}.tsx`
      fs.writeFileSync(path.join(__dirname, fileName), codeContent.trim())
    }

    counter++
  }
  fs.writeFileSync(markdownFilePath, markdownContent)
  console.log('======H5 demos have been extracted successfully======')
}
const extractTaroDemos = () => {
  const markdownFilePath = path.join(__dirname, 'doc.taro.md')
  let markdownContent = fs.readFileSync(markdownFilePath, 'utf-8')
  const outputDirectory = path.join(__dirname, 'demos/taro')
  const tsxRegex = /```tsx([\s\S]*?)```/g
  let match
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true })
  }

  let counter = 0
  while ((match = tsxRegex.exec(markdownContent)) !== null) {
    if (counter > 0) {
      let codeContent = match[1]
      codeContent = codeContent.replace(/const App/g, `const Demo${counter}`)
      codeContent = codeContent.replace(
        /export default App/g,
        `export default Demo${counter}`
      )
      const fileName = `/demos/taro/demo${counter}.tsx`
      fs.writeFileSync(path.join(__dirname, fileName), codeContent.trim())
    }
    counter++
  }
  fs.writeFileSync(markdownFilePath, markdownContent)
  console.log('======Taro demos have been extracted successfully======')
}

const replaceAllDocs = () => {
  const filePaths = [
    path.join(__dirname, 'doc.md'),
    path.join(__dirname, 'doc.en-US.md'),
    path.join(__dirname, 'doc.taro.md'),
    path.join(__dirname, 'doc.zh-TW.md'),
  ]
  filePaths.forEach((path, index) => {
    let markdownContent = fs.readFileSync(path, 'utf-8')

    const tsxRegex = /```tsx[\s\S]*?```/g
    const arr = markdownContent.match(tsxRegex)
    for (let i = 1; i < arr.length; i++) {
      markdownContent = markdownContent.replace(
        arr[i],
        index === 2
          ? `<CodeBlock src='taro/demo${i}.tsx'></CodeBlock>`
          : `<CodeBlock src='h5/demo${i}.tsx'></CodeBlock>`
      )
    }
    fs.writeFileSync(path, markdownContent)
  })
  console.log('======All docs have replaced successfully======')
}
extractH5Demos()
extractTaroDemos()
replaceAllDocs()
