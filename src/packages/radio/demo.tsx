import React, { useState } from 'react'
import { Radio } from './radio'
import Cell from '@/packages/cell'
import CellGroup from '@/packages/cellgroup'

const RadioDemo = () => {
  const [checked1, setChecked1] = useState(true)

  // setTimeout(() => {
  //   console.log('xxx')
  //   setChecked1(false)
  // }, 3000)
  return (
    <>
      <div className="demo full">
        <CellGroup title="基本用法">
          <Cell>
            <Radio checked={checked1} value="1">
              选项1
            </Radio>
          </Cell>
        </CellGroup>
        {/*<CellGroup title='基本用法'>*/}
        {/*  <Cell>*/}
        {/*    <RadioGroup v-model='radioVal'>*/}
        {/*      <Radio value='1'>选项1</Radio>*/}
        {/*      <Radio disabled value='2'>选项2</Radio>*/}
        {/*      <Radio value='3'>选项3</Radio>*/}
        {/*    </RadioGroup>*/}
        {/*  </Cell>*/}
        {/*  <Cell>*/}
        {/*    <RadioGroup v-model='radioVal' text-position='left'>*/}
        {/*      <Radio value='1'>选项1</Radio>*/}
        {/*      <Radio disabled value='2'>选项2</Radio>*/}
        {/*      <Radio value='3'>选项3</Radio>*/}
        {/*    </RadioGroup>*/}
        {/*  </Cell>*/}
        {/*  <Cell>*/}
        {/*    <RadioGroup v-model='radioVal'>*/}
        {/*      <Radio shape='button' value='1'>选项1</Radio>*/}
        {/*      <Radio disabled shape='button' value='2'>选项2</Radio>*/}
        {/*      <Radio shape='button' value='3'>选项3</Radio>*/}
        {/*    </RadioGroup>*/}
        {/*  </Cell>*/}
        {/*</CellGroup>*/}
        {/*<CellGroup title='水平使用'>*/}
        {/*  <Cell>*/}
        {/*    <RadioGroup v-model='radioVal' direction='horizontal'>*/}
        {/*      <Radio value='1'>选项1</Radio>*/}
        {/*      <Radio value='2'>选项2</Radio>*/}
        {/*      <Radio value='3'>选项3</Radio>*/}
        {/*    </RadioGroup>*/}
        {/*  </Cell>*/}
        {/*  <Cell>*/}
        {/*    <RadioGroup v-model='radioVal' text-position='left'*/}
        {/*                direction='horizontal'>*/}
        {/*      <Radio value='1'>选项1</Radio>*/}
        {/*      <Radio value='2'>选项2</Radio>*/}
        {/*      <Radio value='3'>选项3</Radio>*/}
        {/*    </RadioGroup>*/}
        {/*  </Cell>*/}
        {/*  <Cell>*/}
        {/*    <RadioGroup v-model='radioVal' direction='horizontal'>*/}
        {/*      <Radio shape='button' value='1'>选项1</Radio>*/}
        {/*      <Radio shape='button' value='2'>选项2</Radio>*/}
        {/*      <Radio shape='button' value='3'>选项3</Radio>*/}
        {/*    </RadioGroup>*/}
        {/*  </Cell>*/}
        {/*</CellGroup>*/}
        {/*<CellGroup title='自定义尺寸'>*/}
        {/*  <Cell>*/}
        {/*    <RadioGroup v-model='radioVal4'>*/}
        {/*      <Radio value='1' icon-size='12'>自定义尺寸12</Radio>*/}
        {/*      <Radio value='2' icon-size='12'>自定义尺寸12</Radio>*/}
        {/*    </RadioGroup>*/}
        {/*  </Cell>*/}
        {/*</CellGroup>*/}
        {/*<CellGroup title='Radio自定义图标'>*/}
        {/*  <Cell>*/}
        {/*    <RadioGroup v-model='radioVal5'>*/}
        {/*      <Radio value='1' icon-name='checklist'*/}
        {/*             icon-active-name='checklist'>自定义图标</Radio>*/}
        {/*      <Radio value='2' icon-name='checklist'*/}
        {/*             icon-active-name='checklist'>自定义图标</Radio>*/}
        {/*    </RadioGroup>*/}
        {/*  </Cell>*/}
        {/*</CellGroup>*/}
        {/*<CellGroup title='触发事件'>*/}
        {/*  <Cell>*/}
        {/*    <RadioGroup v-model='radioVal6' onChange='handleChange'>*/}
        {/*      <Radio value='1'>触发事件</Radio>*/}
        {/*      <Radio value='2'>触发事件</Radio>*/}
        {/*    </RadioGroup>*/}
        {/*  </Cell>*/}
        {/*  <Cell title='当前选中值' desc='radioVal6'></Cell>*/}
        {/*</CellGroup>*/}
      </div>
    </>
  )
}

export default RadioDemo
