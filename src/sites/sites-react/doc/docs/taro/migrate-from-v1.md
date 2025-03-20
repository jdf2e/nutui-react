# 从 v1 升级到 v2

本文档将帮助您从 NutUI React `1.x` 升级到 NutUI React `2.x` 版本。

## 升级步骤

1. H5 安装 NutUI React 2.x 版本

```shell
npm install @nutui/nutui-react
```

2. Taro 安装 NutUI React 2.x 版本

```shell
npm install @nutui/nutui-react-taro
```

3. 处理不兼容更新

从 NutUI React 1.x 到 NutUI React 2.x 存在一些不兼容更新，需要仔细阅读不兼容更新内容，并依次处理。

你可以手动对照下面的列表逐条检查代码进行修改，另外，我们也提供了一个 codemod cli 工具 @nutui/nutui-react-codemod 以帮助你快速升级到 v2 版本。在运行 codemod cli 前，请先提交你的本地代码修改。

4. 主题变量更名：
   如，primary-color 更名为 color-primary；注意在使用自定义主题，特别是使用 ConfigProvider 组件的情况下，有没有使用 `nutuiBrandColor`，这时记得更名为 `nutuiColorPrimary`

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
    },
    "nutui-react-taro",
  ]
]
```

2. 更完善的类型导出以及对类型增加 `JSDoc` 注释
3. 组件分类的调整
   在组件分类上，我们从交互维度上，和交互设计侧共同对 1.x 分类进行了基于信息结构的评审，并进行了子类梳理，完成重新分类，目标是更贴合交互场景的分布，易于查找组件。主要分布在：

- 基础组件，将 `Popup` 组件移除，将 `Popup` 细分到操作反馈-引导提示部分；
- 布局组件，保持不变；
- 导航组件：将分页相关组件 `Pagination`、`Indicator` 移动到展示组件（考虑移动端的分页轻操作）；`Menu` 菜单移动到数据录入类-选择器子类（考虑 `Menu` 主要是作为筛选器）；将 `BackTop` 移至导航组件，作为锚点组件的一部分；
- 展示组件：将 `Badge`、`NoticeBar`、`Popover` 移至操作反馈-引导提示类，`Empty`、`Skeleton` 移至操作反馈-加载状态结果反馈中；`WaterMark`、`TrendArrow` 作为特性增强类组件放在特色组件中，待由该类组件的使用场景和范围确认是否变更分类；同时新增 `Audio`，将其同 `Video`、`ImagePreview`、`Swiper` 一同归为展示-多媒体类；
- 操作反馈类，新增 `Skeleton`、`Empty`（加载结果反馈类），`Popover`、`Notify`、`NoticeBar`、`Popup` （引导提示类）6个组件；同时去除 `BackTop`（导航组件-锚点类）、`Switch`（数据录入-选择器）、`Audio``（展示-多媒体）；在此基础上，未来会考虑增加 ResultPage`，整合错误状态、空状态等反馈状态，该组件在考虑中；同时考虑增加加载状态 `Loading` 组件。版本待定。
- 数据录入类，主要分为两大类-输入及选择器。在输入中增加 `Signature`，该组件在 `Form` 表单中的应用范围日渐广泛，从特色组件中移入到数据录入部分；选择器中增加 `Switch`、`Menu`，及 `Address`。其中 `Signature` 和 `Address` 都是考虑其常用性，从特色中迁移到数据录入部分。
- 特色组件，保留 `Barrage`、`Card`、`TimeSelect`，新增 `WaterMark`、`TrendArrow`。

## 不兼容更新

## NutUI Icons 调整

1.x 版本我们在实际开发过程中会发现 `Button` 只是引用了一个很小的 Loading Icon，但是全量引用了 IconFont 字体 ，会导致开发者的项目文件增大。我们在 NutUI React 2.x 中为解决此问题，重新定义了 Icon 组件，将所有的 Icons 抽离成单独的图标组件库 @nutui/icons-react（Taro 适配下为 @nutui/icons-react-taro） ，使其可以进行按需加载使用。 因此一些组件之前关于 Icon 的相关 Props 将被移除，需要使用插槽或者传递一个 Component 组件的 Props 进行使用。 受影响的组件如下：

- Avatar
- Button
- ImagePreview
- Collapse
- InfiniteLoading
- Popup
- Steps
- Switch
- Toast
- Progress
- NoticeBar
- SearchBar
- Navbar
- Menu
- Tabbar
- Checkbox
- InputNumber
- Input
- Radio
- Rate
- Uploader
- Popover
- Grid
- TrendArrow

如果你的项目中使用了这些组件，请仔细阅读文档并进行升级。

## 组件名称调整

- GridItem -> Grid.Item
- TabbarItem -> Tabbar.Item
- CollapseItem -> Collapse.Item
- SwiperItem -> Swiper.Item
- CellGroup -> Cell.Group
- MenuItem -> Menu.Item
- Infiniteloading -> InfiniteLoading

## 组件 API 调整

在 2.0 版本中，我们重点对组件 API 进行了评审和修订，使属性和方法命名更贴合常用的命名习惯及 React 语言规范，目标希望开发者在使用组件时得心应手。我们的思路大体如下：

### 属性定义

本次升级重点关注属性的命名方面，从 1.x 的 610 个属性精简为 410 个，更精简、更规范；同时增强属性的类型范围，提升自定义能力。

- 对同一属性进行统一描述，比如：
  - 缩写类会改为全拼，如 `desc`、`descSlot`、`description` 统一为 `description`
  - 能使用名词或形容词的优先使用该类词性，一个词能说明白的不用两个词。
    - 如 `wrap`、`wrapable` 统一为 `wrap`
    - 如将 `isXxx` 统一为 `xxx`，如 `isVisible`、`isDeletable` 等，可直接使用 `visible`、`deletable` 等，形容词化
    - 如`showXxx` 尽量统一为 `xxx`，名词化。【部分属性待优化。】
    - 如 `roundRadius` 改为 `radius` ，`columnNum` 改为 `columns`等
  - `onClickXxx` 统一为 `onXxxClick`
  - `modelValue` 统一为 `value`，并增加支持 `defaultValue`，支持受控与非受控模式
  - 对于标识位置、对齐等类的属性，将属性名变更为其上一层的属性定义，如 `center`会改为 `align`、`vertical`，改为 `direction`，像标记距离的，如 `top`、`bottom`、`distance` 等，会改为 `threshold`
  - 不规范的定义如 `okBtn`、`okText` 这种，会改为 `confirmXxx`
- 扩充属性的类型。如 `title` 的类型从 `string` 扩充为 `React.ReactNode`，增强自定义内容；其中有涉及合并属性的，统一用最简命名来定义属性；如 `title`、`titleSlot` 合并为 `title`，再扩充属性类型。
- 对于 `xxClass`、`xxStyle`类的属性，移除，可使用 `className` 、`style` 来实现。
- 移除与样式有关的属性，除基础组件的样式属性及部分实现起来较为复杂的样式属性外，大多数样式属性被移除，可通过样式变量来实现。
- 将普遍认同可内置的属性或不怎么使用的属性，直接内置，去掉属性设置。

### 组件实现

### 基础组件

#### Button

- 移除 `plain`，通过 `fill="outline"` 实现
- 增加 `ref`，对外暴露组件内 `button` 元素
- CSS 变量中，对 `type` 类型对应的色值的定义，不在暴露到文档中，建议使用默认值，或修改主题变量
- 增加 `fill` 模式类型，`dashed`，修改 `fill` 默认值为 `outline`。
- 增加 `rightIcon`，可满足同时设置左右两个icon的情况。
- 修改 `size` 为 `large` 时的默认 `width` 为 `100%` 的值，如果使用通栏的 `button`，可搭配 `block` 来使用。

#### Cell

- `subTitle` 重命名为 `description`，类型修改为 `React.Node`
- `desc` 重命名为 `extra`，类型修改为 `React.Node`
- `roundRadius` 重命名为 `radius`
- `center` 重命名为 `align`，默认值修改为`flex-start`，可选值为 `flex-start`、`center`、`flex-end`
- 移除 `icon`、 `isLink`、`url`、`linkSlot`、`replace`、`descTextAlign`，通过用户自定义节点实现，参考文档demo示例

#### CellGroup

- 新增 `divider`，单元格之间是否有分割线
- `desc` 重命名为 `description`
- `title`、`description` 类型修改为 `React.Node`
- 移除 `titleSlot` 和 `descSlot`，通过 `title`、`description` 实现
-

#### ConfigProvider

#### Icon

#### Image

- 移除 `round`，通过 `radius` 实现圆或圆角
- 移除 `loadingImg` 和 `slotLoading`，通过 `loading` 属性实现，当 `loading` 属性设置为 `ReactNode` 或 `true` 时，表示展示 `loading` 状态
- 移除 `showError` 和 `slotError`，通过 `error` 属性实现，当 `error` 属性设置为 `ReactNode` 或 `true` 时，表示展示 `error` 状态
- 移除 `loadingImg`，可通过 `loading` 设置 `ReactNode`
- 移除 `errorImg`，可通过 `error` 设置 `ReactNode`
- `showError` 重命名为 `error`，类型修改为 `boolean｜ReactNode`
- `showLoading` 重命名为 `loading`，类型修改为 `boolean｜ReactNode`

#### Overlay

- `overlayClass` 重命名为 `className`
- `overlayStyle` 重命名为 `style`
- `closeOnClickOverlay` 重命名为 `closeOnOverlayClick`
- 更改 `lockScroll` 默认值为 `true`
- 新增 `afterClose` 和 `afterShow`，用于完全关闭后触发的回调和完全展示后触发的回调

#### Popup

- `popClass` 重命名为 `className`，统一将组件的样式类名使用 `className`，不再指定特殊名字，减轻用户使用的记忆成本
- `overlayClass` 重命名为 `overlayClassName`，继承自`Overlay`
- `closeOnClickOverlay` 重命名为 `closeOnOverlayClick`
- `onOpened` 和 `onClosed` 重命名为 `afterShow` 和 `afterClose`，继承自`Overlay`，用于完全关闭后触发的回调和完全展示后触发的回调
- `destroyOnClose` 的描述进行了修订，改为：“组件不可见时，卸载内容”，并把其默认值改为了`false`
- `onClickCloseIcon` 和 `onClickOverlay` 两个方法，增加布尔判断，如返回false 或 未定义返回值时，将不再关闭 Popup；默认值为 `true`；在demo中已增加相应示例；同时，两者的名字变更为 `onCloseIconClick`、`onOverlayClick`
- `closeIcon` 类型从 `string` 改为 `ReactNode`，以前的 `closeIcon='mask-close'` 需改为 `closeIcon={<MaskClose />}`
- `onOverlayClick` 和 `onCloseIconClick` 不会自动触发 `onClose` 了，如需触发关闭事件，需主动调用 `onClose` 回调函数
- 新增 `description` 属性，支持标题下展示描述内容。
- 调整 `position` 为 `bottom` 时的默认样式，默认支持圆角，此刻不需要再设置 `round` 属性。

### 布局组件

#### Divider

- 移除 `dashed`, 通过 `style` 属性实现
- 移除 `hairline`, 默认为 `true`
- CSS 变量调整：`$divider-before-margin-right`、`$divider-after-margin-left` 统一为 `$divider-spacing`，`$divider-vertical-border-left` 变更为 `$divider-border-color`，增加 `$divider-side-width`。

#### Grid

- 移除 `fontSize`，可自行控制传入的组件字体大小
- 移除 `border`，作为默认样式
- `columnNum` 重命名为 `columns`
- `GridItem` 使用方式修改为 `Grid.Item`

#### Layout

#### Sticky

- 移除 `top` 和 `bottom`， 重命名为 `threshold`

### 导航组件

#### Elevator

- `acceptKey` 重命名为 `floorKey`
- `indexList` 重命名为 `list`
- `isSticky` 重命名为 `sticky`
- `onClickIndex` 重命名为 `onIndexClick`
- `onClickItem` 重命名为 `onItemClick`
- 新增`showKeys`，是否展示右侧导航
- CSS 变量部分，对命名做了简化。

#### FixedNav

- `unActiveText` 重命名为 `inactiveText`
- `navList` 重命名为 `list`
- `slotBtn` 重命名为 `content`
- `onSelected` 重命名为 `onSelect`
- 移除 `fixednavClass`，通过 `className` 实现
- 移除 `slotList`，通过 `children` 实现
- 该组件已废弃 `BEM` 规范，记得把 `__` 改为 `-`

#### Indicator

- 移除 `block`，暴露自定义节点
- 移除 `align`，暴露自定义节点
- `vertical` 重命名为`direction`，默认值为 `horizontal`，可选 `vertical`
- 移除 `fillZero`，暴露自定义节点
- `size` 重命名为 `total`
- 增加非数字展示，并设置为默认状态

#### Menu

- 移除 `fontClassName`
- 移除 `iconClassPrefix`
- `closeOnClickOverlay` 重命名为 `closeOnOverlayClick`
- `titleIcon` 重命名为 `icon`
- `optionsIcon` 重命名为 `icon`
- 增加 `closeOnClickAway`

#### NavBar

- `desc` 重命名为 `right`，类型修改为 `React.Node`
- 新增 `left`，左侧内容，渲染在返回区域的右侧
- 新增 `back`，返回区域内容
- `onClickBack` 重命名为 `onBackClick`
- 移除 `title`，通过 `children` 实现
- 移除 `leftText` `leftShow`，通过 `back`、`left`实现
- `safeAreaInsetTop` 重命名为 `safeArea`
- `border` 废弃
- 移除 `onClickTitle` `onClickRight` `onClickIcon`，通过在`left`、`title`、`right`自定义事件实现，参考文档demo示例
-

#### Pagination

- 新增 `lite` 模式，只展示页码，不支持事件交互
- 新增 `defaultValue` 非受控值
- `modelValue` 重命名为 `value`，受控值
- `prevText` 重命名为 `prev`，类型修改为 `ReactNode`
- `nextText` 重命名为 `next`，类型修改为 `ReactNode`
- `forceEllipses` 重命令为 `ellipse`
- `showPageSize` 重命名为 `itemSize`
- `itemsPerpage` 重命名为 `pageSize`
- `totalitems` 重命名为 `total`
- `pageNodeRender` 重命名为 `itemRender`
- 移除 `pageCount`，通过 `total` 与 `pageSize` 组合实现

#### SideNavBar

- `offset` 重命名为 `indent`

#### Tabbar

- `unactiveColor` 重命名为 `inactiveColor`
- `tabTitle` 重命名为 `title`，类型修改为 `ReactNode`
- `bottom` 重命名为 `fixed`
- `safeAreaInsetBottom` 重命名为 `safeArea`
- `visible` 重命名为 `defaultValue`，非受控
- `activeVisible` 重命名为 `value`，受控

#### TabbarItem

- 使用方式修改为 `Tabbar.Item`
- `icon` 类型改为 `ReactNode`，移除其他 `icon` 关联属性
- 移除 `href`，通过 `onSwitch` 事件控制链接与路由跳转
- 移除 `num`，支持传入所有 `Badge` Props
- 移除 `color`，使用父元素的 `activeColor`，保持同样的 `active` 状态

#### Tabs

- 增加 `lite`、`card`、`button`、`divider` 模式。
- 移除 `background`，通过 `className` 或 `style` 控制
- 移除 `titleScroll`, 默认支持滚动
- 移除 `ellipsis`，默认 `flex：1`
- 移除 `size`，通过 css 变量 `--nutui-tabs-titles-item-font-size` 实现
- `animatedTime` 重命名为 `duration`
- `titleGutter` 重命名为 css 样式变量实现
- `titleNode` 重命名为 `title`
- `color` 重命名为 `activeColor`
- `type` 重命名为 `activeType`
- `leftAlign` 重命名为 `align`
- `onClick` 类型改为 `(index: string | number) => void`
- `onChange` 类型改为 `(index: string | number) => void`
- 增加 defaultValue
- 增加 `activeType` 类型 `simple`，实现选项卡的简约选择，只修改字号和字重，不处理字色。

#### Tabs.Tabpane

- `paneKey` 重命名为 `value`

### 数据录入

#### Calendar

- `poppable` 重命名为 `popup`
- `isAutoBackFill` 重命名为 `autoBackfill`
- `toDateAnimation` 重命名为 `scrollAnimation`
- `startText` 类型改为 `ReactNode`
- `endText` 类型改为 `ReactNode`
- `confirmText` 类型改为 `ReactNode`
- `onBtn` 重命名为 `renderHeaderButtons`
- `onDay` 重命名为 `renderDay`
- `onTopInfo` 重命名为 `renderDayTop`
- `onBottomInfo` 重命名为 `renderDayBottom`
- `onSelected` 重命名为 `onDayClick`
- `onChoose` 重命名为 `onConfirm`
- `onYearMonthChange` 重命名为 `onPageChange`
- 新增 `firstDayOfWeek`，支持按照周进行选择，指定周起止日，如0-6

#### Cascader

- 新增 `defaultValue`，其中 `defaultValue` 用于非受控，原 `value` 用于受控。两者的类型都改为 `(number | string | undefined)[]`
- `checkedIcon` 重命名为 `activeIcon`
- `poppable` 重命名为 `popup`
- `lazyLoad` 重命名为 `onLoad`，当启动懒加载 `lazy` 时，动态加载数据
- `convertConfig` 重命名为 `format`，配置转换规则
- 合并 `textKey` `valueKey` `childrenKey` 三个属性为对象属性 `optionKey`
- 移除 `tabsColor`， 该属性为设置 `Tabs` 当前选中的 `tab` 的下划线色值，但该值最好与文字部分搭配使用，统一处理 CSS 变量。

#### Checkbox

- 新增 `defaultChecked`，用于非受控，`checked` 用于受控
- 新增 `value`，用于 group 模式
- `textPosition` 重命名为 `labelPosition`
- `iconName` 重命名为 `icon`，类型为 `ReactNode`
- `iconAcitveName` 重命名为 `activeIcon`
- `iconIndeterminateName` 重命名为 `iconIndeterminateIcon`
- 移除 `iconSize`
- 部分 className 命名变更，废弃 `nutui-checkbox__xx` 命名方式，直接使用 `nutui-checkbox-xx`，并对选中状态命名修订为 `nutui-checkbox-icon-checked`
- 增加半选的禁用状态

#### Checkbox.Group

- 新增 `defaultValue`，用于非受控，`value` 用于受控
- `textPosition` 重命名为 `labelPosition`
- `toggleAll` 重命名为 `toggle`
- `toggleReverse` 重命名为 `reverse`
- 部分 className 命名变更，废弃 `nutui-checkbox__xx` 命名方式，直接使用 `nutui-checkbox-xx`，并对选中状态命名修订为 `nutui-checkbox-icon-checked`

#### DatePicker

- `modelValue` 重命名为 `value`，并增加 `defaultValue`
- `isShowChinese` 重命名为 `showChinese`
- `minDate` 重命名为 `startDate`
- `maxDate` 重命名为 `endDate`
- `onConfirmDatePicker` 重命名为 `onConfirm`
- `onCloseDatePicker` 重命名为 `onClose`
- 因为依赖组件`Picker`的变更，方法 `onConfirmDatePicker`、`onChange`的参数进行了调整，从`(selectedValue, selectedOptions)` 改为 `(selectedOptions, selectedValue)`。

#### Form

- 增加 `footer`，类型为 `ReactNode`，用于表单底部区域，通常用于设置提交、重置按钮
- 增加 `initialValues`，用于设置表单初始值，同时用于表单的重置
- 增加 `name` 属性

#### Form.Item

- 移除 `labelWidth`, 通过 `--nutui-form-item-label-width` 控制宽度
- 增加 `required`，用于必选样式控制
- 增加 `trigger`，用于设置数据更新的时机
- 增加 `valuePropName`，用于收集子组件受控的属性映射
- 增加 `getValueFromEvent`，用于在收集数据中进行数据转换
- 增加 `onclick` 用于收集子组件的 `ref`

#### Input

#### InputNumber

- 增加 `allowEmpty`, 用于允许内容是否为空
- 新增 `defaultValue`，用于非受控，`value` 用于受控
- `decimalPlaces` 重命名为 `digits`
- `isAsync` 重命名为 `async`
- 移除 `inputWidth`, 通过`--nutui-inputnumber-input-width`控制输入框的宽度
- 移除 `buttonSize`, 通过`–nutui-inputnumber-button-width` 和 `–nutui-inputnumber-button-height`控制按钮的宽度和高度
- taro 新增 `formatter` 属性, 用于指定输入框展示值的格式
- 移除 `errorMessage`
- 移除 `showWordLimit`
- `autofocus` 重命名为 `autoFocus`
- `type="textarea"` 建议改为使用 `TextArea` 组件实现

#### NumberKeyboard

- `randomKeys` 重命名为 `random`
- `customKey` 重命名为 `custom`
- `title` 类型变更为 `ReactNode`
- 新增 `onConfirm` 事件
- 移除 `popClass` 定义，默认支持透传 `Popup` 属性

#### Picker

- `isVisible` 重命名为 `visible`
- `listData` 重命名为 `options`
- `defaultValueData` 重命名为 `defaultValue`
- 增加受控 `value`
- `swipeDuration` 重命名为 `duration`
- `onCloseUpdate` 重命名为 `afterClose`
- 方法 `onConfirm`、`onClose`、`afterClose`、`onChange`的参数进行了调整，从`(selectedValue, selectedOptions)` 改为 `(selectedOptions, selectedValue)`。

#### Radio

- 移除 `iconSize`，可通过 Icon 的 css 变量设置
- `iconName` 重命名为 `icon`，类型修改为 `ReactNode`
- 增加 `labelPosition`，用于设置 `label` 的位置
- 增加 `checked` 和 `defaultChecked` ，用于受控和非受控
- `onChange` 类型修改为 `(checked: boolean) => void`
- 部分 className 命名变更，废弃 `nutui-radio__xx` 命名方式，直接使用 `nutui-radio-xx`，并对选中状态命名修订为 `nutui-radio-icon-checked`

### Radio.Group

- `textPosition` 重命名为 `labelPosition`
- 增加 `defaultValue` ，用于非受控
- `onChange` 类型修改为 `(value: string| number) => void`
- 部分 className 命名变更，废弃 `nutui-radio__xx` 命名方式，直接使用 `nutui-radio-xx`，并对选中状态命名修订为 `nutui-radio-icon-checked`

#### Range

- `maxDesc` 重命名为 `maxDescription`，类型改为 `ReactNode`
- `minDesc` 重命名为 `minDescription`，类型改为 `ReactNode`
- `curValueDesc` 重命名为 `currentDescription`，类型改为 `(value) => ReactNode`
- 移除 `hiddenRange`，通过 `max/minDescription` 传 `null` 实现
- 移除 `hiddenTag`，通过 `currentDescription` 传 `null` 实现
- 移除 `activeColor`、`inactiveColor`、`buttonColor`，通过 `css` 变量实现
- `onDragStart` 重命名为 `onStart`
- `onDragEnd` 重命名为 `onEnd`
- `modelValue` 重命为 `value`，增加 `defaultValue` 非受控方式

#### Rate

- `minimizeValue` 重命名为 `min`
- `readonly` 重命名为 `readOnly`
- 移除 `spacing`，通过 css 样式变量实现
- 移除 `activeColor`、`voidColor`、`iconSize`，通过 `checkedIcon`、`uncheckedIcon` 实现
- 增加受控 `value` 与非受控 `defaultValue`，移除 `modelValue`

#### SearchBar

- `onClickInput` 重命名为 `onInputClick`
- 移除 `clearSize`，样式默认
- 移除 `background`，使用 CSS 变量 `--nutui-searchbar-background` 实现
- 移除 `inputBackground`，使用 CSS 变量 `--nutui-searchbar-input-background` 实现
- 移除 `align`，使用 CSS 变量 `--nutui-searchbar-input-text-align`
- 新增 `left` 和 `right`，为 `ReactNode` 节点，可自定义内容
- 移除 `leftoutIcon` 和 `label`，使用 `left` 实现
- 移除 `rightoutIcon` 和 `actionText`，使用 `right` 实现
- 移除 `leftinIcon`，使用 `leftIn` 实现
- 移除 `rightinIcon`，使用 `rightIn` 实现，同时兼顾和 clearIcon 的交互，当设置rightIn时，默认展示 rightIn，当触发输入后，展示 clearIcon。同时增加 `backable` 来标记是否展示左侧返回Icon
- 移除 `onCancel`，使用 `right` 来实现事件处理
- 移除 `onClickLeftinIcon`，用户可使用 `left` 来实现事件处理
- 移除 `onClickLeftoutIcon`，用户可使用 `left` 来实现事件处理
- 移除 `onClickRightinIcon`，用户可使用 `right` 来实现事件处理
- 移除 `onClickRightoutIcon`，用户可使用 `right` 来实现事件处理

#### ShortPassword

- `desc` 重命名为 `description`
- `noButton` 重命名为 `hideFooter`
- `onOk` 重命名为 `onConfirm`
- `errorMsg` 重命名为 `error`
- 移除 `closeOnClickOverlay`，默认支持透传 Popup 属性
- `title`、`description`、`tips`、`error` 类型修改为 `ReactNode`
- `modelValue` 重命名为 `value`，受控模式
- 新增 `onFoucs` 事件

#### TextArea

- `maxlength` 重命名为 `maxLength`
- `readonly` 重命名为 `readOnly`
- `limitShow` 重命名为 `showCount`
- `autosize` 重命名为 `autoSize`
- 移除 `textAlign`，可通过 `style` 传入
- `defaultValue` 改为非受控，增加受控值 `value`

#### Uploader

- `maximize` 重命名为 `maxFileSize`
- `maximum` 重命名为 `maxCount`
- `listType ` 重命名为 `previewType`
- `isDeletable ` 重命名为 `deletable`
- `isPreview` 重命名为 ` preview`
- `defaultImg` 重命名为 ` previewUrl`
- `defaultFileList` 重命名为 ` defaultValue`
- `uploadIconTip` 重命名为 `uploadLabel`，类型变更为 `ReactNode`
- `onBeforeUpload` 重命名为 `beforeUpload`
- `onBeforeXhrUpload` 重命名为 `beforeXhrUpload`
- `onBeforeDelete` 重命名为 `beforeDelete`
- `onRemove` 重命名为 `onDelete`
- 增加 `fit`，用于图片填充模式
- 增加 `value`，用于受控传值
- 移除 `uploadIconSize`，可通过 icon 属性传入自定义 icon 或借助 CSS Variables 修改 icon 大小
- `uploadIcon` 类型从 `string` 调整为 `ReactNode`
- `onChange` 参数类型从 `{fileList: FileItem[], event: any}` 调整为 `FileItem[]`

### 操作反馈

#### ActionSheet

- `title`，类型变更为 `ReactNode`
- `description`，类型变更为 `ReactNode`
- `cancelTxt`，重命名为 `cancelText`，类型变更为 `ReactNode`
- `menuItems` 重命名为 `options`
- `chooseTagValue` 重命名为 `value`
- `onChoose` 重命名为 `onSelect`
- 增加 `options` 的定义
  - `color` 重命名为 `danger`
  - `name`，列表项的标题key
  - `description`，列表项的描述key
  - `danger`，列表项中提醒用户重点关注的操作
  - `disabled`，列表项中禁用项

#### BackTop

- `elId` 重命名为 `target`
- 移除 `right`、`bottom`，通过 style 传入，增加支持 `left`、`top`
- `distance` 重命名为 `threshold`
- 移除 `isAnimation`，通过 `duration` 设置 0 实现无动画效果

#### Dialog

- `okText` 重命名为 `confirmText`，规范命名。
- `mask` 重命名为 `overlay`，组件库中统一使用 Overlay 组件作为遮罩层，并使用 overlay 作为是否展示遮罩层的属性值。
- `closeOnClickOverlay` 重命名为 `closeOnOverlayClick`，组件库统一到该属性。
- `noOkBtn` 重命名为 `hideConfirmButton`，初始值不变，依然表示是否隐藏确认按钮，主要是为了语义化更强。
- `noCancelBtn` 重命名为 `hideCancelButton`，初始值不变，依然表示是否隐藏取消按钮，主要是为了语义化更强。
- `okBtnDisabled` 重命名为 `disableConfirmButton`，初始值不变，依然表示是否禁用确认按钮，主要是为了语义化更强。
- 移除 `noFooter`，使用 footer 统一处理，当 footer 为空时，及可替代该值。目前 noFooter 也需要手动声明是否为 noFooter；修改后需手动指出 footer={null}
- 移除 `textAlign`，改用样式变量 `--nutui-dialog-content-text-align` 或 SCSS 变量 `$dialog-content-text-align` 控制，默认值为 center。
- 移除 `cancelAutoClose`，改为 `beforeCancel` 和 `beforeClose` 来实现，在点击关闭或取消时，可先触发这两个方法，以确定是否要关闭弹框，如返回true，则关闭；否则不关闭。
- `onOk` 重命名为 `onConfirm`，规范命名。
- `onClosed` 重命名为 `onClose`，规范命名，关闭时触发。
- `onClickSelf` 重命名为 `onClick`，语义不变，仍表示点击弹框自身时触发事件。
- 增加 `overlayStyle` 和 `overlayClassName`，用来配置 Overlay 组件样式。
- 增加 `onOverlayClick`，支持点击overlay时，触发事件。
- `onCancel` 回调不会自动关闭弹层，需主动调用 `Dialog.close(xx)`

#### Drag

#### InfiniteLoading

- `useCapture` 重命名为 `capture`
- `onScrollChange` 重命名为 `onScroll`
- `isOpenRefresh` 重命名为 `pullRefresh`
- `pullTxt` 重命名为 `pullingText`，类型变更为 `ReactNode`
- `loadTxt` 重命名为 `loadingText`，类型变更为 `ReactNode`
- `containerId` 重命名为 `target`
- 修订类名如 `top-box`、`bottom-box` 为 `nut-infinite-top-tips`、`nut-infinite-bottom-tips`

#### Notify

- 移除 `color` ，通过css变量`--nutui-notify-text-color`实现
- 移除`background`，通过css变量`--nutui-notify-base-background-color`实现
- `onClosed` 重命名为 `onClose`

#### PullToRefresh

#### Swipe

- 移除 `leftWidth` ，通过 `leftAction` 实现
- 移除 `rightWidth` ，通过 `rightAction` 实现

#### Switch

- 新增 `defaultChecked`，用于非受控，`checked` 用于受控
- 移除 `isAsync`，通过 `checked`实现
- 移除 `activeColor` ，通过css变量`--nutui-switch-open-background-color`实现
- 移除 `inactiveColor`，通过css变量`--nutui-switch-close-background-color`实现

#### Toast

- 移除H5版本 `id`
- 移除 `center`和 `bottom`，通过 `position` 实现
- 移除 `bgColor`，通过 css 变量实现
- 移除 `customClass`，通过 `className` 实现
- 移除 `cover` 和 `coverColor` ，通过css变量实现
- 移除 `loadingRotate`，旋转状态通过 `iconFont`实现
- 移除 `textAlignCenter`，通过css变量实现
- 修改 `closeOnClickOverlay` 为 `closeOnOverlayClick` ，语义不变，是否在点击遮罩层后关闭提示
- 新增 `lockScroll` ，用于背景是否锁定，默认值为 `false`

### 展示组件

#### Animate

- `type` 属性类型更改为 `AnimateType` ，具体值详见文档
- `action` 属性类型更改为 `initial \| click`

#### AnimatingNumbers

- `maxLen` 重命名为 `length`
- `endNumber` 重命名为 `value`，类型修改为 `string|number`
- `delaySpeed` 重命名为 `delay`
- `easeSpeed` 重命名为 `duration`

#### Audio

- `url` 重命名为 `src`
- `autoplay` 重命名为 `autoPlay`
- `onFastBack` 重命名为 `onBack`
- `onPlayEnd` 重命名为 `onEnd`

#### Avatar

- `url` 重命名为 `src`
- `onActiveAvatar` 重命名为 `onClick`
- 新增 `fit` 属性，用于图片填充模式
- 移除 `iconSize`，可通过 icon 属性传入自定义 icon 或借助 CSS Variables 修改 icon 大小

#### AvatarGroup

- AvatarGroup `maxCount` 重命名为 `max`
- AvatarGroup `span` 重命名为 `gap`
- AvatarGroup `zIndex` 重命名为 `level`

#### Badge

- 移除 `zIndex`，目前没有用到，也不生效，直接去掉。
- 移除 `icon`，自定义 `icon` 可放在 `value` 中实现，扩充了 `value` 的类型。
- 修改 `max` 的最大值为99（之前为10000），比较贴合实际场景。
- 主题定制的 `css` 变量中，去掉和 `dot` 有关的其他值，只保留 `width`。其他值由 `width` 计算而来.
- 主题定制，增加包含 icon 情况下的样式变量。

#### CircleProgress

- `progress` 重命名为 `percent`
- `circleColor` 重命名为 `color`
- `pathColor` 重命名为 `background`

#### Collapse

- 新增 `defaultActiveName` 非受控
- `activeName` 改为受控方式
- `icon` 重命名为 `expandIcon`，类型修改为 `ReactNode`
- `onChange` 参数变更为 `activeName, name, status`
- 新增一种样式，尝试修改 `--nutui-collapse-item-border-bottom` 和 `-nutui-collapse-item-header-border-bottom`，可查看

#### CollapseItem

- 使用方式调整为 `Collapse.Item`
- subTitle 重命名为 extra，类型修改为 `ReactNode`
- 新增 `expnandIcon`，优先级高于父组件对应值
- 新增 `rotate`，优先级高于父组件对应值

#### CountDown

- 新增 `remainingTime`，支持剩余毫秒时间倒计时。

#### Ellipsis

- 新增 `className` 和 `style` 属性的支持
- 优化 H5 的代码，去掉 `useEffect` 渲染改用 `useLayoutEffect`

#### Empty

- 新增 `status` 属性，用于默认图片错误类型
- 新增 `size` 属性，用于区分全屏与半屏状态下图片的不同大小
- 新增 `title` 属性，用于展示提示的标题部分
- 新增 `actions` 属性，用于展示提示的操作部分，支持1个或2个操作
- `image` 属性类型更改为 `ReactNode`
- 新增 `title`、`size`、`actions` 属性，支持标题的设置、图片大小的设置、可能的操作设置，操作设置默认以`Button`实现。

#### ImagePreview

- `show` 重命名为 `visible`
- `autoplay` 重命名为 `autoPlay`
- `initNo` 重命名为 `defaultValue`，同时增加 `value`，为受控
- `paginationVisible` 重命名为 `indicator`
- `paginationColor` 重命名为 `indicatorColor`
- `contentClose` 重命名为 `closeOnContentClick`
- 在 `Taro` 下支持视频

#### NoticeBar

- `direction` 的可选值从 `across` 重命名为 `horizontal`
- `text` 重命名为 `content`
- `closeMode` 重命名为 `closeable`
- `leftIcon` 类型扩充，支持 `ReactNode`
- `rightIcon` 类型扩充，支持 `ReactNode`
- `color` 移除，使用 CSS 变量，之前已支持
- `background` 移除，使用 CSS 变量，之前已支持
- `wrapable` 重命名为 `wrap`
- `standTime` 重命名为 `duration`
- `onClickItem` 重命名为 `onItemClick`
- `complexAm` 废弃

#### Popover

- 移除 `theme` 属性，可以通过css变量 `--nutui-brand-color` 控制暗黑模式
- 新增 `showArrow` 属性，用于是否显示小箭头
- 新增 `closeOnActionClick` 属性，用于是否在点击选项后关闭
- 新增 `closeOnOutsideClick` 属性，用于是否在点击外部元素后关闭菜单
- 新增 `targetId` 属性，用于自定义目标元素 id
- 新增 `onOpen` 属性，用于点击菜单时触发
- 新增 `onClose` 属性，用于关闭菜单时触发
- 新增 `action` 属性，用于为对应的选项添加方法
- `onChoose` 重命名为 `onSelect`
- 继承Popup组件的 `overlayStyle` 、`overlayClassName` 、`overlay` 、`closeOnOverlayClick` 属性。

#### Price

- `decimalDigits` 重命名为 `digits`
- 移除 `needSymbol`，通过 `symbol` 判断是否需要加上 symbol 符号
- 新增 `line`，是否展示划线价

#### Progress

- `percentage` 重命名为 `percent`，受控
- 移除 `isShowPercentage`，可以自定义传入文案
- 移除 `textWidth`，可以自定义传入内容的宽度
- `strokeColor` 重命名为 `color`
- `fillColor` 重命名为 `background`
- 移除 `size`，通过 `strokeWidth`、`progress-height` css 变量实现尺寸自定义
- `status` 重命名为 `animated`，表示是否展示动画效果
- 移除 `textBackground`，通过 css 实现
- 移除 `textColor`，通过 css 实现
- 移除 `textInside`，仅保留内显功能
- 移除 `textType、icon`，通过 `children` 传入自定义 `ReactNode`，不再区分类型
- 新增 `lazy` 属性，支持每次进入可视区时展示进度条动画
- 新增 `delay` 属性，表示延迟数据加载时长

#### Skeleton

- `loading` 重命名为 `visible`
- `row` 重命名为 `rows`
- 移除 `width`，通过 css 变量 `skeleton-line-width` 实现
- 移除 `height`，通过 css 变量 `skeleton-line-height` 实现
- 移除 `round`，通过 css 变量 `skeleton-line-border-radius` 实现

#### Steps

- `current` 重命名为 `value`
- `onClickStep` 重命名为 `onStepClick`
- `progressDot` 重命名为 `dot`

#### Step

- 移除 `iconColor`，可通过 `icon` 属性传入自定义 icon 或借助 CSS Variables 修改 icon 颜色
- 移除 `size`，可通过 icon 属性传入自定义 icon 或借助 CSS Variables 修改 icon 大小
- 移除 `renderContent` ，可通过 `description` 实现
- `title` 类型修改为 `ReactNode`
- `content` 重命名为 `description`，类型改为 `ReactNode`
- `icon` 类型修改为 `ReactNode`
- `activeIndex` 重命名为 `value`

#### Swiper

- h5
  - 移除 `paginationColor`，通过 `indicator` 的 CSS 变量控制
  - 移除 `paginationBgColor`，通过 `indicator` 的 CSS 变量控制
  - 移除 `pageContent`，通过 indicator 实现
  - `autoplay` 重命名为 `autoplay`
  - `initPage` 重命名为 `defaultValue`
  - `paginationVisible` 重命名为 `indicator`，类型改为` ReactNode`
  - `isPreventDefault` 重命名为 `preventDefault`
  - `isStopPropagation` 重命名为 `stopPropagation`
  - `isCenter` 重命名为 `center`
- taro
  - 通过封装 Taro 的 `Swiper` 和 `SwiperItem` 实现，支持的属性可参考 Taro Swiper 文档。

#### Table

- `onSorter` 重命名为 `onSort`
- 合并 `summary` 与 `noData` 的样式处理

#### Tag

- `color` 重命名为 `background`
- `textColor` 重命名为 `color`

#### TrendArrow

- `rate` 重命名为 `value`
- `showSign` 重命名为 `symbol`
- `showZero` 重命名为 `zero`
- `arrowLeft` 重命名为 `left`
- `syncTextColor` 重命名为 `sync`
- `textColor` 重命名为 `color`
- `upIconName` 重命名为 `riseIcon`，类型修改为 `React.Node`
- `downIconName` 重命名为 `dropIcon`，类型修改为 `React.Node`
- 移除 `iconSize`，通过`riseIcon`、`dropIcon`自定义传入icon大小

#### Video

- 在 `Taro` 下新增video的适配

#### VirtualList

- `sourceData` 重命名为 `list`
- `conatinerSize` 重命名为 `containerHeight`
- `itemSize` 重命名为 `itemHeight`
- `itemEqualSize` 重命名为 `itemEqual`
- `horizontal` 修改为 `direction`，默认值 `vertical`，可选值 `horizontal`

#### WaterMark

- `fontColor` 重命名为 `color`

### 特色组件

#### Address

- 该组件的 `custom` 改用 `Cascader` 组件重写；`custom2`也将使用 `Cascader` 完成，在 `Cascader` 中支持 `Elevator`，开发中。所以会废弃 `province`、`city`、`country`、`town` 这些属性，同时支持 `Cascader` 的属性。
- `modelValue` 重命名为 `visible`
- `modelSelect` 重命名为 `defaultValue`
- `onSelected` 重命名为 `onSelect`
- `existAddress` 重命名为 `existList`
- `selectedIcon` 重命名为 `selectIcon`
- `closeBtnIcon` 重命名为 `closeIcon`
- `backBtnIcon` 重命名为 `backIcon`
- `isShowCustomAddress` 重命名为 `custom`，用于已有地址列表与自定义列表的切换，修改默认为值 `false`
- `customAndExistTitle` 废弃，与 `custom` 合并，当 `custom` 为 true 时，为默认文案，设置为某字符串时，展示字符串。
- `customAddressTitle`、`existAddressTitle` 重命名为 `title`，不再区分状态，可通过onSwitch修改title
- 精简布局和样式

#### Barrage

- `barrageList` 重命名为 `list`
- `frequency` 重命名为 `interval`
- `speeds` 重命名为 `duration`
- `top` 重命名为 `gapY`

#### Card

#### Signature

- `type` 类型修改为 `png｜jpg`
- `unSupportTpl` 重命名为 `unsupported`，类型修改为 `ReactNode`
- 新增 `confirm`和`clear` ref 的方法，移除组件内部 `button`元素，通过自定义按钮元素，设置元素点击事件结合ref实现，参考文档demo示例

#### TimeSelect

- 移除 `height`，通过 `style` 设置高度
- `title` 类型修改为 `ReactNode`
- `onPannelChange` 重命名为 `onDateChange`
- 移除 `dates`、`times`，合并为 `options`，重新设计了数据结构
- 增加 `optionKey` 用于自定义数据中的关键字
- 移除 `currentKey`，新增 `defaultValue` 用于设置默认选项，支持时间选择
