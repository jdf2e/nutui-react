import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Uploader } from '../uploader'
import { FileItem } from '../types'
import { Preview } from '../preview'
import Button from '@/packages/button'

test('should render base uploader and type', () => {
  const { container, getByTestId } = render(
    <Uploader data-testid="uploader-type" />
  )
  expect(getByTestId('uploader-type')).toHaveClass('nut-uploader')
  expect(
    container.querySelector('.nut-uploader-input')?.getAttribute('type')
  ).toBe('file')
})

test('should render base uploader props', async () => {
  const change = vi.fn()
  const { container } = render(
    <Uploader
      autoUpload
      capture="user"
      name="files"
      accept=".jpg"
      maxFileSize={1024 * 50}
      maxCount={2}
      onChange={change}
    />
  )
  const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })
  const input = container.querySelectorAll('.nut-uploader-input')[0]
  expect(input?.getAttribute('capture')).toBe('user')
  expect(input?.getAttribute('name')).toBe('files')
  expect(input?.getAttribute('accept')).toBe('.jpg')

  const input1 = container.querySelector('.nut-uploader-upload')
  expect(input1).toBeTruthy()
})

test('should render base uploader other props', () => {
  const onDelete = vi.fn()
  const fileItemClick = vi.fn()
  const App = () => {
    const defaultFileList: FileItem[] = [
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
    return (
      <Uploader
        deletable
        defaultValue={defaultFileList}
        multiple
        preview
        uploadIcon="dongdong"
        onDelete={onDelete}
        onFileItemClick={fileItemClick}
      />
    )
  }

  const { container } = render(<App />)
  expect(container.querySelector('.nut-icon')).toBeTruthy()
  expect(container.querySelector('.close')).toBeTruthy()
  expect(container.querySelectorAll('.nut-uploader-preview').length).toBe(3)
  fireEvent.click(container.querySelectorAll('.close')[0])
  expect(onDelete).toBeCalled()
  fireEvent.click(container.querySelectorAll('.nut-uploader-preview-img-c')[0])
  expect(fileItemClick).toBeCalled()
})

test('should render base uploader list', () => {
  const App = () => {
    const defaultFileList: FileItem[] = [
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
    return (
      <Uploader
        defaultValue={defaultFileList}
        uploadIcon="dongdong"
        previewType="list"
      />
    )
  }

  const { container } = render(<App />)
  const toast1 = container.querySelector('.list')
  expect(toast1).toBeTruthy()
})

test('should render base uploader props disabled', () => {
  const { container } = render(<Uploader disabled />)
  const upLoad1 = container.querySelector('.nut-uploader-input')
  expect(upLoad1?.getAttribute('disabled')).toBe('')
})

test('before-delete prop return false', () => {
  const onDelete = vi.fn()
  const App = () => {
    const fileList: FileItem[] = [
      {
        name: '文件1.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'success',
        message: '上传成功',
        type: 'image',
        uid: '12',
      },
    ]
    return (
      <Uploader
        deletable
        value={fileList}
        onDelete={onDelete}
        beforeDelete={() => {
          return false
        }}
      />
    )
  }
  const { container } = render(<App />)
  fireEvent.click(container.querySelectorAll('.nut-icon-Failure')[0])
  expect(onDelete).not.toBeCalled()
})

test('before-delete prop return true', () => {
  const onDelete = vi.fn()
  const App = () => {
    const defaultFileList: FileItem[] = [
      {
        name: '文件1.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'success',
        message: '上传成功',
        type: 'image',
        uid: '12',
      },
    ]
    return (
      <Uploader
        deletable
        defaultValue={defaultFileList}
        onDelete={onDelete}
        beforeDelete={() => {
          return true
        }}
      />
    )
  }
  const { container } = render(<App />)
  fireEvent.click(container.querySelectorAll('.nut-icon-Failure')[0])
  expect(onDelete).toBeCalled()
})

test('should render progress', () => {
  const App = () => {
    const list: FileItem[] = [
      {
        name: '文件444.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'uploading',
        message: '上传中...',
        percentage: 30,
      },
    ]
    return <Uploader deletable value={list} previewType="list" />
  }
  const { container } = render(<App />)
  const progressElement = container.querySelector('.nut-progress')
  expect(progressElement).toBeInTheDocument()
  const progressInnerElement = container.querySelector('.nut-progress-inner')
  expect(progressInnerElement).toBeInTheDocument()
  expect(progressInnerElement).toHaveStyle('width: 30%')
  const textElement = container.querySelector('span')
  expect(textElement).toHaveTextContent('文件444.png')
})
test('simulates single file upload', () => {
  const handleUpload: any = vi.fn()
  const { container } = render(
    <Uploader upload={(file: File) => handleUpload(file)} />
  )
  const file = new File(['hello'], 'hello.png', { type: 'image/png' })
  const input: any = container.querySelector('input')

  fireEvent.change(input, { target: { files: [file] } })

  expect(handleUpload).toHaveBeenCalledTimes(1)
  expect(handleUpload).toHaveBeenCalledWith(file)
})
test('simulates single file upload fail', async () => {
  const handleUpload: any = vi.fn(() =>
    Promise.reject(new Error('Upload failed'))
  )
  const { container } = render(
    <Uploader upload={(file: File) => handleUpload(file)} />
  )
  const file = new File(['hello'], 'hello.png', { type: 'image/png' })
  const input: any = container.querySelector('input')

  fireEvent.change(input, { target: { files: [file] } })

  expect(handleUpload).toHaveBeenCalledTimes(1)
  expect(handleUpload).toHaveBeenCalledWith(file)
})
test('simulates multiple file upload', () => {
  const handleUpload: any = vi.fn()
  const handleOverCount: any = vi.fn()
  const { container } = render(
    <Uploader
      upload={(file: File) => handleUpload(file)}
      multiple
      maxCount={2}
      onOverCount={handleOverCount}
    />
  )
  const file1 = new File(['file1'], 'file1.txt', { type: 'text/plain' })
  const file2 = new File(['file2'], 'file2.txt', { type: 'text/plain' })
  const file3 = new File(['file3'], 'file3.txt', { type: 'text/plain' })
  const files = [file1, file2, file3]
  const input: any = container.querySelector('input')

  fireEvent.change(input, { target: { files } })

  expect(handleUpload).toHaveBeenCalledTimes(2)
  expect(handleOverCount).toHaveBeenCalledTimes(1)
  expect(handleOverCount).toHaveBeenCalledWith(3)
})
test('simulates file upload when autoupload is false', () => {
  const handleUpload: any = vi.fn()
  const handleOverCount: any = vi.fn()
  const { container } = render(
    <Uploader
      upload={(file: File) => handleUpload(file)}
      multiple
      autoUpload={false}
      maxCount={2}
      onOverCount={handleOverCount}
    />
  )
  const file1 = new File(['file1'], 'file1.txt', { type: 'text/plain' })
  const file2 = new File(['file2'], 'file2.txt', { type: 'text/plain' })
  const file3 = new File(['file3'], 'file3.txt', { type: 'text/plain' })
  const files = [file1, file2, file3]
  const input: any = container.querySelector('input')
  fireEvent.change(input, { target: { files } })
  expect(handleUpload).toHaveBeenCalledTimes(0)
})
test('should render button', () => {
  const clearUpload = vi.fn()
  const submitUpload = vi.fn()
  const App = () => {
    return (
      <>
        <Uploader />
        <Button type="success" onClick={submitUpload}>
          执行上传
        </Button>
        <Button type="primary" onClick={clearUpload}>
          手动清空上传
        </Button>
      </>
    )
  }
  const { container } = render(<App />)
  const buttonElement = container.querySelector('.nut-button')
  expect(buttonElement).toBeInTheDocument()
  fireEvent.click(container.querySelectorAll('.nut-button-success')[0])
  expect(submitUpload).toBeCalled()
  fireEvent.click(container.querySelectorAll('.nut-button-primary')[0])
  expect(clearUpload).toBeCalled()
})
test('ready file list', () => {
  const list: any = {}
  list.name = '文件1.png'
  list.url =
    'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif'
  list.status = 'ready'
  list.message = '准备上传'
  list.type = 'image'
  list.uid = '12'
  const App = () => {
    return (
      <Uploader
        deletable
        defaultValue={[list]}
        beforeDelete={() => {
          return true
        }}
      />
    )
  }
  const { container, getByText } = render(<App />)
  expect(getByText('准备上传')).toHaveTextContent('准备上传')
})
test('type is not image and doesnot set previewurl', () => {
  const list: any = {}
  list.name = '文件1.png'
  list.url =
    'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif'
  list.status = 'ready'
  list.message = '准备上传'
  list.type = 'video'
  list.uid = '12'
  const App = () => {
    return <Uploader deletable defaultValue={[list]} />
  }
  const { container, getByText } = render(<App />)
  expect(
    container.querySelector('.nut-uploader-preview-img-file')
  ).toBeInTheDocument()
})
test('type is not image and set previewurl', () => {
  const list: any = {}
  list.name = '文件1.png'
  list.url =
    'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif'
  list.status = 'ready'
  list.message = '准备上传'
  list.type = 'video'
  list.uid = '12'
  const App = () => {
    return (
      <Uploader
        deletable
        defaultValue={[list]}
        previewUrl="https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif"
      />
    )
  }
  const { container, getByText } = render(<App />)
  expect(
    container.querySelector('.nut-uploader-preview-img-c')
  ).toBeInTheDocument()
})
test('preview component', () => {
  const delFunc = vi.fn()
  const clickFunc = vi.fn()
  const list: FileItem[] = [
    {
      name: '文件1.png',
      status: 'success',
      message: '上传成功',
      uid: '12',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
    },
  ]

  const { container } = render(
    <Preview
      fileList={list}
      previewType="picture"
      deletable
      onDeleteItem={delFunc}
      handleItemClick={clickFunc}
    />
  )
  fireEvent.click(container.querySelectorAll('.close')[0])
  expect(delFunc).toBeCalled()

  fireEvent.click(container.querySelectorAll('.nut-uploader-preview-img-c')[0])
  expect(clickFunc).toBeCalled()

  const { container: container1 } = render(
    <Preview
      fileList={list}
      previewType="picture"
      deletable
      onDeleteItem={delFunc}
      handleItemClick={clickFunc}
    />
  )
  fireEvent.click(container1.querySelectorAll('.nut-uploader-preview-img-c')[0])
  expect(clickFunc).toBeCalled()

  const { container: container2 } = render(
    <Preview
      fileList={list}
      previewType="list"
      deletable
      onDeleteItem={delFunc}
      handleItemClick={clickFunc}
    />
  )

  fireEvent.click(
    container2.querySelectorAll('.nut-uploader-preview-img-file-name')[0]
  )
  expect(clickFunc).toBeCalled()
})
