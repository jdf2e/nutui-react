# NutUI-React AI 研发助手指令库 (Single Source of Truth)

## 1. 核心工程规范 (Core Rules)

### 命名规范 (Naming Convention)

- **前缀**: 所有组件和业务类名强制使用 `nut-` 前缀。
- **模式**: `.nut-{block}-{suffix}`（NutUI 采用扁平化的单连字符模式，而非标准的双下划线 BEM）。
- **示例**:
  - 正确: `<div className="nut-button-wrap"><span className="nut-button-text">...</span></div>`
  - 正确: `<div className="nut-button-primary">...</div>`
  - 错误: `<div className="nut-button__text">...</div>` (不要使用双下划线)

### Design Tokens 使用原则

- **严禁硬编码**: 禁止在 SCSS/Inline Style 中使用 Hex/RGB 颜色（如 #FFFFFF）。
- **变量映射**: 必须使用 CSS 变量，格式为 `var(--nutui-[w-]+)`。
- **常见变量**:
  - `--nutui-color-primary` (用途: primary)
  - `--nutui-color-primary-stop-1` (用途: primary-stop-1)
  - `--nutui-color-primary-stop-2` (用途: primary-stop-2)
  - `--nutui-color-primary-pressed` (用途: primary-pressed)
  - `--nutui-color-primary-disabled` (用途: primary-disabled)
  - `--nutui-color-primary-icon` (用途: primary-icon)
  - `--nutui-color-default` (用途: default)
  - `--nutui-color-default-pressed` (用途: default-pressed)
  - `--nutui-color-default-light` (用途: default-light)
  - `--nutui-color-default-disabled` (用途: default-disabled)
  - `--nutui-color-info` (用途: info)
  - `--nutui-color-info-pressed` (用途: info-pressed)
  - `--nutui-color-info-disabled` (用途: info-disabled)
  - `--nutui-color-info-light` (用途: info-light)
  - `--nutui-color-info` (用途: info-text)
  - `--nutui-color-success` (用途: success)
  - `--nutui-color-success-disabled` (用途: success-disabled)
  - `--nutui-color-success-text` (用途: success-text)
  - `--nutui-color-warning` (用途: warning)
  - `--nutui-color-warning-disabled` (用途: warning-disabled)
  - `--nutui-color-warning-text` (用途: warning-text)
  - `--nutui-color-danger` (用途: danger)
  - `--nutui-color-danger-pressed` (用途: danger-pressed)
  - `--nutui-color-danger-light` (用途: danger-light)
  - `--nutui-color-danger-text` (用途: danger-text)
  - `--nutui-color-background` (用途: background)
  - `--nutui-color-mask` (用途: mask)
  - `--nutui-color-mask-part` (用途: mask-part)
  - `--nutui-color-border` (用途: border)
  - `--nutui-color-border-disabled` (用途: border-disabled)
  - `--nutui-color-title` (用途: title)
  - `--nutui-color-text` (用途: text)
  - `--nutui-color-text-help` (用途: text-help)
  - `--nutui-color-text-disabled` (用途: text-disabled)
  - `--nutui-color-text-link` (用途: text-link)
  - `--nutui-font-size-xxxs` (用途: $font-size-xxxs)
  - `--nutui-font-size-xxs` (用途: $font-size-xxs)
  - `--nutui-font-size-xs` (用途: $font-size-xs)
  - `--nutui-font-size-s` (用途: $font-size-s)
  - `--nutui-font-size-base` (用途: $font-size-base)
  - `--nutui-font-size-l` (用途: $font-size-l)
  - `--nutui-font-size-icon` (用途: $font-size-icon)
  - `--nutui-font-size-xl` (用途: $font-size-xl)
  - `--nutui-font-size-xxl` (用途: $font-size-xxl)
  - `--nutui-font-size-10` (用途: $font-size-xxxl)
  - `--nutui-font-size-11` (用途: $font-size-xxxxl)
  - `--nutui-font-weight-light` (用途: $font-weight-light)
  - `--nutui-font-weight` (用途: $font-weight)
  - `--nutui-font-weight-medium` (用途: $font-weight-medium)
  - `--nutui-font-weight-bold` (用途: $font-weight-bold)

## 2. 组件 API 智能参考 (Component Dictionary)

以下是 NutUI-React 核心组件的参数规范，补全时请参考中文描述：

### <Button />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| type | 按钮的样式 | ``default` | `primary` | `info` | `warning` | `danger` | `success`` | default |
| size | 按钮的尺寸 | ``normal` | `large` | `small`` | normal |
| shape | 按钮的形状 | ``square` | `round`` | round |
| color | 按钮颜色，支持传入 linear-gradient 渐变色 | `string` | - |
| fill | 填充模式 | ``solid` | `ouline` | `none`` | solid |
| disabled | 是否禁用按钮 | `boolean` | false |
| block | 是否为块级元素 | `boolean` | false |
| icon | 按钮图标 | `ReactNode` | - |
| loading | 按钮loading状态 | `boolean` | false |
| onClick | 点击按钮时触发 | `onClick: (e: MouseEvent) => void` | false |

### <CellGroup />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| title | 分组标题 | `ReactNode` | - |
| description | 分组描述 | `ReactNode` | - |
| divider | 单元格之间是否有分割线 | `boolean` | true |

### <Cell />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| title | 标题 | `ReactNode` | - |
| description | 描述 | `ReactNode` | - |
| extra | 右侧描述 | `ReactNode` | - |
| radius | 圆角半径 | `string` | 6px |
| align | 纵轴方向上的对齐方式，可选值为：`flex-start`、`center`、`flex-end` | `string` | flex-start |
| onClick | 点击事件 | `onClick: (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void` | false |

### <ConfigProvider />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| locale | 设置多语言包 | `BaseLang` | zhCN |
| theme | 设置主题 | `Record<string, string>` | - |

### <Icon />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| name | 图标名称或图片链接 | `string` | - |
| color | 图标颜色 | `string` | - |
| width | 图标大小，如 `20px` `2em` `2rem` | ``string` | `object`` | - |
| height | 图标大小，如 `20px` `2em` `2rem` | ``string` | `object`` | - |
| onClick | 点击图标时触发 | `event: Event` | - |

### <IconFont />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| name | 图标名称或图片链接 | `string` | - |
| color | 图标颜色 | `string` | - |
| size | 图标大小，如 `20px` `2em` `2rem` | ``string` | `number`` | - |
| classPrefix | 类名前缀，用于使用自定义图标 | `string` | nut-iconfont |
| fontClassName | 自定义 icon 字体基础类名 | `string` | nutui-iconfont |
| tag | tsx 标签 | `string` | i |
| onClick | 点击图标时触发 | `event: Event` | - |

### <Image />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| src | 图片链接 | `string` | - |
| fit | 图片填充模式，等同于原生的 object-fit 属性 | `ImageFit` | fill |
| position | 图片位置，等同于原生的 object-position 属性 | `ImagePosition` | center |
| alt | 替代文本 | `string` | - |
| width | 宽度，默认单位`px` | `string` | - |
| height | 高度，默认单位`px` | `string` | - |
| radius | 圆角大小 | ``string` | `number`` | - |
| error | 是否展示图片加载失败 | ``boolean | ReactNode`` | true |
| loading | 是否展示加载中图片 | ``boolean | ReactNode`` | true |
| lazy | 是否为懒加载图片 | `boolean` | false |
| onClick | 点击图片时触发 | `(e: MouseEvent) => void` | - |
| onLoad | 图片加载完后触发 | `() => void` | - |
| onError | 图片加载失败后触发 | `() => void` | - |
| contain | 保持宽高缩放图片，使图片的长边能完全显示出来 | `` |  |
| cover | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 | `` |  |
| fill | 拉伸图片，使图片填满元素 | `` |  |
| none | 保持图片原有尺寸 | `` |  |
| scale-down | 取 none 或 contain 中较小的一个 | `` |  |
| center | 居中对齐 | `` |  |
| top | 顶部对齐 | `` |  |
| right | 右侧对齐 | `` |  |
| bottom | 底部对齐 | `` |  |
| left | 左侧对齐 | `` |  |

### <Overlay />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| visible | 当前组件是否显示 | `boolean` | false |
| zIndex | 遮罩层级 | `number` | 2000 |
| duration | 动画时长，单位秒 | `number` | 0.3 |
| lockScroll | 背景是否锁定 | `boolean` | true |
| closeOnOverlayClick | 是否点击遮罩关闭 | `boolean` | true |
| onClick | 点击时触发 | `event: Event` | - |
| afterClose | 完全关闭后触发 | `() => void` | - |
| afterShow | 完全展示后触发 | `() => void` | - |

### <Divider />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| contentPosition | 内容位置 | ``left` | `center` | `right`` | center |
| direction | 水平还是垂直类型 | ``horizontal` | `vertical`` | horizontal |

### <Grid />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| columns | 列数 | ``number` | `string`` | 4 |
| gap | 格子之间的间距，默认单位为`px` | ``number` | `string`` | 0 |
| center | 是否将格子内容居中显示 | `boolean` | true |
| square | 是否将格子固定为正方形 | `boolean` | false |
| reverse | 内容翻转 | `boolean` | false |
| direction | 格子内容排列的方向 | ``horizontal` | `vertical`` | vertical |
| onClick | 宫格子项点击事件 | `(index) => void` | - |

### <Grid.Item />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| text | 文字 | ``string` | `ReactNode`` | - |
| onClick | 点击格子时触发 | `(event: Event) => void` | - |

