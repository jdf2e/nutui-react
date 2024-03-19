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
  const sourceFiles = await glob(
    [
      'src/packages/**/*.taro.{ts,tsx}',
      'src/packages/**/types.ts',
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
    }
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
          '@/locales/*': ['src/locales/*'],
        },
        externalHelpers: true,
      },
    })
    const relativePath = relative(__dirname, path)
    const ext = extname(relativePath)
    const writePath = relativePath.replace(ext, '.js').replace('.taro', '')

    await dest(join('dist/es', writePath.replace('../src/', '')), code.code)

    const transform = (file, api) => {
      const j = api.jscodeshift.withParser('ts')
      return j(file.source)
        .find(j.ImportDeclaration)
        .forEach((path) => {

          path.node.source.value = path.node.source.value?.replace('.taro')
        })
        .toSource()
    }
    const files = await glob(['dist/es/packages/**/.js'])
    for (const file of files) {
      console.log(file)
      const result = transform(
        {
          source: readFileSync(join(__dirname, '../', file), {
            encoding: 'utf8',
          }),
        },
        { jscodeshift: j }
      )
      await dest(file, result)
    }
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
    ignore: ['dist/types/src/**/*.taro.d.ts']
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
        entry: join(__dirname, '../dist/es/packages/nutui.react.build.js'),
      },
    },
  })
}

// 拷贝styles
async function copyStyles(p) {
  copy(
    resolve(__dirname, '../src/styles'),
    resolve(__dirname, '../dist/styles')
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
    dest(join('dist/es', cssPath, 'style/style.css'), code.css)
    dest(join('dist/es', cssPath, 'style/css.js'), `import './style.css'`)

    dest(join('dist/cjs', cssPath, 'style/style.css'), code.css)
    dest(join('dist/cjs', cssPath, 'style/css.js'), `import './style.css'`)

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
        dest(join('dist/es', cssPath, `style/${base}`), result.css)
        dest(join('dist/cjs', cssPath, `style/${base}`), result.css)
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
        jsContent.push(`import '../../${rule}${ext ? '' : '.scss'}';`)
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
      join('dist/cjs', cssPath, `style/index.js`),
      jsContent.join('\n')
    )
    await dest(join('dist/es', cssPath, `style/index.js`), jsContent.join('\n'))
  }
}

//
console.log('clean dist')
await deleteAsync('dist')
console.log('clean: ✅')

console.log('build ES Module')
await buildES()
console.log('build ES Module: ✅')

// console.log('build CommonJS')
// await buildCJS()
// console.log('build CommonJS: ✅')
//
// console.log('build UMD')
// await buildUMD()
// console.log('build UMD: ✅')
//
// console.log('Copy Styles')
// copyStyles()
// console.log('Copy Styles: ✅')
//
// console.log('Build CSS')
// await buildCSS()
// console.log('Build CSS: ✅')
//
// console.log('Build Declaration')
// await buildDeclaration()
// console.log('Build Declaration: ✅')
