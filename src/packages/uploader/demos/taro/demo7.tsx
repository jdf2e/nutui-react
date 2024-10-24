import React from 'react'
import { Uploader, Cell } from '@nutui/nutui-react-taro'
import { Dongdong, Star } from '@nutui/icons-react-taro'
import { FileItem } from '../../file-item'

const defaultFileList: FileItem[] = [
  {
    name: '文件文件文件文件1文件文件文件文件1文件文件文件文件1.png',
    url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
    message: '上传成功',
  },
]
const Demo7 = () => {
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Uploader
        defaultValue={defaultFileList}
        uploadIcon={<Dongdong />}
        deleteIcon={<Star />}
        style={{
          marginInlineEnd: '10px',
        }}
      />
      <Uploader
        defaultValue={defaultFileList}
        uploadIcon={<Star />}
        deleteIcon={<Dongdong />}
      />
    </Cell>
  )
}
export default Demo7
