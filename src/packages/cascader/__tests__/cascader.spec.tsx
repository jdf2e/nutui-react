import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Cascader } from '../cascader'

import { CascaderOption } from '../types'
import Tree from '../tree'
import { formatTree, convertListToOptions } from '../helper'

const later = (t = 0) => new Promise((r) => setTimeout(r, t))
const mockOptions = [
  {
    value: '浙江',
    text: '浙江',
    children: [
      {
        value: '杭州',
        text: '杭州',
        disabled: true,
        children: [
          { value: '西湖区', text: '西湖区' },
          { value: '余杭区', text: '余杭区' },
        ],
      },
      {
        value: '温州',
        text: '温州',
        children: [
          { value: '鹿城区', text: '鹿城区' },
          { value: '瓯海区', text: '瓯海区' },
        ],
      },
    ],
  },
  {
    value: '湖南',
    text: '湖南',
    disabled: true,
  },
  {
    value: '福建',
    text: '福建',
    children: [
      {
        value: '福州',
        text: '福州',
        children: [
          { value: '鼓楼区', text: '鼓楼区' },
          { value: '台江区', text: '台江区' },
        ],
      },
    ],
  },
]
const mockKeyConfigOptions = [
  {
    name: '浙江',
    items: [
      {
        name: '杭州',
        disabled: true,
        items: [{ name: '西湖区' }, { name: '余杭区' }],
      },
      {
        name: '温州',
        items: [{ name: '鹿城区' }, { name: '瓯海区' }],
      },
    ],
  },
  {
    name: '湖南',
    disabled: true,
  },
  {
    name: '福建',
    items: [
      {
        name: '福州',
        items: [{ name: '鼓楼区' }, { name: '台江区' }],
      },
    ],
  },
]
const mockConvertOptions = [
  { value: '北京', text: '北京', nodeId: 1, nodePid: 0, sort: 2 },
  { value: '朝阳区', text: '朝阳区', nodeId: 11, nodePid: 1 },
  { value: '亦庄', text: '亦庄', nodeId: 111, nodePid: 11 },
  { value: '广东省', text: '广东省', nodeId: 2, nodePid: 0, sort: 1 },
  { value: '广州市', text: '广州市', nodeId: 21, nodePid: 2 },
]

describe('helpers', () => {
  test('formatTree', () => {
    const fromatedTree = formatTree(mockKeyConfigOptions, null, {
      children: 'items',
      text: 'name',
      value: 'name',
    })

    expect(fromatedTree).toMatchObject(mockOptions)
  })

  test('convertListToOptions', () => {
    const convertList = convertListToOptions(mockConvertOptions, {
      topId: 0,
      idKey: 'nodeId',
      pidKey: 'nodePid',
      sortKey: '',
    })
    expect(convertList).toMatchObject([
      {
        nodePid: 0,
        nodeId: 1,
        text: '北京',
        value: '北京',
        sort: 2,
        children: [
          {
            nodePid: 1,
            nodeId: 11,
            text: '朝阳区',
            value: '朝阳区',
            children: [
              {
                nodePid: 11,
                nodeId: 111,
                text: '亦庄',
                value: '亦庄',
                children: [],
              },
            ],
          },
        ],
      },
      {
        nodePid: 0,
        nodeId: 2,
        text: '广东省',
        value: '广东省',
        children: [
          {
            nodePid: 2,
            nodeId: 21,
            text: '广州市',
            value: '广州市',
          },
        ],
      },
    ])
  })
})

