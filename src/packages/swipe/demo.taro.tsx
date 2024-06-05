import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
// import { Del } from '@nutui/icons-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'
import Demo8 from './demos/taro/demo8'
// import Demo9 from './demos/taro/demo9'

const SwipeDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      base: '基础用法',
      card: '卡片场景',
      catchMove: '阻止父元素滚动',
      byRef: '通过实例方法控制',
      close: '点击关闭',
      disabled: '禁用滑动',
      event: '事件监听',
      async: '异步控制',
      custom: '自定义内容',
    },
    'zh-TW': {
      base: '基礎用法',
      card: '卡片場景',
      catchMove: '阻止父元素滾動',
      byRef: '通過實例方法控制',
      close: '點擊關閉',
      disabled: '禁用滑動',
      event: '事件監聽',
      async: '異步控制',
      custom: '自定義內容',
    },
    'en-US': {
      base: 'Basic Usage',
      card: 'Card Scenario',
      catchMove: 'Prevent Parent Element Scrolling',
      byRef: 'Control via Instance Methods',
      close: 'Click to Close',
      disabled: 'Disable Sliding',
      event: 'Event Listener',
      async: 'Asynchronous Control',
      custom: 'Custom Content',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.base}</View>
        <Demo1 />
        <View className="h2">{translated.card}</View>
        <Demo2 />
        <View className="h2">{translated.catchMove}</View>
        <Demo3 />
        <View className="h2">{translated.byRef}</View>
        <Demo4 />
        <View className="h2">{translated.close}</View>
        <Demo5 />
        <View className="h2">{translated.disabled}</View>
        <Demo6 />
        <View className="h2">{translated.event}</View>
        <Demo7 />
        <View className="h2">{translated.async}</View>
        <Demo8 />
        {/* <View className="h2">{translated.custom}</View> */}
        {/* <Demo9 /> */}

        {/* <View>{translated.title9}</View> */}
        {/* <Swipe */}
        {/*  style={{ */}
        {/*    height: pxTransform(104), */}
        {/*  }} */}
        {/*  rightAction={ */}
        {/*    <div */}
        {/*      style={{ */}
        {/*        width: pxTransform(240), */}
        {/*        height: pxTransform(104), */}
        {/*        display: 'flex', */}
        {/*        flexDirection: 'row', */}
        {/*        fontSize: pxTransform(12), */}
        {/*        alignSelf: 'stretch', */}
        {/*        alignItems: 'stretch', */}
        {/*      }} */}
        {/*    > */}
        {/*      <> */}
        {/*        {divNode(translated.alwaysbuy, { */}
        {/*          background: '#F7F8FC', */}
        {/*          color: '#1A1A1A', */}
        {/*        })} */}
        {/*        {divNode(translated.collect, { */}
        {/*          background: '#ffcc00', */}
        {/*          color: '#FFF', */}
        {/*        })} */}
        {/*        {divNode(translated.liked, { */}
        {/*          background: '#FF860D', */}
        {/*          color: '#FFF', */}
        {/*        })} */}
        {/*        {divNode(translated.del, { */}
        {/*          background: '#FF0F23', */}
        {/*          color: '#FFF', */}
        {/*        })} */}
        {/*      </> */}
        {/*    </div> */}
        {/*  } */}
        {/* > */}
        {/*  <Cell title={translated.leftDel} radius={0} /> */}
        {/* </Swipe> */}

        {/* <br style={{ display: 'block', height: '10px' }} /> */}

        {/* <Swipe */}
        {/*  style={{ */}
        {/*    height: pxTransform(104), */}
        {/*  }} */}
        {/*  rightAction={ */}
        {/*    <div */}
        {/*      style={{ */}
        {/*        width: pxTransform(240), */}
        {/*        height: pxTransform(104), */}
        {/*        display: 'flex', */}
        {/*        flexDirection: 'row', */}
        {/*        fontSize: pxTransform(12), */}
        {/*        alignSelf: 'stretch', */}
        {/*        alignItems: 'stretch', */}
        {/*      }} */}
        {/*    > */}
        {/*      <> */}
        {/*        {divNode( */}
        {/*          translated.alwaysbuy, */}
        {/*          { */}
        {/*            background: '#F7F8FC', */}
        {/*            color: '#1A1A1A', */}
        {/*          }, */}
        {/*          false */}
        {/*        )} */}
        {/*        {divNode( */}
        {/*          translated.collect, */}
        {/*          { */}
        {/*            background: '#ffcc00', */}
        {/*            color: '#FFF', */}
        {/*          }, */}
        {/*          false */}
        {/*        )} */}
        {/*        {divNode( */}
        {/*          translated.liked, */}
        {/*          { */}
        {/*            background: '#FF860D', */}
        {/*            color: '#FFF', */}
        {/*          }, */}
        {/*          false */}
        {/*        )} */}
        {/*        {divNode( */}
        {/*          translated.del, */}
        {/*          { */}
        {/*            background: '#FF0F23', */}
        {/*            color: '#FFF', */}
        {/*          }, */}
        {/*          false */}
        {/*        )} */}
        {/*      </> */}
        {/*    </div> */}
        {/*  } */}
        {/* > */}
        {/*  <Cell */}
        {/*    title={translated.leftDel} */}
        {/*    radius={0} */}
        {/*    style={{ margin: 0, alignSelf: 'stretch' }} */}
        {/*  /> */}
        {/* </Swipe> */}

        {/* <View>{translated.title8}</View> */}
        {/* <View catchMove={shouldCatchMove}> */}
        {/*  <Swipe */}
        {/*    rightAction={ */}
        {/*      <Button */}
        {/*        type="primary" */}
        {/*        shape="square" */}
        {/*        style={{ alignSelf: 'stretch' }} */}
        {/*      > */}
        {/*        {translated.del} */}
        {/*      </Button> */}
        {/*    } */}
        {/*    onTouchEnd={(e) => { */}
        {/*      setShouldCatchMove(false) */}
        {/*    }} */}
        {/*    onTouchMove={(e) => { */}
        {/*      setShouldCatchMove(true) */}
        {/*    }} */}
        {/*  > */}
        {/*    <Cell */}
        {/*      title={translated.leftDel} */}
        {/*      radius={0} */}
        {/*      style={{ margin: 0, alignSelf: 'stretch' }} */}
        {/*    /> */}
        {/*  </Swipe> */}
        {/* </View> */}

        {/* <View>{translated.title6}</View> */}
        {/* <Swipe */}
        {/*  ref={openRef} */}
        {/*  rightAction={ */}
        {/*    <Button */}
        {/*      shape="square" */}
        {/*      type="primary" */}
        {/*      style={{ alignSelf: 'stretch' }} */}
        {/*    > */}
        {/*      {translated.del} */}
        {/*    </Button> */}
        {/*  } */}
        {/*  style={{ marginBottom: '10px' }} */}
        {/* > */}
        {/*  <Cell */}
        {/*    title={translated.openOrClose} */}
        {/*    radius={0} */}
        {/*    style={{ margin: 0, alignSelf: 'stretch' }} */}
        {/*  /> */}
        {/* </Swipe> */}
        {/* <div style={{ display: 'flex' }}> */}
        {/*  <Button */}
        {/*    style={{ marginInlineEnd: '10px', alignSelf: 'stretch' }} */}
        {/*    type="primary" */}
        {/*    size="small" */}
        {/*    onClick={() => (openRef.current as any)?.open()} */}
        {/*  > */}
        {/*    {translated.open} */}
        {/*  </Button> */}
        {/*  <Button */}
        {/*    size="small" */}
        {/*    style={{ alignSelf: 'stretch' }} */}
        {/*    onClick={() => (openRef.current as any)?.close()} */}
        {/*  > */}
        {/*    {translated.close} */}
        {/*  </Button> */}
        {/* </div> */}
        {/* <View>{translated.title7}</View> */}
        {/* <Swipe */}
        {/*  ref={closeRef} */}
        {/*  rightAction={ */}
        {/*    <Button */}
        {/*      shape="square" */}
        {/*      type="primary" */}
        {/*      style={{ alignSelf: 'stretch' }} */}
        {/*    > */}
        {/*      {translated.del} */}
        {/*    </Button> */}
        {/*  } */}
        {/*  onActionClick={() => { */}
        {/*    ;(closeRef.current as any)?.close() */}
        {/*  }} */}
        {/* > */}
        {/*  <Cell */}
        {/*    title={translated.closeLeft} */}
        {/*    radius={0} */}
        {/*    style={{ margin: 0, alignSelf: 'stretch' }} */}
        {/*  /> */}
        {/* </Swipe> */}
        {/* <View>{translated.title2}</View> */}
        {/* <Swipe */}
        {/*  rightAction={ */}
        {/*    <Button */}
        {/*      shape="square" */}
        {/*      type="primary" */}
        {/*      style={{ alignSelf: 'stretch' }} */}
        {/*    > */}
        {/*      {translated.del} */}
        {/*    </Button> */}
        {/*  } */}
        {/*  disabled */}
        {/* > */}
        {/*  <Cell */}
        {/*    title={translated.disabled} */}
        {/*    radius={0} */}
        {/*    style={{ margin: 0, alignSelf: 'stretch' }} */}
        {/*  /> */}
        {/* </Swipe> */}
        {/* <View>{translated.title3}</View> */}
        {/* <Swipe */}
        {/*  leftAction={ */}
        {/*    <Button */}
        {/*      shape="square" */}
        {/*      type="primary" */}
        {/*      style={{ alignSelf: 'stretch' }} */}
        {/*    > */}
        {/*      {translated.choose} */}
        {/*    </Button> */}
        {/*  } */}
        {/*  rightAction={ */}
        {/*    <> */}
        {/*      <Button */}
        {/*        shape="square" */}
        {/*        type="primary" */}
        {/*        style={{ alignSelf: 'stretch' }} */}
        {/*      > */}
        {/*        {translated.del} */}
        {/*      </Button> */}
        {/*      <Button */}
        {/*        shape="square" */}
        {/*        type="primary" */}
        {/*        style={{ alignSelf: 'stretch' }} */}
        {/*      > */}
        {/*        {translated.collect} */}
        {/*      </Button> */}
        {/*    </> */}
        {/*  } */}
        {/*  onActionClick={handleChange} */}
        {/*  onOpen={({ name, position }) => { */}
        {/*    // Toast.show(translated.open) */}
        {/*    toastShow(translated.open) */}
        {/*  }} */}
        {/*  onClose={handleClose} */}
        {/* > */}
        {/*  <Cell */}
        {/*    title={translated.event} */}
        {/*    style={{ margin: 0, alignSelf: 'stretch' }} */}
        {/*  /> */}
        {/* </Swipe> */}
        {/* <View>{translated.title4}</View> */}
        {/* <Swipe */}
        {/*  ref={refDom} */}
        {/*  beforeClose={beforeClose} */}
        {/*  leftAction={ */}
        {/*    <Button */}
        {/*      shape="square" */}
        {/*      type="success" */}
        {/*      style={{ alignSelf: 'stretch' }} */}
        {/*    > */}
        {/*      {translated.choose} */}
        {/*    </Button> */}
        {/*  } */}
        {/*  rightAction={ */}
        {/*    <> */}
        {/*      <Button */}
        {/*        shape="square" */}
        {/*        type="danger" */}
        {/*        style={{ alignSelf: 'stretch' }} */}
        {/*      > */}
        {/*        {translated.del} */}
        {/*      </Button> */}
        {/*    </> */}
        {/*  } */}
        {/* > */}
        {/*  <Cell */}
        {/*    title={translated.event} */}
        {/*    style={{ background: '#f0f0f0', margin: 0, alignSelf: 'stretch' }} */}
        {/*  /> */}
        {/* </Swipe> */}
        {/* <View>{translated.title5}</View> */}
        {/* <Swipe */}
        {/*  rightAction={ */}
        {/*    <> */}
        {/*      <Button */}
        {/*        shape="square" */}
        {/*        type="primary" */}
        {/*        style={{ alignSelf: 'stretch' }} */}
        {/*      > */}
        {/*        {translated.cart} */}
        {/*      </Button> */}
        {/*    </> */}
        {/*  } */}
        {/*  style={{ marginBottom: '30px' }} */}
        {/* > */}
        {/*  <Cell */}
        {/*    style={{ */}
        {/*      margin: 0, */}
        {/*      alignSelf: 'stretch', */}
        {/*    }} */}
        {/*  > */}
        {/*    <div */}
        {/*      style={{ */}
        {/*        display: 'flex', */}
        {/*        justifyContent: 'space-between', */}
        {/*        width: '100%', */}
        {/*      }} */}
        {/*    > */}
        {/*      <span>{translated.goods}</span> */}
        {/*      <InputNumber style={{ float: 'right' }} /> */}
        {/*    </div> */}
        {/*  </Cell> */}
        {/* </Swipe> */}
        {/* <Toast */}
        {/*  type="text" */}
        {/*  visible={show} */}
        {/*  content={toastMsg} */}
        {/*  onClose={() => { */}
        {/*    SetShow(false) */}
        {/*  }} */}
        {/* /> */}
        {/* <Dialog */}
        {/*  visible={showDialog} */}
        {/*  title={translated.tips} */}
        {/*  onClose={() => { */}
        {/*    refDom.current && refDom.current.close() */}
        {/*    setShowDialog(false) */}
        {/*  }} */}
        {/* > */}
        {/*  {pRef.current === 'left' */}
        {/*    ? translated.chooseTips */}
        {/*    : translated.deleteTips} */}
        {/* </Dialog> */}
      </ScrollView>
    </>
  )
}

export default SwipeDemo
