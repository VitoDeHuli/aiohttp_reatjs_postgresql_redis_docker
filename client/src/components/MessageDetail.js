import React from "react";

import {messagesGetOne} from "../common/api";
import {Col, Container, Row} from "react-bootstrap";


export default class MessageDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {object: {}}
    }
  }

  async componentDidMount() {
     try {
        const data = await messagesGetOne(this.props.match.params.pk);
        this.setState({ data: data.data })
     } catch(err) {
        console.log(err)
     }
  }

 render() {
    const { title, object } = this.state.data;
    return (
      <Container>
        <Row className={"title"}>
          <Col>
            <h1>{title}</h1>
          </Col>
        </Row>
        <Row className={"body"}>
          <Col>
            <small>{object.timestamp}, {object.username}</small>
            <p>{object.message}</p>
          </Col>
        </Row>
      </Container>
    )
  }
}
