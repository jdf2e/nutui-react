import React, { useRef, useState } from 'react'
import Taro from '@tarojs/taro'
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
  openOrClose: string
  title7: string
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
    'id-ID': {
      title1: 'penggunaan dasar',
      title2: 'Lumpuhkan sliding',
      title3: 'Monitor waktu',
      title4: 'kontrol asinkron',
      title5: 'isi suai',
      title6: 'kontrol melalui metode instance',
      openOrClose: 'Klik tombol di bawah untuk membuka atau menutup',
      title7: 'klik untuk menutup',
      click: 'klik',
      sure: 'OK',
      del: 'Hapus',
      choose: 'pilih',
      event: 'peristiwa',
      goods: 'barang',
      collect: 'kumpulkan',
      open: 'buka',
      close: 'tutup',
      closeLeft: 'Klik tombol kanan untuk menutup',
      tips: 'tip',
      cart: 'tambah ke kereta belanja',
      leftDel: 'padam slide kiri',
      disabled: 'Lumpuhkan sliding',
      chooseTips: 'Apakah kamu benar-benar memilih?',
      deleteTips: 'Apakah Anda yakin untuk menghapus?',
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
    // Dialog.alert({
    //   title: translated.tips,
    //   content:
    //     postion === 'left' ? translated.chooseTips : translated.deleteTips,
    //   onOk: () => {
    //     refDom.current && refDom.current.close()
    //   },
    // })
    pRef.current = postion
    setShowDialog(true)
  }

  const handleClose = () => {
    toastShow('close')
  }

  const closeRef = useRef(null)
  const openRef = useRef(null)

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
          onTouchEnd={(e) => console.log(e)}
          onTouchMove={(e) => console.log(e)}
          onTouchStart={(e) => console.log(e)}
        >
          <Cell title={translated.leftDel} roundRadius={0} />
        </Swipe>
        <h2>{translated.title6}</h2>
        <Swipe
          ref={openRef}
          rightAction={
            <Button shape="square" type="danger">
              {translated.del}
            </Button>
          }
        >
          <Cell title={translated.openOrClose} roundRadius={0} />
        </Swipe>
        <Button onClick={() => (openRef.current as any)?.open()}>
          {translated.open}
        </Button>
        <Button onClick={() => (openRef.current as any)?.close()}>
          {translated.close}
        </Button>
        <h2>{translated.title7}</h2>
        <Swipe
          ref={closeRef}
          rightAction={
            <Button shape="square" type="danger">
              {translated.del}
            </Button>
          }
          onActionClick={() => {
            ;(closeRef.current as any)?.close()
          }}
        >
          <Cell title={translated.closeLeft} roundRadius={0} />
        </Swipe>
        <h2>{translated.title2}</h2>
        <Swipe
          rightAction={
            <Button shape="square" type="danger">
              {translated.del}
            </Button>
          }
          disabled
        >
          <Cell title={translated.disabled} roundRadius={0} />
        </Swipe>
        <h2>{translated.title3}</h2>
        <Swipe
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
              <Button shape="square" type="info">
                {translated.collect}
              </Button>
            </>
          }
          onActionClick={handleChange}
          onOpen={({ name, position }) => {
            // Toast.text(translated.open)
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
              <Button shape="square" type="danger">
                {translated.cart}
              </Button>
            </>
          }
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
          onClosed={() => {
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
