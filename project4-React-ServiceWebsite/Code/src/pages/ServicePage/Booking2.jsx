import React from 'react';
import { Alert, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Booking2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPeople: 2,
      display: 'none',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.props.selectedBooking) {
      this.setState({ alert: 'block' });
    } else {
      let newDatabse = [
        {
          numberOfPeople: this.state.numberOfPeople,
          type: 'for a friend',
          bookedServices: this.props.selectedBooking,
        },
      ];

      if (sessionStorage.getItem('bookedServiceDatabase')) {
        let oldDatabase = JSON.parse(
          sessionStorage.getItem('bookedServiceDatabase')
        );
        let concData = [...oldDatabase, ...newDatabse];
        sessionStorage.setItem(
          'bookedServiceDatabase',
          JSON.stringify(concData)
        );
        this.setState({ alert: 'none' });
      } else {
        sessionStorage.setItem(
          'bookedServiceDatabase',
          JSON.stringify(newDatabse)
        );
        this.setState({ alert: 'none' });
      }
    }
  };
  render() {
    return (
      <Container style={{ padding: '2rem' }}>
        <Form onSubmit={this.handleSubmit}>
          <Alert style={{ display: this.state.alert }} variant='danger'>
            You need to pick a service to complete your booking.
          </Alert>
          <Form.Label>Select Number of People :</Form.Label>
          <Form.Control
            onChange={(e) => this.setState({ numberOfPeople: e.target.value })}
            as='select'
            name='select'
          >
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Form.Control>
        </Form>
        <br />
        <Alert variant='warning'>
          Note:
          <br />
          Please make sure that you and your friends bring your national ID when
          you come for the test.
        </Alert>

        <button
          onClick={this.handleSubmit}
          className='booking-input'
          type='submit'
        >
          Book Now
        </button>
      </Container>
    );
  }
}
