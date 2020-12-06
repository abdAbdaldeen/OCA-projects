import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import './servicePage.css';

const OptionModal = (props) => (
  <Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose}>
    <h3 className='modal__title'>Booking Complete</h3>

    <Button variant='success' onClick={props.onRequestClose}>
      Okay
    </Button>
  </Modal>
);

export default OptionModal;
