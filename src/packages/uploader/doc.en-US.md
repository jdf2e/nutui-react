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
        <Button type="primary" icon="uploader">
          Upload the file
        </Button>
      </Uploader>
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

### Upload status

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onDelete = (file: FileItem, fileList: FileItem[]) => {
    console.log('delete event start', file, fileList)
  }
  return (
    <>
      <h2>Upload status</h2>
      <Uploader url={uploadUrl} multiple removeImage={onDelete} />
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
| name              | The name of the `input` tag `name`, the file parameter name sent to the background                                                                                                                                       | String                            | "file"           |
| url               | The interface address of the upload server                                                                                                                                                                   | String                            | -                |
| isPreview        | Whether to display the preview image after the upload is successful                                                                                                                                                               | Boolean                           | true             |
| defaultImg        | When uploading a default image URL in a non-image ('image') format                                                                                                                                                               | String                           | ''             |
| isDeletable      | Whether to display the delete button                                                                                                                                                                       | Boolean                           | true             |
| method            | The http method of upload request                                                                                                                                                                 | String                            | "post"           |
| capture           | Capture, can be set to[camera](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture)，，turn on the camera directly                                                                     | String                            | false            |
| maximize          | You can set the maximum upload file size (bytes)                                                                                                                                                     | Number丨String                    | Number.MAX_VALUE |
| maximum           | File upload limit                                                                                                                                                                       | Number丨String                    | 1                |
| clearInput       | Whether to clear the `input` content, set to `true` to support repeated selection and upload of the same file                                                                                                                          | Boolean                           | false            |
| accept            | File types that can be accepted. See[Des](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | String                            | *                |
| headers           | Set request headers                                                                                                                                                                     | Object                            | {}               |
| data              | Uploading extra params or function which can return uploading extra params formData                                                                                                                                                                | Object                            | {}               |
| uploadIcon       | Upload area[icon name](#/zh-CN/icon)or image link                                                                                                                                             | String                            | "photograph"     |
| xhrState         | The success status (status) value of the interface response                                                                                                                                                         | Number                            | 200              |
| withCredentials  | The ajax upload with cookie sent                                                                                                                                                               | Boolean                           | fasle            |
| multiple          | Whether to support multiple file selection                                                                                                                                                                       | Boolean                           | fasle            |
| disabled          | Whether to disable file upload                                                                                                                                                                       | Boolean                           | fasle            |
| timeout           | timeout, in milliseconds                                                                                                   | Number丨String                    | 1000 * 30                 |
| beforeUpload     | Hook before reading the file, return false to stop reading the file, can return Promise                                                                                                                                                  | Function                          | null             |
| beforeDelete     | Hook before delete the file, return false to stop reading the file, can return Promise                                                                 | Function(file): boolean 丨Promise | -                |



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
| start    | File upload starts           | options              |
| progress | The progress of the file upload         | event,options        |
| oversize | Triggered when the file size exceeds the limit | files                |
| success  | Uploaded successfully               | responseText,options |
| failure  | Upload failed               | responseText,options |
| change   | The state when the uploaded file changes   | fileList,event       |
| removeImage   | File delete event     | files,fileList       |

