import React, { useRef, useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import {
  Button,
  Cell,
  Toast,
  Dialog,
  InputNumber,
  Swipe,
} from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

type TSwipeDemo = {
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
  title6: string
  title7: string
  openOrClose: string
  title8: string
  click: string
  sure: string
  del: string
  choose: string
  event: string
  goods: string
  collect: string
  open: string
  close: string
  closeLeft: string
  tips: string
  cart: string
  leftDel: string
  disabled: string
  chooseTips: string
  deleteTips: string
}

const SwipeDemo = () => {
  const [translated] = useTranslate<TSwipeDemo>({
    'zh-CN': {
      title1: '基础用法',
      title2: '禁用滑动',
      title3: '事件监听',
      title4: '非同步控制',
      title5: '自定义內容',
      title6: '通过实例方法控制',
      openOrClose: '点击下方按钮打开或关闭',
      title7: '点击关闭',
      title8: '阻止父元素滚动',
      click: '点击',
      sure: '确定',
      del: '删除',
      choose: '选择',
      event: '事件',
      goods: '商品',
      collect: '收藏',
      open: '打开',
      close: '关闭',
      closeLeft: '点击右侧按钮关闭',
      tips: '提示',
      cart: '加入购物车',
      leftDel: '左滑删除',
      disabled: '禁用滑动',
      chooseTips: '确定选择吗？',
      deleteTips: '确定删除吗？',
    },
    'zh-TW': {
      title1: '基礎用法',
      title2: '禁用滑動',
      title3: '事件監聽',
      title4: '非同步控制',
      title5: '自定義內容',
      title6: '通過實例方法控制',
      openOrClose: '點擊下方按鈕打開或關閉',
      title7: '点击关闭',
      title8: '阻止父元素滾動',
      click: '點擊',
      sure: '確定',
      del: '刪除',
      choose: '選擇',
      event: '事件',
      goods: '商品',
      collect: '收藏',
      open: '打開',
      close: '關閉',
      closeLeft: '點擊右側按鈕關閉',
      tips: '提示',
      cart: '加入購物車',
      leftDel: '左滑刪除',
      disabled: '禁用滑動',
      chooseTips: '確定選擇嗎？ ',
      deleteTips: '確定刪除嗎？ ',
    },
    'en-US': {
      title1: 'Basic usage',
      title2: 'Disable sliding',
      title3: 'Event monitoring',
      title4: 'Asynchronous control',
      title5: 'Custom content',
      title6: 'Control via instance method',
      openOrClose: 'Click the button below',
      title7: 'Click to close',
      title8: 'Prevent parent scrolling',
      click: 'click',
      sure: 'ok',
      del: 'delete',
      choose: 'select',
      event: 'event',
      goods: 'goods',
      collect: 'collect',
      open: 'open',
      close: 'close',
      closeLeft: 'Click the right button to close',
      tips: 'tips',
      cart: 'add to shopping cart',
      leftDel: 'left slide delete',
      disabled: 'Disable sliding',
      chooseTips: 'are you sure to choose?',
      deleteTips: 'are you sure to delete?',
    },
  })
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const [showDialog, setShowDialog] = useState(false)
  const toastShow = (msg: any) => {
    SetToastMsg(msg)
    SetShow(true)
  }

  const refDom = useRef<any>(null)
  const handleChange = () => {
    toastShow(translated.click)
  }
  const pRef = useRef('left')
  const beforeClose = (postion: string) => {
    pRef.current = postion
    setShowDialog(true)
  }

  const handleClose = () => {
    toastShow('close')
  }

  const closeRef = useRef(null)
  const openRef = useRef(null)
  const [shouldCatchMove, setShouldCatchMove] = useState(false)
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.title1}</h2>
        <Swipe
          rightAction={
            <Button type="primary" shape="square">
              {translated.del}
            </Button>
          }
        >
          <Cell title={translated.leftDel} radius={0} />
        </Swipe>

        <h2>{translated.title8}</h2>
        <View catchMove={shouldCatchMove}>
          <Swipe
            rightAction={
              <Button type="primary" shape="square">
                {translated.del}
              </Button>
            }
            onTouchEnd={(e) => {
              setShouldCatchMove(false)
            }}
            onTouchMove={(e) => {
              setShouldCatchMove(true)
            }}
          >
            <Cell title={translated.leftDel} radius={0} />
          </Swipe>
        </View>

        <h2>{translated.title6}</h2>
        <Swipe
          ref={openRef}
          rightAction={
            <Button shape="square" type="primary">
              {translated.del}
            </Button>
          }
          style={{ marginBottom: '10px' }}
        >
          <Cell title={translated.openOrClose} radius={0} />
        </Swipe>
        <Button
          style={{ marginRight: '10px' }}
          type="primary"
          onClick={() => (openRef.current as any)?.open()}
        >
          {translated.open}
        </Button>
        <Button onClick={() => (openRef.current as any)?.close()}>
          {translated.close}
        </Button>
        <h2>{translated.title7}</h2>
        <Swipe
          ref={closeRef}
          rightAction={
            <Button shape="square" type="primary">
              {translated.del}
            </Button>
          }
          onActionClick={() => {
            ;(closeRef.current as any)?.close()
          }}
        >
          <Cell title={translated.closeLeft} radius={0} />
        </Swipe>
        <h2>{translated.title2}</h2>
        <Swipe
          rightAction={
            <Button shape="square" type="primary">
              {translated.del}
            </Button>
          }
          disabled
        >
          <Cell title={translated.disabled} radius={0} />
        </Swipe>
        <h2>{translated.title3}</h2>
        <Swipe
          leftAction={
            <Button shape="square" type="primary">
              {translated.choose}
            </Button>
          }
          rightAction={
            <>
              <Button shape="square" type="primary">
                {translated.del}
              </Button>
              <Button shape="square" type="info">
                {translated.collect}
              </Button>
            </>
          }
          onActionClick={handleChange}
          onOpen={({ name, position }) => {
            // Toast.show(translated.open)
            toastShow(translated.open)
          }}
          onClose={handleClose}
        >
          <Cell title={translated.event} />
        </Swipe>
        <h2>{translated.title4}</h2>
        <Swipe
          ref={refDom}
          beforeClose={beforeClose}
          leftAction={
            <Button shape="square" type="success">
              {translated.choose}
            </Button>
          }
          rightAction={
            <>
              <Button shape="square" type="danger">
                {translated.del}
              </Button>
            </>
          }
        >
          <Cell title={translated.event} />
        </Swipe>
        <h2>{translated.title5}</h2>
        <Swipe
          rightAction={
            <>
              <Button shape="square" type="primary">
                {translated.cart}
              </Button>
            </>
          }
          style={{ marginBottom: '30px' }}
        >
          <Cell>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <span>{translated.goods}</span>
              <InputNumber style={{ float: 'right' }} />
            </div>
          </Cell>
        </Swipe>
        <Toast
          type="text"
          visible={show}
          msg={toastMsg}
          onClose={() => {
            SetShow(false)
          }}
        />
        <Dialog
          visible={showDialog}
          title={translated.tips}
          onClose={() => {
            refDom.current && refDom.current.close()
            setShowDialog(false)
          }}
        >
          {pRef.current === 'left'
            ? translated.chooseTips
            : translated.deleteTips}
        </Dialog>
      </div>
    </>
  )
}

export default SwipeDemo
