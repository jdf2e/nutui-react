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
import { relativePath } from './relative-path.mjs'
import { codeShift } from './build-comments-to-dts.mjs'
import { generate } from './build-theme-typings.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const dist = 'release/h5/dist'
const filePath = resolve(__dirname, '../package.json')
const packageJson = JSON.parse(readFileSync(filePath, 'utf8'))

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
    const importAlias =
      path.node.source?.value?.indexOf('@/') > -1
        ? path.node.source.value
        : ''
    if (!importAlias) return
    const dir = join(__dirname, importAlias.replace('@/', '../src/'))
    path.node.source.value = relativePath(dir, file.path)
  }

  imports.forEach(reNameAlias)
  exps.forEach(reNameAlias)
  exportNameDeclaration.forEach(reNameAlias)

  return ast.toSource()
}

// 构建 ES
async function buildES(p) {
  const soruceFiels = await glob(
    [
      'src/packages/**/*.{ts,tsx}',
      'src/utils/**/*.{ts,tsx}',
      'src/hooks/**/*.{ts,tsx}',
      'src/types/**/*.{ts,tsx}',
      'src/locales/*.ts',
    ],
    {
      ignore: [
        'src/packages/**/*.taro.{ts,tsx}',
        'src/packages/**/demo.{ts,tsx}',
        'src/packages/**/*.spec.tsx',
        'src/packages/**/demos/**/*',
      ],
    },
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
          '@/hooks/*': ['src/hooks/*'],
          '@/hooks': ['src/hooks'],
          '@/types/*': ['src/types/*'],
          '@/types': ['src/types'],
          '@/locales/*': ['src/locales/*'],
          '@/locales': ['src/locales'],
        },
        externalHelpers: true,
      },
    })
    const relativePath = relative(__dirname, path)
    const ext = extname(relativePath)
    const writePath = relativePath.replace(ext, '.js')

    await dest(join(dist, 'es', writePath.replace('../src/', '')), code.code)
  }
}

// 构建 CMD
async function buildCJS(p) {
  const esFiles = await glob([`${dist}/es/**/*.js`])

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
  const types = join(__dirname, `../${dist}/types`)
  await execSync(
    `tsc --project ${configPath} --emitDeclarationOnly --declaration --declarationDir ${types}`,
  )


  const files = await glob([`${dist}/types/src/**/*.d.ts`], {
    ignore: [`${dist}/types/src/**/*.taro.d.ts`],
  })

  for (const file of files) {
    const result = transform(
      {
        source: readFileSync(join(__dirname, '../', file), {
          encoding: 'utf8',
        }),
        path: join(__dirname, '../', file).replace(`${dist}/types`, ''),
      },
      { jscodeshift: j },
    )
    await dest(join(dist, 'es', file.replace(`${dist}/types/src`, '')), result)
    await dest(join(dist, 'cjs', file.replace(`${dist}/types/src`, '')), result)
  }
  deleteAsync(`${dist}/types`)
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
      outDir: dist,
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
        entry: join(__dirname, `../${dist}/es/packages/nutui.react.build.js`),
      },
    },
  })
}

// 针对不同主题构建全量的 style
async function buildAllCSS(themeName = '') {
  // 拷贝styles
  const themeStylePath = themeName ? `style-${themeName}` : 'style'
  async function generateAllStyles() {
    const content = [
      `@import './styles/variables${themeName ? `-${themeName}` : ''}.scss';`,
      `@import './styles/mixins/index.scss';`,
      `@import './styles/animation/index.scss';`,
    ]
    const scssFiles = await glob([`${dist}/es/packages/**/${themeStylePath}/*.scss`])
    scssFiles.forEach((file) => {
      content.push(
        `@import '${relativePath('/' + file, `/${dist}/${themeStylePath}.scss`)}';`,
      )
    })
    await dest(`${dist}/${themeStylePath}.scss`, content.join('\n'))
  }

  await generateAllStyles()
  await vite.build({
    configFile: false,
    logLevel: 'error',
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, '../src') }],
    },
    build: {
      emptyOutDir: false,
      outDir: dist,
      lib: {
        entry: `./${dist}/${themeStylePath}.scss`,
        formats: ['es'],
        name: 'style',
        fileName: 'style',
      },
      rollupOptions: {
        output: {
          assetFileNames: `${themeStylePath}.css`, // 资源文件名
        }
      }
    },
  })
}

