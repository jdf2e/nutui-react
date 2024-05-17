# Uploader 上传

## 介绍

用于将本地的图片或文件上传至服务器。

## 安装

```tsx
import { Uploader } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::
>
> 在使用Uploader组件上传文件时，可能会遇到响应文件信息中文乱码的问题。这通常发生在客户端与服务器端在处理文件编码时不一致的情况下。为了避免这种问题，建议确保服务器端读取文件的编码格式与客户端保持一致。

```javascript
import React from 'react'
import { Uploader } from '@nutui/nutui-react'
// Server Demo
app.post('/upload', upload.single('file'), (req, res) => {
  const fileEncoding = req.headers['x-file-encoding'] || 'UTF-8';
  const fileContent = iconv.decode(Buffer.from(JSON.stringify(req.file), 'binary'), fileEncoding);
  res.json({ success: true, message: 'File uploaded successfully', data: JSON.parse(fileContent) });
});
// Client Demo
<Uploader url={uploadUrl} headers={{'x-file-encoding': 'UTF-8'}} />

```

### 基础用法

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 上传状态

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 基础用法-上传列表展示

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自定义上传使用默认进度条

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 直接调起摄像头（移动端生效）

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 使用前摄像头拍摄3s视频并上传(仅支持微信小程序)

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 限制上传数量5个

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

### 限制上传大小（每个文件最大不超过50kb）

:::demo

<CodeBlock src='taro/demo9.tsx'></CodeBlock>

:::

### 自定义数据 FormData、headers

:::demo

<CodeBlock src='taro/demo10.tsx'></CodeBlock>

:::

### 自定义 Taro.uploadFile 上传方式(before-xhr-upload)

:::demo

<CodeBlock src='taro/demo11.tsx'></CodeBlock>

:::

### 选中文件后，通过按钮手动执行上传

:::demo

<CodeBlock src='taro/demo12.tsx'></CodeBlock>

:::

### 禁用状态

:::demo

<CodeBlock src='taro/demo13.tsx'></CodeBlock>

:::

## Uploader

### Props

| 字段 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoUpload | 是否在选取文件后立即进行上传，false 时需要手动执行 ref submit 方法进行上传 | `boolean` | `true` |
| name | `input` 标签 `name` 的名称，发到后台的文件参数名 | `string` | `file` |
| url | 上传服务器的接口地址 | `string` | `-` |
| defaultValue | 默认已经上传的文件列表 | `FileType<React.ReactNode>[]` | `[]` |
| value | 已经上传的文件列表 | `FileType<string>[]` | `[]` |
| preview | 是否上传成功后展示预览图 | `boolean` | `true` |
| previewUrl | 当上传非图片('image')格式的默认图片地址 | `string` | `-` |
| deletable | 是否展示删除按钮 | `boolean` | `true` |
| method | 上传请求的 http method | `string` | `post` |
| previewType | 上传列表的内建样式，支持两种基本样式 picture、list | `string` | `picture` |
| maxFileSize | 可以设定最大上传文件的大小（字节） | `number` \| `string` | `Number.MAX_VALUE` |
| maxCount | 文件上传数量限制 | `number` \| `string` | `1` |
| fit | 图片填充模式 | `contain` \| `cover` \| `fill` \| `none` \| `scale-down` | `cover` |
| sourceType | [选择文件的来源]("https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html") | `Array` | `['album','camera']` |
| camera`仅支持WEAPP` | 仅在 `source-type` 为 `camera` 时生效，使用前置或后置摄像头 | `String` | `back` |
| sizeType | [是否压缩所选文件]("https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html") | `Array` | `['original','compressed']` |
| mediaType`仅支持WEAPP` | [选择文件类型]("https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html") | `Array` | `['image', 'video', 'mix']` |
| maxDuration`仅支持WEAPP` | 拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 60s 之间。不限制相册。 | `number` | `10` |
| headers | 设置上传的请求头部 | `object` | `{}` |
| data | 附加上传的信息 formData | `object` | `{}` |
| uploadIcon | 上传区域<a href="#/zh-CN/icon">图标名称</a> | `ReactNode` | `-` |
| uploadLabel | 上传区域图片下方文字 | `string` | `&quot;&quot;` |
| xhrState | 接口响应的成功状态（status）值 | `number` | `200` |
| disabled | 是否禁用文件上传 | `boolean` | `false` |
| multiple | 是否支持文件多选 | `boolean` | `false` |
| timeout | 超时时间，单位为毫秒 | `number` \| `string`   | `1000 * 30` |
| beforeXhrUpload | 执行 XHR 上传时，自定义方式 | `(xhr: XMLHttpRequest, options: any) => void` | `-` |
| beforeDelete | 除文件时的回调，返回值为 false 时不移除。支持返回一个 `Promise` 对象，`Promise` 对象 resolve(false) 或 reject 时不移除 | `(file: FileItem, files: FileItem[]) => boolean` | `-` |
| onStart | 文件上传开始 | `(option: UploadOptions) => void` | `-` |
| onProgress | 文件上传的进度 | `(param: {e: ProgressEvent<XMLHttpRequestEventTarget>;option: UploadOptions;percentage: string \| number}) => void` | `-` |
| onOversize | 文件大小超过限制时触发 | `(param: {responseText: XMLHttpRequest['responseText'];option: UploadOptions;files: FileItem[]}) => void` | `-` |
| onSuccess | 上传成功 | `(param: {responseText: XMLHttpRequest['responseText'];option: UploadOptions;percentage: string \| number}) => void` | `-` |
| onFailure | 上传失败 | `(param: {responseText: XMLHttpRequest['responseText'];option: UploadOptions;percentage: string \| number}) => void` | `-` |
| onChange | 上传文件改变时的状态 | `(param: FileItem[]) => void` | `-` |
| onDelete | 文件删除之前的状态 | `(file: FileItem, files: FileItem[]) => void` | `-` |
| onFileItemClick | 文件上传成功后点击触发 | `(file: FileItem, index: number) => void` | `-` |

### FileItem

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| status | 文件状态值，可选'ready,uploading,success,error,removed' | `ready` |
| uid | 文件的唯一标识 | `new Date().getTime().toString()` |
| name | 文件名称 | `-` |
| url | 文件路径 | `-` |
| type | 文件类型 | `image/jpeg` |
| formData | 上传所需的data | `new FormData()` |

### Methods

通过 ref 可以获取到 Uploader 实例并调用实例方法

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
