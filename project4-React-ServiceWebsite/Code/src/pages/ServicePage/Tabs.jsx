import React from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap-tabs-styled";
import Booking from "./Booking";
import Booking2 from "./Booking2";
const Bookingtabs = (props) => {
  return (
    <Container>
      <br /> <br />
      <Tabs>
        <Tab label="For Yourself">
          <br />
          <Booking selectedBooking={props.selectedBooking} />
        </Tab>
        <Tab label="For a Friend">
          <br />
          <Booking2 selectedBooking={props.selectedBooking} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Bookingtabs;

//npm install react-bootstrap-tabs --save
//npm install react-bootstrap-tabs-styled --save
