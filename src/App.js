import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'user',
      company: 'Company'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, I'm {this.state.name} and I work at {this.state.company}.
          </p>
          <button onClick={() => this.setState({ name: 'React' })}>Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
