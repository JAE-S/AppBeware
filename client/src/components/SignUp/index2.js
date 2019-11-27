// Import React
// =========================================================
  import React, { Component } from "react";
// Import Material UI Components
// =========================================================
  import { Input, Button, DialogActions} from '@material-ui/core/';
// Import Styles
// =========================================================
  import "./style.css"

class SignUp extends Component {
  // Setting the initial values of this.state.email and this.state.password
  state = {
    email: "",
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

  // When the form is submitted, prevent the default event and alert the email and password
//   handleFormSubmit = event => {
//     event.preventDefault();
//     alert(`Email: ${this.state.email}\nPassword: ${this.state.password}`);
//     this.setState({ email: "", password: "" });
//   };

  render() {
    return (
  
        <div className="signUpInput">
            <form >
                <div>
              
                    <Input
                        required
                        type="text"
                        placeholder="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        id="username-sign-up"
                        label="Required"
                    />
                </div>
                <div>
                    <Input
                        required
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        id="email-sign-up"
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
                        id="password-sign-up"
                        label="Required"
                    />
                </div>

                    <Button 
                        onClick={this.handleFormSubmit}
                    >
                    Submit
                    </Button>
        </form>
      </div>
 
    );
  }
}

export default SignUp;


