import React, { useRef } from 'react'
import { SwipeInstance, Swipe } from './swipe'
import { useConfig } from '@/packages/configprovider'
import Cell from '@/packages/cell'
import Button from '@/packages/button'
import Toast from '@/packages/toast'
import Dialog from '@/packages/dialog'
import InputNumber from '@/packages/inputnumber'

const SwipeDemo = () => {
  const { locale } = useConfig()

  const refDom = useRef<SwipeInstance>(null)
  const handleChange = () => {
    Toast.text(locale.swipe.click)
  }
  const beforeClose = (postion: string) => {
    Dialog.alert({
      title: locale.swipe.tips,
      content:
        postion === 'left' ? locale.swipe.chooseTips : locale.swipe.deleteTips,
      onOk: () => {
        refDom.current && refDom.current.close()
      },
    })
  }

  return (
    <>
      <div className="demo">
        <h2>{locale.swipe.title1}</h2>
        <Swipe
          rightAction={
            <Button type="primary" shape="square">
              {locale.swipe.del}
            </Button>
          }
        >
          <Cell title={locale.swipe.leftDel} roundRadius={0} />
        </Swipe>
        <h2>{locale.swipe.title2}</h2>
        <Swipe
          rightAction={
            <Button shape="square" type="danger">
              {locale.swipe.del}
            </Button>
          }
          disabled
        >
          <Cell title={locale.swipe.disabled} roundRadius={0} />
        </Swipe>
        <h2>{locale.swipe.title3}</h2>
        <Swipe
          leftAction={
            <Button shape="square" type="success">
              {locale.swipe.choose}
            </Button>
          }
          rightAction={
            <>
              <Button shape="square" type="danger">
                {locale.swipe.del}
              </Button>
              <Button shape="square" type="info">
                {locale.swipe.collect}
              </Button>
            </>
          }
          onActionClick={handleChange}
          onOpen={() => Toast.text(locale.swipe.open)}
          onClose={() => Toast.text(locale.swipe.close)}
        >
          <Cell title={locale.swipe.event} />
        </Swipe>
        <h2>{locale.swipe.title4}</h2>
        <Swipe
          ref={refDom}
          beforeClose={beforeClose}
          leftAction={
            <Button shape="square" type="success">
              {locale.swipe.choose}
            </Button>
          }
          rightAction={
            <>
              <Button shape="square" type="danger">
                {locale.swipe.del}
              </Button>
            </>
          }
        >
          <Cell title={locale.swipe.event} />
        </Swipe>
        <h2>{locale.swipe.title5}</h2>
        <Swipe
          rightAction={
            <>
              <Button shape="square" type="danger">
                {locale.swipe.cart}
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
              <span>{locale.swipe.goods}</span>
              <InputNumber style={{ float: 'right' }} />
            </div>
          </Cell>
        </Swipe>
      </div>
    </>
  )
}

export default SwipeDemo
