# uploader-taro 上传

### 介绍

用于将本地的图片或文件上传至服务器。

### 安装

``` ts
import { Uploader } from '@nutui/nutui-react-taro';
```
### 基本用法

``` tsx
import React, { useState } from "react";
import { Uploader } from '@nutui/nutui-react-taro';

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

### 上传状态

``` tsx
import React, { useState } from "react";
import { Uploader } from '@nutui/nutui-react-taro';

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
        uploadIcon="dongdong"
      />
    </>
  )
}
export default App;
```

### 自定义上传样式

``` tsx
import React, { useState } from "react";
import { Uploader } from '@nutui/nutui-react-taro';

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

### 自定义上传使用默认进度条

``` tsx
import React, { useState } from "react";
import { Uploader, Button, Progress } from '@nutui/nutui-react-taro';

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

### 直接调起摄像头（移动端生效）

``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <>
      <h2>直接调起摄像头（移动端生效）</h2>
      <Uploader url={uploadUrl} sourceType={['camera']}/>
    </>
  )
}
export default App;
```

### 限制上传数量5个

``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <>
      <h2>限制上传数量5个</h2>
      <Uploader url={uploadUrl} maximum="5" />
    </>
  )
}
export default App;
```


### 限制上传大小（每个文件最大不超过 50kb）

``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onOversize = (files: File[]) => {
    console.log('oversize 触发 文件大小不能超过 50kb', files)
  }
  return (
    <>
      <h2>限制上传大小（每个文件最大不超过 50kb）</h2>
      <Uploader url={uploadUrl} maximize={1024 * 50} oversize={onOversize} />
    </>
  )
}
export default App;
```


### 自定义 FormData headers

``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react-taro';

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
       />
    </>
  )
}
export default App;
```

### 自定义 xhr 上传方式(before-xhr-upload)

``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const beforeXhrUpload = (taroUploadFile: any, options: any) => {
    const uploadTask = taroUploadFile({
      url: options.url,
      filePath: options.taroFilePath,
      fileType: options.fileType,
      header: {
        'Content-Type': 'multipart/form-data',
        ...options.headers,
      }, 
      formData: options.formData,
      name: options.name,
      success(response: { errMsg: any; statusCode: number; data: string }) {
        if (options.xhrState == response.statusCode) {
          options.onSuccess?.(response, options)
        } else {
          options.onFailure?.(response, options)
        }
      },
      fail(e: any) {
        options.onFailure?.(e, options)
      },
    })
    options.onStart?.(options)
    uploadTask.progress(
      (res: {
        progress: any
        totalBytesSent: any
        totalBytesExpectedToSend: any
      }) => {
        options.onProgress?.(res, options)
      }
    )
  }
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

### 手动上传


``` tsx
import React, { useState, useRef } from "react";
import { Uploader, Button } from '@nutui/nutui-react-taro';

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


### 禁用状态

``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react-taro';

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


### Prop

| 字段              | 说明                                                                                                                                                                                   | 类型                              | 默认值           |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|------------------|
| autoUpload               | 是否在选取文件后立即进行上传，false 时需要手动执行 ref submit 方法进行上传                                                                                                                                       | Boolean                            | true           |
| name              | `input` 标签 `name` 的名称，发到后台的文件参数名                                                                                                                                       | String                            | "file"           |
| url               | 上传服务器的接口地址                                                                                                                                                                   | String                            | -                |
| defaultFileList               | 默认已经上传的文件列表                                                                                                                                                                   | FileItem[]                            | []                |
| isPreview        | 是否上传成功后展示预览图                                                                                                                                                               | Boolean                           | true             |
| defaultImg        | 当上传非图片('image')格式的默认图片地址                                                                                                                                                               | String                           | ''             |
| isDeletable      | 是否展示删除按钮                                                                                                                                                                       | Boolean                           | true             |
| method            | 上传请求的 http method                                                                                                                                                                 | String                            | "post"           |
| listType             | 上传列表的内建样式，支持两种基本样式 picture、list                                                                                                                                                                 | String                            | "picture"           |
| maximize          | 可以设定最大上传文件的大小（字节）                                                                                                                                                     | Number丨String                    | Number.MAX_VALUE |
| maximum           | 文件上传数量限制                                                                                                                                                                       | Number丨String                    | 1                |
| clearInput       | 是否需要清空`input`内容，设为`true`支持重复选择上传同一个文件                                                                                                                          | Boolean                           | true            |
| headers           | 设置上传的请求头部                                                                                                                                                                     | Object                            | {}               |
| data              | 附加上传的信息 formData                                                                                                                                                                | Object                            | {}               |
| uploadIcon       | 上传区域[图标名称](#/zh-CN/icon)或图片链接                                                                                                                                             | String                            | "photograph"     |
| uploadIconSize        | 上传区域[图标尺寸](#/icon)大小，如 `20px` `2em` `2rem`                                                                                                                                             | String or Number                            | -     |
| xhrState         | 接口响应的成功状态（status）值                                                                                                                                                         | Number                            | 200              |
| disabled          | 是否禁用文件上传                                                                                                                                                                       | Boolean                           | false            |
| timeout           | 超时时间，单位为毫秒                                                                                                   | Number丨String                    | 1000 * 30                 |
| onBeforeUpload      | 上传前的函数需要返回一个`Promise`对象                                                                                                                                                  | Function                          | null             |
| onBeforeXhrUpload      | 执行 XHR 上传时，自定义方式                                                                                                                                                  | Function(xhr，option)                          | null             |
| onBeforeDelete    | 除文件时的回调，返回值为 false 时不移除。支持返回一个 `Promise` 对象，`Promise` 对象 resolve(false) 或 reject 时不移除                                                                 | Function(file): boolean 丨Promise | -                |



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
| onStart     | 文件上传开始           | options              |
| onProgress  | 文件上传的进度         | event,options,percentage        |
| onOversize  | 文件大小超过限制时触发 | files                |
| onSuccess   | 上传成功               | responseText,options |
| onFailure   | 上传失败               | responseText,options |
| onChange    | 上传文件改变时的状态   | fileList,event       |
| onRemove    | 文件删除之前的状态     | files,fileList       |
| onFileItemClick    | 文件上传成功后点击触发     | fileItem       |

