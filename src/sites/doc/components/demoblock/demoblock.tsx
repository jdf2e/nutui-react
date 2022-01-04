import React from 'react'
interface A {
  text: string
}
const DemoBlock: React.FunctionComponent<A> = (props) => {
  console.log(props.children)
  return (
    <>
      {props.children}
      {props.text}
      xxxx
    </>
  )
}
export default DemoBlock
