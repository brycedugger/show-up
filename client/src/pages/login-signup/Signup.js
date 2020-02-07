import React, { Component } from "react";
import SignupForm from "./form-containers/SignupForm";


class Signup extends Component {

  render() {
    return (

      <div className="container">
        <div className="container mb-5 mt-5">
            <SignupForm />
        </div>
      </div>
      
    )
  }
}

export default Signup;