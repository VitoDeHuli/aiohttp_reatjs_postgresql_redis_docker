import React from 'react';
import {index} from "../common/api";


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
        <h1>{data.title}</h1>
        <p>{data.text}</p>
      </React.Fragment>
    )
  }
}
