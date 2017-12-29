import React from "react"

export class Edit extends React.Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <h1>Edit {this.props.match.params._id}</h1>
      </div>
    );
  }

}
