import React from "react";

import {messagesGetOne} from "../common/api";


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
      <React.Fragment>
        <h1>{title}</h1>
        <p>{object.timestamp}</p>
        <p>username: {object.username}</p>
        <p>message: <br/> {object.message}</p>
      </React.Fragment>
    )
  }
}
