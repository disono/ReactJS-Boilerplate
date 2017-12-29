import React from "react"
import { Link } from 'react-router-dom';

export class Home extends React.Component {
  items = [
    {_id: 1, name: 'Todo 1'},
    {_id: 2, name: 'Todo 2'},
    {_id: 3, name: 'Todo 3'}
  ];

  constructor(props) {
    super();

    this.items = this.items.map((item, i) =>
      <li key={i}><Link to={'/edit/' + item._id}>{item.name}</Link></li>
    );
  }

  render() {
    return (
      <div>
        <p>Home</p>

        {this.items}
      </div>
    );
  }

}
