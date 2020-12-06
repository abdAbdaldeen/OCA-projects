import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BabelLoading,
  EatLoading,
  DiamonLoading,
  BatteryLoading,
  CoffeeLoading,
  PassThrouthLoading,
  ThreeHorseLoading,
} from "react-loadingg";
import "./style.css";
const key = "602d7d33ca42b5a47e216dd14db8d1f5";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?";

// --------------------------------------------------------

export default class Profile extends Component {
  state = {
    isLoading: true,
    locationName: "",
    temp: 0,
    icon: "",

    name: "",
    email: "",
    date: "",
  };

  componentDidMount() {
    this.setState({
      name: sessionStorage.getItem("name"),
      email: sessionStorage.getItem("email"),
      date: sessionStorage.getItem("date"),
    });
    // --------------------------
    this.setState({
      isLoading: true,
    });
    fetch(`${apiURL}q=Amman&appid=${key}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          locationName: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
        });
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  }

  getLocationWeather() {
    // this.setState({
    //   isLoading: true,
    // });
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      fetch(`${apiURL}lat=${lat}&lon=${lon}&appid=${key}`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            isLoading: false,
            locationName: data.name,
            temp: data.main.temp,
            icon: data.weather[0].icon,
          });
        })
        .catch((err) => {
          console.log("Error Reading data " + err);
        });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="loading">
          <BabelLoading speed="1.5" size="large" />
        </div>
      );
    }
    let iconurl = "http://openweathermap.org/img/w/" + this.state.icon + ".png";
    let temp = Math.round(this.state.temp - 273.15);
    return (
      <div className="Profile">
        <div className="weatherAndlocation-container">
          <div className="weather-container">
            <div className="background-container">
              <h1>{this.state.locationName}</h1>
              <div className="flex-c">
                <h2>{temp} °C</h2>
                <img src={iconurl} alt="" />
              </div>
            </div>
          </div>
          <i
            onClick={() => {
              this.getLocationWeather();
            }}
            className="fas fa-map-marker-alt"
          ></i>
        </div>
        <div className="img-container">
          <div className="img">
            <i class="fas fa-pen"></i>
          </div>
        </div>
        <div className="info-container">
          <p className="name">{this.state.name}</p>
          <p className="email">{this.state.email}</p>
          <p className="Date">{this.state.date}</p>
        </div>
      </div>
    );
  }
}

/* 
npm install react-loadingg
*/
