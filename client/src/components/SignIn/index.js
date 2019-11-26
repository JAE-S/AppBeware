import React, { Component } from "react";
import { Input, Button} from '@material-ui/core/';
import API from "../../utils/API"

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
    if(this.state.username && this.state.password){
    API.signIn({
      username: this.state.username,
      password: this.state.password
    }).then(res => {
    this.setState({ username: "", password: "" });
    console.log(res.data)
    })
    }
  };

  render() {
    return (
      <div className="signInInput">
      
      <form >
          <div>
              <Input
                  required
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  id="username-sign-in"
                  label="Required"
              />
          </div>
          <div>
              <Input
                  required
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  id="password-sign-in"
                  label="Required"
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

