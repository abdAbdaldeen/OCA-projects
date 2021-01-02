import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";

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

  emailS: "",
  passwordS: "",

  emailErrorS: "",
  passwordErrorS: "",

  redirect: false,
};
// function usesetIsLogIn(islogin) {
//   const { setIsLogIn } = useContext(LoginContext);
//   setIsLogIn(islogin);
//   return setIsLogIn;
// }

export default class ValiationForm extends React.Component {
  constructor(props) {
    super(props);
  }
  state = initialState;
  handleCheckboxChange = (event) => {
    this.setState({ checkboxChecked: event.target.checked });
  };
  validateSignin = () => {
    this.setState({
      passwordErrorS: "",
      emailErrorS: "",
    });
    let email = this.state.emailS;
    let password = this.state.passwordS;
    let passwordError = false;
    let DataJson = JSON.parse(localStorage.getItem("Database"));
    for (let user in DataJson) {
      if (email === DataJson[user].email) {
        if (password === DataJson[user].password) {
          // /after finishing the MERN stack, come back here and change it to store the data into Database
          sessionStorage.clear();
          sessionStorage.setItem("name", DataJson[user].name);
          sessionStorage.setItem("email", DataJson[user].email);
          sessionStorage.setItem("date", DataJson[user].date);
          sessionStorage.setItem("number", DataJson[user].number);
          sessionStorage.setItem("password", DataJson[user].password);
          sessionStorage.setItem("islogin", true);
          this.props.setlogin(true);
          this.setState({ redirect: true });
          return "Done";
        } else {
          this.setState({
            passwordErrorS: "Wrong Password",
          });
          return;
        }
      }
    }
    this.setState({
      emailErrorS: "User Not Found",
    });
  };
  handleSubmitSignin = (event) => {
    event.preventDefault();
    this.validateSignin();
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

    // find a better way to implement validations
    // less complex solution with more optimized bigO complexity
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
      passwordError2 = "Passwords does not match";
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
      const userData = [
        {
          name: this.state.name,
          email: this.state.email,
          date: this.state.date,
          number: this.state.number,
          password: this.state.password,
        },
      ];
      let userDataJSON = JSON.stringify(userData);
      if (localStorage.length == 0) {
        localStorage.setItem("Database", userDataJSON);
      } else {
        let oldDatabase = JSON.parse(localStorage.getItem("Database"));
        let DatabaseArr = [...oldDatabase, ...userData];

        localStorage.setItem("Database", JSON.stringify(DatabaseArr));
      }

      sessionStorage.setItem("name", this.state.name);
      sessionStorage.setItem("email", this.state.email);
      sessionStorage.setItem("date", this.state.date);
      sessionStorage.setItem("number", this.state.number);
      sessionStorage.setItem("password", this.state.password);
      sessionStorage.setItem("islogin", true);
      this.props.setlogin(true);

      // clear form
      this.setState(initialState);
      this.setState({ redirect: true });
    }
  };

  // end of form validation function

  render() {
    document.title = "PCR | Login and Register Page";
    document.getElementsByTagName("META")[4].content =
      "Login and register page for the PCR website";
    if (this.state.redirect) {
      return <Redirect to="/services" />;
    }
    return (
      <section className="forms">
        {/* creat account form */}

        <aside className="form-account">
          <Form onSubmit={this.handleSubmit}>
            <h1 className="sign">Create An Account </h1>
            <Form.Group>
              <Form.Label className="form-label">Full Name:</Form.Label>
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
              <Form.Label>Email address:</Form.Label>
              <br />
              <Form.Control
                required
                type="email"
                placeholder="example@example.com"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                isInvalid={this.state.emailError}
              />
              <div className="errors-msg">{this.state.emailError}</div>
            </Form.Group>

            <Form.Group controlId="formBasicDtae">
              <Form.Label>Date of birth:</Form.Label>
              <br />
              <Form.Control
                min="1960-01-01"
                max="2002-12-31"
                required
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
                isInvalid={this.state.dateError}
              />
              <div className="errors-msg">{this.state.dateError}</div>
            </Form.Group>

            <Form.Group>
              <Form.Label className="form-label">Phone Number:</Form.Label>
              <br />
              <Form.Control
                required
                type="number"
                placeholder="07XXXXXXXX"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                isInvalid={this.state.numberError}
              />
              <div className="errors-msg">{this.state.numberError}</div>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
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
              <Form.Label>Confirm Password:</Form.Label>
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
              id="checkbox"
              style={{ display: "inline" }}
              type="checkbox"
              checked={this.state.checkboxChecked}
              onChange={this.handleCheckboxChange}
              label={""}
            />
            <label htmlFor="checkbox" style={{ display: "inline" }}>
              I have read, understood and agree to the
            </label>
            <span>
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Terms & Conditions.</a>
            </span>

            <br />
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
        </aside>

        {/* end of create account form */}

        {/* vertical line */}
        <div className="line"></div>
        {/* end of vertical line */}

        {/* sign in form */}

        <aside className="form-signin">
          <Form onSubmit={this.handleSubmitSignin}>
            <h2 className="sign">Already have an account ?</h2>
            <h3 className="sign">Just sign-in</h3>
            <Form.Group>
              <Form.Label className="form-label">Email:</Form.Label>
              <br />
              <Form.Control
                required
                type="email"
                placeholder="example@example.com"
                name="emailS"
                onChange={this.handleChange}
                value={this.state.emailS}
                isInvalid={this.state.emailErrorS}
              />
              <div className="errors-msg">{this.state.emailErrorS}</div>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <br />
              <Form.Control
                required
                type="password"
                name="passwordS"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.state.passwordS}
                isInvalid={this.state.passwordErrorS}
              />
              <div className="errors-msg">{this.state.passwordErrorS}</div>
            </Form.Group>
            <Form.Text className="text-muted">
              Forget password ? <a href="#"> Reset password...</a>
            </Form.Text>{" "}
            <br />
            <div className="form-input">
              <button className="form-input-btn">Sign In</button>
            </div>
          </Form>
        </aside>
        {/* end of sign in form */}
      </section>
    );
  }
}