### <Row />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| type | 布局方式，可选值为flex | `string` | - |
| gutter | 列元素之间的间距（单位为px） | ``string` | `number`` | 0 |
| justify | Flex 主轴对齐方式，可选值为 start end center space-around space-between | `string` | start |
| align | Flex 交叉轴对齐方式，可选值为 flex-start center flex-end | `string` | flex-start |
| wrap | Flex是否换行，可选值为 nowrap wrap reverse | `string` | nowrap |
| onClick | Fired when clicked | ``event: MouseEvent, type: 'row' | 'col'`` | - |

### <Col />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| span | 列元素宽度（共分为24份，例如设置一行3个，那么span值为8） | ``string` | `number`` | 24 |
| offset | 列元素偏移距离 | ``string` | `number`` | 0 |
| onClick | 点击时触发 | ``event: MouseEvent, type: 'row' | 'col'`` | - |

### <Sticky />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| position | 吸附位置 | ``top` | `bottom`` | top |
| threshold | 距离，当 position 为 top 时，设置的是 top | `number` | 0 |
| zIndex | 吸附时的层级 | `number` | 2000 |
| container | 容器的 ref | `React.RefObject<HTMLElement>` | - |
| onChange | 吸附状态改变时触发 | `(val: boolean) => void` | - |

### <BackTop />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| target | 获取监听的目标元素 | `string` | - |
| threshold | 页面垂直滚动多高后出现 | `number` | 200 |
| zIndex | 设置组件页面层级 | `number` | 10 |
| duration | 设置动画持续时间，为 0 时表示无动画 | `number` | 1000 |
| onClick | 按钮点击时触发事件 | `(event: MouseEvent) => void` | - |

### <Elevator />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| height | 电梯区域的高度 | ``number` | `string`` | 200px |
| floorKey | 索引 key 值 | `string` | title |
| list | 索引列表 | `Array（item 需包含 id、name 属性, name 支持传入 html 结构）` | [{id: 0, name: ''}] |
| sticky | 索引是否吸顶 | `boolean` | false |
| showKeys | 展示右侧导航 | `boolean` | true |
| spaceHeight | 右侧锚点的上下间距 | `number` | 23 |
| titleHeight | 左侧索引的高度 | `number` | 35 |
| onClickItem | 点击内容 | `onClickItem:(key: string, item: { id: number, name: string })=>void` | false |
| onClickIndex | 点击索引 | `onClickIndex:(key: string)=>void` | false |

### <FixedNav />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| visible | 是否打开 | `boolean` | false |
| list | 悬浮列表内容数据 | `Array` | [] |
| activeText | 收起列表按钮文案 | `string` | 收起导航 |
| inactiveText | 展开列表按钮文案 | `string` | 快速导航 |
| type | 导航方向 | ``left` | `right`` | right |
| overlay | 展开时是否显示遮罩 | `boolean` | true |
| position | fixed 垂直位置 | `object` | {top: 'auto', bottom: 'auto'} |
| content | 自定义按钮 | `ReactNode` | - |
| onChange | 展开收起按钮回调 | `value: boolean` | - |
| onSelect | 选择之后触发 | `item, event: MouseEvent` | - |

### <Navbar />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| right | 右侧内容 | `ReactNode` | - |
| left | 左侧内容，渲染在返回区域的右侧 | `ReactNode` | - |
| back | 返回区域的文字 | `ReactNode` | - |
| fixed | 是否固定 | `boolean` | false |
| safeArea | 是否适配安全区 | `boolean` | false |
| placeholder | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | `boolean` | false |
| zIndex | 导航栏层级 | ``number` | `string`` | 10 |
| onClickBack | 点击返回区域后的回调 | `onClickBack:(event: Event)=>void` | false |

### <SideNavBar />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| visible | 组件是否显示 | `boolean` | false |
| title | 整体标题 | `string` | - |
| width | 遮罩宽度百分比 | `string` | 80% |
| position | 弹出位置 | ``left` | `right`` | left |
| indent | 缩进宽度 | `number` | 20 |
| onClose | 关闭遮罩时触发 | `-` | - |

### <SubSideNavBar />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| value | 导航唯一标识 | ``string` | `number`` | - |
| title | 整体标题 | `string` | - |
| open | 导航是否默认展开 | `boolean` | true |
| onClick | 导航点击 | ``data: {title: string, value: string | number, isShow: boolean}`` | - |

### <SideNavBarItem />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| value | 导航唯一标识 | ``string` | `number`` | - |
| title | 整体标题 | `string` | - |
| onClick | 导航点击 | ``data: {title: string, value: string | number}`` | - |

### <Tabbar />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| defaultValue | 默认选中的标签的索引值 | `number` | 0 |
| value | 选中的标签的索引值 | `number` | - |
| fixed | 是否固定在页面底部，为 true 时默认开启 safeArea | `boolean` | false |
| activeColor | icon激活的颜色 | `string` | #1989fa |
| inactiveColor | icon未激活的颜色 | `string` | #7d7e80 |
| safeArea | 是否开启iphone系列全面屏底部安全区适配 | `boolean` | false |
| onSwitch | 切换页签时触发事件 | `(value) => void` | - |

### <Tabbar.Item />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| title | 标签页的标题 | `ReactNode` | - |
| icon | 自定义图标 | `ReactNode` | - |
| value | 徽标中显示的内容，支持数字、字符和自定义内容 | `ReactNode` | - |
| max | value 为数值时，最大值 | `number` | 99 |
| dot | 徽标是否为小点 | `boolean` | false |
| top | 徽标的上下偏移量，支持单位设置，可设置为：5 等 | `number` | 0 |
| right | 徽标的左右偏移量，支持单位设置，可设置为：5 等 | `number` | 0 |

### <Tabs />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| value | 当前激活 tab 面板的值 | ``number` | `string`` | 0 |
| defaultValue | 初始化激活 tab 的值 | ``number` | `string`` | 0 |
| activeColor | 标签选中色 | `string` | #1a1a1a |
| direction | 使用横纵方向 | ``horizontal` | `vertical`` | horizontal |
| activeType | 选中底部展示样式 可选值 `line`、`smile` | `string` | line |
| duration | 切换动画时长,单位 ms 0 代表无动画 | ``number` | `string`` | 300 |
| title | 自定义导航区域 | `() => JSX.Element[]` | - |
| align | 标题左对齐 | ``left` | `right`` | - |
| autoHeight | 自动高度。设置为 true 时，nut-tabs 和 nut-tabs\_\_content 会随着当前 nut-tabpane 的高度而发生变化。 | `boolean` | false |
| tabStyle | 标签栏样式 | `CSSProperties` | {} |
| onClick | 点击标签时触发 | ``(index: string | number) => void`` | - |
| onChange | 当前激活的标签改变时触发 | ``(index: string | number) => void`` | - |

### <Tabs.Tabpane />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| title | 标题 | `string` | - |
| value | 标签 Key , 匹配的标识符, 默认为索引值 | ``string` | `number`` | - |
| disabled | 是否禁用标签 | `boolean` | false |

### <Address />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| visible | 是否打开地址选择 | `boolean` | - |
| type | 地址选择类型 exist/custom | `string` | custom |
| existList | 已存在地址列表，每个地址对象中，必传值provinceName、cityName、countyName、townName、addressDetail、selectedAddress（字段解释见下） | `Array` | [] |
| defaultIcon | 已有地址列表默认图标，type='exist' 时生效 | `ReactNode` | - |
| selectIcon | 已有地址列表选中图标，type='exist' 时生效 | `ReactNode` | - |
| closeIcon | 自定义关闭弹框按钮图标 | `ReactNode` | - |
| backIcon | 自定义地址与已有地址切换时，自定义返回的按钮图标 | `ReactNode` | - |
| custom | 是否可以切换自定义地址选择，type='exist' 时生效 | ``boolean` | `string`` | true |
| onExistSelect | 选择已有地址列表时触发 | `(data: AddressList) => void` | - |
| onSwitch | 点击'选择其他地址'或自定义地址选择左上角返回按钮触发 | `(data: { type: string }) => void` | - |

### <Calendar />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| visible | 是否可见 | `boolean` | false |
| type | 类型，日期选择'single'，区间选择'range' | `string` | single |
| popup | 是否弹窗状态展示 | `boolean` | true |
| autoBackfill | 自动回填 | `boolean` | false |
| title | 显示标题 | `string` | 日期选择 |
| defaultValue | 默认值，日期选择 string 格式，区间选择 Array 格式 | ``string | Array`` | - |
| startDate | 开始日期， 如果不限制开始日期传 null | `string` | 今天 |
| endDate | 结束日期，如果不限制结束日期传 null | `string` | 距离今天 365 天 |
| showToday | 是否展示今天标记 | `boolean` | true |
| startText | 范围选择，开始信息文案 | `ReactNode` | 开始 |
| endText | 范围选择，结束信息文案 | `ReactNode` | 结束 |
| confirmText | 底部确认按钮文案 | `ReactNode` | 确认 |
| showTitle | 是否在展示日历标题 | `boolean` | true |
| showSubTitle | 是否展示日期标题 | `boolean` | true |
| scrollAnimation | 是否启动滚动动画 | `boolean` | true |
| renderHeaderButtons | 自定义日历标题下部，可用以添加自定义操作 | ``() => string` | JSX.Element |
| renderDay | 日期信息 | ``(date: Day) => string` | JSX.Element |
| renderDayTop | 日期顶部信息 | ``(date: Day) => string` | JSX.Element |
| renderDayBottom | 日期底部信息 | ``(date: Day) => string` | JSX.Element |
| onClickDay | 点击/选择后触发 | `(data: string) => {}` |  |
| onPageChange | 年月子标题到达顶部时触发 | `(param: string) => {}` |  |
| onConfirm | 选择之后或是点击确认按钮触发 | `(param: string) => {}` |  |
| onClose | 关闭时触发 | `() => {}` |  |
| day | `string | number` | `` |  |
| type | `string` | `` |  |
| scrollToDate | 滚动到指定日期所在月,如：'2023-06-30' | `string` |  |

