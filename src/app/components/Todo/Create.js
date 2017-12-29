import React from "react"
import { Link } from 'react-router-dom';

export class Create extends React.Component {
  formInputs = {
    name: '',
    content: '',
    startDate: new Date(),
    endDate: new Date()
  }

  constructor(props) {
    super();

    this.state = this.formInputs;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    // checkedbox target.checked
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('Form Values: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Create</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text"
                placeholder="Name"
                name="name"
                onChange={this.handleInputChange}/>
            </div>
          </div>

          <div className="field">
            <label className="label">Content</label>
            <div className="control">
              <textarea className="textarea"
                placeholder="Content"
                name="content"
                onChange={this.handleInputChange}></textarea>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit">Submit</button>
            </div>
            <div className="control">
              <Link to='/' className="button is-text">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }

}
