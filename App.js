import React, {Component} from 'react';
import Table from './Table.js';
import Form from './Form';

class App extends Component {
  state = {
    people: [
    ],
    }

  removePeople = (index) => {
    const {people} = this.state
  
    this.setState(
      { people: people.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({people: [...this.state.people, character]})
  }

  render() {
    const {people} = this.state;
    return (
      <div className="container">
        <Table peopleData={people} removePeople={this.removePeople} />
        <Form handleSubmit={this.handleSubmit} />
        
      </div>
    );
  }
}

export default App;