### <Cascader />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| value | 选中值，受控 | ``(number | string)[]`` | - |
| defaultValue | 默认选中值 | ``(number | string)[]`` | - |
| options | 级联数据 | `Array` | - |
| popup | 是否弹窗状态展示 | `boolean` | true |
| visible | 级联显示隐藏状态 | `boolean` | false |
| activeColor | 选中激活颜色 | `string` | - |
| activeIcon | 标记选中的Icon | `string` | ReactNode |
| lazy | 是否开启动态加载 | `boolean` | false |
| optionKey | 自定义`options`结构中，包含 textKey、valueKey、childrenKey | `object` | - |
| format | 当options为可转换为树形结构的扁平结构时，配置转换规则 | `object` | - |
| title | 标题 | `string` | - |
| closeIconPosition | 取消按钮位置，继承 Popup 组件 | `string` | top-right |
| closeIcon | 自定义关闭按钮，继承 Popup 组件 | `ReactNode` | close |
| closeable | 是否显示关闭按钮，继承 Popup 组件 | `boolean` | true |
| onLoad | 动态加载回调，开启动态加载时生效 | `(node: any, resolve: any) => void` | - |
| onChange | 选中值改变时触发 | `(value: CascaderValue, params?: any) => void` | - |
| onPathChange | 选中项改变时触发 | `(value: CascaderValue, params: any) => void` | - |

### <Checkbox />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| checked | 是否选中 | `boolean` | false |
| defaultChecked | 初始是否选中 | `boolean` | false |
| disabled | 是否禁用选择 | `boolean` | false |
| labelPosition | 文本所在的位置 | ``left` | `right`` | right |
| icon | 选中前 | `ReactNode` | 'CheckNormal' |
| activeIcon | ，选中后 | `ReactNode` | 'Checked' |
| indeterminateIcon | 半选状态 | `ReactNode` | 'CheckDisabled' |
| label | 复选框的文本内容 | `string` | - |
| value | 标识值，用于 Group 模式 | ``string` | `number`` | - |
| onChange | 值变化时触发 | `(value: boolean) => void` | - |

### <Checkbox.Group />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| value | 当前选中项的标识符 | ``string` | `number`` | - |
| defaultValue | 初始选中项的标识符 | ``string` | `number`` | - |
| disabled | 是否禁用选择,将用于其下的全部复选框 | `boolean` | false |
| max | 限制最大可选数 | `number` | - |
| labelPosition | 文本所在的位置 | ``left` | `right`` | right |
| direction | 使用横纵方向 可选值 horizontal、vertical | `string` | vertical |
| options | 配置 options 渲染复选按钮 | `Array<{ label: string value: string disabled?: boolean }>` | - |
| onChange | 值变化时触发 | `(value: string[]) => void` | - |
| toggle | 全选/取消 | `传 `true`,表示全选，传 `false`,表示取消全选` |  |
| reverse | 反选 | `-` |  |

### <DatePicker />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| defaultValue | 初始值 | `Date` | null |
| value | 受控 | `Date` | null |
| visible | 是否可见 | `boolean` | false |
| type | 类时间类型，可选值 date time year-month month-day datehour datetime hour-minutes | `string` | date |
| minuteStep | 分钟步进值 | `number` | 1 |
| showChinese | 每列是否展示中文 | `boolean` | false |
| title | 设置标题 | `string` | null |
| startDate | 开始日期 | `Date` | 十年前 |
| endDate | 结束日期 | `Date` | 十年后 |
| formatter | 选项格式化函数 | `(type: string, option: PickerOption) => PickerOption` | - |
| filter | 选项过滤函数 | `(type: string, option: PickerOption) => PickerOption[]` | - |
| threeDimensional | 是否开启3D效果 | `boolean` | true |
| onConfirm | 点击确定按钮时触发 | `(options, value) => void` | - |
| onClose | 关闭时触发 | `(options, value) => void` | - |
| onChange | 选项改变时触发 | `(options, value, index) => void` | - |

### <Form />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| form | 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建 | `FormInstance` | - |
| footer | 表单底部区域，一般放置确认和重置按钮 | `ReactNode` | null |
| initialValues | 表单初始值 | `any` | - |
| name | 表单名称 | `any` | - |
| labelPosition | 表单项 label 的位置 | ``top` | `left` | `right`` | right |
| starPosition | 必填表单项 label 的红色星标位置 | ``left` | `right`` | left |
| onFinish | 校验成功后触发 | `(values: any) => void` | - |
| onFinishFailed | 任一表单项被校验失败后触发 | `(values: any, errorFields: any) => void` | - |

### <Form.Item />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| required | 必填表单项 label 的红色星标,仅用于控制样式 | `boolean` | false |
| name | 在使用表单校验功能的情况下，该属性是必填的 | `string` | - |
| errorMessageAlign | 错误提示文案对齐方式 | ``center` | `right` | `left`` | left |
| initialValue | 设置子元素默认值 | `any` | - |
| trigger | 设置收集字段值变更的时机 | `string` | - |
| valuePropName | 子节点的值的属性，如 Checkbox 的是 'checked' | `string` | - |
| getValueFromEvent | 设置如何将 event 的值转换成字段值 | `(...args: any) => any` | - |
| onClick | 点击事件并收集子组件 Ref | `(event: React.MouseEvent, componentRef: React.MutableRefObject<any>) => void` | - |
| required | 是否为必选字段 | `boolean` |  |
| message | 错误提示文案 | `string` |  |
| len | string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度 | `number` |  |
| max | 必须设置 type：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度 | `number` |  |
| min | 必须设置 type：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度 | `number` |  |
| pattern | 正则表达式匹配 | `RegExp` |  |
| transform | 将字段值转换成目标值后进行校验 | `(value) => any` |  |
| validator | 自定义校验，接收 Promise 作为返回值 | `(rule, value) => Promise` |  |
| getFieldValue | 获取对应字段名的值 | `(name: NamePath) => any` |  |
| setFieldsValue | 设置表单的值 | `(values) => void` |  |
| resetFields | 重置表单提示状态 | `() => void` |  |
| submit | 提交表单进行校验的方法 | `Promise` |  |

### <Input />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| defaultValue | 初始默认值 | `string` | - |
| value | 初始默认值 | `string` | - |
| type | 输入框类型，支持原生 `input` 标签的所有 `type` 属性，另外还支持 `number` `digit` | `string` | text |
| name | 组件名字，用于表单提交获取数据 | `string` | - |
| placeholder | 输入框为空时占位符 | `string` | - |
| align | 输入框内容对齐方式，可选值 `left`、`center`、`right` | `string` | left |
| disabled | 是否禁用 | `boolean` | false |
| readOnly | 是否只读 | `boolean` | false |
| autoFocus | 是否自动获得焦点，iOS 系统不支持该属性 | `boolean` | false |
| maxLength | 限制最长输入字符 | ``string` | `number`` | - |
| clearable | 展示清除 Icon | `boolean` | false |
| clearIcon | 清除图标 Icon <a href="#/icon">可参考 Icon </a> | `ReactNode` | MaskClose |
| confirmType | 键盘右下角按钮的文字，仅在type='text'时生效,可选值 send：发送、search：搜索、next：下一个、go：前往、done：完成 | `string` | done |
| formatter | 输入内容格式化函数 | `(val: string) => string` | - |
| formatTrigger | 格式化函数触发的时机，可选值为 `onChange`、`onBlur` | `string` | - |
| onChange | 输入框内容变化时触发 | `(value: string) => void` | - |
| onBlur | 失去焦点后触发 | `(value: string) => void` | - |
| onFocus | 获得焦点后触发 | `(value: string) => void` | - |
| onClear | 点击清空按钮时触发 | `(value: string) => void` | - |
| onClick | 点击 input 容器触发 | `(value: MouseEvent<HTMLDivElement>) => void` | - |

### <InputNumber />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| allowEmpty | 是否允许内容为空 | `boolean` | false |
| defaultValue | 默认值 | ``string` | `number`` | 0 |
| value | 当前值，受控值 | ``string` | `number`` | - |
| min | 最小值限制 | ``string` | `number`` | 1 |
| max | 最大值限制 | ``string` | `number`` | 9999 |
| step | 步长 | ``string` | `number`` | 1 |
| digits | 设置保留的小数位 | ``string` | `number`` | 0 |
| disabled | 禁用所有功能 | `boolean` | false |
| readOnly | 只读状态禁用输入框操作行为 | `boolean` | false |
| async | 支持异步修改 | `boolean` | false |
| formatter | 指定输入框展示值的格式 | ``function(value: number | string): string`` | - |
| onPlus | 点击增加按钮时触发 | `(e: MouseEvent) => void` | - |
| onMinus | 点击减少按钮时触发 | `(e: MouseEvent) => void` | - |
| onOverlimit | 点击不可用的按钮时触发 | `(e: MouseEvent) => void` | - |
| onChange | 值改变时触发 | ``(param: string | number, e: MouseEvent | ChangeEvent<HTMLInputElement>) => void`` | - |
| onFocus | 输入框获得焦点时触发 | `(e: FocusEvent<HTMLInputElement>) => void` | - |
| onBlur | 输入框失去焦点时触发 | `(e: ChangeEvent<HTMLInputElement>) => void` | - |

