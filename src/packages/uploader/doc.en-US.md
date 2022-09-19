# Uploader

### Intro

Used to upload local pictures or files to the server.

### Install

``` ts
import { Uploader } from '@nutui/nutui-react';
```
### Basic Usage

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onStart = () => {
    console.log('start ！！')
  }
  return (
    <>
      <h2>Basic Usage</h2>
      <Uploader url={uploadUrl} start={onStart} />
    </>
  )
}
export default App;
```
:::

### upload status

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const defaultFileList: FileType<string>[] = [
    {
      name: 'file1.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: 'Uploaded successfully',
      type: 'image',
      uid: '123',
    },
    {
      name: 'file2.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'error',
      message: 'upload failed',
      type: 'image',
      uid: '124',
    },
    {
      name: 'file3.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: 'uploading...',
      type: 'image',
      uid: '125',
    },
  ]
  const onDelete = (file: FileItem, fileList: FileItem[]) => {
    console.log(translated.ca3903f3, file, fileList)
  }
  return (
    <>
      <h2>upload status</h2>
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

### Customize the upload style

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <>
      <h2>Customize the upload style</h2>
      <Uploader url={uploadUrl}>
        <Button type="success" size="small">
          Upload the file
        </Button>
      </Uploader>
    </>
  )
}
export default App;
```
:::

### Custom upload uses default progress bar

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
      <h2>Custom upload uses default progress bar</h2>
      <Uploader url={uploadUrl} onProgress={onProgress}>
        <Button type="success" size="small">
          upload files
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

### Direct camera up (mobile)

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <>
      <h2>Direct camera up (mobile)</h2>
      <Uploader capture url={uploadUrl} />
    </>
  )
}
export default App;
```
:::

### Limit the number of uploads to 5

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <>
      <h2>Limit the number of uploads to 5</h2>
      <Uploader url={uploadUrl} multiple maximum="5" />
    </>
  )
}
export default App;
```
:::

### Limit upload size (maximum 50kb per file)

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onOversize = (files: File[]) => {
    console.log('Oversize triggers the file size cannot exceed 50kb', files)
  }
  return (
    <>
      <h2>Limit upload size (maximum 50kb per file)</h2>
      <Uploader url={uploadUrl} multiple maximize={1024 * 50} oversize={onOversize} />
    </>
  )
}
export default App;
```
:::


### Custom data FormData, headers

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
      <h2>Custom data FormData, headers</h2>
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

### Custom xhr upload method (before-xhr-upload)
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
      <h2>Custom xhr upload method (before-xhr-upload)</h2>
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

### Manual upload

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
      <h2>Manual upload</h2>
      <Uploader url={uploadUrl} maximum="5" autoUpload={false} ref={uploadRef} />
      <br />
      <Button type="success" size="small" onClick={submitUpload}>
        perform upload
      </Button>
    </>
  )
}
export default App;
```
:::

