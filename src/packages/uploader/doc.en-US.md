# Uploader Upload

Used to upload local images or files to the server.

## Introduction

```tsx
import { Uploader } from '@nutui/nutui-react'
```

## Sample code

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Upload status

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Limit the number of uploads

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Limit upload size

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Customize pre-upload processing

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Disabled state

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Custom delete icon

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Directly activate the camera (valid on mobile version)

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Manually perform an upload with a button when a file is selected

:::demo
<CodeBlock src='h5/demo9.tsx'></CodeBlock>
:::

### Basic usage - upload list display

:::demo
<CodeBlock src='h5/demo10.tsx'></CodeBlock>
:::.

## Uploader

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| autoUpload | Whether to upload immediately after selecting the file, when false, you need to manually execute the ref submit method to upload | `boolean` | `true` |
| upload | Upload method, the input parameter is the file object to be uploaded, returns the upload result after asynchronous processing | `(file: File) => Promise<FileItem>` | `-` |
| name | The name of the `input` tag, the file parameter name sent to the backend | `string` | `file` |
| defaultValue | Default uploaded file list | `FileItem[]` | `[]` |
| value | Uploaded file list | `FileItem[]` | `-` |
| preview | Whether to display preview image after successful upload | `boolean` | `true` |
| previewUrl | Default image address when uploading non-image('image') format | `string` | `-` |
| deletable | Whether to display delete button | `boolean` | `true` |
| method | Upload request http method | `string` | `post` |
| previewType | Built-in style of upload list, supports two basic styles: picture、list | `string` | `picture` |
| capture | Image [selection mode](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture), directly launch camera | `string` | `false` |
| maxFileSize | Maximum uploadable file size (bytes) | `number` \| `string` | `Number.MAX_VALUE` |
| maxCount | File upload quantity limit | `number` \| `string` | `1` |
| fit | Image fill mode | `contain` \| `cover` \| `fill` \| `none` \| `scale-down` | `cover` |
| clearInput | Whether to clear `input` content, set to `true` to support repeatedly selecting and uploading the same file | `boolean` | `true` |
| accept | Allowed upload file types, [detailed explanation](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | `string` | `*` |
| uploadIcon | Upload area <a href="#/zh-CN/component/icon">icon name</a> | `React.ReactNode` | `-` |
| deleteIcon | Delete area icon name | `React.ReactNode` | `-` |
| uploadLabel | Text below the upload area image | `React.ReactNode` | `-` |
| listUploadRender | Custom upload area in list mode | `React.ReactNode` | `-` |
| multiple | Whether to support multiple file selection | `boolean` | `false` |
| disabled | Whether to disable file upload | `boolean` | `false` |
| beforeUpload | The function before upload needs to return a `Promise` object | `(file: File[]) => Promise<File[] \| boolean>` | `-` |
| beforeDelete | Callback when deleting files, no removal when return value is false. Supports returning a `Promise` object, no removal when `Promise` object resolve(false) or reject | `(file: FileItem, files: FileItem[]) => boolean` | `-` |
| onOversize | Triggered when file size exceeds limit | `(file: File[]) => void` | `-` |
| onOverCount | Triggered when the number of files exceeds the limit | `(count: number) => void` | `-` |
| onChange | Triggered when the uploaded file list changes | `(files: FileItem[]) => void` | `-` |
| onDelete | Triggered when clicking to delete file | `(file: FileItem, files: FileItem[]) => void` | `-` |
| onFileItemClick | Triggered when clicking after file upload success | `(file: FileItem, index: number) => void` | `-` |
| onUploadQueueChange | Triggered when the image upload queue changes | `(tasks: FileItem[]) => void` | `-` |

> Note: accept, capture and multiple are native attributes of browser input tags. Mobile devices have different levels of support for these attributes, so compatibility issues may occur on different models and WebViews.

### FileItem

| Name | Description | Default |
| --- | --- | --- |
| status | File status value, optional 'ready,uploading,success,error' | `ready` |
| uid | Unique identifier of the file | `-` |
| name | File name | `-` |
| url | File path | `-` |
| type | File type | `image` |
| loadingIcon | Loading icon | `-` |
| failIcon | Failed loading icon | `-` |
| percentage | Upload progress bar percentage | `-` |

### Methods

You can get the Uploader instance through ref and call instance methods

| Method | Description | Parameters | Return |
| --- | --- | --- | --- |
| submit | Manual upload mode, execute upload operation | `-` | `-` |
| clear | Clear the selected file queue (this method is generally used in conjunction with manual mode upload) | `index` | `-` |

## Theme customization

### Style variables

The component provides the following CSS variables that can be used to customize styles, see [ConfigProvider component](#/zh-CN/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-uploader-image-width | The width of the uploaded image | `100px` |
| \--nutui-uploader-image-height | Height of the uploaded image | `100px` |
| \--nutui-uploader-image-border | Border value of the uploaded image | `0px` |
| \--nutui-uploader-image-border-radius | Rounded border of uploaded image | `4px` |
| \--nutui-uploader-background | The background color of the uploaded image | `$color-background` |
| \--nutui-uploader-background-disabled | Background color for uploaded images in disabled state | `$color-background` |
| \--nutui-uploader-image-icon-tip-font-size | Text size below image in upload area | `12px` |
| \--nutui-uploader-image-icon-tip-color | Text color below image in upload area | `#BFBFBF` |
| \--nutui-uploader-preview-progress-background | The background color of the preview progress in the upload area | `rgba(0, 0, 0, 0.65)` |
| \--nutui-uploader-preview-margin-right | The value of margin-right for the preview of the upload area | `10px` |
| \--nutui-uploader-preview-margin-bottom | Upload area preview the value of margin-bottom | `10px` |
| \--nutui-uploader-preview-tips-height | Height under uploaded image preview tips | `24px` |
| \--nutui-uploader-preview-tips-background | Background color under uploaded image preview tips | `rgba(0, 0, 0, 0.45)` |
| \--nutui-uploader-preview-tips-padding | Padding value under uploaded image preview tips | `0 5px` |
| \--nutui-uploader-preview-close-right | The right value under the upload image's close button | `0px` |
| \--nutui-uploader-preview-close-top | The top value of the uploader's close button | `0px` |

<Contribution name="Uploader" />
