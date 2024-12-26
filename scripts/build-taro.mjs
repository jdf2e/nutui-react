import { glob } from 'glob'
import swc from '@swc/core'
import * as vite from 'vite'
import * as sass from 'sass'
import postcss from 'postcss'
import scss from 'postcss-scss'
import { copy } from 'fs-extra'
import { deleteAsync } from 'del'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'
import { access, mkdir, readFile, writeFile } from 'fs/promises'
import { basename, dirname, extname, join, relative, resolve } from 'path'
import j from 'jscodeshift'
import { readFileSync } from 'fs'
import { relativeFilePath } from './relative-path.mjs'
import { codeShift } from './build-comments-to-dts.mjs'
import { generate } from './build-theme-typings.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 写文件
async function dest(file, content) {
  const dir = dirname(file)
  try {
    await access(dir)
  } catch (e) {
    // mkdir
    await mkdir(dir, { recursive: true })
  }
  await writeFile(file, content)
}

const transform = (file, api) => {
  const j = api.jscodeshift.withParser('ts')
  const ast = j(file.source)
  const imports = ast.find(j.ImportDeclaration)
  const exps = ast.find(j.ExportAllDeclaration)
  const exportNameDeclaration = ast.find(j.ExportNamedDeclaration)

  function reNameAlias(path) {
    const alias =
      path.node.source?.value?.indexOf('@/') > -1
        ? path.node.source.value
        : ''
    if (!path.node.source) return
    if (!alias) {
      path.node.source.value = path.node.source.value.replace('.taro', '')
      return
    }
    const dir = join(__dirname, alias.replace('@/', '../src/'))
    path.node.source.value = relativeFilePath(file.path, dir)?.replace(
      '.taro',
      '',
    )
  }

  imports.forEach(reNameAlias)
  exps.forEach(reNameAlias)
  exportNameDeclaration.forEach(reNameAlias)

  return ast.toSource()
}

// 构建 ES
async function buildES(p) {
  const sourceFiles = await glob(
    [
      'src/packages/**/*.taro.{ts,tsx}',
      'src/packages/**/types.ts',
      'src/packages/**/context.ts',
      'src/packages/**/utils.ts',
      'src/utils/**/*.{ts,tsx}',
      'src/locales/*.ts',
    ],
    {
      ignore: [
        'src/packages/**/demo.{ts,tsx}',
        'src/packages/**/demo.taro.{ts,tsx}',
        'src/packages/**/*.spec.tsx',
        'src/packages/**/demos/**/*',
      ],
    },
  )

  for (const path of sourceFiles) {
    const code = await swc.transformFileSync(join(__dirname, '../', path), {
      jsc: {
        baseUrl: join(__dirname, '../'),
        target: 'es5',
        parser: {
          syntax: 'typescript',
          tsx: true,
        },
        paths: {
          '@/packages/*': ['src/packages/*'],
          '@/utils/*': ['src/utils/*'],
          '@/utils': ['src/utils'],
          '@/locales/*': ['src/locales/*'],
        },
        externalHelpers: true,
      },
    })
    const relativePath = relative(__dirname, path)
    const ext = extname(relativePath)
    const writePath = relativePath.replace(ext, '.js').replace('.taro', '')

    await dest(join('dist/es', writePath.replace('../src/', '')), code.code)
  }

  const files = await glob(['dist/es/packages/**/*.js'])
  for (const file of files) {
    const result = transform(
      {
        source: readFileSync(join(__dirname, '../', file), {
          encoding: 'utf8',
        }),
      },
      { jscodeshift: j },
    )
    await dest(file, result)
  }
}

// 构建 CMD
async function buildCJS(p) {
  const esFiles = await glob(['dist/es/**/*.js'])

  for (const path of esFiles) {
    const code = await swc.transformFileSync(join(__dirname, '../', path), {
      jsc: {
        target: 'es5',
        parser: {
          syntax: 'typescript',
          tsx: true,
        },
        externalHelpers: true,
      },
      module: {
        type: 'commonjs',
      },
    })

    await dest(path.replace('es/', 'cjs/'), code.code)
  }
}

