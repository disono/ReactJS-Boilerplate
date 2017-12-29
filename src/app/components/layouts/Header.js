import React from "react"
import { Link } from 'react-router-dom';

export class Header extends React.Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <div className="navbar-burger burger" data-target="navbarApp">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarApp" className="navbar-menu">
          <div className="navbar-start">
            <Link to='/' className="navbar-item">Home</Link>
            <Link to='/create' className="navbar-item">Create</Link>
          </div>
        </div>
      </nav>
    );
  }

}
