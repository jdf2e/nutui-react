import { createRequire } from 'module'
import { readFile, access, writeFile, mkdir } from 'fs/promises'
import { copy } from 'fs-extra'
import { deleteAsync } from 'del'
import { fileURLToPath } from 'url'
import path, { dirname, join, basename, extname, resolve, relative } from 'path'
import { glob } from 'glob'
import swc from '@swc/core'
import * as vite from 'vite'
import * as sass from 'sass'
import postcss, { rule } from 'postcss'
import scss from 'postcss-scss'

const DIST = 'dist'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)
const tsConfig = require('../tsconfig.json')
const ts = require('typescript')

//
function fileName(path) {
  return basename(path).replace(extname(path), '')
}

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
  const h5_TS_Files = await glob(
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
  const taro_TS_Files = await glob(
    [
      'src/packages/**/*.taro.{ts,tsx}',
      'src/utils/**/*.{ts,tsx}',
      'src/locales/*.ts',
    ],
    {
      ignore: [
        'src/packages/**/demo.{ts,tsx}',
        'src/packages/**/*.spec.tsx',
        'src/packages/**/demos/**/*',
      ],
    }
  )

  for (const path of h5_TS_Files) {
    const button = await readFile(join(__dirname, '../', path))
    const aliasCode = button
      .toString()
      .replaceAll('@/locales', '../locales')
      .replaceAll('@/utils', '../utils')
      .replaceAll('@/packages', '..')

    const code = await swc.transform(aliasCode, {
      jsc: {
        target: 'es5',
        parser: {
          syntax: 'typescript',
          tsx: true,
        },
        externalHelpers: true,
      },
    })

    let replace2js = join(
      DIST,
      'es',
      path
        .replace('.tsx', '.js')
        .replace('.ts', '.js')
        .replace('src/packages', '')
    )
    if (path.indexOf('utils/') > -1 || path.indexOf('locales/') > -1) {
      console.log('xxxxx', __dirname, relative(__dirname, path))
      replace2js = join(
        DIST,
        'es',
        path.replace('.tsx', '.js').replace('.ts', '.js').replace('src/', '')
      )
    }

    await dest(replace2js, code.code)
  }
}

// 构建 CMD
async function buildCJS(p) {
  const h5_TS_Files = await glob(['dist/es/**/*.js'])
  const taro_TS_Files = await glob(['src/packages/**/*.taro.js'])

  for (const path of h5_TS_Files) {
    const button = await readFile(join(__dirname, '../', path))
    const aliasCode = button.toString()

    const code = await swc.transform(aliasCode, {
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

    const replace2js = path.replace('es/', 'cjs/')
    await dest(replace2js, code.code)
  }
}

async function buildDeclaration() {
  const h5_TS_Files = await glob(
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
  const taro_TS_Files = await glob(
    [
      'src/packages/**/*.taro.{ts,tsx}',
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
  for (const path of h5_TS_Files) {
    if (path.indexOf('button') == -1) continue
    const button = await readFile(join(__dirname, '../', path))
    const aliasCode = button
      .toString()
      .replaceAll('@/locales', '../locales')
      .replaceAll('@/utils', '../utils')
      .replaceAll('@/packages', '..')

    const code = ts.transpile(aliasCode, {
      ...tsConfig.compilerOptions,
      module: 'ES6',
      declaration: true,
      emitDeclarationOnly: true,
    })

    let replace2js = join(
      DIST,
      'es',
      path
        .replace('.tsx', '.d.ts')
        .replace('.ts', '.d.ts')
        .replace('src/packages', '')
    )
    if (path.indexOf('utils/') > -1 || path.indexOf('locales/') > -1) {
      replace2js = join(
        DIST,
        'es',
        path
          .replace('.tsx', '.d.ts')
          .replace('.ts', '.d.ts')
          .replace('src/', '')
      )
    }

    // await dest(replace2js, code)
    //
    // await dest(replace2js.replace('es/', 'cjs/'), code)
  }
}

// 构建 UMD
async function buildUMD(p) {
  const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
  }
  await vite.build({
    silent: true,
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    },
    build: {
      minify: false,
      emptyOutDir: false,
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: [
          {
            globals,
            format: 'es',
            entryFileNames: 'nutui.react.es.js',
          },
          {
            globals,
            name: 'nutReact',
            format: 'umd',
            entryFileNames: 'nutui.react.umd.js',
          },
        ],
      },
      lib: {
        entry: 'dist/es/nutui.react.build.js',
      },
    },
  })
}

// 拷贝styles
async function copyStyles(p) {
  copy(
    path.resolve(__dirname, '../src/styles'),
    path.resolve(__dirname, '../dist/styles')
  )
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
    const base = path.basename(file)
    const loadPath = join(
      __dirname,
      '../src/packages',
      base.replace('.scss', '')
    )
    const code = sass.compileString(variables + '\n' + button, {
      loadPaths: [loadPath],
    })
    const cssPath = relative('src/packages', loadPath)
    // 写 css 文件
    dest(join(DIST, 'es', cssPath, 'style/style.css'), code.css)
    dest(join(DIST, 'es', cssPath, 'style/css.js'), `import './style.css'`)

    dest(join(DIST, 'cjs', cssPath, 'style/style.css'), code.css)
    dest(join(DIST, 'cjs', cssPath, 'style/css.js'), `import './style.css'`)

    // 删除 import
    // 写入 style.scss
    const atRules = []
    postcss([
      {
        postcssPlugin: 'remove-atrule',
        Once(root) {
          root.nodes.forEach((node, index) => {
            if (node.type === 'atrule') {
              atRules.push(node.params)
              node.remove()
            }
          })
        },
      },
    ])
      .process(button, { from: loadPath, syntax: scss })
      .then((result) => {
        dest(join(DIST, 'es', cssPath, `style/${base}`), result.css)
        dest(join(DIST, 'cjs', cssPath, `style/${base}`), result.css)
      })

    // build js 引入 scss
    // 根据匹配的 import，计算 index.js
    // @import '../popup/popup.scss'; => import '../../popup/style'
    // @import './countup.scss'; => import './countup.scss'
    // 三种处理情况
    // 1. @import '../../styles/mixins/index';
    // 2. @import '../popup/popup.scss';
    // 3. @import './countup.scss';
    const jsContent = []
    atRules.forEach((rule) => {
      rule = rule.replaceAll("'", '')
      if (rule.indexOf('../styles/') > -1) {
        const ext = extname(rule)
        jsContent.push(`import '../${rule}${ext ? '' : '.scss'}';`)
      } else if (rule.startsWith('./')) {
        const base = basename(rule)
        const ext = extname(base)
        const name = base.replace(ext, '')
        jsContent.push(`import './${name}.scss';`)
      } else if (rule.startsWith('../')) {
        const base = basename(rule)
        const ext = extname(base)
        const name = base.replace(ext, '')
        jsContent.push(`import '../../${name}/style';`)
      }
    })
    jsContent.push(`import './${base}';`)

    await dest(
      join(DIST, 'cjs', cssPath, `style/index.js`),
      jsContent.join('\n')
    )
  }
}

console.log('clean dist')
await deleteAsync(DIST)
console.log('clean: OK!')

console.log('build ES Module')
await buildES()
console.log('build ES Module: OK!')

console.log('build CommonJS')
await buildCJS()
console.log('build CommonJS: OK!')

console.log('build UMD')
// await buildUMD()
console.log('build UMD: OK!')

console.log('Copy Styles')
copyStyles()
console.log('Copy Styles: OK!')

console.log('Build CSS')
await buildCSS()
console.log('Build CSS: OK!')

// buildDeclaration()
