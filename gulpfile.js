const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const cssvariables = require('postcss-css-variables')
const insert = require('gulp-insert')
const config = require('./src/config.json')

const adaptedNameArray = []
// eslint-disable-next-line array-callback-return
config.nav.map((item) => {
  item.packages.forEach((element) => {
    const { name, version } = element
    if (version !== '3.0.0') return // 未适配不导出
    adaptedNameArray.push(name.toLowerCase())
  })
})
const argvs = process.argv.splice(4)[0]?.split('/') || adaptedNameArray
console.log(argvs, 'argvs')
// 监视频率 https://www.martin-brennan.com/gulp-watch-high-cpu-usage/
const interval = { interval: 500 }
// 监视文件变化
gulp.task('watch', function () {
  argvs.forEach((argv) => {
    gulp.watch(
      `src/packages/${argv}/demos/taro/*`,
      interval,
      gulp.series(`${argv}copyDemo`)
    )
    gulp.watch(
      `src/packages/${argv}/*.scss`,
      interval,
      gulp.series(`${argv}sass`, `${argv}copyCss`)
    )
    gulp.watch(
      `src/packages/${argv}/demo.taro.tsx`,
      interval,
      gulp.series(`${argv}copyTaroDemo`)
    )
    gulp.watch(
      `src/packages/${argv}/${argv}.taro.tsx`,
      interval,
      gulp.series(`${argv}copyTaro`)
    )
  })
  const watchTasks = []
  // eslint-disable-next-line array-callback-return
  argvs.map((argv) => {
    watchTasks.push(...[`${argv}sass`, `${argv}copyCss`])
  })
  gulp.watch(
    [
      `src/styles/variables.scss`,
      'src/styles/mixins/text-ellipsis.scss',
      'src/styles/theme-default.scss',
    ],
    interval,
    gulp.series(watchTasks)
  )
})
argvs.forEach((argv) => {
  const targetBaseUrl = `${process.cwd()}/packages/nutui-taro-demo-rn/nutui-react/packages/${argv}`
  gulp.task(`${argv}copyDemo`, function (path) {
    console.log(path, 'path')
    return gulp
      .src(`src/packages/${argv}/demos/taro/*`)
      .pipe(gulp.dest(`${targetBaseUrl}/demos/taro/`))
  })

  gulp.task(`${argv}sass`, function () {
    return gulp
      .src([`src/packages/${argv}/${argv}.scss`])
      .pipe(
        insert.prepend(
          `@import '../../styles/theme-default.scss';\n@import '../../styles/mixins/text-ellipsis.scss';\n@import '../../styles/variables.scss';\n`
        )
      )
      .pipe(
        sass({
          // 导入全局变量文件，不好用
          // includePaths: [
          //   'src/styles/theme-default.scss',
          //   'src/styles/mixins/text-ellipsis.scss',
          //   'src/styles/variables.scss',
          // ],
        }).on('error', sass.logError)
      )
      .pipe(postcss([cssvariables()]))
      .pipe(
        rename(function (path) {
          path.extname = '.harmony.css'
        })
      )
      .pipe(gulp.dest(`src/packages/${argv}/`))
  })

  gulp.task(`${argv}copyCss`, function () {
    return gulp
      .src([
        `src/packages/${argv}/*.scss`,
        `src/packages/${argv}/*.harmony.css`,
      ])
      .pipe(gulp.dest(`${targetBaseUrl}/`))
  })

  gulp.task(`${argv}copyTaroDemo`, function () {
    return gulp
      .src(`src/packages/${argv}/demo.taro.tsx`)
      .pipe(insert.prepend(`import '../../../styles/demo.scss';\n`))
      .pipe(gulp.dest(`${targetBaseUrl}/`))
  })

  gulp.task(`${argv}copyTaro`, function () {
    return gulp
      .src(`src/packages/${argv}/${argv}.taro.tsx`)
      .pipe(insert.prepend(`import "./${argv}.harmony.css";\n`))
      .pipe(gulp.dest(`${targetBaseUrl}/`))
  })
})
