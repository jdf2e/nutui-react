/*
 * 通过 dist 目录下的 style/index.js 构建每个组件的 css 文件
 * */
const path = require('path')
const vite = require('vite')
const glob = require('glob')
const atImport = require('postcss-import')
const projectID = process.env.VITE_APP_PROJECT_ID

function scannerFiles() {
  const prefix = './dist/esm/'
  const list = glob.sync(prefix + '**/style/index.js')
  return list
}

function viteConfig(file) {
  return {
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(process.cwd(), './src') }],
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          additionalData: `@import "@/styles/variables${
            projectID ? `-${projectID}` : ''
          }.scss";`,
        },
        postcss: {
          plugins: [atImport({ path: path.join(__dirname, 'src`') })],
        },
      },
    },
    build: {
      emptyOutDir: false,
      outDir: file.replace('index.js', ''),
      lib: {
        entry: file,
        formats: ['es'],
        name: 'style',
        fileName: 'style',
      },
    },
  }
}

function build(files) {
  files.forEach((file) => {
    vite.build(viteConfig(file))
  })
}

build(scannerFiles())
