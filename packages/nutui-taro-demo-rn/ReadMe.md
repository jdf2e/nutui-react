# NutUI-React 支持 Taro 的调研

## 使用Taro创建一个React的项目
按照官方步骤即可。

1. 安装 taro cli
```
yarn add @tarojs/cli
```

2. 通过taro版本号，检验是否安装成功
```
taro -v
```
当前版本为3.4.4

3. 初始化项目
```
taro init taro-react-demo
```
这里使用 react 框架的默认模板构建，css 预处理器使用scss编译。

4. 运行你的项目
```
npm run dev:weapp
```
并在小程序的IDE下运行该项目，运行目录要指向 dist 文件夹下。

这时，demo 完毕。

## 加入 NutUI-React 元素
1. 安装内置组件的支持插件 @plugin-html
```
yarn add @tarojs/plugin-html
```
2. 配置该内置组件
config/index.js
```
config = {
  // ...
  plugins: ['@tarojs/plugin-html']
}
```
3. 添加 @nutui-react 组件库
```
yarn add @nutui/nutui-react
```

4. 在 /src/pages/index/index.tsx 下添加 nutui-react 组件，进行测试
```
import { Button } from '@nutui/nutui-react';
render () {
  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button type="primary" className='btn'>主要按钮</Button>
    </View>
  )
}
```
5. nutui-react 样式导入
1) 因为nutui-react 使用的是 scss 预处理器，同时，支持主题定制，所以需要在配置文件里，增加对样式变量的引入。

config/index.js
```
sass:{
  data: `@import "@nutui/nutui-react/dist/styles/variables.scss";`
}
```

2) 同时，我们需要在babel配置文件里，增加 import 插件：

babel.config.js
```
plugins: [
  [
    "import",
    {
      "libraryName": "@nutui/nutui-react",
      "libraryDirectory": "dist/esm",
      "style": true,
      "camel2DashComponentName": false
    },
    'nutui-react'
  ]
]
```

记得，安装babel-plugin-import 插件。
```
yarn add babel-plugin-import
```
3) 使用pxconfig，忽略对组件库的单位的转换。
```
pxtransform: {
  config: {
    selectorBlackList: ['nut-']
  }
},
```

## Plugin-HTML 不是万能的

需要处理一些特殊的样式：

1）span 默认表现为块级样式【重点关注】【有涉及，如tag、countup、checkbox、step】
这时的span，兼容了很多h5的标签写法，但是也同样给开发者带来困扰。本来想用来表示行内元素的部分，需要特别指出其样式为 inline；或者引入全套的浏览器默认样式。

<!-- 至于 <i> 等行内标签还是默认映射为 <Text>。如果需要修改映射规则，可以配置 @tarojs/plugin-html 插件的 modifyElements 选项。 -->

抱歉，有些css选择器不支持。比如通配符*，媒体查询，属性选择器（当属性不是对应小程序组件的内置属性时）。
而这些，都是我们在支持taro开发的时候，要跟进的事情。

2）表单组件。差异较大。【关注】
3）不能同步获取元素尺寸。【有涉及，如calendaritem、collapseitem、noticebar、popover、signature、swiper、】
```
// h5
const el = document.getElementById('#inner')
const res = el.getBoundingClientRect()
console.log(res)
```

```
// mp
const query = Taro.createSelectorQuery()
query.select('#inner')
  .boundingClientRect()
  .exec(res => {
    console.log(res)
  })
```

所以 taro 支持了一些api：【更多api去这里 todo】
```
const el = document.getElementById('#inner')
const res = await el.getBoundingClientRect()
console.log(res)

```

4）DOM API 差异【涉及：signature】

像canvas、video、audio 这类元素，需要注意：

```
// h5
const el = document.getElementById('myVideo')
el.play()

```

在小程序里需要调用组件的原生方法，需创建 Context

```
const ctx = Taro.createVideoContext('myVideo')
ctx.play()

```

5）img 图片尺寸问题【涉及，card、empty、fixednav、icon、infiniteloading、popver、uploader；目前看都没有问题，待验证】
h5中，如果不设置宽高，浏览器会使用原图的宽高作为标签的宽高；在小程序里，不设置image标签的宽高时，会使用默认样式中规定的宽高。
所以，在使用img标签时，必须显式设置它的宽高。

6）暂不支持使用 SVG【检查 nuiui-iconfont】

## 和React 相关的不同之处
1. 事件穿透
使用样式，禁止被穿透的组件滚动。

```
{
  overflow：hidden;
  height: 100vh;
}
```

2. Ref

在 Taro 中 ref 的用法和 React 完全一致，但是获取到的 “DOM” 和浏览器环境还有小程序环境都有不同。
使用 React Ref 获取到的是 Taro 的虚拟 DOM，和浏览器的 DOM 相似，可以操作它的 style，调用它的 API 等。
但是 Taro 的虚拟 DOM 运行在小程序的逻辑层，并不是真实的小程序渲染层节点，它没有尺寸宽高等信息。
```
import React, { createRef } from 'react'
import { View } from '@tarojs/components'

export default class Test extends React.Component {
  el = createRef()
  componentDidMount () {
    // 获取到的 DOM 具有类似 HTMLElement 或 Text 等对象的 API
    console.log(this.el.current)
  }

  render () {
    return (
      <View id='only' ref={this.el} />
    )
  }
}
```

3. dangerouslySetInnerHTML【涉及：price】【不建议使用这个属性。】
1) Taro 可以直接通过 Element#innerHTML 或 Vue 的 v-html 或 React/Nerv 的 dangerouslySetInnerHTML 直接渲染 HTML。
```
function helloWorld() {
  const html = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`

  return <View dangerouslySetInnerHTML={{ __html: html }}></View>
}
```

2) html 里的事件和js 会被清除。【未涉及】
```
import '@tarojs/taro/html.css'

function helloWorld() {
  const html = `<h1 id="test">Wallace is way taller than other reporters.</h1>`

  useEffect(() => {
    const el = document.getElementById('test')
    function testOnTap (event) {
      // do something
      ...
    }
    el.addEventListener('tap', testOnTap)

    return () => {
      el.removeEventListener('tap', testOnTap)
    }
  }, [])

  return <View className="taro_html" dangerouslySetInnerHTML={{ __html: html }}></View>
}
```