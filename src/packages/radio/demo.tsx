import React, { useState } from 'react'
import Radio from '@/packages/radio'
import Cell from '@/packages/cell'
import CellGroup from '@/packages/cellgroup'

const RadioGroup = Radio.RadioGroup
const RadioDemo = () => {
  const [checked1] = useState(true)
  const [radioVal, setRadioVal] = useState(1)

  function handleChange(val: number | string | boolean) {
    console.log(val)
    setRadioVal(val as number)
  }

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
        <CellGroup title="基本用法">
          <Cell>
            <RadioGroup value={'1'}>
              <Radio value="1">选项1</Radio>
              <Radio disabled value="2">
                选项2
              </Radio>
              <Radio value="3">选项3</Radio>
            </RadioGroup>
          </Cell>
          <Cell>
            <RadioGroup value="2" textPosition="left">
              <Radio value="1">选项1</Radio>
              <Radio disabled value="2">
                选项2
              </Radio>
              <Radio value="3">选项3</Radio>
            </RadioGroup>
          </Cell>
          <Cell>
            <RadioGroup value="3">
              <Radio shape="button" value="1">
                选项1
              </Radio>
              <Radio disabled shape="button" value="2">
                选项2
              </Radio>
              <Radio shape="button" value="3">
                选项3
              </Radio>
            </RadioGroup>
          </Cell>
        </CellGroup>
        <CellGroup title="水平使用">
          <Cell>
            <RadioGroup value="1" direction="horizontal">
              <Radio value="1">选项1</Radio>
              <Radio value="2">选项2</Radio>
              <Radio value="3">选项3</Radio>
            </RadioGroup>
          </Cell>
          <Cell>
            <RadioGroup value="2" textPosition="left" direction="horizontal">
              <Radio value="1">选项1</Radio>
              <Radio value="2">选项2</Radio>
              <Radio value="3">选项3</Radio>
            </RadioGroup>
          </Cell>
          <Cell>
            <RadioGroup value="3" direction="horizontal">
              <Radio shape="button" value="1">
                选项1
              </Radio>
              <Radio shape="button" value="2">
                选项2
              </Radio>
              <Radio shape="button" value="3">
                选项3
              </Radio>
            </RadioGroup>
          </Cell>
        </CellGroup>
        <CellGroup title="自定义尺寸">
          <Cell>
            <RadioGroup value="2">
              <Radio value="1" iconSize="24">
                自定义尺寸12
              </Radio>
              <Radio value="2" iconSize="12">
                自定义尺寸12
              </Radio>
            </RadioGroup>
          </Cell>
        </CellGroup>
        <CellGroup title="Radio自定义图标">
          <Cell>
            <RadioGroup value="1">
              <Radio value="1" iconName="checklist" icon-active-name="checklist">
                自定义图标
              </Radio>
              <Radio value="2" iconName="checklist" icon-active-name="checklist">
                自定义图标
              </Radio>
            </RadioGroup>
          </Cell>
        </CellGroup>
        <CellGroup title="触发事件">
          <Cell>
            <RadioGroup value={radioVal} onChange={handleChange}>
              <Radio value={1}>触发事件</Radio>
              <Radio value={2}>触发事件</Radio>
            </RadioGroup>
          </Cell>
          <Cell title="当前选中值" desc={radioVal.toString()}></Cell>
        </CellGroup>
      </div>
    </>
  )
}

export default RadioDemo
