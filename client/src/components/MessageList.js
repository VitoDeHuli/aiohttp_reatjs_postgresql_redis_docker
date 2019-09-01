import React from "react";
import {Link} from "react-router-dom";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

import {messagesCreate, messagesGet} from "../common/api";


export default class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {object_list: []},
      redirect: false
    }
  }

  async componentDidMount() {
    await this.fetchData()
  }

  async fetchData() {
     try {
        const data = await messagesGet();
        this.setState({ data: data.data })
     } catch(err) {
        console.log(err)
     }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    messagesCreate(data);
    this.fetchData();
  };

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
              <Col key={i} md={3} className={"message"}>
                <Link to={`/messages/${v.id}`}>Message {v.id}</Link> <br/>
                <small>{v.timestamp}, {v.username}</small>
              </Col>)})}
        </Row>
        <Row className={"body"}>
          <Col md={{ span:4, offset: 4 }}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="username">
                <Form.Control type="text" placeholder="Username" name="username" required/>
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Control as="textarea" rows="5" placeholder="Message" name="message" required/>
              </Form.Group>
              <Button variant="primary" type="submit">Add message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
