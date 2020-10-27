import React, {Component} from 'react'

// simple component for table body
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

// simple component for table body
const TableBody = (props) => {
    const rows = props.peopleData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removePeople(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )
}

class Table extends Component {
    render() {
      const {peopleData, removePeople} = this.props
  
      return (
        <table>
          <TableHeader />
          <TableBody peopleData={peopleData} removePeople={removePeople} />
        </table>
      )
    }
  }

export default Table