import { readFile, writeFile, mkdir, mkdtemp, rm } from 'node:fs/promises'
import * as path from 'node:path'
import { tmpdir } from 'node:os'
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
  output = await mkdtemp(path.join(tmpdir(), 'nutui-rate-style-'))
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

describe('Rate release styles', () => {
  test.each(
    ['h5', 'taro'].flatMap((platform) =>
      ['', 'jmapp', 'jrkf', 'daojia'].map((theme) => [platform, theme])
    )
  )(
    'builds %s / %s with scaled variables and isolated RTL output',
    async (platform, theme) => {
      const filename = platform === 'h5' ? 'build.mjs' : 'build-taro.mjs'
      const code = await readFile(path.join(root, 'scripts', filename), 'utf8')
      const { ast, declaration } = getBuildCss(code)
      const dist = path.join(output, `${platform}-${theme || 'default'}`)
      const globals = {
        basename: path.basename,
        extname: path.extname,
        join: path.join,
        relative: path.relative,
        glob: async () => ['src/packages/rate/rate.scss'],
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
      const buildCSS = compileFunction(
        `${declaration.getText(ast)}; return buildCSS;`,
        Object.keys(globals)
      )(...Object.values(globals)) as (themeName: string) => Promise<void>

      await buildCSS(theme)

      const style = `style${theme ? `-${theme}` : ''}`
      const componentDir = path.join(dist, 'es/packages/rate', style)
      const css = await readFile(path.join(componentDir, 'style.css'), 'utf8')
      const miniCss = await readFile(
        path.join(componentDir, 'style.mini.css'),
        'utf8'
      )

      expect(css).toContain(
        '--nutui-rate-size: calc(16px * var(--nut-scale-font, var(--nut-scale-f, 1)))'
      )
      expect(css).toContain('--nutui-rate-item-gap:')
      expect(css).toContain('[dir=rtl] .nut-rate-item-half')
      expect(css).not.toMatch(/\bscale-(?:font-|icon-)?px\(/)
      expect(miniCss).not.toContain('[dir=rtl]')
      expect(miniCss).not.toContain('.nut-rtl ')
    },
    30000
  )
})
