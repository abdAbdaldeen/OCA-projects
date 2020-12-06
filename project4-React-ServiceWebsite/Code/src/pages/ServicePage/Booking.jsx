import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import { Alert, Container, Form } from 'react-bootstrap';
import PopUp from './PopUpServicePage';
// import 'servicePage.css';

const initialState = {
  nationalId: '',
  popUpOpen: false,
  nationalIdError: '',
  alert: 'none',
  bookedServices: [],
};

export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCheckboxChange = (event) => {
    this.setState({ checkboxChecked: event.target.checked });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validate = () => {
    let nationalIdError = '';

    if (!this.state.nationalId) {
      nationalIdError = 'National ID is required';
    } else if (this.state.nationalId.length !== 10) {
      nationalIdError = 'National ID needs to be 10 characters';
    }

    if (nationalIdError) {
      this.setState({
        nationalIdError,
      });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();

    if (!this.props.selectedBooking) {
      this.setState({ alert: 'block' });
    } else if (isValid) {
      let newDatabse = [
        {
          nationalId: this.state.nationalId,
          type: 'for your self',
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

      this.setState(initialState);
      this.handleOpenModal();
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
      <Container style={{ padding: '2rem' }} className='booking-form'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Alert style={{ display: this.state.alert }} variant='danger'>
              You need to pick a service to complete your booking.
            </Alert>
            <Form.Label>National ID :</Form.Label>
            <br />
            <Form.Control
              required
              type='number'
              placeholder='Enter Your National ID'
              name='nationalId'
              value={this.state.nationalId}
              onChange={this.handleChange}
              isInvalid={this.state.nationalIdError}
            />
            <div className='booking-error'>{this.state.nationalIdError}</div>
          </Form.Group>
          <Form.Check
            type='checkbox'
            label='Do you have any chronic disease ?'
          />
          <br />

          <div>
            <button className='booking-input' type='submit'>
              Book Now
            </button>
          </div>
        </Form>
        <PopUp
          isOpen={this.state.popUpOpen}
          onRequestClose={this.handleCloseModal}
        />
      </Container>
    );
  }
}
