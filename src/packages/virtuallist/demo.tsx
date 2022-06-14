import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'

import VirtualList from './index'
import './demo.scss'

const ListDemo = () => {
  // 以下是我组件代码
  const [sourceData, setsourceData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const getData = useCallback(() => {
    const datas = []
    const pageSize = 10
    for (let i = (pageNo - 1) * pageSize; i < pageNo * pageSize; i++) {
      const num = i > 9 ? i : `0${i}`
      datas.push(` list${num}`)
    }
    setsourceData((sourceData) => {
      return [...sourceData, ...datas]
    })
  }, [pageNo])
  const ItemRender = ({ data }) => {
    return <p>我是-{data}</p>
  }
  const ItemRenderMemo = React.memo(ItemRender)

  const ItemVariable = ({ data, index }) => {
    const html =
      index % 2 === 0 ? (
        <p>可变大小文案图片隔行展示-{data}</p>
      ) : (
        <p>
          <img
            height="100"
            alt="京东"
            src="//img10.360buyimg.com/img/jfs/t1/199487/20/23852/33747/62862238E18f45301/a50ec1c60e6aad22.jpg"
          />
        </p>
      )

    return html
  }
  const handleScroll = () => {
    if (pageNo > 10) return
    setPageNo(pageNo + 1)
  }
  const ItemVariableDemo = React.memo(ItemVariable)

  useEffect(() => {
    getData()
  }, [getData])
  return (
    <>
      <div className="demo">
        {/* <h2>1、水平等宽虚拟列表</h2>

        <div className="hideScrollbar virtual_list_box">
          <VirtualList
            sourceData={sourceData}
            ItemRender={ItemRenderMemo}
            itemSize={124}
            handleScroll={handleScroll}
            horizontal
          />
        </div> */}
        {/* <h2>2、水平不等宽虚拟列表</h2>
        <div className="hideScrollbar virtual_list_box height127">
          <VirtualList
            sourceData={sourceData}
            itemSize={300}
            ItemRender={ItemVariableDemo}
            horizontal
            itemEqualSize={false}
          />
        </div> */}
        {/* <h2>2、等高虚拟列表</h2> */}
        <div className=" virtual_list_box heigh1 hideScrollbar">
          <VirtualList
            className="itemEqualSize"
            itemSize={66}
            sourceData={sourceData}
            ItemRender={ItemRenderMemo}
            handleScroll={handleScroll}
          />
        </div>
        {/* <h2>3、不等高虚拟列表</h2>
        <div className=" virtual_list_box height200">
          <VirtualList
            sourceData={sourceData}
            ItemRender={ItemVariableDemo}
            itemSize={128}
            itemEqualSize={false}
          />
        </div> */}
      </div>
    </>
  )
}

export default ListDemo
