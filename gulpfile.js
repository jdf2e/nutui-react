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
  gulp.watch(`src/packages/**/demos/taro/*`, gulp.series('copyDemo'))
  gulp.watch(`src/packages/${argv}/*.scss`, gulp.series('sass', 'copyCss'))
  gulp.watch(`src/packages/${argv}/demo.taro.tsx`, gulp.series('copyTaroDemo'))
  gulp.watch(`src/packages/${argv}/${argv}.taro.tsx`, gulp.series('copyTaro'))
})

gulp.task('copyDemo', function () {
  return gulp
    .src(`src/packages/${argv}/demos/taro/*`)
    .pipe(gulp.dest(`${targetBaseUrl}/demos/taro/`))
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

gulp.task('copyCss', function () {
  return gulp
    .src([`src/packages/${argv}/*.scss`, `src/packages/${argv}/*.harmony.css`])
    .pipe(gulp.dest(`${targetBaseUrl}/`))
})

gulp.task('copyTaroDemo', function () {
  return gulp
    .src(`src/packages/${argv}/demo.taro.tsx`)
    .pipe(insert.prepend(`import '../../../styles/demo.scss';\n`))
    .pipe(gulp.dest(`${targetBaseUrl}/`))
})

gulp.task('copyTaro', function () {
  return gulp
    .src(`src/packages/${argv}/${argv}.taro.tsx`)
    .pipe(insert.prepend(`import "./${argv}.harmony.css";\n`))
    .pipe(gulp.dest(`${targetBaseUrl}/`))
})
