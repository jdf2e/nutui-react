# 从 v1 升级到 v2

## 介绍

## 升级步骤

## 不兼容更新

## NutUI Icons 调整

## 组件名称调整

## 组件 API 调整

### 基础组件
#### Button
- 删除 plain，通过 fill="outline" 实现
- 增加 ref，对外暴露组件内 button 元素
- `xxx` 重命名为 `yyy`
- 删除 `x`, 通过 `z` 实现
- 优化 `x` 类型为 ReactNode
- 增加 `x`, 用于某个功能
#### Cell
#### ConfigProvider
#### Icon
#### Image
#### Overlay
#### Popup

### 布局组件
#### Divider
#### Grid
#### Layout
#### Sticky

### 导航组件
#### Elevator
#### FixedNav
- 删除 fixednavClass，通过 className 实现
- unActiveText 重命名为 inactiveText
- navList 重命名为 list
- slotBtn 重命名为 content
- 删除 slotList，通过 children 实现
- onSelected 重命名为 onSelect
#### Indicator
#### Menu
#### NavBar
#### Pagination
#### SideNavBar
#### Tabbar
#### Tabs

### 数据录入
#### Calendar
#### Cascader
#### Checkbox
#### DatePicker
#### Form
#### Input
#### InputNumber
- 增加 `allowEmpty`, 是否允许内容为空
- 优化新增 `value`和 `defaultValue` , 增加默认值和受控
- `decimalPlaces` 重命名为 `digits`
- `isAsync` 重命名为 `async`
- 删除 `inputWidth` 和 `buttonSize`, 通过css变量实现
- 新增taro的`formatter`属性开发
#### NumberKeyboard
#### Picker
#### Radio
#### Range
#### Rate
#### SearchBar
#### ShortPassword
#### TextArea
#### Uploader

### 操作反馈
#### ActionSheet
#### BackTop
- elId 重命名为 target
- 移除 right、bottom，通过 style 传入，增加支持 left、top
- distance 重命名为 threshold
- 移除 isAnimation，通过 duration 设置 0 实现无动画效果
#### Dialog
#### Drag
#### Infiniteloading
#### Notify
#### PullToRefresh
#### Swipe
#### Switch
#### Toast

### 展示组件
#### Animate
#### AnimatingNumbers
#### Audio
#### Avatar
#### Badge
#### CircleProgress
#### Collapse
#### CountDown
#### Ellipsis
#### Empty
#### ImagePreview
#### NoticeBar
#### Popover
#### Price
#### Progress
#### Skeleton
#### Steps
#### Swiper
#### Table
#### Tag
#### TrendArrow
#### Video
#### VirtualList
#### WaterMark

### 特色组件
#### Address
#### Barrage
#### Card
#### Signature
#### TimeSelect