async function buildThemeCSS() {
  const files = await glob([`${dist}/styles/theme-*.scss`], {
    ignore: [`${dist}/types/src/**/*.taro.d.ts`],
  })
  const projectID = process.env.VITE_APP_PROJECT_ID
  const inputFiles = {}
  // nuitui 官方包包含全部主题文件，包括：
  // default.css 默认明亮主题
  // dark.css 默认暗黑主题
  // jmapp.css、jrkf.css 主题
  // 例如：jmapp 包只包含 jmapp 的主题文件，且是默认主题文件。
  files.forEach(filePath => {
    const themeName = basename(filePath, 'scss').replace('theme-', '')
    if (!projectID) {
      inputFiles[themeName] = `./${filePath}`
    } else {
      if (themeName === projectID) {
        inputFiles['default'] = `./${filePath}`
      }
      if (themeName === `${projectID}-dark`) {
        inputFiles['dark'] = `./${filePath}`
      }
    }
  })

  await vite.build({
    configFile: false,
    logLevel: 'error',
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, '../src') }],
    },
    build: {
      emptyOutDir: false,
      rollupOptions: {
        input: inputFiles,
        output: [
          {
            dir: `${dist}/styles/themes`,
            assetFileNames: '[name].css',
          },
        ],
      },
    },
  })
}

// 拷贝styles
async function copyStyles() {
  await copy(
    resolve(__dirname, '../src/styles'),
    resolve(__dirname, `../${dist}/styles`),
  )
}

