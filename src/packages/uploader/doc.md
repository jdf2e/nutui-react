# Uploader 上传

### 介绍

用于将本地的图片或文件上传至服务器。

### 安装

``` ts
import { Uploader } from '@nutui/nutui-react';
```

## 代码示例

### 基本用法

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onStart = () => {
    console.log('start 触发')
  }
  return (
    <>
      <h2>基础用法</h2>
      <Uploader url={uploadUrl} start={onStart} />
    </>
  )
}
export default App;
```
:::

### 自定义上传样式

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <>
      <h2>自定义上传样式</h2>
      <Uploader url={uploadUrl}>
        <Button type="primary" icon="uploader">
          上传文件
        </Button>
      </Uploader>
    </>
  )
}
export default App;
```
:::

### 直接调起摄像头（移动端生效）

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <>
      <h2>直接调起摄像头（移动端生效）</h2>
      <Uploader capture url={uploadUrl} />
    </>
  )
}
export default App;
```
:::

### 上传状态

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onDelete = (file: FileItem, fileList: FileItem[]) => {
    console.log('delete 事件触发', file, fileList)
  }
  return (
    <>
      <h2>上传状态</h2>
      <Uploader url={uploadUrl} multiple removeImage={onDelete} />
    </>
  )
}
export default App;
```
:::


### 限制上传数量5个

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <>
      <h2>限制上传数量5个</h2>
      <Uploader url={uploadUrl} multiple maximum="5" />
    </>
  )
}
export default App;
```
:::

### 限制上传大小（每个文件最大不超过 50kb，也可以在beforeupload中自行处理）

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onOversize = (files: File[]) => {
    console.log('oversize 触发 文件大小不能超过 50kb', files)
  }
  return (
    <>
      <h2>限制上传大小（每个文件最大不超过 50kb）</h2>
      <Uploader url={uploadUrl} multiple maximize={1024 * 50} oversize={onOversize} />
    </>
  )
}
export default App;
```
:::


### 自定义 FormData headers

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const formData = {
    custom: 'test',
  }
  return (
    <>
      <h2>自定义 FormData headers</h2>
      <Uploader
        url={uploadUrl}
        data={formData}
        headers={formData}
        withCredentials
       />
    </>
  )
}
export default App;
```
:::

### 手动上传

:::demo
``` tsx
import React, { useState, useRef } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const uploadRef = useRef(null)
  const submitUpload = () => {
    uploadRef.current.submit()
  }
  return (
    <>
      <h2>手动上传</h2>
      <Uploader url={uploadUrl} maximum="5" autoUpload={false} ref={uploadRef} />
      <br />
      <Button type="success" size="small" onClick={submitUpload}>
        执行上传
      </Button>
    </>
  )
}
export default App;
```
:::

### 禁用状态

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <h2>禁用状态</h2>
      <Uploader disabled />
    </>
  )
}
export default App;
```
:::

### Prop

| 字段              | 说明                                                                                                                                                                                   | 类型                              | 默认值           |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|------------------|
| name              | `input` 标签 `name` 的名称，发到后台的文件参数名                                                                                                                                       | String                            | "file"           |
| url               | 上传服务器的接口地址                                                                                                                                                                   | String                            | -                |
| isPreview        | 是否上传成功后展示预览图                                                                                                                                                               | Boolean                           | true             |
| isDeletable      | 是否展示删除按钮                                                                                                                                                                       | Boolean                           | true             |
| method            | 上传请求的 http method                                                                                                                                                                 | String                            | "post"           |
| capture           | 图片[选取模式](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture)，直接调起摄像头                                                                     | String                            | false            |
| maximize          | 可以设定最大上传文件的大小（字节）                                                                                                                                                     | Number丨String                    | Number.MAX_VALUE |
| maximum           | 文件上传数量限制                                                                                                                                                                       | Number丨String                    | 1                |
| clearInput       | 是否需要清空`input`内容，设为`true`支持重复选择上传同一个文件                                                                                                                          | Boolean                           | false            |
| accept            | 允许上传的文件类型，[详细说明](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | String                            | *                |
| headers           | 设置上传的请求头部                                                                                                                                                                     | Object                            | {}               |
| data              | 附加上传的信息 formData                                                                                                                                                                | Object                            | {}               |
| uploadIcon       | 上传区域[图标名称](#/zh-CN/icon)或图片链接                                                                                                                                             | String                            | "photograph"     |
| xhrState         | 接口响应的成功状态（status）值                                                                                                                                                         | Number                            | 200              |
| withCredentials  | 支持发送 cookie 凭证信息                                                                                                                                                               | Boolean                           | fasle            |
| multiple          | 是否支持文件多选                                                                                                                                                                       | Boolean                           | fasle            |
| disabled          | 是否禁用文件上传                                                                                                                                                                       | Boolean                           | fasle            |
| timeout           | 超时时间，单位为毫秒                                                                                                   | Number丨String                    | 1000 * 30                 |
| beforeUpload     | 上传前的函数需要返回一个`Promise`对象                                                                                                                                                  | Function                          | null             |
| beforeDelete     | 除文件时的回调，返回值为 false 时不移除。支持返回一个 `Promise` 对象，`Promise` 对象 resolve(false) 或 reject 时不移除                                                                 | Function(file): boolean 丨Promise | -                |



### FileItem

| 名称     | 说明                                                    | 默认值                          |
|----------|---------------------------------------------------------|---------------------------------|
| status   | 文件状态值，可选'ready,uploading,success,error,removed' | "ready"                         |
| uid      | 文件的唯一标识                                          | new Date().getTime().toString() |
| name     | 文件名称                                                | ""                              |
| url      | 文件路径                                                | ""                              |
| type     | 文件类型                                                | "image/jpeg"                    |
| formData | 上传所需的data                                          | new FormData()                  |

### Event

| 名称     | 说明                   | 回调参数             |
|----------|------------------------|----------------------|
| start    | 文件上传开始           | options              |
| progress | 文件上传的进度         | event,options        |
| oversize | 文件大小超过限制时触发 | files                |
| success  | 上传成功               | responseText,options |
| failure  | 上传失败               | responseText,options |
| change   | 上传文件改变时的状态   | fileList,event       |
| removeImage   | 文件删除之前的状态     | files,fileList       |

