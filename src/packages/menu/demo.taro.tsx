import React, { useEffect, useState } from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Menu, MenuItem, Button } from '@/packages/nutui.react.taro'

const MenuDemo = () => {
  const style = `
  .nut-overflow-hidden .demo.full{
    overflow: hidden !important;
  }`
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基本用法',
      customMenuContent: '自定义菜单内容',
      customContent: '自定义内容',
      screen: '筛选',
      confirm: '确认',
      twoColsInOneLine: '一行两列',
      customActiveColor: '自定义选中态颜色',
      customIcons: '自定义图标',
      expandDirection: '向上展开',
      disableMenu: '禁用菜单',
      allProducts: '全部商品',
      newProducts: '新款商品',
      activityProducts: '活动商品',
      defaultSort: '默认排序',
      praiseSort: '好评排序',
      salesVolumeSort: '销量排序',
      product1: '家庭清洁/纸品',
      product2: '个人护理',
      product3: '美妆护肤',
      product4: '食品饮料',
      product5: '家用电器',
      product6: '母婴',
      product7: '数码',
      product8: '电脑、办公',
      product9: '运动户外',
      product10: '厨具',
      product11: '医疗保健',
      product12: '酒类',
      product13: '生鲜',
      product14: '家具',
      product15: '传统滋补',
      product16: '汽车用品',
      product17: '家居日用',
    },
    'en-US': {
      basic: 'Basic Usage',
      customMenuContent: 'Custom Menu Content',
      customContent: 'Custom content',
      screen: 'Screen',
      confirm: 'Confirm',
      twoColsInOneLine: 'Two Cols In One Line',
      customActiveColor: 'Custom Active Color',
      customIcons: 'Custom Icons',
      expandDirection: 'Expand Direction',
      disableMenu: 'Disable Menu',
      allProducts: 'All Products',
      newProducts: 'New Products',
      activityProducts: 'Activity Products',
      defaultSort: 'Default Sort',
      praiseSort: 'Praise Sort',
      salesVolumeSort: 'Sales Volume Sort',
      product1: 'Product1',
      product2: 'Product2',
      product3: 'Product3',
      product4: 'Product4',
      product5: 'Product5',
      product6: 'Product6',
      product7: 'Product7',
      product8: 'Product8',
      product9: 'Product9',
      product10: 'Product10',
      product11: 'Product11',
      product12: 'Product12',
      product13: 'Product13',
      product14: 'Product14',
      product15: 'Product15',
      product16: 'Product16',
      product17: 'Product17',
    },
  })

  const [options, setOptions] = useState<any>([])
  const [options1, setOptions1] = useState<any>([])

  useEffect(() => {
    setOptions([
      { text: translated.allProducts, value: 0 },
      { text: translated.newProducts, value: 1 },
      { text: translated.activityProducts, value: 2 },
    ])
    setOptions1([
      { text: translated.defaultSort, value: 'a' },
      { text: translated.praiseSort, value: 'b' },
      { text: translated.salesVolumeSort, value: 'c' },
    ])
  }, [translated])

  return (
    <>
      <style>{style}</style>
      <div className="demo full">
        <h2>{translated.basic}</h2>
        <Menu closeOnClickOverlay={false} lockScroll={false}>
          <MenuItem
            options={options}
            value={0}
            onChange={(val) => {
              console.log(val)
            }}
          />
          <MenuItem options={options1} value="a" />
        </Menu>
        <h2>{translated.customMenuContent}</h2>
        <Menu>
          <MenuItem options={options} value={0} />
          <MenuItem title={translated.screen}>
            <div>{translated.customContent}</div>
            <Button>{translated.confirm}</Button>
          </MenuItem>
        </Menu>
        <h2>{translated.twoColsInOneLine}</h2>
        <Menu>
          <MenuItem options={options} value={0} columns={2} />
        </Menu>
        <h2>{translated.customActiveColor}</h2>
        <Menu activeColor="green">
          <MenuItem options={options} value={0} />
          <MenuItem options={options1} value="a" />
        </Menu>
        <h2>{translated.customIcons}</h2>
        <Menu titleIcon="joy-smile">
          <MenuItem options={options} value={0} optionsIcon="success" />
          <MenuItem options={options1} value="a" />
        </Menu>
        <h2>{translated.expandDirection}</h2>
        <Menu>
          <MenuItem options={options} value={0} direction="up" />
          <MenuItem options={options1} value="a" direction="up" />
        </Menu>
        <h2>{translated.disableMenu}</h2>
        <Menu>
          <MenuItem options={options} value={0} disabled />
          <MenuItem options={options1} value="a" disabled />
        </Menu>
      </div>
    </>
  )
}

export default MenuDemo
