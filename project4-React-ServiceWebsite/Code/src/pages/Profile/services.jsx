import { Component } from "react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Database: [],
    };
  }
  componentWillMount() {
    let database = JSON.parse(sessionStorage.getItem("bookedServiceDatabase"));
    this.setState({
      Database: database,
    });
  }
  render() {
    console.log(this.state.Database);
    // console.log(this.state.Database);
    return (
      <div className="ServicesCom">
        <h2>Booked Services</h2>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Type of service</TableCell>
                <TableCell align="center">Service provider name</TableCell>
                <TableCell align="center">Location</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.Database &&
                this.state.Database.map((service) => (
                  <TableRow>
                    <TableCell align="center" component="th" scope="row">
                      {service.bookedServices.type}
                    </TableCell>
                    <TableCell align="center">
                      {service.bookedServices.header}
                    </TableCell>
                    <TableCell align="center">
                      {service.bookedServices.location}
                    </TableCell>
                    <TableCell align="center">
                      {service.bookedServices.price}
                    </TableCell>
                    <TableCell align="center">
                      {service.type} ,{" "}
                      {service.nationalId
                        ? "ID: " + service.nationalId
                        : "Number of People: " + service.numberOfPeople}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

//npm install @material-ui/core
