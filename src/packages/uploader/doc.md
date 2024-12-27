# Uploader 上传

用于将本地的图片或文件上传至服务器。

## 引入

```tsx
import { Uploader } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 上传状态

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 限制上传数量

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 限制上传大小

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定义上传前的处理

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 禁用状态

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定义删除icon

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 直接调起摄像头（移动端生效）

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 选中文件后，通过按钮手动执行上传

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 基础用法-上传列表展示

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

## Uploader

### Props

| 字段 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoUpload | 是否在选取文件后立即进行上传，false 时需要手动执行 ref submit 方法进行上传 | `boolean` | `true` |
| upload | 上传方法，入参是需要被上传的文件对象，经过异步处理之后，返回上传结果 | `(file: File) => Promise<FileItem>` | `-` |
| name | `input` 标签 `name` 的名称，发到后台的文件参数名 | `string` | `file` |
| defaultValue | 默认已经上传的文件列表 | `FileItem[]` | `[]` |
| value | 已经上传的文件列表 | `FileItem[]` | `-` |
| preview | 是否上传成功后展示预览图 | `boolean` | `true` |
| previewUrl | 当上传非图片('image')格式的默认图片地址 | `string` | `-` |
| deletable | 是否展示删除按钮 | `boolean` | `true` |
| method | 上传请求的 http method | `string` | `post` |
| previewType | 上传列表的内建样式，支持两种基本样式 picture、list | `string` | `picture` |
| capture | 图片[选取模式](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture")，直接调起摄像头 | `string` | `false` |
| maxFileSize | 可以设定最大上传文件的大小（字节） | `number` \| `string` | `Number.MAX_VALUE` |
| maxCount | 文件上传数量限制 | `number` \| `string` | `1` |
| fit | 图片填充模式 | `contain` \| `cover` \| `fill` \| `none` \| `scale-down` | `cover` |
| clearInput | 是否需要清空`input`内容，设为`true`支持重复选择上传同一个文件 | `boolean` | `true` |
| accept | 允许上传的文件类型，[详细说明]("https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B") | `string` | `*` |
| uploadIcon | 上传区域<a href="#/zh-CN/icon">图标名称</a> | `React.ReactNode` | `-` |
| deleteIcon | 删除区域的图标名称 | `React.ReactNode` | `-` |
| uploadLabel | 上传区域图片下方文字 | `React.ReactNode` | `-` |
| multiple | 是否支持文件多选 | `boolean` | `false` |
| disabled | 是否禁用文件上传 | `boolean` | `false` |
| beforeUpload | 上传前的函数需要返回一个`Promise`对象 | `(file: File[]) => Promise<File[] \| boolean>` | `-` |
| beforeDelete | 除文件时的回调，返回值为 false 时不移除。支持返回一个 `Promise` 对象，`Promise` 对象 resolve(false) 或 reject 时不移除 | `(file: FileItem, files: FileItem[]) => boolean` | `-` |
| onOversize | 文件大小超过限制时触发 | `(file: File[]) => void` | `-` |
| onOverCount | 文件数量超过限制时触发 | `(count: number) => void` | `-` |
| onChange | 已上传的文件列表变化时触发 | `(files: FileItem[]) => void` | `-` |
| onDelete | 点击删除文件时触发 | `(file: FileItem, files: FileItem[]) => void` | `-` |
| onFileItemClick | 文件上传成功后点击触发 | `(file: FileItem, index: number) => void` | `-` |
| onUploadQueueChange | 图片上传队列变化时触发 | `(tasks: FileItem[]) => void` | `-` |

> 注意：accept、capture 和 multiple 为浏览器 input 标签的原生属性，移动端各种机型对这些属性的支持程度有所差异，因此在不同机型和 WebView 下可能出现一些兼容性问题。

### FileItem

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| status | 文件状态值，可选'ready,uploading,success,error' | `ready` |
| uid | 文件的唯一标识 | `-` |
| name | 文件名称 | `-` |
| url | 文件路径 | `-` |
| type | 文件类型 | `image` |
| loadingIcon | 加载图标 | `-` |
| failIcon | 加载失败图标 | `-` |
| percentage | 上传进度条百分比 | `-` |

### Methods

通过ref可以获取到 Uploader 实例并调用实例方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| submit | 手动上传模式，执行上传操作 | `-` | `-` |
| clear | 清空已选择的文件队列（该方法一般配合在手动模式上传时使用） | `index` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-uploader-image-width | 上传图片的宽度 | `100px` |
| \--nutui-uploader-image-height | 上传图片的高度 | `100px` |
| \--nutui-uploader-image-border | 上传图片的border值 | `0px` |
| \--nutui-uploader-image-border-radius | 上传图片的border圆角 | `4px` |
| \--nutui-uploader-background | 上传图片的背景颜色 | `$color-background` |
| \--nutui-uploader-background-disabled | 上传图片禁用状态的背景颜色 | `$color-background` |
| \--nutui-uploader-image-icon-tip-font-size | 上传区域图片下方文字大小 | `12px` |
| \--nutui-uploader-image-icon-tip-color | 上传区域图片下方文字颜色 | `#BFBFBF` |
| \--nutui-uploader-preview-progress-background | 上传区域预览进度的背景颜色 | `rgba(0, 0, 0, 0.65)` |
| \--nutui-uploader-preview-margin-right | 上传区域预览margin-right的值 | `10px` |
| \--nutui-uploader-preview-margin-bottom | 上传区域预览margin-bottom的值 | `10px` |
| \--nutui-uploader-preview-tips-height | 上传图片预览tips下的高度 | `24px` |
| \--nutui-uploader-preview-tips-background | 上传图片预览tips下的背景颜色 | `rgba(0, 0, 0, 0.45)` |
| \--nutui-uploader-preview-tips-padding | 上传图片预览tips下的padding值 | `0 5px` |
| \--nutui-uploader-preview-close-right | 上传图片关闭按钮的right值 | `0px` |
| \--nutui-uploader-preview-close-top | 上传图片关闭按钮的top值 | `0px` |
