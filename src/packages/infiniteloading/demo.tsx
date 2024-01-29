import React, { useState, useEffect, useMemo } from 'react'
import { Jd } from '@nutui/icons-react'
import { useTranslate } from '../../sites/assets/locale'
import { InfiniteLoading, InfiniteLoadingStatusType } from './infiniteloading'
import Cell from '@/packages/cell'
import Toast from '@/packages/toast'
import './demo.scss'
import { sleep } from '@/utils/sleep'

interface T {
  '83913e71': string
  '84aa6bce': string
  eb4236fe: string
  '9ed40460': string
  '1254a90a': string
  '1254a90n': string
}

const InfiniteloadingDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '83913e71': '刷新成功',
      '84aa6bce': '基础用法',
      eb4236fe: '下拉刷新',
      '9ed40460': '自定义加载文案',
      '1254a90a': '没有啦~',
      '1254a90n': '基于window滚动',
    },
    'zh-TW': {
      '83913e71': '刷新成功',
      '84aa6bce': '基礎用法',
      eb4236fe: '下拉刷新',
      '9ed40460': '自定義加載文案',
      '1254a90a': '沒有啦~',
      '1254a90n': '基於window滾動',
    },
    'en-US': {
      '83913e71': 'Refresh successfully',
      '84aa6bce': 'Basic usage',
      eb4236fe: 'Pull down to refresh',
      '9ed40460': 'custom loading text',
      '1254a90a': 'nope~',
      '1254a90n': 'window scroll',
    },
  })

  const [defaultList, setDefaultList] = useState<string[]>([])
  const [customList, setCustomList] = useState<string[]>([])
  const [refreshList, setRefreshList] = useState<string[]>([])
  const [windowList, setWindowList] = useState<string[]>([])
  const [status, setStatus] = useState<InfiniteLoadingStatusType>('load')
  const [customStatus, setCustomStatus] =
    useState<InfiniteLoadingStatusType>('load')
  const [refreshStatus, setRefreshStatus] =
    useState<InfiniteLoadingStatusType>('load')
  const [windownStatus, setWindowStatus] =
    useState<InfiniteLoadingStatusType>('load')
  const [reverse] = useState(false)

  useEffect(() => {
    init()
  }, [])

  const loadMore = async () => {
    await sleep(2000)
    const curLen = defaultList.length
    const defaultCacheList = [...defaultList]
    if (defaultCacheList.length >= 30) {
      setStatus('loadMore')
    } else {
      // setStatus('networkException')
      for (let i = curLen; i < curLen + 10; i++) {
        defaultCacheList.push(`${i}`)
      }
      setDefaultList(defaultCacheList)
    }
  }

  const refreshLoadMore = async () => {
    await sleep(2000)
    const curLen = refreshList.length
    for (let i = curLen; i < curLen + 10; i++) {
      refreshList.push(`${i}`)
    }
    if (refreshList.length >= 30) {
      setRefreshStatus('loadMore')
    } else {
      setRefreshList([...refreshList])
    }
  }

  const customLoadMore = async () => {
    await sleep(2000)
    const curLen = customList.length
    for (let i = curLen; i < curLen + 10; i++) {
      customList.push(`${i}`)
    }
    if (customList.length >= 30) {
      setCustomStatus('loadMore')
    } else {
      setCustomList([...customList])
    }
  }

  const windowLoadMore = async () => {
    await sleep(2000)
    const curLen = windowList.length
    for (let i = curLen; i < curLen + 10; i++) {
      windowList.push(`${i}`)
    }
    if (windowList.length >= 300) {
      setWindowStatus('loadMore')
    } else {
      setWindowList([...windowList])
    }
  }

  const refresh = async () => {
    await sleep(1000)
    Toast.show(translated['83913e71'])
  }

  const init = () => {
    for (let i = 0; i < 10; i++) {
      defaultList.push(`${i}`)
      customList.push(`${i}`)
      refreshList.push(`${i}`)
      windowList.push(`${i}`)
    }
    setDefaultList([...defaultList])
    setCustomList([...customList])
    setRefreshList([...refreshList])
    setRefreshList([...windowList])
  }
  const fillColor: string = useMemo(() => {
    return reverse ? '#FFFFFF' : '#8C8C8C'
  }, [reverse])

  const joySvg = useMemo(() => {
    return (
      <i className="nut-infiniteloading-bottom-tips-icons">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clipPath="url(#clip0_252_47)">
            <path
              d="M23.1507 10.6435C21.8958 9.29889 21.6209 7.28491 20.8022 6.60353C19.9835 5.92216 18.7824 7.00753 18.3402 7.6467C15.896 5.92216 11.9879 6.00054 11.9879 6.00054C11.9879 6.00054 8.09759 5.92216 5.6475 7.6467C5.20528 7.00753 4.01012 5.92216 3.19143 6.60353C2.37274 7.28491 2.10383 9.29889 0.848906 10.6435C-0.0892994 11.6566 -0.166985 11.952 0.215468 12.754C0.591945 13.556 2.93447 14.2193 4.58977 12.6334C4.81088 13.4595 6.67534 18 11.9938 18C17.3123 18 19.1887 13.4595 19.4039 12.6334C21.0592 14.2193 23.4077 13.556 23.7901 12.754C24.1666 11.952 24.0889 11.6566 23.1507 10.6435Z"
              fill={fillColor}
            />
          </g>
        </svg>
      </i>
    )
  }, [fillColor])

  const networkExceptionSvg = useMemo(() => {
    return (
      <i className="nut-infiniteloading-bottom-tips-icons">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <g clipPath="url(#clip0_252_861)">
            <path
              d="M0.148233 2.88529C-0.049411 3.07978 -0.049411 3.39511 0.148233 3.5896C0.345877 3.78409 0.666322 3.78409 0.863966 3.5896C3.70061 0.798205 8.29971 0.798205 11.1364 3.5896C11.334 3.78409 11.6544 3.78409 11.8521 3.5896C12.0497 3.39511 12.0497 3.07978 11.8521 2.88529C8.62016 -0.295095 3.38016 -0.295095 0.148233 2.88529Z"
              fill={fillColor}
            />
            <path
              d="M1.98956 5.68688C1.79273 5.4932 1.79273 5.17917 1.98956 4.98548C4.20459 2.80578 7.79587 2.80578 10.0109 4.98548C10.2077 5.17917 10.2077 5.4932 10.0109 5.68688C9.81408 5.88057 9.49496 5.88057 9.29813 5.68688C7.47675 3.89455 4.52371 3.89455 2.70233 5.68688C2.5055 5.88057 2.18638 5.88057 1.98956 5.68688Z"
              fill={fillColor}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.00025 11.5003C7.39532 11.5003 8.52625 10.3874 8.52625 9.01454C8.52625 7.64172 7.39532 6.52882 6.00025 6.52882C4.60517 6.52882 3.47424 7.64172 3.47424 9.01454C3.47424 10.3874 4.60517 11.5003 6.00025 11.5003ZM7.36134 9.65244L6.71311 9.01455L7.36137 8.37663L6.65997 7.66386L6.00025 8.31306L5.34054 7.66386L4.63914 8.37663L5.28739 9.01455L4.63917 9.65244L5.34056 10.3652L6.00025 9.71604L6.65994 10.3652L7.36134 9.65244Z"
              fill={fillColor}
            />
          </g>
        </svg>
      </i>
    )
  }, [fillColor])

  return (
    <>
      <div className="demo">
        <h2>{translated['84aa6bce']}</h2>
        <Cell>
          <ul className="infiniteUl" id="scroll">
            <InfiniteLoading
              target="scroll"
              status={status}
              onLoadMore={loadMore}
              reverse={reverse}
              loadingText={
                <>
                  {joySvg}
                  加载中
                </>
              }
              loadMoreText={
                <>
                  {joySvg}
                  没有更多了
                </>
              }
              networkExceptionText={
                <>
                  {networkExceptionSvg}
                  网络不太顺畅，点我再试试
                </>
              }
            >
              {defaultList.map((item, index) => {
                return (
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </InfiniteLoading>
          </ul>
        </Cell>

        <h2>{translated.eb4236fe}</h2>
        <Cell>
          <ul className="infiniteUl" id="refreshScroll">
            <InfiniteLoading
              pullingText={
                <>
                  <i className="nut-infiniteloading-top-tips-icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="26"
                      viewBox="0 0 36 26"
                      fill="none"
                    >
                      <path
                        d="M34.7243 10.965C32.842 8.94809 32.4297 5.92727 31.2018 4.90525C29.9738 3.88324 28.1722 5.51123 27.5089 6.46993C23.8429 3.88324 17.9809 4.00082 17.9809 4.00082C17.9809 4.00082 12.1458 3.88324 8.47083 6.46993C7.80754 5.51123 6.01488 3.88324 4.78691 4.90525C3.55894 5.92727 3.15559 8.94809 1.2733 10.965C-0.133943 12.4844 -0.250465 12.9276 0.323186 14.1305C0.887874 15.3334 4.40149 16.3283 6.88432 13.9496C7.21596 15.1887 10.0125 21.9991 17.9899 21.9991C25.9672 21.9991 28.7817 15.1887 29.1043 13.9496C31.5872 16.3283 35.1098 15.3334 35.6834 14.1305C36.2481 12.9276 36.1316 12.4844 34.7243 10.965Z"
                        fill="#8C8C8C"
                      />
                    </svg>
                  </i>
                  松开刷新
                </>
              }
              loadingText={<Jd />}
              target="refreshScroll"
              pullRefresh
              status={refreshStatus}
              onLoadMore={refreshLoadMore}
              onRefresh={refresh}
            >
              {refreshList.map((item, index) => {
                return (
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </InfiniteLoading>
          </ul>
        </Cell>

        <h2>{translated['9ed40460']}</h2>
        <Cell>
          <ul className="infiniteUl" id="customScroll">
            <InfiniteLoading
              target="customScroll"
              loadingText="loading"
              loadMoreText={translated['1254a90a']}
              status={customStatus}
              onLoadMore={customLoadMore}
            >
              {customList.map((item, index) => {
                return (
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </InfiniteLoading>
          </ul>
        </Cell>

        <h2>{translated['1254a90n']}</h2>
        <Cell>
          <ul className="infiniteUl2">
            <InfiniteLoading
              loadingText="loading"
              loadMoreText={translated['1254a90a']}
              status={windownStatus}
              onLoadMore={windowLoadMore}
            >
              {windowList.map((item, index) => {
                return (
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </InfiniteLoading>
          </ul>
        </Cell>
      </div>
    </>
  )
}

export default InfiniteloadingDemo
