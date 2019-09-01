import React from "react";

import {Col, Container, Row} from "react-bootstrap";
import ReactImg from "../images/react-life.png";


export default function () {
  return (
   <Container>
      <Row className={"title"}>
        <Col>
          <h1>ReactJS lifecycle</h1>
        </Col>
      </Row>
      <Row className={"body"}>
        <Col>
          <img src={ReactImg} alt="" width={'100%'}/>
          <div className={"message"}>
            <p>React component lifecycle has three categories – Mounting, Updating and Unmounting.</p>
            <p>The <strong>render()</strong> is the most used lifecycle method.</p>
            <ul>
              <li>It is a pure function.</li>
              <li>You cannot set state in render()</li>
            </ul>
            <p>The <strong>componentDidMount()</strong> happens as soon as your component is mounted.</p>
            <ul>
              <li>You can set state here but with caution.</li>
            </ul>
            <p>The <strong>componentDidUpdate()</strong> happens as soon as the updating happens.</p>
            <ul>
              <li>You can set state here but with caution.</li>
            </ul>
            <p>The <strong>componentWillUnmount()</strong> happens just before the component unmounts and is destroyed.</p>
            <ul>
              <li>This is a good place to cleanup all the data.</li>
              <li>You cannot set state here.</li>
            </ul>
            <p>The <strong>shouldComponentUpdate()</strong> can be used rarely.</p>
            <ul>
              <li>It can be called if you need to tell React not to re-render for a certain state or prop change.</li>
              <li>This needs to be used with caution only for certain performance optimizations.</li>
            </ul>
            <p>The two new lifecycle methods are <strong>getDerivedStateFromProps()</strong> and <strong>getSnapshotBeforeUpdate()</strong>.</p>
            <ul>
              <li>They need to be used only occasionally.</li>
              <li>Not many examples are out there for these two methods and they are still being discussed and will have more references in the future.</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
