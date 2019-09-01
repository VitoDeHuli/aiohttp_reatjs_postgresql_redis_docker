import React from 'react';
import {index} from "../common/api";
import {Col, Row} from "react-bootstrap";


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  async componentDidMount() {
     try {
        const data = await index();
        this.setState({ data: data.data })
     } catch(err) {
        console.log(err)
     }
  }

 render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <Row className={"title"}>
          <Col>
            <h1>{data.title}</h1>
          </Col>
        </Row>
        <Row className={"body"}>
          <Col>
            {data.text}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