### <Menu />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| activeColor | 选项的选中态图标颜色 | `string` | #F2270C |
| closeOnOverlayClick | 是否在点击遮罩层后关闭菜单 | `boolean` | true |
| lockScroll | 背景是否锁定 | `boolean` | true |
| scrollFixed | 滚动后是否固定，可设置固定位置 | ``boolean` | `string` | `number`` | true |
| icon | 自定义标题图标 | `React.ReactNode` | - |

### <MenuItem />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| title | 菜单项标题 | `string` | 当前选中项文字 |
| options | 选项数组 | `array` | - |
| disabled | 是否禁用菜单 | `boolean` | false |
| columns | 可以设置一行展示多少列 options | `number` | 1 |
| icon | 自定义选项图标 | `React.ReactNode` | Check |
| direction | 菜单展开方向，可选值为up | `string` | down |
| onChange | 选择 option 之后触发 | `(event: any) => void` | - |
| toggle | 切换菜单展示状态，传 true 为显示，false 为隐藏，不传参为取反 | `show?: boolean` |  |

### <NumberKeyboard />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| visible | 是否显示键盘 | `boolean` | false |
| title | 键盘标题 | `ReactNode` | - |
| type | 键盘模式, default：默认样式 rightColumn：带右侧栏 | `string` | default |
| random | 随机数 | `boolean` | false |
| custom | 自定义键盘额外的键, 数组形式最多支持添加 2 个, 超出默认取前 2 项 | `string[]` | - |
| confirmText | 自定义完成按钮文字，如"支付"，"下一步"，"提交"等 | `string` | 完成 |
| onChange | 点击按键时触发 | `(value: string) => void` | - |
| onDelete | 点击删除键时触发 | `-` | - |
| onClose | 点击关闭按钮或非键盘区域时触发 | `-` | - |
| onConfirm | 点击确定按钮时触发 | `-` | - |

### <Picker />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| visible | 是否可见 | `boolean` | false |
| title | 设置标题 | `string` | - |
| options | 列表数据 | `Array` | [] |
| value | 选中值，受控 | `Array` | [] |
| defaultValue | 默认选中 | `Array` | [] |
| threeDimensional | 是否开启3D效果 | `boolean` | true |
| duration | 快速滑动时惯性滚动的时长，单位 ms | ``string` | `number`` | 1000 |
| onConfirm | 点击确认按钮时候回调 | `(options, value) => void` | - |
| onChange | 每一列值变更时调用 | `(options, value) => void` | - |
| onClose | 关闭时触发 | `(options, value) => void` | - |
| afterClose | 联动时，关闭时回调 | `(options, value) => void` | - |
| text | 选项的文字内容 | ``string` | `number`` | - |
| value | 选项对应的值，且唯一 | ``string` | `number`` | - |
| children | 用于级联选项 | `Array` | - |

### <Radio />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | `boolean` | - |
| defaultChecked | 初始是否选中 | `boolean` | - |
| disabled | 是否禁用选择 | `boolean` | false |
| value | 携带的标识值，用于 Group 模式 | ``string` | `number`` | - |
| labelPosition | 文本所在的位置 | ``left` | `right`` | right |
| icon | <a href="#/icon">图标名称</a>，选中前(建议和`activeIcon`一起修改) | `ReactNode` | 'CheckNormal' |
| activeIcon | <a href="#/icon">图标名称</a>，选中后(建议和`icon`一起修改) | `ReactNode` | 'CheckChecked' |
| shape | 形状 | ``button` | `round` | `round`` | round |
| onChange | 选中态变化时触发 | `(checked: boolean) => void` | - |

### <Radio.Group />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| value | 当前选中项的标识符 | ``string` | `number`` | - |
| labelPosition | 文本所在的位置 | ``left` | `right`` | right |
| disabled | 是否禁用 | `boolean` | false |
| direction | 使用横纵方向 | ``horizontal` | `vertical`` | vertical |
| options | 配置 options 渲染单选按钮 | `Array<{ label: string value: string disabled?: boolean }>` | - |
| onChange | 值变化时触发 | ``(value: string | number) => void`` | - |

### <Range />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| defaultValue | 默认进度百分比，非受控 | ``number` | `number[]`` | 0 |
| value | 当前进度百分比，受控 | ``number` | `number[]`` | 0 |
| range | 是否开启双滑块模式 | `boolean` | false |
| max | 最大值 | `number` | 100 |
| min | 最小值 | `number` | 0 |
| maxDescription | 最大值描述，传 `null` 表示隐藏 | `ReactNode` | - |
| minDescription | 最小值描述，传 `null` 表示隐藏 | `ReactNode` | - |
| currentDescription | 当前值描述，传 `null` 表示隐藏 | ``((value) => ReactNode)` | `null`` | - |
| step | 步长 | `number` | 1 |
| disabled | 是否禁用滑块 | `boolean` | false |
| vertical | 是否竖向展示 | `boolean` | false |
| marks | 刻度标示 | `Object{key: number}` | {} |
| button | 自定义滑动按钮 | `ReactNode` | - |
| onChange | 进度实时变化，通常在受控方式中与 value 一起使用 | `(value) => void` | - |
| onStart | 开始拖动时触发 | `-` | - |
| onEnd | 结束拖动时触发 | `(value) => void` | - |

### <Rate />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| defaultValue | 非受控的 star 默认值 | `number` | 0 |
| value | 受控的 star 数值 | `number` | 0 |
| count | star 总数 | `number` | 5 |
| min | 最少选中star数量 | `number` | 0 |
| uncheckedIcon | 使用图标(未选中) | `ReactNode` | star-n |
| checkedIcon | 使用图标(选中) | `ReactNode` | star-n |
| allowHalf | 是否半星 | `boolean` | false |
| readOnly | 是否只读 | `boolean` | false |
| disabled | 是否禁用 | `boolean` | false |
| onChange | 当前 star 数修改时触发 | `(value: number) => void` | - |

### <SearchBar />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| value | 当前输入的值 | `string` | - |
| placeholder | 输入框默认暗纹 | `string` | 请输入 |
| shape | 搜索框形状，可选值为 `round` | `string` | square |
| disabled | 是否禁用输入框 | `boolean` | false |
| readOnly | 输入框只读 | `boolean` | false |
| maxLength | 最大输入长度 | `number` | 9999 |
| clearable | 是否展示清除按钮 | `boolean` | true |
| autoFocus | 是否自动聚焦 | `boolean` | false |
| left | 搜索框左侧区域 | `ReactNode` | - |
| right | 搜搜框右侧区域 | `ReactNode` | - |
| leftIn | 输入框内左侧区域 | `ReactNode` | <Search width="12" height="12" /> |
| rightIn | 输入框内右侧区域 | `ReactNode` | - |
| onChange | 输入内容时触发 | `(value: string, event: Event) => void` | - |
| onFocus | 聚焦时触发 | `(value: string, event: Event) => void` | - |
| onBlur | 失焦时触发 | `(value: string, event: Event) => void` | - |
| onClear | 点击清空时触发 | `(event: Event) => void` | - |
| onSearch | 确定搜索时触发 | `(val: string) => void` | - |
| onClickInput | 点击输入区域时触发 | `(event: Event) => void` | - |

### <ShortPassword />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| value | 密码字符串 | `string` | - |
| visible | 是否展示短密码框 | `boolean` | false |
| plain | 是否展示明文 | `boolean` | false |
| title | 标题 | `ReactNode` | 请输入密码 |
| description | 密码框描述 | `ReactNode` | 您使用了虚拟资产，请进行验证 |
| tips | 提示语 | `ReactNode` | 忘记密码 |
| hideFooter | 是否隐藏底部按钮 | `boolean` | true |
| length | 密码长度，取值为4~6 | `number` | 6 |
| error | 错误信息提示 | `ReactNode` | - |
| autoFocus | 自动聚焦 | `boolean` | false |
| onChange | 输入密码时触发事件 | `(value) => void` | - |
| onConfirm | 点击确认时触发事件 | `(value) => void` | - |
| onCancel | 点击取消时触发事件 | `() => void` | - |
| onClose | 点击关闭图标和遮罩时触发事件 | `() => void` | - |
| onTips | 点击忘记密码时触发事件 | `() => void` | - |
| onComplete | 输入完成的回调 | `(value) => void` | - |
| onFocus | 输入框聚焦 | `() => void` | - |

### <Signature />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| customClass | 自定义 class | `string` | - |
| lineWidth | 线条的宽度 | `number` | 3 |
| strokeStyle | 绘图笔触颜色 | `string` | #000 |
| type | 图片格式 | `string` | png |
| unsupported | 不支持 Canvas 情况下的展示文案 | `ReactNode` | 对不起，当前浏览器不支持 Canvas，无法使用本控件！ |
| onConfirm | 点击确认按钮触发事件回调函数 | `onConfirm: (canvas: HTMLCanvasElement, dataurl: string) => void` | - |
| onClear | 点击重签按钮触发事件回调函数 | `onClear: () => void` | - |
| confirm | 确认签字 | `() => void` |  |
| clear | 清除签字 | `() => void` |  |