// 构建样式
async function buildCSS(themeName = '') {
  const componentScssFiles = await glob(['src/packages/**/*.scss'], {
    ignore: ['src/packages/**/demo.scss'],
  })

  const variables = await readFile(
    join(__dirname, `../src/styles/variables${themeName ? `-${themeName}` : ''}.scss`),
  )
  for (const file of componentScssFiles) {
    const scssContent = await readFile(join(__dirname, '../', file), {
      encoding: 'utf8',
    })
    // countup 是特例
    const base = basename(file)
    const loadPath = join(
      __dirname,
      '../src/packages',
      base.replace('.scss', ''),
    )
    const cssPath = relative('src', loadPath)
    // 删除 import
    // 写入 style.scss
    const atRules = []
    const postcssRes = await postcss([
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
      .process(scssContent, { from: loadPath, syntax: scss })
      .then((result) => {
        return result
      })
    const themeDir = themeName ? `style-${themeName}` : 'style'
    await dest(join(`${dist}/es`, cssPath, `${themeDir}/${base}`), postcssRes.css)
    await dest(join(`${dist}/cjs`, cssPath, `${themeDir}/${base}`), postcssRes.css)

    const code = sass.compileString(variables + '\n' + postcssRes.css.replaceAll('../../../../', '../../'), {
      loadPaths: [loadPath],
    })
    await dest(join(`${dist}/es`, cssPath, `${themeDir}/style.css`), code.css)
    await dest(join(`${dist}/cjs`, cssPath, `${themeDir}/style.css`), code.css)

    const jsContent = []
    const cssContent = []
    atRules.forEach((rule) => {
      rule = rule.replaceAll('\'', '')
      if (rule.indexOf('../styles/') > -1) {
        const ext = extname(rule)
        jsContent.push(`import '../../${rule}${ext ? '' : '.scss'}';`)
      } else if (rule.startsWith('../') || rule.startsWith('./')) {
        const base = basename(rule)
        const ext = extname(base)
        const name = base.replace(ext, '')
        jsContent.push(`import '../../${name}/${themeDir}';`)
        cssContent.push(`import '../../${name}/${themeDir}/css';`)
      }
    })
    jsContent.push(`import './${base}';`)
    cssContent.push(`import './style.css';`)

    await dest(
      join(`${dist}/cjs`, cssPath, `${themeDir}/index.js`),
      jsContent.join('\n'),
    )
    await dest(join(`${dist}/es`, cssPath, `${themeDir}/index.js`), jsContent.join('\n'))

    // 写 css 文件
    await dest(join(`${dist}/es`, cssPath, `${themeDir}/css.js`), cssContent.join('\n'))
    await dest(
      join(`${dist}/cjs`, cssPath, `${themeDir}/css.js`),
      cssContent.join('\n'),
    )
  }
}

function generateReleasePackageJson() {
  delete packageJson.dependencies['@nutui/icons-react-taro']
  return JSON.stringify({
    name: '@nutui/nutui-react',
    version: packageJson.version,
    style: packageJson.style,
    main: packageJson.main,
    module: packageJson.module,
    typings: packageJson.typings,
    scripts: {
      'publish:beta': 'npm publish --tag=beta --access public --no-git-checks',
      'publish:latest': 'npm publish --access public --no-git-checks',
    },
    sideEffects: packageJson.sideEffects,
    description: packageJson.description,
    keywords: packageJson.keywords,
    author: packageJson.author,
    license: packageJson.license,
    repository: packageJson.repository,
    files: packageJson.files,
    publishConfig: packageJson.publishConfig,
    dependencies: packageJson.dependencies,
    peerDependencies: packageJson.peerDependencies,
  })
}

async function copyReleaseFiles() {
  const npmPublishDir = dist.replace('dist', '')
  await copy(join(__dirname, '../README.md'), join(`${npmPublishDir}/README.md`))
  await copy(join(__dirname, '../CHANGELOG.md'), join(`${npmPublishDir}/CHANGELOG.md`))
  await copy(join(__dirname, '../src/packages/lottie/animation'), join(`${npmPublishDir}/dist/es/packages/lottie/animation`))
  await copy(join(__dirname, '../src/packages/lottie/animation'), join(`${npmPublishDir}/dist/cjs/packages/lottie/animation`))
  await writeFile(join(__dirname, `../${npmPublishDir}/package.json`), generateReleasePackageJson())
}

console.time(`clean ${dist}`)
await deleteAsync(dist)
console.timeEnd(`clean ${dist}`)

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


console.time('Copy Styles')
await copyStyles()
console.timeEnd('Copy Styles')

console.time('Build CSS')
await buildCSS()
console.timeEnd('Build CSS')

console.time('Build jmapp CSS')
await buildCSS('jmapp')
console.timeEnd('Build jmapp CSS')

console.time('Build jrkf CSS')
await buildCSS('jrkf')
console.timeEnd('Build jrkf CSS')

console.time('Build All CSS')
await buildAllCSS()
console.timeEnd('Build All CSS')

console.time('Build All jmapp CSS')
await buildAllCSS('jmapp')
console.timeEnd('Build All jmapp CSS')

console.time('Build All jrkf CSS')
await buildAllCSS('jrkf')
console.timeEnd('Build All jrkf CSS')


console.time('Build Theme CSS')
await buildThemeCSS()
console.timeEnd('Build Theme CSS')

console.time('Build Declaration')
await buildDeclaration()
console.timeEnd('Build Declaration')

await deleteAsync([
  `${dist}/es/packages/nutui.react.js`,
  `${dist}/es/packages/nutui.react.d.ts`,
  `${dist}/es/packages/nutui.react.scss.d.ts`,
  `${dist}/es/packages/nutui.react.scss.js`,
])

console.time('Build JSDoc')
codeShift('h5')
console.timeEnd('Build JSDoc')

console.time('Copy package.json readme.md')
await copyReleaseFiles()
console.timeEnd('Copy package.json readme.md')
