import React, { Component } from 'react';
import { JsonToTable } from "react-json-to-table";
import axios from 'axios';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: []
    }

  }
  componentDidMount() {
    axios.get("http://localhost:8080/candidates", {
      headers: {
        "Access-Control-Allow-Origin": '*',
        "Access-Control-Allow-Headers": 'Origin, Content-Type, X-Auth-Token,X-PINGOTHER',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'application/json',
      }
    }
    ).then((response) => {
      this.setState({ candidates: response.data })
      console.log(this.state.candidates)
    }
    )
  }
  render() {
    // 
    return (
      <div className="Table">
        <h1>Table</h1>
        <JsonToTable json={this.state.candidates} />
      </div>
    );
  }
}

export default Table;
