import React, { useEffect, useRef, useState } from 'react'
import { Button, Cell, CountDown } from '@/packages/nutui.react.taro'

const CountDownDemo = () => {
  const stateRef = useRef({
    timer: -1,
    serverTime: Date.now() - 30 * 1000,
    endTime: Date.now() + 50 * 1000,
  })

  const [paused, setPaused] = useState(false)
  const [asyncEnd, setAsyncEnd] = useState(0)
  const [resetTime, setResetTime] = useState({
    d: '1',
    h: '00',
    m: '00',
    s: '00',
  })

  const partItemStyle = {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '25px',
    background: '#e8220e',
    color: '#fff',
    fontSize: '14px',
    borderRadius: '6px',
  }

  const partItemSymbolStyle = {
    margin: '0 5px',
  }

  useEffect(() => {
    stateRef.current.timer = setTimeout(() => {
      setAsyncEnd(Date.now() + 30 * 1000)
    }, 3000)
    return () => {
      clearTimeout(stateRef.current.timer)
    }
  }, [])

  const toggle = () => {
    console.log(paused)
    setPaused(!paused)
  }
  const onEnd = () => {
    console.log('countdown: ended.')
  }
  const onpaused = (v: number) => {
    console.log('paused: ', v)
  }
  const onrestart = (v: number) => {
    console.log('restart: ', v)
  }
  const onUpdate = (v: any) => {
    console.log('restTime: ', v)
    setResetTime(v)
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell>
          <CountDown endTime={stateRef.current.endTime} onEnd={onEnd} />
        </Cell>
        <h2>显示天</h2>

        <Cell>
          <CountDown endTime={stateRef.current.endTime} />
        </Cell>

        <h2>以服务端的时间为准</h2>

        <Cell>
          <CountDown
            startTime={stateRef.current.serverTime}
            endTime={stateRef.current.endTime}
          />
        </Cell>

        <h2>显示为天时分秒</h2>

        <Cell>
          <CountDown endTime={stateRef.current.endTime} />
        </Cell>

        <h2>异步更新结束时间</h2>

        <Cell>
          <CountDown endTime={asyncEnd} />
        </Cell>

        <h2>控制开始和暂停的倒计时</h2>

        <Cell>
          <CountDown
            endTime={stateRef.current.endTime}
            paused={paused}
            onPaused={onpaused}
            onRestart={onrestart}
          />
          <div style={{ position: 'absolute', right: '10px', top: '9px' }}>
            <div onClick={() => toggle()}>
              <Button type="primary" size="small">
                {paused ? 'start' : 'stop'}
              </Button>
            </div>
          </div>
        </Cell>

        <h2>自定义展示</h2>

        <Cell>
          <span>
            <CountDown endTime={stateRef.current.endTime} onUpdate={onUpdate}>
              <div
                className="countdown-part-box"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <div className="part-item-symbol" style={partItemSymbolStyle}>
                  {resetTime.d}天
                </div>
                <div className="part-item h" style={partItemStyle}>
                  {resetTime.h}
                </div>
                <span className="part-item-symbol" style={partItemSymbolStyle}>
                  :
                </span>
                <div className="part-item m" style={partItemStyle}>
                  {resetTime.m}
                </div>
                <span className="part-item-symbol" style={partItemSymbolStyle}>
                  :
                </span>
                <div className="part-item s" style={partItemStyle}>
                  {resetTime.s}
                </div>
              </div>
            </CountDown>
          </span>
        </Cell>
      </div>
    </>
  )
}

export default CountDownDemo
