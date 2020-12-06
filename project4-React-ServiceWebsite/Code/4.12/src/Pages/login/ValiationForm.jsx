import React from "react";
import { Form } from "react-bootstrap";
import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";

// form validtaion function
const initialState = {
  name: "",
  email: "",
  date: "",
  number: "",
  password: "",
  password2: "",
  checkboxChecked: false,

  nameError: "",
  emailError: "",
  dateError: "",
  numberError: "",
  passwordError: "",
  passwordError2: "",
};

export default class ValiationForm extends React.Component {
  state = initialState;
  handleCheckboxChange = (event) => {
    this.setState({ checkboxChecked: event.target.checked });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let numberError = "";
    let dateError = "";
    let passwordError2 = "";

    if (!this.state.name) {
      nameError = "Username is required";
    }

    if (!this.state.email) {
      emailError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      emailError = "Email address is invalid";
    }

    if (!this.state.date) {
      dateError = "Date of birth is required";
    }

    if (!this.state.number) {
      numberError = "Phone number is required";
    } else if (this.state.number.length !== 10) {
      numberError = "Phone number needs to be 10 characters";
    }

    if (!this.state.password) {
      passwordError = "Password is required";
    } else if (this.state.password.length < 8) {
      passwordError = "Passowrd needs to be at least 8 characters";
    }

    if (!this.state.password2) {
      passwordError2 = "Password confiramtion is required";
    } else if (this.state.password2 !== this.state.password) {
      passwordError2 = "Passwords do not match";
    }

    if (
      emailError ||
      nameError ||
      passwordError ||
      numberError ||
      dateError ||
      passwordError2
    ) {
      this.setState({
        emailError,
        nameError,
        passwordError,
        numberError,
        dateError,
        passwordError2,
      });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);

      sessionStorage.setItem("name", this.state.name);
      sessionStorage.setItem("email", this.state.email);
      sessionStorage.setItem("date", this.state.date);
      sessionStorage.setItem("number", this.state.number);
      sessionStorage.setItem("password", this.state.password);
      sessionStorage.setItem("isLogin", true);
      // clear form
      this.setState(initialState);
    }
  };

  // end of form validation function

  render() {
    return (
      <div className="forms">
        {/* creat account form */}

        <div className="form-account">
          <Form onSubmit={this.handleSubmit}>
            <h1 className="sign">Create An Account </h1>
            <Form.Group>
              <Form.Label className="form-label">User Name :</Form.Label>
              <br />
              <Form.Control
                required
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                isInvalid={this.state.nameError}
              />
              <div className="errors-msg">{this.state.nameError}</div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address :</Form.Label>
              <br />
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                isInvalid={this.state.emailError}
              />
              <div className="errors-msg">{this.state.emailError}</div>
            </Form.Group>

            <Form.Group controlId="formBasicDtae">
              <Form.Label>Date of birth :</Form.Label>
              <br />
              <Form.Control
                required
                type="date"
                name="date"
                // value={this.state.number}
                onChange={this.handleChange}
                isInvalid={this.state.dateError}
              />
              <div className="errors-msg">{this.state.dateError}</div>
            </Form.Group>

            <Form.Group>
              <Form.Label className="form-label">Phone Number :</Form.Label>
              <br />
              <Form.Control
                required
                type="number"
                placeholder="Enter Your Phone Number"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                isInvalid={this.state.numberError}
              />
              <div className="errors-msg">{this.state.numberError}</div>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password :</Form.Label>
              <br />
              <Form.Control
                required
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                isInvalid={this.state.passwordError}
              />
              <div className="errors-msg">{this.state.passwordError}</div>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password :</Form.Label>
              <br />
              <Form.Control
                required
                type="password"
                placeholder="Password Confirmation"
                name="password2"
                value={this.state.password2}
                onChange={this.handleChange}
                isInvalid={this.state.passwordError2}
              />
              <div className="errors-msg">{this.state.passwordError2}</div>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox"></Form.Group>

            <Form.Check
              type="checkbox"
              checked={this.state.checkboxChecked}
              onChange={this.handleCheckboxChange}
              label="I have read, understood and agree to the Terms of Service and Terms & Conditions"
            />
            <br />

            <div className="form-input">
              <button
                className="form-input-btn"
                type="submit"
                disabled={this.state.checkboxChecked ? false : true}
              >
                Create your account
              </button>
            </div>
          </Form>
        </div>

        {/* end of create account form */}

        {/* vertical line */}
        <div className="line"></div>
        {/* end of vertical line */}

        {/* sign in form */}

        <div className="form-signin">
          <Form>
            <h1 className="sign">Already have an account ?</h1>
            <h1 className="sign">Just sign-in</h1>
            <Form.Group>
              <Form.Label className="form-label">User Name :</Form.Label>
              <br />
              <Form.Control type="text" placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password :</Form.Label>
              <br />
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Text className="text-muted">
              Forget password ? Reset password...
            </Form.Text>{" "}
            <br />
            <div className="form-input">
              <button className="form-input-btn">Sign In</button>
            </div>
          </Form>
        </div>

        {/* end of sign in form */}
      </div>
    );
  }
}
