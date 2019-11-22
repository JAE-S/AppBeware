import React, { Component } from "react";
import { Input, Button} from '@material-ui/core/';

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <div className="signUpInput">
      <div>
          <h3 className="signInTitle">Create An Account</h3>
      </div>
      <form >
          <div>
          {/* <p>{this.state.username}</p> */}
              <Input
                  required
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  id="standard-required"
                  label="Required"
              />
          </div>
          <div>
              {/* <p>Password: {this.state.password}</p> */}
              <Input
                  required
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
              />
          </div>
          <div>
              <Button 
                  onClick={this.handleFormSubmit}
              >
                  Submit
              </Button>
          </div>
  </form>
</div>
    );
  }
}

export default Form;
