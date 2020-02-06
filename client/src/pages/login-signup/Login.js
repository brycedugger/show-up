import React, { Component } from "react";
import LoginForm from "./form-containers/LoginForm";

class Login extends Component {

  render() {
    return (

      <div className="container">
        <div className="container mb-5 mt-5">
            <LoginForm />
        </div>
      </div>
      
    )
  }
}

export default Login;