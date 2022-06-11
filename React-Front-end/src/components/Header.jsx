import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
          <header>
              <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div className="navbar-brand text-center">Employee Management</div>
                {/* <Link to="/">Home</Link>
                <Link to="/addEmployee">Add Employee</Link> */}
              </nav>
          </header>
      </div>
    )
  }
}