async function buildDeclaration() {
  const configPath = join(__dirname, '../tsconfig.taro.json')
  const dist = join(__dirname, '../dist/types')
  await execSync(
    `tsc --project ${configPath} --emitDeclarationOnly --declaration --declarationDir ${dist}`,
  )

  const files = await glob([
    'dist/types/src/packages/**/*.taro.d.ts',
    'dist/types/src/packages/**/types.d.ts',
    'dist/types/src/packages/**/context.d.ts',
    'dist/types/src/packages/**/utils.d.ts',
    'dist/types/src/locales/*.d.ts',
    'dist/types/src/utils/*.d.ts',
  ])

  for (const file of files) {
    const result = transform(
      {
        source: readFileSync(join(__dirname, '../', file), {
          encoding: 'utf8',
        }),
        path: join(__dirname, '../', file).replace('/dist/types', ''),
      },
      { jscodeshift: j },
    )
    const to = file.replace('dist/types/src', '').replace('.taro', '')
    await dest(join('dist/es', to), result)
    await dest(join('dist/cjs', to), result)
  }
  deleteAsync('dist/types')
}

// 构建 UMD
async function buildUMD() {
  const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    '@tarojs/taro': 'Taro',
    '@tarojs/components': 'TaroComponents',
  }
  await vite.build({
    logLevel: 'error',
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, '../src') }],
    },
    build: {
      minify: false,
      emptyOutDir: false,
      rollupOptions: {
        external: ['react', 'react-dom', '@tarojs/taro', '@tarojs/components'],
        output: [
          {
            globals,
            name: 'nutReact',
            format: 'umd',
            entryFileNames: 'nutui.react.umd.js',
          },
        ],
      },
      lib: {
        entry: join(__dirname, '../dist/es/packages/nutui.react.build.js'),
      },
    },
  })
}

async function buildAllCSS() {
  // 拷贝styles
  async function copyStyles() {
    await copy(
      resolve(__dirname, '../src/styles'),
      resolve(__dirname, '../dist/styles')
    )

    const content = [
      `@import './styles/theme-default.scss';`,
      `@import './styles/variables.scss';`,
      `@import './styles/mixins/index.scss';`,
      `@import './styles/animation/index.scss';`,
    ]
    const projectID = process.env.VITE_APP_PROJECT_ID
    if (projectID) {
      content[1] = `@import '../variables-${projectID}.scss';`
    }
    const scssFiles = await glob(['dist/es/packages/**/*.scss'])
    scssFiles.forEach((file) => {
      content.push(
        `@import '${relativeFilePath('/dist/style.scss', '/' + file)}';`
      )
    })
    dest('dist/style.scss', content.join('\n'))
  }
  await copyStyles()
  await vite.build({
    logLevel: 'error',
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, '../src') }],
    },
    build: {
      emptyOutDir: false,
      lib: {
        entry: './dist/style.scss',
        formats: ['es'],
        name: 'style',
        fileName: 'style',
      },
    },
  })
}

async function buildThemeCSS() {
  await vite.build({
    logLevel: 'error',
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, '../src') }],
    },
    build: {
      emptyOutDir: false,
      rollupOptions: {
        output: [
          {
            dir: 'dist/styles/themes',
            assetFileNames: 'default.css',
          },
        ],
      },
      lib: {
        entry: './dist/styles/themes/default.scss',
      },
    },
  })
}

// 拷贝styles
async function copyStyles() {
  await copy(
    resolve(__dirname, '../src/styles'),
    resolve(__dirname, '../dist/styles'),
  )

  let content = [
    `@import '../theme-default.scss';`,
    `@import '../theme-dark.scss';`,
    `@import '../jd-font';`,
  ]
  const projectID = process.env.VITE_APP_PROJECT_ID
  if (projectID) {
    content = [
      `@import '../theme-${projectID}.scss';`,
      `@import '../jd-font';`,
    ]
  }

  dest('dist/styles/themes/default.scss', content.join('\n'))
}

