import React, { Component } from 'react';
import './App.css';
import LoginPage from './LoginPage';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  }
}
export default App;
