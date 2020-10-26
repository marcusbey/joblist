import React, {Component} from 'react';
import Table from './Table.js'

class App extends Component {
  render() {

    const people = [
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
    ];


    return (
      <div className="container">
        <Table tableData = {people} /> 
      </div>
    );
  }
}

export default App;
