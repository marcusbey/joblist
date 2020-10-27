import React, {Component} from 'react';
import Table from './Table.js'

class App extends Component {
  state = {
    people: [
      {
      name: 'Charlie',
      job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
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

  render() {
    const {people} = this.state;
    return (
      <div className="container">
        <Table peopleData={people} removePeople={this.removePeople} />
      </div>
    );
  }
}

export default App;
