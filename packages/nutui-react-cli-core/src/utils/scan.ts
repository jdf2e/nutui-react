// 项目扫描：递归遍历源码目录，找出从 @nutui/nutui-react(-taro) 具名 import 的组件。
// 供 migrate --apply 用——只对项目实际用到的组件输出迁移步骤。纯 node:fs + 正则，无第三方依赖。
import fs from 'node:fs'
import path from 'node:path'

export interface ScanResult {
  // 项目中出现过的 NutUI 组件名（保留源码里的原始拼写，去重）
  components: string[]
  // 扫描到的、含 NutUI import 的文件绝对路径
  files: string[]
  // 实际遍历的源码文件总数（用于"扫描了 N 个文件"提示）
  scannedFileCount: number
}

const SOURCE_EXT = new Set(['.tsx', '.ts', '.jsx', '.js', '.mjs', '.cjs'])
const SKIP_DIRS = new Set([
  'node_modules',
  '.git',
  'dist',
  'build',
  '.next',
  '.turbo',
  'coverage',
])

// 匹配 import { ... } from '@nutui/nutui-react' | '@nutui/nutui-react-taro'
// 也匹配 icons 包（@nutui/icons-react(-taro)），图标名也算"用到的组件"以便迁移提示覆盖图标变更。
// [\s\S]*? 跨行匹配具名列表；末尾包名用锚点确保不误伤子路径 import。
const IMPORT_RE =
  /import\s+(?:type\s+)?\{([\s\S]*?)\}\s*from\s*['"]@nutui\/(?:nutui-react|icons-react)(?:-taro)?['"]/g

// 从具名列表字符串（可能含换行、注释、as 别名）解析出组件名集合。
function parseNamedImports(inner: string): string[] {
  return inner
    .split(',')
    .map((s) =>
      s
        // 去掉行内 / 块注释残片
        .replace(/\/\/.*$/gm, '')
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .trim()
    )
    .filter(Boolean)
    // `Button as Btn` → 取原名 Button；`type Foo` → 去掉 type 前缀
    .map((s) => s.replace(/^type\s+/, '').split(/\s+as\s+/)[0].trim())
    .filter((s) => /^[A-Za-z][A-Za-z0-9_]*$/.test(s))
}

// 从单个文件内容里抽取 NutUI 组件名。无命中返回空数组。
export function extractComponents(content: string): string[] {
  const found = new Set<string>()
  for (const m of content.matchAll(IMPORT_RE)) {
    for (const name of parseNamedImports(m[1])) found.add(name)
  }
  return [...found]
}

function walk(dir: string, onFile: (file: string) => void): void {
  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }
  for (const entry of entries) {
    if (entry.name.startsWith('.') && entry.name !== '.') {
      // 跳过隐藏目录/文件（.git 等），但允许显式传入的 '.' 起点
      if (entry.isDirectory() && SKIP_DIRS.has(entry.name)) continue
      if (entry.isDirectory()) continue
    }
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue
      walk(full, onFile)
    } else if (entry.isFile() && SOURCE_EXT.has(path.extname(entry.name))) {
      onFile(full)
    }
  }
}

// 扫描目录，聚合项目用到的 NutUI 组件。dir 可为文件或目录。
export function scanProject(dir: string): ScanResult {
  const components = new Set<string>()
  const files: string[] = []
  let scannedFileCount = 0

  const handle = (file: string) => {
    scannedFileCount++
    let content: string
    try {
      content = fs.readFileSync(file, 'utf-8')
    } catch {
      return
    }
    const names = extractComponents(content)
    if (names.length) {
      files.push(file)
      for (const n of names) components.add(n)
    }
  }

  const stat = fs.existsSync(dir) ? fs.statSync(dir) : null
  if (stat?.isFile()) {
    handle(dir)
  } else {
    walk(dir, handle)
  }

  return {
    components: [...components].sort(),
    files: files.sort(),
    scannedFileCount,
  }
}
