import React, { useRef } from 'react'
import { Del } from '@nutui/icons-react'
import { SwipeInstance, Swipe } from './swipe'
import { useTranslate } from '../../sites/assets/locale'
import Cell from '@/packages/cell'
import Button from '@/packages/button'
import Toast from '@/packages/toast'
import Dialog from '@/packages/dialog'
import InputNumber from '@/packages/inputnumber'

type TSwipeDemo = {
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
  title6: string
  title8: string
  openOrClose: string
  title7: string
  click: string
  sure: string
  del: string
  alwaysbuy: string
  liked: string
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
      title8: '卡片场景',
      openOrClose: '点击下方按钮打开或关闭',
      title7: '点击关闭',
      click: '点击',
      sure: '确定',
      del: '删除',
      alwaysbuy: '设置常购',
      liked: '看相似',
      choose: '选择',
      event: '事件',
      goods: '商品',
      collect: '移入收藏',
      open: '打开',
      close: '关闭',
      closeLeft: '点击右侧按钮关闭',
      tips: '提示',
      cart: '加入购物车',
      leftDel: '左滑',
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
      title8: '卡片場景',
      openOrClose: '點擊下方按鈕打開或關閉',
      title7: '点击关闭',
      click: '點擊',
      sure: '確定',
      del: '刪除',
      alwaysbuy: '设置常购',
      liked: '看相似',
      choose: '選擇',
      event: '事件',
      goods: '商品',
      collect: '收藏',
      open: '打開',
      close: '關閉',
      closeLeft: '點擊右側按鈕關閉',
      tips: '提示',
      cart: '加入購物車',
      leftDel: '左滑',
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
      title8: 'Card mode',
      openOrClose: 'Click the button below',
      title7: 'Click to close',
      click: 'click',
      sure: 'ok',
      del: 'delete',
      alwaysbuy: 'always buy',
      liked: 'liked',
      choose: 'select',
      event: 'event',
      goods: 'goods',
      collect: 'collect',
      open: 'open',
      close: 'close',
      closeLeft: 'Click the right button to close',
      tips: 'tips',
      cart: 'add to shopping cart',
      leftDel: 'left slide',
      disabled: 'Disable sliding',
      chooseTips: 'are you sure to choose?',
      deleteTips: 'are you sure to delete?',
    },
  })

  const refDom = useRef<SwipeInstance>(null)
  const handleChange = () => {
    Toast.show(translated.click)
  }
  const beforeClose = (postion: string) => {
    Dialog.alert({
      title: translated.tips,
      content:
        postion === 'left' ? translated.chooseTips : translated.deleteTips,
      onConfirm: () => {
        refDom.current && refDom.current.close()
      },
    })
  }

  const handleClose = () => {
    Toast.show('close')
  }

  const closeRef = useRef(null)
  const openRef = useRef(null)
  const divNode = (text: string, style: any, hasIcon: boolean = true) => {
    return (
      <div
        style={{
          width: '60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          ...style,
        }}
      >
        {hasIcon ? <Del style={{ marginBottom: '8px' }} /> : null}
        <>{text}</>
      </div>
    )
  }
  return (
    <>
      <div className="demo">
        <h2>{translated.title1}</h2>
        <Swipe
          rightAction={
            <Button type="primary" shape="square">
              {translated.del}
            </Button>
          }
          onTouchStart={(event) => console.log('touch start', event)}
          onTouchMove={(event) => console.log('touch Move', event)}
          onTouchEnd={(event) => console.log('touch End', event)}
        >
          <Cell title={translated.leftDel} radius={0} />
        </Swipe>
        <h2>{translated.title8}</h2>
        <Swipe
          style={{ height: '104px' }}
          rightAction={
            <div
              style={{
                height: 'inherit',
                width: '240px',
                display: 'flex',
                fontSize: '12px',
              }}
            >
              <>
                {divNode(translated.alwaysbuy, {
                  background: '#F8F8F8',
                  color: '#1A1A1A',
                })}
                {divNode(translated.collect, {
                  background: '#ffcc00',
                  color: '#FFF',
                })}
                {divNode(translated.liked, {
                  background: '#FF860D',
                  color: '#FFF',
                })}
                {divNode(translated.del, {
                  background: '#FA2C19',
                  color: '#FFF',
                })}
              </>
            </div>
          }
        >
          <Cell title={`${translated.leftDel}+Icon`} radius={0} />
        </Swipe>
        <br />

        <Swipe
          style={{ height: '104px' }}
          rightAction={
            <div
              style={{
                height: 'inherit',
                width: '240px',
                display: 'flex',
                fontSize: '12px',
              }}
            >
              <>
                {divNode(
                  translated.alwaysbuy,
                  {
                    background: '#F8F8F8',
                    color: '#1A1A1A',
                  },
                  false
                )}
                {divNode(
                  translated.collect,
                  {
                    background: '#ffcc00',
                    color: '#FFF',
                  },
                  false
                )}
                {divNode(
                  translated.liked,
                  {
                    background: '#FF860D',
                    color: '#FFF',
                  },
                  false
                )}
                {divNode(
                  translated.del,
                  {
                    background: '#FA2C19',
                    color: '#FFF',
                  },
                  false
                )}
              </>
            </div>
          }
        >
          <Cell title={translated.leftDel} radius={0} />
        </Swipe>
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
        <div style={{ display: 'flex' }}>
          <Button
            style={{ marginInlineEnd: '10px' }}
            type="primary"
            size="small"
            onClick={() => (openRef.current as any)?.open()}
          >
            {translated.open}
          </Button>
          <Button
            size="small"
            onClick={() => (openRef.current as any)?.close()}
          >
            {translated.close}
          </Button>
        </div>
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
              <Button shape="square" type="primary">
                {translated.collect}
              </Button>
            </>
          }
          onActionClick={handleChange}
          onOpen={({ name, position }) => {
            Toast.show(translated.open)
          }}
          onClose={handleClose}
        >
          <Cell title={translated.event} radius={0} />
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
          <Cell title={translated.event} radius={0} />
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
      </div>
    </>
  )
}

export default SwipeDemo
