import React from "react";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

import {messagesGet} from "../common/api";


export default class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {object_list: []}
    }
  }

  async componentDidMount() {
     try {
        const data = await messagesGet();
        this.setState({ data: data.data })
     } catch(err) {
        console.log(err)
     }
  }

 render() {
    const { data } = this.state;
    return (
      <Container>
        <Row className={"title"}>
          <Col>
            <h1>{data.title}</h1>
          </Col>
        </Row>
        <Row className={"body"}>
          {data.object_list.map((v, i) => {
            return (
              <Col key={i}>
                <Link to={`/messages/${v.id}`}>Message {v.id}</Link> <br/>
                {v.timestamp} <br/>
                username: {v.username} <br/>
              </Col>)})}
        </Row>
      </Container>
    )
  }
}
