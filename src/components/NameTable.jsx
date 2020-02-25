import React from 'react';
import '../App.css';

export interface NameList {
  Name: String,
  Surname: String,
  Gender: String,
  Region: String,
  Email?: String,
  Phone?: String,
}

interface State {
  nameList: Name[],
}

export default class NameTable extends React.Component<State> {

  constructor(){
    super();
    this.state = { nameList: undefined };
  }

  renderNamesDynamically(){
    //Work in progress, need to import Promise behavior
  }

  renderNames(){
    //For now this is test data, I didn't have time to make it dynamically
    //fetched from the server
    return (
      <>
      <tr>
        <td>John</td>
        <td>Smith</td>
        <td>Male</td>
        <td>USA</td>
        <td>jsmith@yahoo.com</td>
        <td>303-328-8654</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>Smith</td>
        <td>Female</td>
        <td>USA</td>
        <td>jsmith@hotmail.com</td>
        <td>777-867-5309</td>
      </tr>
      </>
    )
  }

  render(){
    const { nameList } = this.state;

    return (
      <div className="name-table">
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Region</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
          {nameList ? this.renderNamesDynamically() : this.renderNames()}
        </table>
      </div>
    )
  }
}
