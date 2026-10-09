// 扫描组件文档（doc.md / doc.taro.md），抽取 Properties / Ref 等表格，输出 properties(.json)。
//
// 这是把仓库内 scripts/create-properties.js 的解析逻辑内联进 core 的版本：
//   - 依赖 core 自带的 markdown-it，不动 worktree 的 node_modules；
//   - 入参 { configPath, packagesDir, docFileName, outPath } 全部可注入，可对任意
//     tag 的 worktree 现场生成 properties，供 build-meta 消费；
//   - 修正了 3.x 版 create-properties.js 的 bug：taro 模式仍写死 ./properties.json
//     导致污染 H5 数据 —— 这里一律按 outPath 写。
import fs from 'node:fs'
import path from 'node:path'
import MarkdownIt from 'markdown-it'

const TBODY_OPEN = 'tbody_open'
const TBODY_CLOSE = 'tbody_close'
const TR_OPEN = 'tr_open'
const TR_CLOSE = 'tr_close'

const md = new MarkdownIt()

// 从 markdown token 流里逐个表格抽出 { h2, h3, list(每行的 token 片段) }。
const gen = (tokens) => {
  const getNextTable = (t, index) => {
    const list = t.slice(index)
    const start = list.findIndex((token) => token.type === TBODY_OPEN)
    const end = list.findIndex((token) => token.type === TBODY_CLOSE)
    return start === -1 || end === -1 ? [0, 0] : [index + start, index + end]
  }
  const parseTable = (t, left, right) => {
    const sourcesMap = []
    const currSources = t.slice(left, right + 1)
    while (currSources.filter((source) => source.type === TR_OPEN).length) {
      const trStartIndex = currSources.findIndex((s) => s.type === TR_OPEN)
      const trEndIndex = currSources.findIndex((s) => s.type === TR_CLOSE)
      sourcesMap.push(currSources.slice(trStartIndex, trEndIndex + 1))
      currSources.splice(trStartIndex, trEndIndex - trStartIndex + 1)
    }
    return sourcesMap
  }
  const searchName = (t, left) => {
    const list = t.slice(0, left).reverse()
    const h2 = list.findIndex(
      (token) => token.tag === 'h2' && token.type === 'heading_open'
    )
    const h3 = list.findIndex(
      (token) => token.tag === 'h3' && token.type === 'heading_open'
    )
    return [list[h2 - 1]?.content || '', list[h3 - 1]?.content || '']
  }
  const res = []
  let index = 0
  while (true) {
    const [left, right] = getNextTable(tokens, index)
    if (left >= right) break // 扫到文档结尾
    index = right + 1
    const [h2, h3] = searchName(tokens, left)
    res.push({ h2, h3, list: parseTable(tokens, left, right) })
  }
  return res
}

const formatDefault = (str) => {
  str = str.trim()
  if (str[0] === '`') str = str.slice(1)
  if (str[str.length - 1] === '`') str = str.slice(0, str.length - 1)
  return str.trim()
}

/**
 * 生成 properties 数据（与仓库内 scripts/properties(.taro).json 结构一致）。
 *
 * @param {object} opts
 * @param {string} opts.configPath   src/config.json 绝对路径
 * @param {string} opts.packagesDir  src/packages 绝对路径
 * @param {string} opts.docFileName  'doc.md'（H5）| 'doc.taro.md'（Taro）
 * @param {string} opts.outPath      输出 json 的绝对路径
 * @returns {{ count: number, componentsWithDoc: number }}
 */
export function runCreateProperties({ configPath, packagesDir, docFileName, outPath }) {
  const cfg = JSON.parse(fs.readFileSync(configPath, 'utf-8'))
  const typesData = []
  let componentsWithDoc = 0

  for (const nav of cfg.nav) {
    for (const component of nav.packages) {
      const absolutePath = path.join(
        packagesDir,
        component.name.toLowerCase(),
        docFileName
      )
      if (!fs.existsSync(absolutePath)) continue
      componentsWithDoc++
      const data = fs.readFileSync(absolutePath, 'utf8')
      const sources = md.parse(data, {})
      const res = gen(sources)
      res.forEach((r) => {
        if (r.h2.includes('主题')) return
        for (const sourceMap of r.list) {
          const inlineItem = sourceMap.filter((s) => s.type === 'inline')
          const propItem =
            inlineItem.length > 0
              ? `${inlineItem[0].content.replace(/`.*?`/g, '')}`
              : ''
          const infoItem = inlineItem.length > 1 ? `${inlineItem[1].content}` : ''
          const typeItem = inlineItem.length > 2 ? `${inlineItem[2].content}` : ''
          let defaultItem = inlineItem.length > 3 ? `${inlineItem[3].content}` : ''
          defaultItem = formatDefault(defaultItem)
          typesData.push({
            组件分类: nav.name,
            组件名: r.h2,
            版本号: component.version,
            表格名: r.h3,
            第一列: propItem,
            第二列: infoItem,
            第三列: typeItem,
            第四列: defaultItem,
          })
        }
      })
    }
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  // 关键修正：一律写 outPath（3.x 原脚本 taro 模式写死 ./properties.json，会污染 H5）。
  fs.writeFileSync(outPath, `${JSON.stringify(typesData, null, 2)}`)
  return { count: typesData.length, componentsWithDoc }
}
