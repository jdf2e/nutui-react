import React, { useEffect, useState } from 'react'
import './search.scss'
import { Link, useNavigate } from 'react-router-dom'
import { nav } from '../../../../config'
export default function Search() {
  const navList = nav.flatMap((item) => item.packages).filter((i) => i.show)
  const [searchVal, setSearchVal] = useState('')
  const [searchList, setSearchList] = useState<any>([])
  const [searchCurName, setSearchCurName] = useState('')
  const [searchIndex, setSearchIndex] = useState(0)
  const navigate = useNavigate()
  const onfocus = () => {
    // 处理聚焦事件
  }

  const onblur = () => {
    // 处理失焦事件
  }

  const choseList = (e) => {
    let index = searchIndex;
    if (e.keyCode == 40) {
      index++;
    }
    if (e.keyCode == 38) {
      index--;
    }
    if (searchIndex < 0) {
      index = 0;
    }
    if (searchList.length > 0) {
      const cName = searchList[index] && searchList[index].name;
      if (cName) {
        setSearchCurName(cName);
        setSearchIndex(index);
        if (e.keyCode == 13) {
          navigate(`/zh-CN/component/${(searchList[index].name || '').toLowerCase()}`);
          setSearchCurName('')
          setSearchIndex(0)
          setSearchVal('')
        }
      }
    }
  };

  const checklist = () => {
    setSearchCurName('')
    setSearchIndex(0)
    setSearchVal('')
  };
  const onChange = (e) => {
    const val = e.target.value
    setSearchVal(val)
    const list = navList.filter(
      (i) =>
        i.cName.includes(val) ||
        i.name.toLowerCase().includes(val.toLowerCase())
    )
    setSearchList(list)
  }
  useEffect(() => {
    if (searchVal === '') {
      setSearchList([])
    }
  }, [searchVal])
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder="在 NutUI 中搜索"
        value={searchVal}
        onChange={onChange}
        onFocus={onfocus}
        onBlur={onblur}
        onKeyUp={choseList}
      />
      <ul
        className="search-list"
        style={{ display: searchList.length > 0 ? 'block' : 'none' }}
      >
        {searchList.map((item: any, index) => {
          return (
            <li key={index} className={searchCurName === item.name ? 'cur' : ''} onClick={() => checklist()}>
              <Link to={`/zh-CN/component/${item.name.toLowerCase()}`}>
                {item.name}
                <span>{item.cName}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
