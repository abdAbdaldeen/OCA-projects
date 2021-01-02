import validator from "validator";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { Component } from "react";

class EditData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phone: "",
      emailError: "",
      phoneError: "",
    };
  }
  componentWillMount() {
    this.setState({
      email: this.props.email,
      fullName: this.props.fullName,
      phone: this.props.phone,
    });
  }
  hchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  //   ---------------------------
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      emailError: "",
      phoneError: "",
    });
    const emailError = validator.isEmail(this.state.email);
    const phoneError = validator.isLength(this.state.phone, { min: 10 });
    if (emailError && phoneError) {
      const registered = {
        fullName: this.state.fullName,
        email: this.state.email,
        phone: this.state.phone,
      };
      axios
        .put(
          "http://localhost:8000/users/update/" +
            sessionStorage.getItem("userId"),
          registered
        )
        .then((res) => {
          console.log(res.data);
          this.props.editDone();
        });
    } else if (!emailError) {
      this.setState({
        emailError: "Invalid Email",
      });
    }
    if (!phoneError) {
      this.setState({
        phoneError: "Invalid Phone",
      });
    }
  };
  //   ---------------------------
  render() {
    return (
      <form style={{ margin: "2rem" }} onSubmit={this.onSubmit}>
        <div className="name">
          <TextField
            label="Name"
            variant="filled"
            name="fullName"
            defaultValue={this.props.fullName}
            onChange={this.hchange}
          />
        </div>

        <div className="name">
          <TextField
            name="email"
            label="Email"
            variant="filled"
            defaultValue={this.props.email}
            onChange={this.hchange}
            error={this.state.emailError}
            helperText={this.state.emailError}
          />
        </div>

        <div className="name">
          <TextField
            name="phone"
            label="Phone"
            variant="filled"
            defaultValue={this.props.phone}
            onChange={this.hchange}
            error={this.state.phoneError}
            helperText={this.state.phoneError}
          />
        </div>

        <div className="changeInfo">
          <div className="editorsBtn">
            <div>
              <Button
                style={{ backgroundColor: "#02594D", color: "#ffff" }}
                className="btn"
                size="small"
                color=""
                variant="contained"
                type="submit"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default EditData;