// 构建样式
async function buildCSS(p) {
  const cssFiles = await glob(['src/packages/**/*.scss'], {
    ignore: ['src/packages/**/demo.scss'],
  })

  const variables = await readFile(
    join(__dirname, '../src/styles/variables.scss'),
  )
  for (const file of cssFiles) {
    const button = await readFile(join(__dirname, '../', file), {
      encoding: 'utf8',
    })
    // countup 是特例
    const base = basename(file)
    const loadPath = join(
      __dirname,
      '../src/packages',
      base.replace('.scss', ''),
    )
    const code = sass.compileString(variables + '\n' + button, {
      loadPaths: [loadPath],
    })
    const cssPath = relative('src', loadPath)
    // 写 css 文件
    await dest(join('dist/es', cssPath, 'style/style.css'), code.css)
    await dest(join('dist/es', cssPath, 'style/css.js'), `import './style.css'`)

    await dest(join('dist/cjs', cssPath, 'style/style.css'), code.css)
    await dest(
      join('dist/cjs', cssPath, 'style/css.js'),
      `import './style.css'`,
    )

    // 删除 import
    // 写入 style.scss
    const atRules = []
    await postcss([
      {
        postcssPlugin: 'remove-atrule',
        AtRule(root) {
          if (root.name === 'import') {
            if (root.params.indexOf('\'../../styles') > -1) {
              atRules.push(root.params)
              root.params = root.params.replace('../../', '../../../../')
              return
            }
            if (root.params.indexOf('styles') === -1) {
              atRules.push(root.params)
              root.remove()
            }
          }
        },
      },
    ])
      .process(button, { from: loadPath, syntax: scss })
      .then((result) => {
        dest(join('dist/es', cssPath, `style/${base}`), result.css)
        dest(join('dist/cjs', cssPath, `style/${base}`), result.css)
      })

    const jsContent = []
    atRules.forEach((rule) => {
      rule = rule.replaceAll('\'', '')
      if (rule.indexOf('../styles/') > -1) {
        const ext = extname(rule)
        jsContent.push(`import '../../${rule}${ext ? '' : '.scss'}';`)
      } else if (rule.startsWith('../') || rule.startsWith('./')) {
        const base = basename(rule)
        const ext = extname(base)
        const name = base.replace(ext, '')
        jsContent.push(`import '../../${name}/style';`)
      }
    })
    jsContent.push(`import './${base}';`)

    await dest(
      join('dist/cjs', cssPath, `style/index.js`),
      jsContent.join('\n'),
    )
    await dest(join('dist/es', cssPath, `style/index.js`), jsContent.join('\n'))
  }

}

console.time('clean dist')
await deleteAsync('dist')
console.timeEnd('clean dist')

await generate()

console.time('build ES Module')
await buildES()
console.timeEnd('build ES Module')

console.time('build CommonJS')
await buildCJS()
console.timeEnd('build CommonJS')

console.time('build UMD')
await buildUMD()
console.timeEnd('build UMD')

console.time('Build CSS')
await buildCSS()
console.timeEnd('Build CSS')

console.time('Copy Styles')
await copyStyles()
console.timeEnd('Copy Styles')

console.time('Build All CSS')
await buildAllCSS()
console.timeEnd('Build All CSS')

console.time('Build Theme CSS')
await buildThemeCSS()
console.timeEnd('Build Theme CSS')

console.time('Build Declaration')
await buildDeclaration()
console.timeEnd('Build Declaration')

// await exportProps()

await deleteAsync([
  'dist/es/packages/nutui.react.js',
  'dist/es/packages/nutui.react.d.ts',
  'dist/es/packages/nutui.react.scss.d.ts',
  'dist/es/packages/nutui.react.scss.js',
])

console.time('Build JSDoc')
codeShift()
console.timeEnd('Build JSDoc')