describe('Tree', () => {
  test('tree', () => {
    const tree = new Tree([
      {
        text: '浙江',
        value: '浙江',
      },
      {
        text: '福建',
        value: '福建',
      },
    ])
    expect(tree.nodes).toMatchObject([
      {
        text: '浙江',
        value: '浙江',
      },
      {
        text: '福建',
        value: '福建',
      },
    ])
  })

  test('tree with config', () => {
    const tree = new Tree(mockKeyConfigOptions, {
      value: 'name',
      text: 'name',
      children: 'items',
    })
    expect(tree.nodes).toMatchObject(mockOptions)
  })

  const tree = new Tree(mockOptions)
  test('getPathNodesByValue', () => {
    const pathNodes = tree.getPathNodesByValue(['浙江', '杭州', '西湖区'])
    const mappedPathNodes = pathNodes.map(({ text, value }) => ({
      text,
      value,
    }))

    expect(mappedPathNodes).toMatchObject([
      { text: '浙江', value: '浙江' },
      { text: '杭州', value: '杭州' },
      { text: '西湖区', value: '西湖区' },
    ])
  })

  test('isLeaf', () => {
    const node = tree.getNodeByValue('西湖区')
    let isLeaf = tree.isLeaf(node as CascaderOption, false)
    expect(isLeaf).toBeTruthy()
    isLeaf = tree.isLeaf(node as CascaderOption, true)
    expect(isLeaf).toBeFalsy()
  })

  test('hasChildren', () => {
    let node = tree.getNodeByValue('西湖区')

    let hasChildren = tree.hasChildren(node as CascaderOption, false)
    expect(hasChildren).toBeFalsy()

    hasChildren = tree.hasChildren(node as CascaderOption, true)
    expect(hasChildren).toBeFalsy()

    node = tree.getNodeByValue('杭州')

    hasChildren = tree.hasChildren(node as CascaderOption, false)
    expect(hasChildren).toBeTruthy()

    hasChildren = tree.hasChildren(node as CascaderOption, true)
    expect(hasChildren).toBeTruthy()
  })

  test('updateChildren', () => {
    let node = tree.getNodeByValue('福建')
    expect(node).toBeTruthy()

    tree.updateChildren(
      [{ text: '福州', value: '福州' }],
      node as CascaderOption
    )
    node = tree.getNodeByValue('福州') as CascaderOption
    expect(node).toBeTruthy()
    expect(node.value).toBe('福州')

    tree.updateChildren(
      [{ text: '鼓楼区', value: '鼓楼区' }],
      node as CascaderOption
    )
    node = tree.getNodeByValue('鼓楼区') as CascaderOption
    expect(node).toBeTruthy()
    expect(node.value).toBe('鼓楼区')
  })

  // test('updateChildren with CascaderConfig', () => {
  //   const tree = new Tree(
  //     [
  //       {
  //         name: '福建',
  //         items: [{ name: '福州' }],
  //       },
  //     ],
  //     {
  //       value: 'name',
  //       text: 'name',
  //       children: 'items',
  //     }
  //   )
  //   expect(tree.nodes).toMatchObject([
  //     {
  //       text: '福建',
  //       value: '福建',
  //       children: [{ text: '福州', value: '福州' }],
  //     },
  //   ])

  //   let node = tree.getNodeByValue('福州') as CascaderOption
  //   expect(node).toBeTruthy()
  //   tree.updateChildren([{ name: '鼓楼区' }], node)
  //   node = tree.getNodeByValue('鼓楼区') as CascaderOption
  //   expect(node).toBeTruthy()
  //   expect(node).toMatchObject({
  //     text: '鼓楼区',
  //     value: '鼓楼区',
  //   })
  // })
})

