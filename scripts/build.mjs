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
import { readFile, access, writeFile, mkdir } from 'fs/promises'
import { dirname, join, basename, extname, resolve, relative } from 'path'
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

// 构建 ES
async function buildES(p) {
  const soruceFiels = await glob(
    [
      'src/packages/**/*.{ts,tsx}',
      'src/utils/**/*.{ts,tsx}',
      'src/locales/*.ts',
    ],
    {
      ignore: [
        'src/packages/**/*.taro.{ts,tsx}',
        'src/packages/**/demo.{ts,tsx}',
        'src/packages/**/*.spec.tsx',
        'src/packages/**/demos/**/*',
      ],
    }
  )

  for (const path of soruceFiels) {
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
    const writePath = relativePath.replace(ext, '.js')

    await dest(join('dist/es', writePath.replace('../src/', '')), code.code)
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
  const configPath = join(__dirname, '../tsconfig.h5.json')
  const dist = join(__dirname, '../dist/types')
  await execSync(
    `tsc --project ${configPath} --emitDeclarationOnly --declaration --declarationDir ${dist}`
  )
  const transform = (file, api) => {
    const j = api.jscodeshift.withParser('ts')
    return j(file.source)
      .find(j.ImportDeclaration)
      .forEach((path) => {
        const importAlias =
          path.node.source.value?.indexOf('@/') > -1
            ? path.node.source.value
            : ''
        if (!importAlias) return
        const dir = join(__dirname, importAlias.replace('@/', '../src/'))
        path.node.source.value = relativeFilePath(file.path, dir)
      })
      .toSource()
  }

  const files = await glob(['dist/types/src/**/*.d.ts'], {
    ignore: ['dist/types/src/**/*.taro.d.ts'],
  })

  for (const file of files) {
    const result = transform(
      {
        source: readFileSync(join(__dirname, '../', file), {
          encoding: 'utf8',
        }),
        path: join(__dirname, '../', file).replace('/dist/types', ''),
      },
      { jscodeshift: j }
    )
    await dest(join('dist/es', file.replace('dist/types/src', '')), result)
    await dest(join('dist/cjs', file.replace('dist/types/src', '')), result)
  }
  deleteAsync('dist/types')
}

// 构建 UMD
async function buildUMD(p) {
  const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
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
        external: ['react', 'react-dom'],
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
  await vite.build({
    logLevel: 'error',
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, '../src') }],
    },
    build: {
      emptyOutDir: false,
      lib: {
        entry: './dist/styles/themes/default.scss',
        formats: ['es'],
        name: 'style',
        fileName: 'style',
      },
    },
  })
}

// 拷贝styles
async function copyStyles() {
  await copy(
    resolve(__dirname, '../src/styles'),
    resolve(__dirname, '../dist/styles')
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
    join(__dirname, '../src/styles/variables.scss')
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
      base.replace('.scss', '')
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
      `import './style.css'`
    )

    // 删除 import
    // 写入 style.scss
    const atRules = []
    await postcss([
      {
        postcssPlugin: 'remove-atrule',
        AtRule(root) {
          if (root.name === 'import') {
            if (root.params.indexOf("'../../styles") > -1) {
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
      rule = rule.replaceAll("'", '')
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
      jsContent.join('\n')
    )
    await dest(join('dist/es', cssPath, `style/index.js`), jsContent.join('\n'))
  }
}

// async function exportProps() {
//   const types = []
//   const a = await readFile(join(__dirname, '../src/config.json'))
//   const componentsConfig = JSON.parse(a.toString())
//   componentsConfig.nav.forEach((item) => {
//     item.packages.forEach((element) => {
//       const { name, show, exportEmpty } = element
//       if (show || exportEmpty) {
//         const lowerName = name.toLowerCase()
//         if (lowerName === 'icon') return
//         types.push(`export * from './${lowerName}/index'`)
//       }
//     })
//   })
//   await appendFile(
//     join(__dirname, '../dist/es/packages/nutui.react.build.d.ts'),
//     types.join('\n')
//   )
// }

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
