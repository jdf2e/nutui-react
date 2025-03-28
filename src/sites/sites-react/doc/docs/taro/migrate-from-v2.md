# 从 v2 升级到 v3

本文档将帮助您从 NutUI React `2.x` 升级到 NutUI React `3.x` 版本。

## 升级步骤

1. H5 安装 NutUI React 3.x 版本

```shell
npm install @nutui/nutui-react
```

2. Taro 安装 NutUI React 3.x 版本

```shell
npm install @nutui/nutui-react-taro
```

3. 处理不兼容更新

从 NutUI React 2.x 到 NutUI React 3.x 存在一些不兼容更新，需要仔细阅读不兼容更新内容，并依次处理。

4. 主题变量更名：

## 兼容更新

1. 组件样式处理

新增了按需引入 css 文件的支持，同时保留了按需引入 scss 文件的能力。可通过 babel-import-plugin 插件实现按需引入 css：

H5配置如下：

```json
// Webpack .babelrc 或 babel.config.js中配置
plugins: [
  [
    "import",
    {
      libraryName: "@nutui/nutui-react",
      libraryDirectory: "dist/esm",
      style: 'css',
      camel2DashComponentName: false,
      "customName": (name, file) => {
        return `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}`
      }
    },
    "nutui-react",
  ]
]
```

Taro配置如下：

```json
// Webpack .babelrc 或 babel.config.js中配置
plugins: [
  [
    "import",
    {
      libraryName: "@nutui/nutui-react-taro",
      libraryDirectory: "dist/esm",
      style: 'css',
      camel2DashComponentName: false,
      "customName": (name, file) => {
        return `@nutui/nutui-react-taro/dist/es/packages/${name.toLowerCase()}`
      }
    },
    "nutui-react-taro",
  ]
]
```

## 新增组件

- SideBar
- PickerView

## 不兼容更新

如果你的项目中使用了这些组件，请仔细阅读文档并进行升级

## 组件 API 调整

### 基础组件

#### Button

- 移除样式变量 `--nutui-button-default-font-weight`

