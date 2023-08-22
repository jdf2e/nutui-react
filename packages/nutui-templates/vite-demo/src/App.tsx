import './App.css'
import { Star } from '@nutui/icons-react'
import { Row, Col, Image, Button } from '@nutui/nutui-react'

const Home = () => {
  return (
    <div>
      <div className="indexHeader">
        <Image className="image" src="https://nutui.jd.com/h5/react/2x/demo-2.0.14/logo-red.png"></Image>
        <div className="info">
          <h1>NutUI-React</h1>
          <p>京东风格的轻量级移动端 React 组件库</p>
        </div>
      </div>

      <Row>
        <Col span={1} />
        <Col className="flexCenter" span={22}>
          <Button type='primary' block icon={<Star />} onClick={() => {
            window.location.href = "https://github.com/jdf2e/nutui-react"
          }}> Star </Button>
        </Col>
        <Col span={1} />
      </Row>
    </div>
  )
}

export default Home
