import React from "react";
import { Alert, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PopUp from "./PopUpServicePage";

export default class Booking2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPeople: 2,
      display: "none",
      popUpOpen: false,
      alert: "none",
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.props.selectedBooking) {
      this.setState({ alert: "block" });
    } else {
      let newDatabse = [
        {
          numberOfPeople: this.state.numberOfPeople,
          type: "for a friend",
          bookedServices: this.props.selectedBooking,
        },
      ];

      if (sessionStorage.getItem("bookedServiceDatabase")) {
        let oldDatabase = JSON.parse(
          sessionStorage.getItem("bookedServiceDatabase")
        );
        let concData = [...oldDatabase, ...newDatabse];
        sessionStorage.setItem(
          "bookedServiceDatabase",
          JSON.stringify(concData)
        );
        this.setState({ alert: "none" });
        this.handleOpenModal();
      } else {
        sessionStorage.setItem(
          "bookedServiceDatabase",
          JSON.stringify(newDatabse)
        );
        this.setState({ alert: "none" });
        this.handleOpenModal();
      }
    }
  };
  handleCloseModal() {
    this.setState({ popUpOpen: false });
  }

  handleOpenModal() {
    this.setState({ popUpOpen: true });
  }
  render() {
    return (
      <Container style={{ padding: "2rem" }}>
        <Form onSubmit={this.handleSubmit}>
          <Alert style={{ display: this.state.alert }} variant="danger">
            You need to pick a service to complete your booking.
          </Alert>
          <Form.Label>Select Number of People :</Form.Label>
          <Form.Control
            onChange={(e) => this.setState({ numberOfPeople: e.target.value })}
            as="select"
            name="select"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </Form.Control>
        </Form>
        <br />
        <Alert variant="warning">
          <b>Note: </b>
          Please make sure that your friends bring their national ID when you
          come for the test.
        </Alert>

        <button
          onClick={this.handleSubmit}
          className="booking-input"
          type="submit"
        >
          Book Now
        </button>
        <PopUp
          isOpen={this.state.popUpOpen}
          onRequestClose={this.handleCloseModal}
        />
      </Container>
    );
  }
}
