const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const cssvariables = require('postcss-css-variables')
const insert = require('gulp-insert')
const yargs = require('yargs')

const argv = yargs.argv.environment
// const argv = process.argv.splice(3)

const targetBaseUrl = `${process.cwd()}/packages/nutui-taro-demo-rn/nutui-react/packages/${argv}`

gulp.task('watch', function () {
  gulp.watch(
    `src/packages/${argv}/*`,
    gulp.series('sass', 'copy', 'modify', 'modifyDemo')
  )
})

gulp.task('sass', function () {
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

gulp.task('copy', function () {
  return gulp.src(`src/packages/${argv}/*`).pipe(gulp.dest(`${targetBaseUrl}/`))
})

gulp.task('modifyDemo', function () {
  return gulp
    .src(`${targetBaseUrl}/demo.taro.tsx`)
    .pipe(insert.prepend(`import '../../../styles/demo.scss';\n`))
    .pipe(gulp.dest(`${targetBaseUrl}/`))
})

gulp.task('modify', function () {
  return gulp
    .src(`${targetBaseUrl}/${argv}.taro.tsx`)
    .pipe(insert.prepend(`import "./${argv}.harmony.css";\n`))
    .pipe(gulp.dest(`${targetBaseUrl}/`))
})
