import { readFile, writeFile, mkdir, mkdtemp, rm } from 'node:fs/promises'
import * as path from 'node:path'
import { tmpdir } from 'node:os'
import { createRequire } from 'node:module'
import { compileFunction } from 'node:vm'
import * as ts from 'typescript'
import * as sass from 'sass'
import postcss from 'postcss'
import scss from 'postcss-scss'
import { glob } from 'glob'
import stripRtlPlugin from '../../../scripts/strip-rtl.mjs'

const root = path.resolve(__dirname, '../../..')
const require = createRequire(import.meta.url)
const { build } = createRequire(require.resolve('vite/package.json'))('esbuild')
const pxToScalePxInComponentScss = require('../../../scripts/px-to-scale-px-in-component-scss.cjs')

const components = [
  'button',
  'empty',
  'resultpage',
  'dialog',
  'overlay',
  'tabs',
  'uploader',
  'range',
  'backtop',
  'hoverbutton',
  'barrage',
  'noticebar',
  'skeleton',
]
let output: string

beforeAll(async () => {
  output = await mkdtemp(path.join(tmpdir(), 'nutui-style-regression-'))
})

afterAll(async () => {
  await rm(output, { recursive: true, force: true })
})

function getFunction(code: string, name: string) {
  const ast = ts.createSourceFile(
    'build.mjs',
    code,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.JS
  )
  const declaration = ast.statements.find(
    (node): node is ts.FunctionDeclaration =>
      ts.isFunctionDeclaration(node) && node.name?.text === name
  )
  if (!declaration) throw new Error(`Missing ${name}`)
  return { ast, declaration }
}

describe('release style entry points', () => {
  it.each(
    ['h5', 'taro'].flatMap((platform) =>
      ['', 'jmapp', 'jrkf', 'daojia'].map((theme) => [platform, theme])
    )
  )(
    'builds CSS-only mini entries for %s / %s',
    async (platform, theme) => {
      const file = platform === 'h5' ? 'build.mjs' : 'build-taro.mjs'
      const code = await readFile(path.join(root, 'scripts', file), 'utf8')
      const { ast, declaration } = getFunction(code, 'buildCSS')
      const dist = path.join(output, platform)
      const globals = {
        basename: path.basename,
        extname: path.extname,
        join: path.join,
        relative: path.relative,
        glob: async () =>
          components.map((name) => `src/packages/${name}/${name}.scss`),
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
      // Execute the actual build function, redirecting only its I/O and component set.
      const buildCSS = compileFunction(
        `${declaration.getText(ast)}; return buildCSS;`,
        Object.keys(globals)
      )(...Object.values(globals))
      await buildCSS(theme)
      const style = `style${theme ? `-${theme}` : ''}`
      const componentDir = (name: string) =>
        path.join(dist, 'es/packages', name, style)
      for (const name of components) {
        const entry = await readFile(
          path.join(componentDir(name), 'mini.js'),
          'utf8'
        )
        expect(entry).not.toContain('.scss')
        const css = await readFile(
          path.join(componentDir(name), 'style.mini.css'),
          'utf8'
        )
        expect(css).not.toContain('[dir=rtl]')
        expect(css).not.toContain('.nut-rtl ')
        expect(css).not.toContain('.rtl-nut-range')
        expect(css).not.toContain('.nut-backtop-rtl')
        expect(css).not.toContain('.nut-hoverbutton-container-rtl')
        expect(css).not.toMatch(/keyframes\s+[\w-]*-rtl/)
        expect(css).not.toMatch(/\bscale-(?:font-|icon-)?px\(/)
      }
      for (const name of ['dialog', 'empty', 'resultpage']) {
        const entry = await readFile(
          path.join(componentDir(name), 'mini.js'),
          'utf8'
        )
        expect(entry).toContain(`../../button/${style}/base-mini`)
        expect(entry).not.toContain(`../../button/${style}/mini`)
      }
      const result = await build({
        entryPoints: [
          path.join(componentDir('dialog'), 'mini.js'),
          path.join(componentDir('empty'), 'mini.js'),
          path.join(componentDir('resultpage'), 'mini.js'),
        ],
        bundle: true,
        write: false,
        outdir: path.join(dist, 'consumer'),
        loader: { '.css': 'css' },
        logLevel: 'silent',
      })
      const css = result.outputFiles
        .filter((file) => file.path.endsWith('.css'))
        .map((file) => file.text)
        .join('\n')
      // 复合组件坚守减重：仅拉取 button-base，成功剔除未用变体样式
      expect(css).toContain('.nut-button')
      expect(css).toContain('calc(84px * var(--nut-scale-f, 1))')
      expect(css).not.toContain('.nut-button-xlarge')
      expect(css).not.toContain('.nut-button-success')
    },
    30000
  )

  it('defines the JMApp primary-light theme token', async () => {
    const css = sass.compileString(
      await readFile(path.join(root, 'src/styles/theme-jmapp.scss'), 'utf8'),
      { logger: sass.Logger.silent }
    ).css
    expect(css).toContain('--nutui-color-primary-light: var(--nutui-brand-1)')
  })
})

describe('release source selection', () => {
  it.each(['build.mjs', 'build-taro.mjs'])(
    'excludes tests from %s JS output',
    async (filename) => {
      const code = await readFile(path.join(root, 'scripts', filename), 'utf8')
      const { ast, declaration } = getFunction(code, 'buildES')
      let args: any[] | undefined
      const visit = (node: ts.Node) => {
        if (
          ts.isCallExpression(node) &&
          node.expression.getText(ast) === 'glob' &&
          !args
        ) {
          args = node.arguments.map((argument) =>
            compileFunction(`return (${argument.getText(ast)})`)()
          )
        }
        ts.forEachChild(node, visit)
      }
      visit(declaration)
      if (!args) throw new Error('Missing build source glob')
      const files = await glob(args[0], { ...args[1], cwd: root })
      expect(files.length).toBeGreaterThan(0)
      expect(
        files.filter(
          (file) =>
            /\.(spec|test)\.(ts|tsx)$/.test(file) || /\/__tests?__\//.test(file)
        )
      ).toEqual([])
    }
  )

  it.each(['h5', 'taro'])('excludes tests from %s declarations', (platform) => {
    const configPath = path.join(root, `tsconfig.${platform}.json`)
    const config = ts.readConfigFile(configPath, ts.sys.readFile)
    const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, root)
    expect(parsed.fileNames.length).toBeGreaterThan(0)
    expect(
      parsed.fileNames.filter(
        (file) =>
          /\.(spec|test)\.(ts|tsx)$/.test(file) || /\/__tests?__\//.test(file)
      )
    ).toEqual([])
  })
})
