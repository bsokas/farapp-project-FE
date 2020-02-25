import React from 'react';
import '../App.css';

export default class NameTable extends React.Component {

  renderNames(){
    return (
      <>
      <tr>
        <td>John</td>
        <td>Smith</td>
        <td>Male</td>
        <td>USA</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>Smith</td>
        <td>Female</td>
        <td>USA</td>
      </tr>
      </>
    )
  }

  render(){
    return (
      <div className="name-table">
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Region</th>
          </tr>
          {this.renderNames()}
        </table>
      </div>
    )
  }
}
