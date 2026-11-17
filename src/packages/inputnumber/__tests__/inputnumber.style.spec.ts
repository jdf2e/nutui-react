import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import * as path from 'node:path'
import { createRequire } from 'node:module'
import { compileFunction } from 'node:vm'
import * as ts from 'typescript'
import * as sass from 'sass'
import postcss from 'postcss'
import scss from 'postcss-scss'
import stripRtlPlugin from '../../../../scripts/strip-rtl.mjs'

const root = path.resolve(__dirname, '../../../..')
const require = createRequire(import.meta.url)
const pxToScalePxInComponentScss = require('../../../../scripts/px-to-scale-px-in-component-scss.cjs')

let output: string

beforeAll(async () => {
  output = await mkdtemp(path.join(tmpdir(), 'nutui-inputnumber-style-'))
})

afterAll(async () => {
  await rm(output, { recursive: true, force: true })
})

function getBuildCss(code: string) {
  const ast = ts.createSourceFile(
    'build.mjs',
    code,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.JS
  )
  const declaration = ast.statements.find(
    (node): node is ts.FunctionDeclaration =>
      ts.isFunctionDeclaration(node) && node.name?.text === 'buildCSS'
  )
  if (!declaration) throw new Error('Missing buildCSS')
  return { ast, declaration }
}

test.each(
  ['h5', 'taro'].flatMap((platform) =>
    ['', 'jmapp', 'jrkf', 'daojia'].map((theme) => [platform, theme])
  )
)(
  'builds InputNumber pseudo-element dividers for %s / %s',
  async (platform, theme) => {
    const filename = platform === 'h5' ? 'build.mjs' : 'build-taro.mjs'
    const code = await readFile(path.join(root, 'scripts', filename), 'utf8')
    const { ast, declaration } = getBuildCss(code)
    const dist = path.join(output, platform)
    const globals = {
      basename: path.basename,
      join: path.join,
      relative: path.relative,
      glob: async () => ['src/packages/inputnumber/inputnumber.scss'],
      readFile,
      dest: async (file: string, contents: string) => {
        await mkdir(path.dirname(file), { recursive: true })
        await writeFile(file, contents)
      },
      __dirname: path.join(root, 'scripts'),
      dist,
      sass: {
        compileString: (text: string, options: sass.StringOptions<'sync'>) =>
          sass.compileString(text, {
            ...options,
            logger: sass.Logger.silent,
          }),
      },
      postcss,
      scss,
      stripRtlPlugin,
      pxToScalePxInComponentScss,
    }
    // 执行真实发布构建函数，仅替换输出目录和待构建组件集合。
    const buildCSS = compileFunction(
      `${declaration.getText(ast)}; return buildCSS;`,
      Object.keys(globals)
    )(...Object.values(globals))
    await buildCSS(theme)

    const themeDir = theme ? `style-${theme}` : 'style'
    const css = await readFile(
      path.join(dist, 'es/packages/inputnumber', themeDir, 'style.mini.css'),
      'utf8'
    )
    expect(css).toContain('.nut-inputnumber::before')
    expect(css).toContain('.nut-inputnumber::after')
    expect(css).not.toContain('.nut-inputnumber-divider')
    expect(css).not.toContain('[dir=rtl]')
    expect(css).not.toContain('.nut-rtl ')
    expect(css).not.toMatch(/\bscale-(?:font-|icon-)?px\(/)
  },
  30000
)