### <Switch />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| defaultChecked | 开关状态，非受控 | `boolean` | false |
| checked | 开关状态，受控 | `boolean` | false |
| disabled | 禁用状态 | `boolean` | false |
| activeText | 打开时文字描述 | `string` | - |
| inactiveText | 关闭时文字描述 | `string` | - |
| onChange | 切换开关时触发 | `onChange:(value: boolean, event: Event)` | - |

### <TextArea />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| value | 输入框内容，受控 | `string` | - |
| defaultValue | 初始默认值，非受控 | `string` | - |
| placeholder | 设置占位提示文字 | `string` | 请输入内容 |
| maxLength | 限制最长输入字符，-1 表示无限制 | `number` | 140 |
| rows | textarea 的行数 | `number` | 2 |
| showCount | textarea 是否展示输入字符。须配合`maxLength`使用 | `boolean` | false |
| autoSize | 高度是否可拉伸 | `boolean` | false |
| readOnly | 只读属性 | `boolean` | false |
| disabled | 禁用属性 | `boolean` | false |
| onChange | 输入内容时触发 | `(value) => void` | - |
| onFocus | 聚焦时触发 | `(event) => void` | - |
| onBlur | 失焦时触发 | `(event) => void` | - |

### <Uploader />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| autoUpload | 是否在选取文件后立即进行上传，false 时需要手动执行 ref submit 方法进行上传 | `Boolean` | true |
| name | `input` 标签 `name` 的名称，发到后台的文件参数名 | `string` | file |
| url | 上传服务器的接口地址 | `string` | - |
| defaultValue | 默认已经上传的文件列表 | `FileType<React.ReactNode>[]` | [] |
| value | 已经上传的文件列表 | `FileType<string>[]` | [] |
| preview | 是否上传成功后展示预览图 | `boolean` | true |
| previewUrl | 当上传非图片('image')格式的默认图片地址 | `string` | - |
| deletable | 是否展示删除按钮 | `boolean` | true |
| method | 上传请求的 http method | `string` | post |
| previewType | 上传列表的内建样式，支持两种基本样式 picture、list | `string` | picture |
| capture | 图片[选取模式](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture")，直接调起摄像头 | `string` | false |
| maxFileSize | 可以设定最大上传文件的大小（字节） | ``number` | `string`` | Number.MAX_VALUE |
| maxCount | 文件上传数量限制 | ``number` | `string`` | 1 |
| imageFit | 图片填充模式 | ``contain` | `cover` | `fill` | `none` | `scale-down`` | cover |
| clearInput | 是否需要清空`input`内容，设为`true`支持重复选择上传同一个文件 | `boolean` | true |
| accept | 允许上传的文件类型，[详细说明]("https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B") | `string` | \* |
| headers | 设置上传的请求头部 | `object` | {} |
| data | 附加上传的信息 formData | `object` | {} |
| uploadIcon | 上传区域<a href="#/zh-CN/icon">图标名称</a> | `React.ReactNode` | - |
| uploadLabel | 上传区域图片下方文字 | `React.ReactNode` | - |
| xhrState | 接口响应的成功状态（status）值 | `number` | 200 |
| withCredentials | 支持发送 cookie 凭证信息 | `Boolean` | false |
| multiple | 是否支持文件多选 | `boolean` | false |
| disabled | 是否禁用文件上传 | `boolean` | false |
| timeout | 超时时间，单位为毫秒 | ``number` | `string`` | 1000 \* 30 |
| beforeUpload | 上传前的函数需要返回一个`Promise`对象 | ``(file: File[]) => Promise<File[] | boolean>`` | - |
| beforeXhrUpload | 执行 XHR 上传时，自定义方式 | `(xhr: XMLHttpRequest, options: any) => void` | - |
| beforeDelete | 除文件时的回调，返回值为 false 时不移除。支持返回一个 `Promise` 对象，`Promise` 对象 resolve(false) 或 reject 时不移除 | `(file: FileItem, files: FileItem[]) => boolean` | - |
| onStart | 文件上传开始 | `options` | - |
| onProgress | 文件上传的进度 | `event, options, percentage` | - |
| onOversize | 文件大小超过限制时触发 | `files` | - |
| onSuccess | 上传成功 | `responseText, options` | - |
| onFailure | 上传失败 | `responseText, options` | - |
| onChange | 上传文件改变时的状态 | `fileList, event` | - |
| onDelete | 文件删除之前的状态 | `files, fileList` | - |
| onFileItemClick | 文件上传成功后点击触发 | `fileItem` | - |
| status | 文件状态值，可选'ready,uploading,success,error,removed' | `ready` |  |
| uid | 文件的唯一标识 | `new Date().getTime().toString()` |  |
| name | 文件名称 | `-` |  |
| url | 文件路径 | `-` |  |
| type | 文件类型 | `image/jpeg` |  |
| formData | 上传所需的data | `new FormData()` |  |
| submit | 手动上传模式，执行上传操作 | `-` | - |
| clear | 清空已选择的文件队列（该方法一般配合在手动模式上传时使用） | `index` | - |

### <ActionSheet />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| visible | 遮罩层可见 | `boolean` | false |
| title | 设置列表面板标题 | `string` | - |
| description | 设置列表面板副标题/描述 | `string` | - |
| options | 列表项 | `Array` | [] |
| optionKey | 列表项的自定义设置 | `{ [key: string]: string }` | - |
| cancelText | 取消文案 | `string` | 取消 |
| onSelect | 选择之后触发 | `(item: any, index: number) => void` | - |
| onCancel | 点击取消文案时触发 | `() => void` | - |
| name | 列表项的标题key值 | `string` | - |
| description | 列表项的描述key值 | `string` | - |
| danger | 高亮颜色 | `string` | $primary-color |
| disable | 禁用状态 | `string` | $color-text-disabled |

### <Badge />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| value | 显示的内容，支持数字、字符和自定义内容 | `ReactNode` | - |
| max | value 为数值时，最大值 | `number` | 99 |
| dot | 是否为小点 | `boolean` | false |
| top | 上下偏移量，支持单位设置，可设置为：5 等 | `number` | 0 |
| right | 左右偏移量，支持单位设置，可设置为：5 等 | `number` | 0 |
| color | 徽标背景颜色,默认值为当前主题色 | `string` | - |

### <Dialog />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| visible | 对话框是否可见 | `boolean` | - |
| title | 标题 | `ReactNode` | - |
| content | 对话框的内容，适用于函数式调用 | `ReactNode` | - |
| footer | 自定义页脚，传入 null 则不显示 | `ReactNode` | - |
| confirmText | 确认按钮文案 | `ReactNode` | 确定 |
| cancelText | 取消按钮文案 | `ReactNode` | 取消 |
| overlay | 是否展示遮罩 | `boolean` | true |
| hideConfirmButton | 是否隐藏确定按钮 | `boolean` | false |
| hideCancelButton | 是否隐藏取消按钮 | `boolean` | false |
| disableConfirmButton | 禁用确定按钮 | `boolean` | false |
| closeOnOverlayClick | 点击蒙层是否关闭对话框 | `boolean` | true |
| footerDirection | 使用横纵方向 可选值 horizontal、vertical | `string` | horizontal |
| lockScroll | 背景是否锁定 | `boolean` | true |
| beforeCancel | 取消前回调，点击取消时触发 | `() => boolean` | - |
| beforeClose | 关闭前回调 | `() => boolean` | - |
| onConfirm | 确定按钮回调 | ``(e?: MouseEvent) => Promise | void`` | - |
| onCancel | 取消按钮回调 | `() => void` | - |
| onClose | 关闭回调，任何情况关闭弹窗都会触发 | `() => void` | - |
| onClick | 点击自身回调 | `() => void` | - |
| onOverlayClick | 点击蒙层触发 | `() => void` | - |

### <Drag />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| attract | 是否开启自动吸边 | `boolean` | false |
| direction | 拖拽元素的拖拽方向限制 | ``x` | `y` | `all`` | all |
| boundary | 拖拽元素的拖拽边界 | `Object` | {top: 0, left: 0, right: 0, bottom: 0} |

### <Empty />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| image | 图片,支持传入图片 URL | `ReactNode` | - |
| imageSize | 图片大小，number 类型单位为 px | ``number` | `string`` | - |
| description | 图片下方的描述文字 | `ReactNode` | - |
| status | 默认图片错误类型 | ``empty` | `error` | `network`` | empty |

### <InfiniteLoading />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| hasMore | 是否还有更多数据 | `boolean` | true |
| threshold | 距离底部多远加载 | `number` | 200 |
| capture | 是否使用捕获模式 true 捕获 false 冒泡 | `boolean` | false |
| target | 获取监听的目标元素 | `string` | - |
| loadMoreText | “没有更多数”据展示文案 | `string` | 哎呀，这里是底部了啦 |
| pullRefresh | 是否开启下拉刷新 | `boolean` | false |
| pullingText | 下拉刷新提示文案 | `ReactNode` | 松手刷新 |
| loadingText | 上拉加载提示文案 | `ReactNode` | 加载中... |
| onRefresh | 下拉刷新事件回调 | `(param: () => void) => void` | - |
| onLoadMore | 继续加载的回调函数 | `(param: () => void) => void` | - |
| onScroll | 实时监听滚动高度 | `(param: number) => void` | - |

### <NoticeBar />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| direction | 滚动的方向，可选 horizontal、vertical | `string` | horizontal |
| content | 提示的信息 | `string` | - |
| closeable | 是否启用关闭模式 | `boolean` | false |
| leftIcon | 左边的 icon，closeable 模式下默认为空 | `ReactNode` | - |
| rightIcon | 右边的 icon，在 closeable 模式下默认为 `<Close />` | `ReactNode` | - |
| delay | 延时多少秒 | ``string` | `number`` | 1 |
| scrollable | 是否可以滚动 | `boolean` | true |
| speed | 滚动速率 (px/s) | `number` | 50 |
| wrap | 是否开启文本换行 | `boolean` | false |
| onClick | 外层点击事件回调 | `(event: any) => void` | - |
| onClose | 关闭通知栏时触发 | `(event: any) => void` | - |
| onClickItem | 垂直滚动多条数据时，点击当前展示的信息时触发 | `(event: any, value: any) => void` | - |
| list | 纵向滚动数据列表 | `Array` | [] |
| speed | 滚动的速度 | `number` | 50 |
| duration | 停留时间(毫秒) | `number` | 1000 |
| height | 每一个滚动列的高度(px) | `number` | 40 |
| closeable | 是否启用右侧关闭图标，可以通过 rightIcon 自定义图标 | `boolean` | false |

### <Notify />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| type | 提示的信息类型（primary，success ，danger，warning） | `string` | danger |
| duration | 展示时长(ms)，值为 0 时，notify 不会消失 | `string` | 3000 |
| position | 自定义位置 (top, bottom) | `string` | top |
| onClick | 点击事件回调 | `onClick: () => void` | - |
| onClose | 关闭事件回调 | `onClose: () => void` | - |

### <Popover />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| list | 选项列表 | `List[]` | [] |
| visible | 是否展示气泡弹出层 | `boolean` | false |
| location | 弹出位置，里面具体的参数值可以参考上面的位置自定义例子 | `string` | bottom |
| offset | 出现位置的偏移量 | ``string[] | number[]`` | [0, 12] |
| showArrow | 是否显示小箭头 | `boolean` | true |
| closeOnClickAction | 是否在点击选项后关闭 | `boolean` | true |
| closeOnClickOutside | 是否在点击外部元素后关闭菜单 | `boolean` | true |
| targetId | 自定义目标元素 id | `string` | - |
| onClick | 点击切换 popover 展示状态 | `() => void` | () => {} |
| onSelect | 点击选项时触发 | `(item: List, index: number) => void` | (item, index) => {} |
| onOpen | 点击菜单时触发 | `() => void` | () => {} |
| onClose | 关闭菜单时触发 | `() => void` | () => {} |
| key | 选项 key 值 | `string` | - |
| name | 选项文字 | `string` | - |
| icon | 参考 Icon 组件 | `ReactNode` | - |
| disabled | 是否为禁用状态 | `boolean` | false |
| className | 为对应选项添加额外的类名 | `string` | - |

### <Popup />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| visible | 当前组件是否显示 | `boolean` | false |
| zIndex | 遮罩层级 | ``string` | `number`` | 2000 |
| duration | 遮罩动画时长，单位秒 | `number` | 0.3 |
| overlayClassName | 自定义遮罩类名 | `string` | - |
| overlayStyle | 自定义遮罩样式 | `CSSProperties` | - |
| lockScroll | 背景是否锁定 | `boolean` | true |
| overlay | 是否显示遮罩 | `boolean` | true |
| closeOnOverlayClick | 是否点击遮罩关闭 | `boolean` | true |
| position | 弹出位置 | ``top` | `bottom` | `left` | `right` | `center`` | center |
| transition | 动画名 | `string` | - |
| style | 自定义弹框样式 | `CSSProperties` | - |
| className | 自定义弹框类名 | `string` | - |
| closeable | 是否显示关闭按钮 | `boolean` | false |
| closeIconPosition | 关闭按钮位置 | ``top-left` | `top-right` | `bottom-left` | `bottom-right`` | top-right |
| closeIcon | 自定义 Icon | `ReactNode` | close |
| destroyOnClose | 组件不可见时，卸载内容 | `boolean` | false |
| round | 是否显示圆角 | `boolean` | false |
| portal | 指定节点挂载 | ``HTMLElement` | `(() => HTMLElement)`` | null |
| onClick | 点击弹框时触发 | `event: MouseEvent` | - |
| onClickCloseIcon | 点击关闭图标时触发 | `event: MouseEvent` | - |
| onOpen | 打开弹框时触发 | `-` | - |
| onClose | 关闭弹框时触发 | `-` | - |
| afterShow | 继承于`Overlay`, 遮罩打开动画结束时触发 | `event: HTMLElement` | - |
| afterClose | 继承于`Overlay`, 遮罩关闭动画结束时触发 | `event: HTMLElement` | - |
| onClickOverlay | 点击遮罩触发 | `event: MouseEvent` | - |

### <PullToRefresh />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| canReleaseText | 释放的提示文案 | `ReactNode` | 释放立即刷新 |
| completeText | 完成时的提示文案 | `ReactNode` | 刷新成功 |
| completeDelay | 完成后延迟消失的时间，单位为 ms | `number` | 500 |
| disabled | 是否禁用下拉刷新 | `boolean` | false |
| headHeight | 头部提示内容区的高度，单位为 px | `number` | 40 |
| pullingText | 下拉的提示文案 | `ReactNode` | 下拉刷新 |
| refreshingText | 刷新时的提示文案 | `ReactNode` | 加载中…… |
| renderText | 根据下拉状态，自定义下拉提示文案 | `ReactNode` | - |
| threshold | 触发刷新需要下拉多少距离，单位为 px | `number` | 60 |
| onRefresh | 触发刷新时的处理函数 | `() => Promise<any>` | - |

### <Skeleton />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| visible | 是否显示骨架屏(true不显示骨架屏，false显示骨架屏) | `boolean` | true |
| animated | 是否开启骨架屏动画 | `boolean` | false |
| avatar | 是否显示头像 | `boolean` | false |
| avatarShape | 头像形状：正方形/圆形 | `string` | round |
| avatarSize | 头像大小 | `string` | 50px |
| rows | 设置段落行数 | `string` | 1 |
| title | 是否显示段落标题 | `boolean` | true |

### <Swipe />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| name | 标识符，可以在事件参数中获取到 | ``number` | `string`` | - |
| leftAction | 左侧滑动区域的内容 | `ReactNode` | - |
| rightAction | 右侧滑动区域的内容 | `ReactNode` | - |
| beforeClose | 关闭前的回调函数，返回滑动区域所在方向 `position` | ``(position: 'left | 'right') => void`` | - |
| disabled | 是否禁用滑动 | `boolean` | false |
| onOpen | 打开单元格侧边栏 | ``(name, position): { name: string | number, position: 'left' | 'right' } => void`` | - |
| onClose | 收起单元格侧边栏 | ``(name, position): { name: string | number, position: 'left' | 'right' } => void`` | - |
| onActionClick | 点击左侧或者右侧时触发 | ``(event: Event, position: 'left' | 'right') => void`` | - |
| onTouchStart | onTouchStart | `(event: Event) => void` | - |
| onTouchMove | onTouchMove | `(event: Event) => void` | - |
| onTouchEnd | onTouchEnd | `(event: Event) => void` | - |
| open | 打开单元格侧边栏，`side`参数默认为`right` | ``(side?: 'left' | 'right') => void`` |  |
| close | 收起单元格侧边栏 | `() => void` |  |

### <Toast />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| content | Toast文本内容 | `React.ReactNode` | - |
| duration | 展示时长（秒）<br>值为 0 时，toast 不会自动消失 | `number` | 2 |
| position | toast展示位置 | ``top` | `center` | `bottom`` | center |
| title | 标题 | `string` | - |
| icon | 自定义图标 | ``success` | `fail` | `loading` | `warn` | `React.ReactNode`` | - |
| size | 文案尺寸，三选一 | ``small` | `base` | `large`` | base |
| contentClassName | 自定义内容区类名 | `string` | - |
| contentStyle | 自定义内容区样式 | `React.CSSProperties` | - |
| closeOnOverlayClick | 是否在点击遮罩层后关闭提示 | `boolean` | false |
| lockScroll | 背景是否锁定 | `boolean` | false |
| onClose | 关闭时触发的事件 | `() => void` | () => void |
| clear | 关闭所有显示中的`Toast` | `-` |  |
| config | `Toast`全局配置 | ``{ duration: number, position: 'top' | 'center' | 'bottom', closeOnOverlayClick: boolean, lockScroll: boolean }`` |  |

### <Animate />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| type | 动画类型，见下方type值说明 | `AnimateType` | shake |
| action | 触发方式，'initial'--初始化执行; 'click'--点击执行 | ``initial` | `click`` | initial |
| loop | 是否循环执行。true-循环执行;false-执行一次 | `boolean` | false |
| onClick | 点击元素时触发 | `event: Event` | - |
| 1 | shake | `抖动，建议loop为true` |  |
| 2 | ripple | `不循环则是放大后缩小，循环则是心跳` |  |
| 3 | breath | `呼吸灯，建议loop为true` |  |
| 4 | float | `漂浮，建议loop为true` |  |
| 5 | slide-right | `由右向左划入` |  |
| 6 | slide-left | `由左向右划入` |  |
| 7 | slide-top | `由上至下划入` |  |
| 8 | slide-bottom | `由下至上划入` |  |
| 9 | jump | `跳跃，建议loop为true` |  |
| 10 | twinkle | `水波，建议loop为true` |  |
| 11 | flicker | `擦亮按钮，建议loop为true` |  |

### <AnimatingNumbers />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| length | 设置最大展示长度，数值位数不够，数值前面按位补 0 | `number` | 0 |
| value | 结束值,必填项 | `string` | number |
| delay | 等待动画执行时间，单位 ms | `number` | 300 |
| duration | 动画执行时间，单位 s | `number` | 1 |
| thousands | 是否有千位分隔符 | `boolean` | false |

### <Audio />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| src | 语音资源链接 | `string` | - |
| muted | 是否静音 | `boolean` | false |
| autoPlay | 是否自动播放 | `boolean` | false |
| loop | 是否循环播放 | `boolean` | false |
| preload | 是否预加载语音 | ``none` | `metadata` | `auto`` | auto |
| type | 展示形式，可选值：controls 控制面板 progress 进度条 icon 图标 none 自定义 | `string` | progress |
| onBack | 语音快退回调，type = progress 时生效 | `(event：HTMLAudioElement) => void` | - |
| onForward | 语音快进回调，type = progress 时生效 | `(event：HTMLAudioElement) => void` | - |
| onPause | 暂停回调 | `(event：HTMLAudioElement) => void` | - |
| onEnd | 语音播放完成，loop = false 时生效 | `(event：HTMLAudioElement) => void` | - |
| onMute | 静音回调 | `(event：HTMLAudioElement) => void` | - |
| onCanPlay | 可以播放媒体时触发 | `(event：HTMLAudioElement) => void` | - |

### <Avatar />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| size | 设置头像的大小 | ``large` | `normal` | `small` | `numbers`` | - |
| shape | 设置头像的形状 | ``round` | `square`` | round |
| background | 设置 Icon、字符类型头像的背景色 | `string` | #eee |
| color | 设置 Icon、字符类型头像的颜色 | `string` | #666 |
| fit | 图片填充模式 | ``contain` | `cover` | `fill` | `none` | `scale-down` | `cover`` | - |
| src | 设置图片类型头像的地址 | `string` | - |
| alt | 设置图片类型头像无法显示时的替代文本 | `string` | - |
| icon | 设置 Icon 类型头像图标 | `ReactNode` | - |
| onClick | 点击头像触发事件 | `(e: MouseEvent) => void` | - |
| onError | 图片加载失败的事件 | `() => void` | - |

### <AvatarGroup />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| max | 显示的最大头像个数 | ``string` | `number`` | - |
| maxContent | 头像数量超出时，会出现一个头像折叠元素。该元素内容可为...、more、+N。 | `string` | - |
| size | 设置头像的大小，可选值为：large、normal、small，支持直接输入数字 | ``large` | `normal` | `small`` | - |
| shape | 设置头像的形状 | ``string` | `round`` | - |
| maxBackground | 设置 Icon、字符类型头像的背景色 | `string` | #eee |
| maxColor | 设置 Icon、字符类型头像的颜色 | `string` | #666 |
| gap | 设置头像之间的间距 | `string` | -8 |
| level | 头像之间的层级关系，可选值为：left、right | ``left` | `right`` | left |

### <CircleProgress />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| percent | 百分比 | ``number` | `string`` | 必传项，无默认值 |
| strokeWidth | 圆弧的宽度 | ``number` | `string`` | 5 |
| radius | 半径 | ``number` | `string`` | 50 |
| color | 圆环进度条颜色，传入对象格式可以定义渐变色 | ``object | string`` | - |
| background | 圆环轨道颜色 | `string` | #d9d9d9 |
| strokeLinecap | 圆环进度条端点形状 | ``butt` | `round` | `square` | `inherit`` | round |
| clockwise | 是否顺时针展示 | `boolean` | true |

### <Collapse />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| defaultActiveName | 默认展开面板的 name，非受控 | ``Array<string>` | `string`` | - |
| activeName | 当前展开面板的 name，受控 | ``Array<string>` | `string`` | - |
| accordion | 是否开启手风琴模式 | `boolean` | false |
| rotate | 点击折叠和展开的旋转角度,在自定义图标模式下生效 | ``string` | `number`` | 180 |
| expandIcon | 自定义展开图标 | `ReactNode` | - |

### <Collapse.Item />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| name | 唯一标识符，必填 | `string` | - |
| title | 标题栏左侧内容 | `ReactNode` | - |
| disabled | 标题栏是否禁用 | `boolean` | false |
| extra | 标题栏副标题 | `ReactNode` | - |
| rotate | 点击折叠和展开的旋转角度,在自定义图标模式下生效 | ``string` | `number`` | 180 |
| expandIcon | 自定义展开图标 | `ReactNode` | - |
| onChange | 切换面板时触发 | `(activeName, name, status) => void` | - |

### <CountDown />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| startTime | 开始时间 | `number` | Date.now() |
| endTime | 结束时间 | `number` | Date.now() |
| remainingTime | 剩余时间，单位是毫秒 | `number` | 0 |
| paused | 是否暂停 | `boolean` | false |
| format | 时间格式 | `string` | HH:mm:ss |
| millisecond | 是否开启毫秒级渲染 | `boolean` | false |
| autoStart | 是否自动开始倒计时 | `boolean` | true |
| time | 倒计时显示时间，单位是毫秒。autoStart 为 false 时生效 | `number` | 0 |
| destroy | 销毁实例 | `boolean` | false |
| onEnd | 倒计时结束时回调函数 | `无` | - |
| onPaused | 暂停倒计时回调函数 | `onPaused: (restTime: number) => void` | - |
| onRestart | 重新开始倒计时回调函数 | `onRestart: (restTime: number) => void` | - |
| onUpdate | 自定义展示内容时，实时更新倒计时数据回调函数 | `onUpdate: (restTime: any) => void` | - |
| DD | 天数 | `` |  |
| HH | 小时 | `` |  |
| mm | 分钟 | `` |  |
| ss | 秒数 | `` |  |
| S | 毫秒（1位） | `` |  |
| SS | 毫秒（2位） | `` |  |
| SSS | 毫秒（3位） | `` |  |
| start | 开始倒计时 | `() => void` |  |
| pause | 暂停倒计时 | `() => void` |  |
| reset | 重设倒计时，若 auto-start 为 true，重设后会自动开始倒计时 | `() => void` |  |

### <Ellipsis />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| content | 文本内容 | `string` | - |
| direction | 省略位置 | ``start` | `end` | `middle`` | end |
| rows | 展示几行 | `number` | 1 |
| expandText | 展开操作的文案 | `string` | - |
| collapseText | 收起操作的文案 | `string` | - |
| symbol | 省略的符号 | `string` | ... |
| lineHeight | 容器的行高 | ``string` | `number`` | 20 |
| onClick | 文本点击时触发 | `() => void` | - |
| onChange | 点击展开收起时触发 | `(type: string) => void` | - |

### <ImagePreview />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| visible | 是否展示预览图片 | `boolean` | false |
| videos | 预览的视频数组（视频自动放到图片之前） | `Array<Object>` | [] |
| images | 预览图片数组 | `{ src: string }[]` | [] |
| autoPlay | 自动轮播时长，0表示不会自动轮播 | ``number` | `string`` | 3000 |
| defaultValue | 初始页码 | `number` | 1 |
| value | 页码，受控 | `number` | 1 |
| indicator | 分页指示器是否展示 | `boolean` | false |
| indicatorColor | 分页指示器选中的颜色 | `string` | #fff |
| closeOnContentClick | 点击图片可以退出预览 | `boolean` | false |
| onClose | 点击遮罩关闭图片预览时触发 | `() => void` | - |

### <Indicator />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| current | 当前步骤 | `number` | 0 |
| total | 步骤长度 | `number` | 3 |
| direction | 展示方向，默认为水平方向 | ``horizontal` | `vertical`` | horizontal |

### <Pagination />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| value | 当前页码，受控值，与 onChange 搭配使用 | `number` | - |
| defaultValue | 默认页码，非受控 | `number` | 1 |
| mode | 显示模式 | ``multi` | `simple`` | multi |
| prev | 自定义上一页按钮内容 | `ReactNode` | 上一页 |
| next | 自定义下一页按钮内容 | `ReactNode` | 下一页 |
| total | 总记录数 | `number` | 50 |
| pageSize | 每页记录数 | `number` | 10 |
| itemSize | 显示的页码个数 | `number` | 5 |
| ellipse | 是否显示省略号 | `boolean` | false |
| itemRender | 用于自定义页码的结构 | `(page: {number, text}) => ReactNode` | - |
| onChange | 页码改变时触发 | `(value) => void` | - |

### <Price />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| price | 价格数量 | `number` | 0 |
| symbol | 符号类型 | `string` | &yen; |
| digits | 小数位位数 | `number` | 2 |
| thousands | 是否按照千分号形式显示 | `boolean` | false |
| position | 符号显示在价格前或者后，`before`、`after` | `string` | before |
| size | 价格尺寸，`large`、`normal`、`small` | `string` | large |
| line | 是否划线价 | `boolean` | false |

### <Progress />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| percent | 百分比 | `number` | 0 |
| color | 进度条线条颜色 | `string` | linear-gradient(135deg, #fa2c19 0%, #fa6419 100%) |
| background | 进度条背景颜色 | `string` | #f3f3f3 |
| strokeWidth | 进度条宽度 | `string` | - |
| showText | 是否显示文字内容 | `boolean` | false |
| animated | 是否展示动画效果 | `boolean` | false |
| lazy | 每次进入可视区展示进度条动画 | `boolean` | false |
| delay | 延迟数据加载时长，单位 ms | `number` | 0 |

### <Steps />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| direction | 显示方向 | ``horizontal` | `vertical`` | horizontal |
| value | 当前所在的步骤 | `number` | 0 |
| dot | 点状步骤条 | `boolean` | false |

### <Step />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| title | 流程步骤的标题 | `string` | - |
| description | 流程步骤的描述性文字 | `string` | - |
| icon | 图标(来自Icon组件的name属性) | `ReactNode` | - |
| value | 流程步骤的索引 | `number` | 0 |
| description | 流程步骤的描述性文字的html结构 | `React.ReactNode` | - |
| onStepClick | 点击步骤的标题或图标时触发 | `(index: number) => void` | - |

### <Swiper />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| width | 轮播卡片的宽度 | ``number` | `string`` | window.innerWidth |
| height | 轮播卡片的高度 | ``number` | `string`` | 0 |
| direction | 轮播方向 | ``horizontal` | `vertical`` | horizontal |
| indicator | 分页指示器是否展示，可传入自定义的 HTML 结构 | `ReactNode` | false |
| loop | 是否循环轮播 | `boolean` | true |
| duration | 动画时长（单位是ms） | ``number` | `string`` | 500 |
| autoPlay | 自动轮播时长，0表示不会自动轮播 | ``number` | `string`` | 0 |
| defaultValue | 初始化索引值 | ``number` | `string`` | 0 |
| touchable | 是否可触摸滑动 | `boolean` | true |
| preventDefault | 滑动过程中是否禁用默认事件 | `boolean` | true |
| stopPropagation | 滑动过程中是否禁止冒泡 | `boolean` | true |
| center | 是否居中展示，必须传对应的`width` 和 `height` | `boolean` | false |
| onChange | 卡片切换后的回调 | `(current: number) => void` | - |
| prev | 切换到上一页 | `()=>void` |  |
| next | 切换到下一页 | `()=>void` |  |
| to | 切换到指定轮播 | `(index: number)=>void` |  |
| resize | 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘 | `()=>void` |  |

### <Table />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| bordered | 是否显示边框 | `boolean` | true |
| columns | 表头数据 | `TableColumnProps[]` | [] |
| data | 表格数据 | `Object[]` | [] |
| summary | 是否显示简介 | `ReactNode` | - |
| striped | 条纹是否明暗交替 | `boolean` | false |
| showHeader | 是否显示表头 | `boolean` | true |
| noData | 自定义无数据 | `ReactNode` | - |
| onSort | 点击排序按钮触发 | `item: TableColumnProps, data: Array<any>` | - |
| key | 列的唯一标识 | `string` | - |
| title | 表头标题 | `string` | - |
| align | 列的对齐方式 | ``left` | `center` | `right`` | left |
| sorter | 排序，可选值有 true,function, default, 其中 default表示点击之后可能会依赖接口, function可以返回具体的排序函数, default表示采用默认的排序算法 | ``boolean` | `Function` | `string`` | - |
| render | 自定义渲染列数据，优先级高 | `Function(record)` | - |
| sorterIcon | 排序 icon | `ReactNode` | <DownArrow /> |

### <Tag />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| type | 标签类型 | ``primary` | `success` | `danger` | `warning`` | default |
| background | 标签颜色 | `string` | - |
| color | 文本颜色，优先级高于color属性 | `string` | white |
| plain | 是否为空心样式 | `boolean` | false |
| round | 是否为圆角样式 | `boolean` | false |
| mark | 是否为标记样式 | `boolean` | false |
| closeable | 是否为可关闭标签 | `boolean` | false |
| closeIcon | 关闭按钮 | `ReactNode` | null |
| onClick | 点击事件 | `(e: MouseEvent) => void` | - |
| onClose | 关闭事件 | `(e?: any) => void` | - |

### <Video />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| source | 视频地址和类型设置 | `object` | {type: {}, src: ''} |
| options | 控制视频播放属性 | `object` | - |
| options.autoplay | 是否自动播放 | `boolean` | false |
| options.poster | 海报设置 | `string` | - |
| options.loop | 是否循环播放 | `boolean` | false |
| options.controls | 是否展示操作栏 | `boolean` | true |
| options.muted | 是否静音 | `boolean` | false |
| options.playsinline | 是否设置为行内播放元素（解决安卓兼容问题） | `boolean` | false |
| onPlay | 播放 | `(element: HTMLVideoElement) => void` | - |
| onPause | 暂停 | `(element: HTMLVideoElement) => void` | - |
| onPlayEnd | 播放完成回调 | `(element: HTMLVideoElement) => void` | - |

### <VirtualList />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| list | 获取数据 | `Array` | - |
| containerHeight | 容器高度 | `number` | 获取元素的 offsetWidth 或 offsetHeight，需要 css 给出 |
| ItemRender | virtual 列表父节点渲染的函数 | `React.FC` | - |
| itemHeight | item 高度，如果不定高，则为首屏单个最大 height | `number` | 66 |
| itemEqual | item 高度是否一致 | `boolean` | true |
| overscan | 除了视窗里面默认的元素, 还需要额外渲染的 item 个数 | `number` | 2 |
| key | 用于指定 list 数据每一项的唯一 key 的字段名，默认取下标 | `string` | - |
| direction | `vertical`、`horizontal` | `string` | vertical |
| onScroll | 滑动到底(右)的事件，可以实现无限滚动 | `() => void` | - |

### <Barrage />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| list | 弹幕列表数据 | `Array<string>` | [] |
| interval | 可视区域内每个弹幕出现的时间间隔 | `number` | 500 |
| duration | 每个弹幕的滚动时间 | `number` | 3000 |
| rows | 弹幕行数，分几行展示 | `number` | 1 |
| gapY | 弹幕垂直距离 | `number` | 10 |
| loop | 是否循环播放 | `boolean` | true |
| add | 添加数据 | `(word: string) => void` |  |

### <Card />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| src | 左侧图片 Url | `string` | - |
| title | 标题 | `string` | - |
| price | 商品价格 | `string` | - |
| vipPrice | 会员价格 | `string` | - |
| shopDescription | 店铺介绍 | `string` | - |
| delivery | 配送方式 | `string` | - |
| shopName | 店铺名称 | `string` | - |
| description | 自定义商品介绍 | `ReactNode` | - |
| priceTag | 价格后方自定义内容 | `ReactNode` | - |
| tag | 店铺介绍自定义 | `ReactNode` | - |
| extra | 右下角内容自定义 | `ReactNode` | - |

### <TimeSelect />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| visible | 是否显示弹层 | `boolean` | false |
| title | 弹层标题 | `ReactNode` | 取件时间 |
| multiple | 是否支持多选 | `boolean` | false |
| defaultValue | 默认选中的值，非受控 | `DateType[]` | - |
| options | 数据 | `DateType[]` | - |
| optionKey | 配置数据中的关键字, `valueKey`, `textKey`, `childrenKey` | `{valueKey: 'value', textKey: 'text', childrenKey: 'children'}` | - |
| onSelect | 关闭遮罩之后的回调 | `(value: DateType[]) => void` | - |
| onDateChange | 点击左栏时的回调 | `(date: DateType, value: DateType[]) => void` | - |
| onTimeChange | 点击右侧选项时的回调 | `(time: TimeType, value: DateType[]) => void` | - |
| value | 唯一标识符， 必填 | `string` | - |
| text | 左侧显示的文本， 必填 | `string` | - |
| children | 对应右侧的选项列表， 必填 | `TimeType[]` | - |
| value | 唯一标识符， 必填 | `string` | - |
| text | 右侧显示的选项内容， 必填 | `string` | - |

### <TrendArrow />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| value | 数值，大于0时箭头向上，小于0时箭头向下 | `number` | - |
| digits | 小数位精度 | `number` | 2 |
| symbol | 是否显示加减号 | `boolean` | false |
| zero | 是否显示 0 | `boolean` | false |
| arrowLeft | 是否在数字左侧显示箭头 | `boolean` | false |
| syncColor | 文字颜色是否与箭头同步 | `boolean` | true |
| color | 文字颜色 | `string` | #333333 |
| riseColor | 向上箭头颜色 | `string` | #fa2c19 |
| dropColor | 向下箭头颜色 | `string` | #64b578 |
| riseIcon | 自定义向上箭头icon | `React.ReactNode` | <TriangleUp/> |
| downIcon | 自定义向下箭头icon | `React.ReactNode` | <TriangleDown/> |

### <WaterMark />

| 属性 (Prop) | 说明 (Description) | 类型 (Type) | 默认值 (Default) |
| --- | --- | --- | --- |
| width | 水印的宽度 | `number` | 120 |
| height | 水印的高度 | `number` | 64 |
| rotate | 水印绘制时，旋转的角度 | `number` | -22 |
| image | 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 | `string` | - |
| imageWidth | 图片宽度 | `number` | 120 |
| imageHeight | 图片高度 | `number` | 64 |
| zIndex | 追加的水印元素的 z-index | `number` | 2000 |
| content | 水印文字内容 | `string` | - |
| color | 水印文字颜色 | `string` | rgba(0, 0, 0, .15) |
| fontSize | 文字大小 | ``string` | `number`` | 16 |
| gapX | 水印之间的水平间距 | `number` | 24 |
| gapY | 水印之间的垂直间距 | `number` | 48 |
| fullPage | 是否覆盖整个页面 | `boolean` | true |
| fontFamily | 水印文字字体 | `string` | - |

---

_Generated by NutUI AI Metadata Tool. DO NOT manual edit._
