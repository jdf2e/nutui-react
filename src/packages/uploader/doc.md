# Uploader 上传

### 介绍

用于将本地的图片或文件上传至服务器。

### 安装

``` ts
import { Uploader } from '@nutui/nutui-react';
```
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

### 上传状态

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const defaultFileList: FileType<string>[] = [
    {
      name: '文件1.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: '上传成功',
      type: 'image',
      uid: '123',
    },
    {
      name: '文件2.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'error',
      message: '上传失败',
      type: 'image',
      uid: '124',
    },
    {
      name: '文件3.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上传中...',
      type: 'image',
      uid: '125',
    },
  ]
  const onDelete = (file: FileItem, fileList: FileItem[]) => {
    console.log(translated.ca3903f3, file, fileList)
  }
  return (
    <>
      <h2>上传状态</h2>
      <Uploader
        url={uploadUrl}
        defaultFileList={defaultFileList}
        onRemove={onDelete}
        maximum="3"
        multiple
        uploadIcon="dongdong"
      />
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
        <Button type="success" size="small">
          上传文件
        </Button>
      </Uploader>
    </>
  )
}
export default App;
```
:::

### 自定义上传使用默认进度条

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button, Progress } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const [progressPercent, setProgressPercent] = useState(0)
  const onProgress = ({ event, options, percentage }: any) => {
    setProgressPercent(percentage)
  }
  return (
    <>
      <h2>自定义上传使用默认进度条</h2>
      <Uploader url={uploadUrl} onProgress={onProgress}>
        <Button type="success" size="small">
          上传文件
        </Button>
      </Uploader>
      <br />
      <Progress
        percentage={progressPercent}
        strokeColor="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
        status
      />
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

### 限制上传大小（每个文件最大不超过 50kb）

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

### 自定义 xhr 上传方式(before-xhr-upload)

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const beforeXhrUpload = (xhr: XMLHttpRequest, options: any) => {
    if (options.method.toLowerCase() == 'put') {
      xhr.send(options.sourceFile);
    } else {
      xhr.send(options.formData);
    }
  };
  return (
    <>
      <h2>自定义 xhr 上传方式(before-xhr-upload)</h2>
      <Uploader
        url={uploadUrl}
        method="put"
        onBeforeXhrUpload={beforeXhrUpload}
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
| autoUpload `v1.3.4`              | 是否在选取文件后立即进行上传，false 时需要手动执行 ref submit 方法进行上传                                                                                                                                       | Boolean                            | true           |
| name              | `input` 标签 `name` 的名称，发到后台的文件参数名                                                                                                                                       | String                            | "file"           |
| url               | 上传服务器的接口地址                                                                                                                                                                   | String                            | -                |
| defaultFileList               | 默认已经上传的文件列表                                                                                                                                                                   | FileItem[]                            | []                |
| isPreview        | 是否上传成功后展示预览图                                                                                                                                                               | Boolean                           | true             |
| defaultImg        | 当上传非图片('image')格式的默认图片地址                                                                                                                                                               | String                           | ''             |
| isDeletable      | 是否展示删除按钮                                                                                                                                                                       | Boolean                           | true             |
| method            | 上传请求的 http method                                                                                                                                                                 | String                            | "post"           |
| listType `v1.3.4`            | 上传列表的内建样式，支持两种基本样式 picture、list                                                                                                                                                                 | String                            | "picture"           |
| capture           | 图片[选取模式](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture)，直接调起摄像头                                                                     | String                            | false            |
| maximize          | 可以设定最大上传文件的大小（字节）                                                                                                                                                     | Number丨String                    | Number.MAX_VALUE |
| maximum           | 文件上传数量限制                                                                                                                                                                       | Number丨String                    | 1                |
| clearInput       | 是否需要清空`input`内容，设为`true`支持重复选择上传同一个文件                                                                                                                          | Boolean                           | true            |
| accept            | 允许上传的文件类型，[详细说明](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | String                            | *                |
| headers           | 设置上传的请求头部                                                                                                                                                                     | Object                            | {}               |
| data              | 附加上传的信息 formData                                                                                                                                                                | Object                            | {}               |
| uploadIcon       | 上传区域[图标名称](#/zh-CN/icon)或图片链接                                                                                                                                             | String                            | "photograph"     |
| uploadIconSize `v1.3.4`       | 上传区域[图标尺寸](#/icon)大小，如 `20px` `2em` `2rem`                                                                                                                                             | String or Number                            | -     |
| xhrState         | 接口响应的成功状态（status）值                                                                                                                                                         | Number                            | 200              |
| withCredentials  | 支持发送 cookie 凭证信息                                                                                                                                                               | Boolean                           | false            |
| multiple          | 是否支持文件多选                                                                                                                                                                       | Boolean                           | false            |
| disabled          | 是否禁用文件上传                                                                                                                                                                       | Boolean                           | false            |
| timeout           | 超时时间，单位为毫秒                                                                                                   | Number丨String                    | 1000 * 30                 |
| beforeUpload `v1.3.4废弃`     | 上传前的函数需要返回一个`Promise`对象                                                                                                                                                  | Function                          | null             |
| onBeforeUpload `v1.3.4`     | 上传前的函数需要返回一个`Promise`对象                                                                                                                                                  | Function                          | null             |
| onBeforeXhrUpload `v1.3.4`     | 执行 XHR 上传时，自定义方式                                                                                                                                                  | Function(xhr，option)                          | null             |
| beforeDelete  `v1.3.4废弃`   | 除文件时的回调，返回值为 false 时不移除。支持返回一个 `Promise` 对象，`Promise` 对象 resolve(false) 或 reject 时不移除                                                                 | Function(file): boolean 丨Promise | -                |
| onBeforeDelete  `v1.3.4`  | 除文件时的回调，返回值为 false 时不移除。支持返回一个 `Promise` 对象，`Promise` 对象 resolve(false) 或 reject 时不移除                                                                 | Function(file): boolean 丨Promise | -                |



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
| start `v1.3.4废弃`    | 文件上传开始           | options              |
| onStart `v1.3.4`    | 文件上传开始           | options              |
| progress `v1.3.4废弃` | 文件上传的进度         | event,options        |
| onProgress `v1.3.4` | 文件上传的进度         | event,options,percentage        |
| oversize `v1.3.4废弃` | 文件大小超过限制时触发 | files                |
| onOversize `v1.3.4` | 文件大小超过限制时触发 | files                |
| success `v1.3.4废弃`  | 上传成功               | responseText,options |
| onSuccess `v1.3.4`  | 上传成功               | responseText,options |
| failure `v1.3.4废弃`  | 上传失败               | responseText,options |
| onFailure `v1.3.4`  | 上传失败               | responseText,options |
| onChange `v1.3.4`   | 上传文件改变时的状态   | fileList,event       |
| change `v1.3.4废弃`  | 上传文件改变时的状态   | fileList,event       |
| onRemove `v1.3.4`   | 文件删除之前的状态     | files,fileList       |
| removeImage  `v1.3.4废弃` | 文件删除之前的状态     | files,fileList       |
| onFileItemClick `v1.3.4`   | 文件上传成功后点击触发     | fileItem       |

