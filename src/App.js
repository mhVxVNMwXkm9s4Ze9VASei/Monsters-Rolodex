import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filteredMonsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
      .then(users => this.setState(
        () => {
          return { monsters: users, filteredMonsters: users };
        },
        () => console.log(this.state)
      )
    );
  }

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={(event) => {
            const filteredMonsters = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(event.target.value.toLowerCase()));
            this.setState(() => {
              return { filteredMonsters: filteredMonsters };
            });
          }}
        />
        {this.state.filteredMonsters.map((monster, key) => <h1 key={key}>{monster.name}</h1>)}
      </div>
    );
  }
}

export default App;
