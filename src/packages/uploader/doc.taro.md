# Uploader 上传

## 介绍

用于将本地的图片或文件上传至服务器。

## 安装

```tsx
import { Uploader } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

```tsx
import React, { useState } from "react";
import { Uploader } from '@nutui/nutui-react-taro';
import { Dongdong } from '@nutui/icons-react-taro';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onStart = () => {
    console.log('start 触发')
  }
  return (
    <>
      <h2>基础用法</h2>
      <Uploader
        url={uploadUrl}
        onStart={onStart}
        style={{ marginRight: '10px' }}
      />
      <Uploader
        url={uploadUrl}
        uploadLabel="商品主图"
        onStart={onStart}
        style={{ marginRight: '10px' }}
      />
      <Uploader url={uploadUrl} uploadIcon={<Dongdong />} onStart={onStart} />
    </>
  )
}
export default App;
```

### 上传状态

```tsx
import React, { useState } from "react";
import { Uploader } from '@nutui/nutui-react-taro';
import { Dongdong, Loading1, Star } from '@nutui/icons-react-taro';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const defaultFileList = [
    {
      name: '文件文件文件1.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: '上传成功',
      type: 'image',
      uid: '123',
    },
    {
      name: '文件1.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: '上传成功',
      type: 'image',
      uid: '123',
    },
    {
      name: '文件4.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'error',
      message: '上传失败',
      type: 'image',
      uid: '124',
      failIcon: <Star style={{ color: 'white' }}/>,
    },
    {
      name: '文件4.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上传中',
      type: 'image',
      uid: '125',
    },
    {
      name: '文件4.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上传中',
      type: 'image',
      uid: '126',
      loadingIcon: <Loading1 className="nut-icon-loading1" color="#fff" />,
    },
    {
      name: '文件4.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上传中',
      type: 'image',
      uid: '127',
      loadingIcon: null,
    },
  ]
  const onDelete = (file, fileList) => {
    console.log(translated.ca3903f3, file, fileList)
  }
  return (
    <>
      <h2>上传状态</h2>
      <Uploader
        url={uploadUrl}
        defaultValue={defaultFileList}
        onDelete={onDelete}
        uploadIcon={<Dongdong />}
      />
    </>
  )
}
export default App;
```

### 自定义上传使用默认进度条

```tsx
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

```tsx
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

### 使用前摄像头拍摄3s视频并上传(仅支持微信小程序)

```tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <>
      <h2>使用前摄像头拍摄3s视频并上传(仅支持微信小程序)</h2>
      <Uploader url={uploadUrl} maxDuration={3} sourceType={['camera']} camera="front" />
    </>
  )
}
export default App;
```

### 限制上传数量5个

```tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <>
      <h2>限制上传数量5个</h2>
      <Uploader url={uploadUrl} maxCount="5" />
    </>
  )
}
export default App;
```

### 限制上传大小（每个文件最大不超过 50kb）

```tsx
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
      <Uploader url={uploadUrl} maxFileSize={1024 * 50} oversize={onOversize} />
    </>
  )
}
export default App;
```

### 自定义 FormData headers

```tsx
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

```tsx
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
        if (options.xhrState === response.statusCode) {
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
        beforeXhrUpload={beforeXhrUpload}
       />
    </>
  )
}
export default App;
```

### 手动上传

```tsx
import React, { useState, useRef } from "react";
import { Uploader, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const uploadRef = useRef(null)
  const submitUpload = () => {
    uploadRef.current.submit()
  }
  const clearUpload = () => {
    uploadRef.current.clear()
  };
  return (
    <>
      <h2>手动上传</h2>
      <Uploader url={uploadUrl} maxCount="5" autoUpload={false} ref={uploadRef} />
      <Button type="success" size="small" onClick={submitUpload}>
        执行上传
      </Button>
      <Button type="danger" size="small" onClick={clearUpload}>
        手动清空上传
      </Button>
    </>
  )
}
export default App;
```

### 禁用状态

```tsx
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
| \--nutui-uploader-picture-width | 上传图片的宽度 | `100px` |
| \--nutui-uploader-picture-height | 上传图片的高度 | `100px` |
| \--nutui-uploader-picture-border | 上传图片的border值 | `0px` |
| \--nutui-uploader-picture-border-radius | 上传图片的border圆角 | `4px` |
| \--nutui-uploader-background | 上传图片的背景颜色 | `$gray4` |
| \--nutui-uploader-background-disabled | 上传图片禁用状态的背景颜色 | `$gray4` |
| \--nutui-uploader-picture-icon-tip-font-size | 上传区域图片下方文字大小 | `12px` |
| \--nutui-uploader-picture-icon-tip-color | 上传区域图片下方文字颜色 | `#BFBFBF` |
| \--nutui-uploader-preview-progress-background | 上传区域预览进度的背景颜色 | `rgba(0, 0, 0, 0.65)` |
| \--nutui-uploader-preview-margin-right | 上传区域预览margin-right的值 | `10px` |
| \--nutui-uploader-preview-margin-bottom | 上传区域预览margin-bottom的值 | `10px` |
| \--nutui-uploader-preview-tips-height | 上传图片预览tips下的高度 | `24px` |
| \--nutui-uploader-preview-tips-background | 上传图片预览tips下的背景颜色 | `rgba(0, 0, 0, 0.45)` |
| \--nutui-uploader-preview-tips-padding | 上传图片预览tips下的padding值 | `0 5px` |
| \--nutui-uploader-preview-close-right | 上传图片关闭按钮的right值 | `0px` |
| \--nutui-uploader-preview-close-top | 上传图片关闭按钮的top值 | `0px` |