[//]: # '#### Cell'
[//]: # '#### CellGroup'
[//]: # '#### ConfigProvider'
[//]: # '#### Icon'
[//]: # '#### Image'
[//]: # '#### Overlay'
[//]: # '#### Popup'

### 布局组件

[//]: # '#### Divider'

#### Grid

- square 属性的默认值调整为 true
- 新增主题变量
  - `--nutui-grid-border-width` 控制边框宽度
  - `--nutui-grid-border-radius` 控制圆角大小
  -

[//]: # '#### Layout'
[//]: # '#### Sticky'

### 导航组件

[//]: # '#### Elevator'
[//]: # '#### FixedNav'

#### Indicator

- 新增 `type` 属性，可选值 `'anchor'` 或 `'slide'`，默认 `anchor`
- 新增 `color` 属性，可选值 `primary` | `'white'`，默认值 `primary`
- `total` 属性的默认值调整为 `2`

[//]: # '#### Menu'

#### NavBar

- 移除 titleAlign 属性，可通过 title 和 children 替代
- 增加 title 属性，默认居中展示
- 组件中出现 children ，则采取 titleAlign 的 left 方式布局

#### Pagination

- `itemRender` 属性类型调整为：`(page: any, index: number) => ReactNode`

#### SideNavBar

- 注意：** 该组件不符合移动端规范，已被废弃。请使用 SideBar **

[//]: # '#### Tabbar'
[//]: # '#### TabbarItem'
[//]: # '#### Tabs'
[//]: # '#### Tabs.Tabpane'

### 数据录入

[//]: # '#### Calendar'

#### Cascader

- `lazy` 属性表示开启数据的自动加载，Cascader 内部通过 `value` 和 `onLoad` 实现了自动加载数据的逻辑。`lazy` 属性必须和 `onLoad` 属性同时设置。
- `onLoad`方法返回的数据类型为 `CascaderOption[]`, 默认支持 promise
- 移除内置构建的树结构
  [//]: # '#### Checkbox'
  [//]: # '#### Checkbox.Group'
  [//]: # '#### DatePicker'
  [//]: # '#### Form'
  [//]: # '#### Form.Item'
  [//]: # '#### Input'

#### InputNumber

- 移除 `async`, 可通过 `beforeChange` 替代
- 增加 `beforeChange`, 处理异步调用
  [//]: # '#### NumberKeyboard'
  [//]: # '#### Picker'
  [//]: # '#### Radio'
  [//]: # '### Radio.Group'
  [//]: # '#### Range'
  [//]: # '#### NumberKeyboard'
  [//]: # '#### Picker'
  [//]: # '#### Radio'
  [//]: # '### Radio.Group'
  [//]: # '#### Range'

#### Rate

- 新增 size 属性，控制图标的大小
- 新增 showScore 属性，展示评分文案

[//]: # '#### SearchBar'
[//]: # '#### ShortPassword'

#### TextArea

- 新增 `plain` 属性，标记为 纯文本型；该值默认为false，标记为 container 容器型
- 新增 `status` 属性，值为 `default` | `error`，可定义输入框的状态
- 删掉一些可使用基础样式变量，并且建议使用基础样式变量的样式变量，比如 `$textarea-font` `$textarea-limit-color` `$textarea-disabled-color`

#### Uploader

- 移除了组件内部关于ajax相关网络逻辑的处理
- 移除了`url`、`headers`、`data`、`xhrState`、`withCredentials`、`timeout` 网络配置相关props
- 移除了`onStart`、`onProgress`、`onFailure`、`beforeXhrUpload` 触发时机函数相关props
- 新增`onOverCount`属性，文件数量超过限制时触发
- 新增`onUploadQueueChange`属性，图片上传队列变化时触发
- 简化`FileItem`类型的使用，除url外其他属性变为可选
- 调整多选状态下`maxCount`属性的默认值为`Number.MAX_VALUE`
- 新增了的 `upload` 方法
- `defaultValue` 和 `value` 的类型从 `FileType` 变更为 `FileItem`

### 操作反馈

[//]: # '#### ActionSheet'

#### BackTop

- Taro
  - 提供鸿蒙端能力，增加 scrollRes 属性

#### Dialog

- 修改了操作按钮上下布局的样式；
- 当只有一个主操作按钮时，主操作按钮样式撑开；
- 增加了底部icon的大小设置的样式变量；修改右侧按钮的默认值为 16 px；

[//]: # '#### Drag'

#### InfiniteLoading

- `target` 属性获取监听的目标元素

#### Notify

- 新增 `distance`，距离顶部/底部距离
- 新增 `closeable`，是否启用关闭模式
- 新增 `leftIcon`，左边的 icon
- 新增 `rightIcon`，右边的 icon
- 新增 `navHeight`，导航栏高度
- 移除 `type`，通过css变量 `--nutui-notify-base-background-color` 修改

[//]: # '#### PullToRefresh'
[//]: # '#### Swipe'

#### Switch

- `activeText` 属性类型更改为`ReactNode`
- `inactiveText` 属性类型更改为 `ReactNode`
- 新增 `loadingIcon` 属性，受控 loading 态图标

[//]: # '#### Toast'

### 展示组件

[//]: # '#### Animate'
[//]: # '#### AnimatingNumbers'

#### Audio

- 注意：** 该组件在 Taro 多端上没有计划支持。请使用 API **

[//]: # '#### Avatar'
[//]: # '#### AvatarGroup'

#### Badge

- 新增 `size` 属性，dot 尺寸，当 dot 等于 `true` 时生效
- 移除 `color`属性（`徽标背景颜色`），通过css变量`--nutui-badge-background-color`实现
- 新增 `disabled` 属性，是否禁用

[//]: # '#### CircleProgress'
[//]: # '#### Collapse'
[//]: # '#### CollapseItem'

#### CountDown

- 新增 `type`，设置变体类型

[//]: # '#### Ellipsis'

#### Empty

- 移除 `--nutui-empty-title-margin-top` 主题变量
- 移除 `--nutui-empty-description-margin-top` 主题变量

[//]: # '#### ImagePreview'
[//]: # '#### NoticeBar'
[//]: # '#### Popover'

#### Price

- 修改 `size`，增加 'xlarge' 尺寸
- 新增 `color`, 价格类型

[//]: # '#### Progress'
[//]: # '#### Skeleton'
[//]: # '#### Steps'
[//]: # '#### Step'
[//]: # '#### Swiper'
[//]: # '#### Table'
[//]: # '#### Tag'
[//]: # '#### TrendArrow'
[//]: # '#### Video'
[//]: # '#### VirtualList'
[//]: # '#### WaterMark'
[//]: # '### 特色组件'
[//]: # '#### Address'
[//]: # '#### Barrage'
[//]: # '#### Card'
[//]: # '#### Signature'
[//]: # '#### TimeSelect'