describe('Cascader', () => {
  it('options', async () => {
    const { container } = render(
      <Cascader value={['福建', '福州', '鼓楼区']} options={mockOptions} />
    )
    expect(container).toMatchSnapshot()
  })

  it('options with valueKey/textKey/childrenKey', async () => {
    const { container } = render(
      <Cascader
        value={['福建', '福州', '鼓楼区']}
        options={mockKeyConfigOptions}
        optionKey={{
          valueKey: 'name',
          textKey: 'name',
          childrenKey: 'items',
        }}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('options with format', async () => {
    const { container } = render(
      <Cascader
        value={['广东省', '广州市']}
        options={mockConvertOptions}
        format={{
          topId: 0,
          idKey: 'nodeId',
          pidKey: 'nodePid',
          sortKey: 'sort',
        }}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('visible false', async () => {
    const { container } = render(
      <Cascader visible={false} options={mockOptions} />
    )
    expect(container.querySelector('.nut-popup')).toBeNull()
  })

  it('visible true', async () => {
    const { container } = render(
      <Cascader
        visible
        value={['福建', '福州', '鼓楼区']}
        options={mockOptions}
      />
    )
    expect(container.querySelector('.nut-popup')).toBe
    expect(container).toMatchSnapshot()
    // 点击叶子节点时关闭popup
    const el = container.querySelectorAll('.nut-cascader-pane')[2].childNodes[0]
    fireEvent.click(el)
    // expect(
    //   container.querySelectorAll('.nut-cascader-pane')[2].childNodes[0]
    // ).toEqual(
    //   '<div class="active nut-cascader-item"><div class="nut-cascader-item__title">鼓楼区</div><i class="nut-cascader-item__icon-check nut-icon nutui-iconfont nut-icon-checklist"/></div>'
    // )
  })

  it('value', async () => {
    const { container } = render(<Cascader options={mockOptions} />)
    expect(
      container.querySelectorAll('.nut-cascader-item[aria-checked="true"]')
        .length
    ).toBe(0)
    expect(container).toMatchSnapshot()
  })

  it('select', async () => {
    const change = jest.fn()
    const pathChange = jest.fn()
    const { container } = render(
      <Cascader
        visible
        value={['福建', '福州', '鼓楼区']}
        options={mockOptions}
        onChange={change}
        onPathChange={pathChange}
      />
    )
    // 模拟点击
    const pane = container.querySelectorAll('.nut-cascader-pane')[2]
    fireEvent.click(pane)
    const item = pane.childNodes[0]
    // console.log('item', item)
    fireEvent.click(item)
    // let pathChange: any = container.emitted().pathChange[0];
    expect(pathChange).toBeCalled()
    // ...
  })

  // it('value with lazy', async () => {
  //   const { container } = render(
  //     <Cascader
  //       visible
  //       value={['A0', 'A12', 'A21']}
  //       lazy
  //       onLoad={(node: any, resolve: (children: any) => void) => {
  //         setTimeout(() => {
  //           if (node.root) {
  //             resolve([
  //               { value: 'A0', text: 'A0' },
  //               { value: 'B0', text: 'B0' },
  //               { value: 'C0', text: 'C0' },
  //             ])
  //           } else {
  //             const { value, level } = node
  //             const text = value.substring(0, 1)
  //             const value1 = `${text}${level + 1}1`
  //             const value2 = `${text}${level + 1}2`
  //             resolve([
  //               { value: value1, text: value1, leaf: level >= 1 },
  //               { value: value2, text: value2, leaf: level >= 1 },
  //             ])
  //           }
  //         }, 50)
  //       }}
  //     />
  //   )
  //   await later(160)
  //   expect(container).toMatchSnapshot()
  // })

  it('select with lazy', async () => {
    const { container } = render(
      <Cascader
        lazy
        onLoad={(node: any, resolve: (children: any) => void) => {
          setTimeout(() => {
            setTimeout(() => {
              // root表示第一层数据
              if (node.root) {
                resolve([
                  { value: 'A0', text: 'A0' },
                  { value: 'B0', text: 'B0' },
                ])
              } else {
                const { value, level } = node
                const text = value.substring(0, 1)
                const value1 = `${text}${level + 1}1`
                const value2 = `${text}${level + 1}2`
                resolve([
                  { value: value1, text: value1, leaf: level >= 1 },
                  { value: value2, text: value2, leaf: level >= 1 },
                ])
              }
            }, 50)
          }, 50)
        }}
      />
    )

    expect(container).toMatchSnapshot()
    await later(160)
    expect(container).toMatchSnapshot()
    // ...
  })

  it('change tab', async () => {
    const change = jest.fn()
    const pathChange = jest.fn()
    const { container } = render(
      <Cascader
        visible
        value={['福建', '福州', '鼓楼区']}
        options={mockOptions}
        onChange={change}
        onPathChange={pathChange}
      />
    )

    expect(container).toMatchSnapshot()

    expect(container.querySelector('.nut-popup')).toBe

    const tabPane = container.querySelectorAll('.nut-tabs__titles-item')[0]
    fireEvent.click(tabPane)
    expect(container).toMatchSnapshot()
  })
})
