import React from "react";
import {Link} from "react-router-dom";
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";

import {messagesCreate, messagesDelete, messagesGet} from "../common/api";


export default class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {object_list: []},
      redirect: false,
      show: false,
    }
  }

  async componentDidMount() {
    await this.fetchData()
  }

  fetchData = async () => {
     try {
        const data = await messagesGet();
        this.setState({ data: data.data })
     } catch(err) {
        console.log(err)
     }
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    await messagesCreate(data);
    await this.fetchData();
    this.setShow(false);
  };

  remove = async (pk) => {
    await messagesDelete(pk);
    await this.fetchData();
  };

  setShow = (option) => {
    this.setState({ show: option })
  };

 render() {
    const { data, show } = this.state;
    const handleClose = () => this.setShow(false);
    const handleShow = () => this.setShow(true);
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
                <Link to={`/messages/${v.id}`}>Message {v.id}</Link>
                <Button variant="danger"
                        onClick={async () => this.remove(v.id)}
                        className="btn-remove"
                >-
                </Button><br/>
                <small>{v.timestamp}, {v.username}</small>
              </Col>)})}
        </Row>
        <Button variant="primary" onClick={handleShow}>
          Add message
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Form onSubmit={this.handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Add message</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="username">
                <Form.Control type="text" placeholder="Username" name="username" required/>
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Control as="textarea" rows="5" placeholder="Message" name="message" required/>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    )
  }
}
