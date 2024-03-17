import { createRequire } from 'module'
import { readFile, access, writeFile, mkdir } from 'fs/promises'
import { copy } from 'fs-extra'
import { fileURLToPath } from 'url'
import {minimatch} from 'minimatch'
import path, { dirname, join, basename, extname, resolve } from 'path'
import { glob } from 'glob'
import swc from '@swc/core'
import * as vite from 'vite'
import * as sass from 'sass'

const DIST = 'dist'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)
const tsConfig = require('../tsconfig.json')
const ts = require('typescript')

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
  const h5_TS_Files = await glob(['src/packages/**/*.{ts,tsx}', 'src/utils/**/*.{ts,tsx}', 'src/locales/*.ts'], {
    ignore: ['src/packages/**/*.taro.{ts,tsx}', 'src/packages/**/demo.{ts,tsx}', 'src/packages/**/*.spec.tsx', 'src/packages/**/demos/**/*'],
  })
  const taro_TS_Files = await glob(['src/packages/**/*.taro.{ts,tsx}', 'src/utils/**/*.{ts,tsx}', 'src/locales/*.ts'], {
    ignore: ['src/packages/**/*.taro.{ts,tsx}', 'src/packages/**/demo.{ts,tsx}', 'src/packages/**/*.spec.tsx', 'src/packages/**/demos/**/*'],
  })

  for (const path of h5_TS_Files) {
    const button = await readFile(join(__dirname, '../', path))
    const aliasCode = button.toString().replaceAll('@/locales', '../locales').replaceAll('@/utils', '../utils').replaceAll('@/packages', '..')

    // const code = ts.transpile(aliasCode, { ...tsConfig.compilerOptions, 'importHelpers': true })

    const code = await swc.transform(aliasCode, {
      jsc: {
        'target': 'es5',
        'parser': {
          'syntax': 'typescript',
          'tsx': true,
        },
        'externalHelpers': true,
      },
    })

    let replace2js = join(DIST, 'es', path.replace('.tsx', '.js').replace('.ts', '.js').replace('src/packages', ''))
    if (path.indexOf('utils/') > -1 || path.indexOf('locales/') > -1) {
      replace2js = join(DIST, 'es', path.replace('.tsx', '.js').replace('.ts', '.js').replace('src/', ''))
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
        'target': 'es5',
        'parser': {
          'syntax': 'typescript',
          'tsx': true,
        },
        'externalHelpers': true,
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
  const h5_TS_Files = await glob(['src/packages/**/*.{ts,tsx}', 'src/utils/**/*.{ts,tsx}', 'src/locales/*.ts'], {
    ignore: ['src/packages/**/*.taro.{ts,tsx}', 'src/packages/**/demo.{ts,tsx}', 'src/packages/**/*.spec.tsx', 'src/packages/**/demos/**/*'],
  })
  const taro_TS_Files = await glob(['src/packages/**/*.taro.{ts,tsx}', 'src/utils/**/*.{ts,tsx}', 'src/locales/*.ts'], {
    ignore: ['src/packages/**/*.taro.{ts,tsx}', 'src/packages/**/demo.{ts,tsx}', 'src/packages/**/*.spec.tsx', 'src/packages/**/demos/**/*'],
  })
  for (const path of h5_TS_Files) {
    if (path.indexOf('button') == -1) continue
    const button = await readFile(join(__dirname, '../', path))
    const aliasCode = button.toString().replaceAll('@/locales', '../locales').replaceAll('@/utils', '../utils').replaceAll('@/packages', '..')

    const code = ts.transpile(aliasCode, {
      ...tsConfig.compilerOptions,
      module: 'ES6',
      declaration: true,
      emitDeclarationOnly: true,
    })

    console.log(code)

    let replace2js = join(DIST, 'es', path.replace('.tsx', '.d.ts').replace('.ts', '.d.ts').replace('src/packages', ''))
    if (path.indexOf('utils/') > -1 || path.indexOf('locales/') > -1) {
      replace2js = join(DIST, 'es', path.replace('.tsx', '.d.ts').replace('.ts', '.d.ts').replace('src/', ''))
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
    path.resolve(__dirname, '../dist/styles'),
  )
}

// 构建样式
async function buildCSS(p) {
  const cssFiles = await glob(['src/packages/**/*.scss'], {
    ignore: ['src/packages/**/demo.scss'],
  })
  const variables = await readFile(join(__dirname, '../src/styles/variables.scss'))
  for (const file of cssFiles) {
    if (file.indexOf('animatingnumbers') === -1) continue
    const button = await readFile(join(__dirname, '../', file))
    const base = path.basename(file)
    const loadPath = join(__dirname, '../src/packages', base.replace('.scss', ''))
    const code = sass.compileString(variables + '\n' + button, {
      loadPaths: [loadPath],
    })
    console.log(code.css)
    // 写文件
    // dest(, code.css)
  }
}

async function newGlob (pattern, ignore) {
  // const result = await glob.sync(pattern, {ignore})
  const regex = minimatch.makeRe('src/packages/**/*.scss')
  console.log(regex)
  console.log('src/packages/a/b/c/d.scss'.match(regex))
}


// await buildES()

// await buildCJS()

// await buildUMD()

// copyStyles()

buildCSS()
// newGlob()
// buildDeclaration()