import React from 'react'
interface A {
  text: string
}
const DemoBlock: React.FunctionComponent<A> = (props) => {
  return (
    <>
      {props.children}
      <div className="nutui-react--demo-button">{props.text}</div>
    </>
  )
}
export default DemoBlock
