import { accessSync } from 'fs'
import * as nodepath from 'path'
import { IOptions } from './type'

// 当前nutui的组件
const list = [
  'button',
  'cell',
  'cellgroup',
  'configprovider',
  'image',
  'overlay',
  'col',
  'divider',
  'grid',
  'griditem',
  'layout',
  'row',
  'space',
  'sticky',
  'safearea',
  'backtop',
  'elevator',
  'fixednav',
  'hoverbutton',
  'hoverbuttonitem',
  'navbar',
  'sidebar',
  'tabbar',
  'tabbaritem',
  'tabpane',
  'tabs',
  'address',
  'calendar',
  'calendaritem',
  'calendarcard',
  'cascader',
  'checkbox',
  'checkboxgroup',
  'datepicker',
  'datepickerview',
  'form',
  'formitem',
  'input',
  'inputnumber',
  'menu',
  'menuitem',
  'numberkeyboard',
  'picker',
  'pickerview',
  'radio',
  'radiogroup',
  'range',
  'rate',
  'searchbar',
  'shortpassword',
  'signature',
  'switch',
  'textarea',
  'uploader',
  'actionsheet',
  'badge',
  'dialog',
  'drag',
  'empty',
  'resultpage',
  'infiniteloading',
  'loading',
  'noticebar',
  'notify',
  'popover',
  'popup',
  'pulltorefresh',
  'skeleton',
  'swipe',
  'toast',
  'animate',
  'animatingnumbers',
  'avatar',
  'avatargroup',
  'circleprogress',
  'collapse',
  'collapseitem',
  'countdown',
  'ellipsis',
  'imagepreview',
  'indicator',
  'lottie',
  'pagination',
  'segmented',
  'price',
  'progress',
  'step',
  'steps',
  'swiper',
  'swiperitem',
  'table',
  'tag',
  'tour',
  'video',
  'virtuallist',
  'barrage',
  'card',
  'timedetail',
  'timeselect',
  'trendarrow',
  'watermark',
  'avatarcropper',
]

function injectCSS(options: IOptions) {
  return ({ types: t }) => {
    const { cName, pName } = options
    return {
      visitor: {
        ImportDeclaration(path) {
          if (path.node.source.value === pName && path.node.specifiers.length) {
            // 检查是否已经插入过或者有其他条件判断
            // if (state.file.get('hasInsertedImport')) return
            const realNamePackage = nodepath.normalize(cName)
            let absolutePath: string[] = []
            try {
              const resolvePath = require.resolve(`${realNamePackage}`)
              absolutePath = resolvePath.split(realNamePackage)
            } catch (e) {
              /* empty */
              console.log(`warn: cannot reslove ${realNamePackage}`)
            }

            path.node.specifiers.forEach((specifier) => {
              const name = specifier.imported.name.toLowerCase()
              if (!absolutePath[0]) return
              // td 下如果不处理，会报异常并阻塞。
              if (dynamic() && !list.includes(name)) return
              let importpath = `${absolutePath[0]}${realNamePackage}/dist/es/packages/${name}/style/${options.style === 'css' ? 'css' : 'index'}.js`
              if (harmony() || dynamic()) {
                importpath = `${absolutePath[0]}${realNamePackage}/dist/es/packages/${name}/style/style.harmony.css`
              }
              try {
                accessSync(importpath)
                const importCss = t.importDeclaration(
                  [],
                  t.stringLiteral(importpath)
                )
                const programPath = path.findParent((path) => path.isProgram())
                programPath.unshiftContainer('body', importCss)
              } catch (e) {
                /* empty */
              }
            })
            // 设置一个标记，防止重复插入
            // state.file.set('hasInsertedImport', true)
          }
        },
      },
    }
  }
}

function harmony() {
  return (process.env.TARO_ENV as any).indexOf('harmony') > -1
}

function dynamic() {
  return (process.env.TARO_ENV as any).indexOf('dynamic') > -1
}

export function babelComponentStyle(
  options: IOptions = { cName: '@nutui/nutui-react-taro', pName: '' }
) {
  return injectCSS(options)
}
