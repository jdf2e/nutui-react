import { Button, Image, Row, Col } from "@nutui/nutui-react";
import "./App.css";
import { Star } from "@nutui/icons-react";

const App = () => {
  return (
    <div>
      <div className="indexHeader">
        <Image className="image" src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"></Image>
        <div className="info">
          <h1>NutUI-React</h1>
          <p>京东风格的轻量级移动端 React 组件库</p>
        </div>
      </div>

      <Row>
        <Col span={1} />
        <Col className="flexCenter" span={22}>
          <Button
            type="primary"
            block
            icon={<Star />}
            onClick={() => {
              window.location.href = "https://github.com/jdf2e/nutui-react";
            }}
          >
            {" "}
            Star{" "}
          </Button>
        </Col>
        <Col span={1} />
      </Row>
    </div>
  );
};

export default App;
