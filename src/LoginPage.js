import React, { Component } from 'react';
import './App.css';
import logo from './image.png';
import ReportPage from './ReportScreen';
//import { browserHistory } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      reportPage: '',
      loginSuccess:false
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    if (this.state.username === 'admin' && this.state.password === 'password') {
      alert('Success alert!!');
      //var reportPage =[];
      //    dispatchEvent(push('/ReportPage'));
      //this.setState({
      //  reportPage:reportPage
      //            })

     this.setState({loginSuccess:true});

    } else{
      alert('Login Failed!!');
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <img src={logo} />
          <br />
          <br />
          <br />
          <label>UserName </label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
          <br />
          <br />
          <br />
          <label>Password </label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
          <br />
          <br />
          <br />
          <input type="submit" value="Log In" data-test="submit" />
        </form>
      </div>
    );
  }
}

export default LoginPage;