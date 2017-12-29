import React from "react"

import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';

export class Root extends React.Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="container">
        <Header/>

        <div>
          {this.props.children}
        </div>

        <Footer/>
      </div>
    );
  }

}