### Disabled state

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <h2>Disabled state</h2>
      <Uploader disabled />
    </>
  )
}
export default App;
```
:::

### Prop

| Attribute              |Description                                                                                                                                                                                   | Type                              | Default           |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|------------------|
| autoUpload `v1.3.4`              | Whether to upload the file immediately after selecting it, if false, you need to manually execute the ref submit method to upload                                                                                                                                       | Boolean                            | true           |
| name              | The name of the `input` tag `name`, the file parameter name sent to the background                                                                                                                                       | String                            | "file"           |
| url               | The interface address of the upload server                                                                                                                                                                   | String                            | -                |
| defaultFileList               | List of uploaded files by default                                                                                                                                                                   | FileItem[]                            | []                |
| isPreview        | Whether to display the preview image after the upload is successful                                                                                                                                                               | Boolean                           | true             |
| defaultImg        | When uploading a default image URL in a non-image ('image') format                                                                                                                                                               | String                           | ''             |
| isDeletable      | Whether to display the delete button                                                                                                                                                                       | Boolean                           | true             |
| method            | The http method of upload request                                                                                                                                                                 | String                            | "post"           |
| listType `v1.3.4`            | The built-in style of the upload list, supports two basic styles picture, list                                                                                                                                                                 | String                            | "picture"           |
| capture           | Capture, can be set to[camera](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture)，，turn on the camera directly                                                                     | String                            | false            |
| maximize          | You can set the maximum upload file size (bytes)                                                                                                                                                     | Number丨String                    | Number.MAX_VALUE |
| maximum           | File upload limit                                                                                                                                                                       | Number丨String                    | 1                |
| clearInput       | Whether to clear the `input` content, set to `true` to support repeated selection and upload of the same file                                                                                                                          | Boolean                           | true            |
| accept            | File types that can be accepted. See[Des](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | String                            | *                |
| headers           | Set request headers                                                                                                                                                                     | Object                            | {}               |
| data              | Uploading extra params or function which can return uploading extra params formData                                                                                                                                                                | Object                            | {}               |
| uploadIcon       | Upload area[icon name](#/zh-CN/icon)or image link                                                                                                                                             | String                            | "photograph"     |
| uploadIconSize `v1.3.4`       | Upload area [icon size](#/icon) size, such as `20px` `2em` `2rem`                                                                                                                                             | String or Number                            | -     |
| xhrState         | The success status (status) value of the interface response                                                                                                                                                         | Number                            | 200              |
| withCredentials  | Support for sending cookie credential information                                                                                                                                                               | Boolean                           | false            |
| multiple          | Whether to support multiple file selection                                                                                                                                                                       | Boolean                           | false            |
| disabled          | Whether to disable file upload                                                                                                                                                                       | Boolean                           | false            |
| timeout           | timeout, in milliseconds                                                                                                   | Number丨String                    | 1000 * 30                 |
| beforeUpload `v1.3.4(Abandon)`     | The pre-upload function needs to return a `Promise` object                                                                                                                                                  | Function                          | null             |
| onBeforeUpload `v1.3.4`     | The pre-upload function needs to return a `Promise` object                                                                                                                                                  | Function                          | null             |
| onBeforeXhrUpload `v1.3.4`     | When performing an XHR upload, the custom method                                                                                                                                                  | Function(xhr，option)                          | null             |
| beforeDelete `v1.3.4(Abandon)`     | Callback when file is removed. If the return value is false, it will not be removed. Supports returning a `Promise` object, which is not removed when the `Promise` object resolves(false) or rejects                                                                 | Function(file): boolean 丨Promise | -                |
| onBeforeDelete `v1.3.4`     | Callback when file is removed. If the return value is false, it will not be removed. Supports returning a `Promise` object, which is not removed when the `Promise` object resolves(false) or rejects                                                                 | Function(file): boolean 丨Promise | -                |



### FileItem

| Attribute     | Description                                        | Default                          |
|----------|---------------------------------------------------------|---------------------------------|
| status   | File status value, optional ‘ready,uploading,success,error’' | "ready"                         |
| uid      | Unique ID of the file                                  | new Date().getTime().toString() |
| name     | File name                                                | ""                              |
| url      | File path                                                | ""                              |
| type     | File type                                                | "image/jpeg"                    |
| formData | Upload the required data                                 | new FormData()                  |

### Event

| Event	     | Description                   | Arguments             |
|----------|------------------------|----------------------|
| onStart `v1.3.4`    | File upload starts           | options              |
| start `v1.3.4(Abandon)`    | File upload starts           | options              |
| onProgress `v1.3.4` | The progress of the file upload         | event,options,percentage        |
| progress `v1.3.4(Abandon)` | The progress of the file upload         | event,options,percentage        |
| onOversize `v1.3.4`  | Triggered when the file size exceeds the limit | files                |
| oversize `v1.3.4(Abandon)`  | Triggered when the file size exceeds the limit | files                |
| onSuccess `v1.3.4`  | Uploaded successfully               | responseText,options |
| success `v1.3.4(Abandon)`  | Uploaded successfully               | responseText,options |
| onFailure `v1.3.4`  | Upload failed               | responseText,options |
| failure `v1.3.4(Abandon)`  | Upload failed               | responseText,options |
| onChange `v1.3.4`   | The state when the uploaded file changes   | fileList,event       |
| change `v1.3.4(Abandon)`   | The state when the uploaded file changes   | fileList,event       |
| onRemove `v1.3.4`   | The state before the file was deleted    | files,fileList       |
| remove `v1.3.4(Abandon)`   | The state before the file was deleted    | files,fileList       |
| onFileItemClick `v1.3.4`   | File delete event     | fileItem       |
| fileItemClick `v1.3.4(Abandon)`   | File delete event     | fileItem       |

