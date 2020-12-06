import CountUp from 'react-countup';
import './style.css';
const { Component, useState, useEffect } = require('react');
export default class CoronaInjuries extends Component {
  state = {
    total_confirmed: 0,
    total_deaths: 0,
    total_open_cases: 0,
    total_recovered: 0,
    today_confirmed: 0,
    today_deaths: 0,
    today_recovered: 0,
    iszero: false,
  };
  getYesterday = (d, m) => {
    if (d === 1) {
      if (
        m === 1 ||
        m === 2 ||
        m === 4 ||
        m === 6 ||
        m === 8 ||
        m === 9 ||
        m === 11
      ) {
        return 31;
      } else if (m == 3) {
        return 28;
      } else {
        return 30;
      }
    } else if (d < 11) {
      let dayString = '0';
      dayString += d - 1;
      return dayString;
    } else {
      return d - 1;
    }
  };
  async componentDidMount() {
    let todayDate = new Date();

    let fullDateString = `${todayDate.getFullYear()}-${
      todayDate.getMonth() + 1
    }-${
      todayDate.getDate() < 10 ? '0' + todayDate.getDate() : todayDate.getDate()
    }`;
    await fetch(
      `https://api.covid19tracking.narrativa.com/api/${fullDateString}/country/jordan`
    )
      .then((response) => response.json())
      .then((data) => {
        if (
          data.dates[fullDateString].countries.Jordan.today_new_confirmed ||
          data.dates[fullDateString].countries.Jordan.today_new_deaths ||
          data.dates[fullDateString].countries.Jordan.today_new_recovered
        ) {
          this.setState({
            today_confirmed:
              data.dates[fullDateString].countries.Jordan.today_new_confirmed,
            today_deaths:
              data.dates[fullDateString].countries.Jordan.today_new_deaths,
            today_recovered:
              data.dates[fullDateString].countries.Jordan.today_new_recovered,
          });
        } else {
          this.setState({
            iszero: true,
          });
        }
        this.setState({
          total_confirmed:
            data.dates[fullDateString].countries.Jordan.today_confirmed,
          total_deaths:
            data.dates[fullDateString].countries.Jordan.today_deaths,
          total_open_cases:
            data.dates[fullDateString].countries.Jordan.today_open_cases,
          total_recovered:
            data.dates[fullDateString].countries.Jordan.today_recovered,
        });
      })
      .catch((err) => {
        console.log('Error Reading data ' + err);
      });
    // ================================================
    if (this.state.iszero) {
      fullDateString = `${todayDate.getFullYear()}-${
        todayDate.getMonth() + 1
      }-${this.getYesterday(todayDate.getDate(), todayDate.getMonth() + 1)}`;
      fetch(
        `https://api.covid19tracking.narrativa.com/api/${fullDateString}/country/jordan`
      )
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            today_confirmed:
              data.dates[fullDateString].countries.Jordan.today_new_confirmed,
            today_deaths:
              data.dates[fullDateString].countries.Jordan.today_new_deaths,
            today_recovered:
              data.dates[fullDateString].countries.Jordan.today_new_recovered,
          });
        })
        .catch((err) => {
          console.log('Error Reading data ' + err);
        });
    }
  }
  render() {
    return (
      <article id='CoronaInjuries'>
        <h2>Covid-19 statistics in Jordan</h2>
        <div className='first-con'>
          <div className='today_confirmed'>
            <CountUp
              className='CountUp'
              end={this.state.today_confirmed}
              delay={9}
            />
            <p>Last 24 hours confirmed</p>
          </div>
          <div className='today_deaths'>
            <CountUp
              className='CountUp'
              end={this.state.today_deaths}
              delay={9}
            />
            <p>Last 24 hours deaths</p>
          </div>
          <div className='today_recovered'>
            <CountUp
              className='CountUp'
              end={this.state.today_recovered}
              delay={9}
            />
            <p>Last 24 hours recovered</p>
          </div>
        </div>
        <div className='second-con'>
          <div className='total_confirmed'>
            <CountUp
              className='CountUp'
              end={this.state.total_confirmed}
              delay={9}
            />
            <p>Total confirmed</p>
          </div>
          <div className='total_deaths'>
            <CountUp
              className='CountUp'
              end={this.state.total_deaths}
              delay={9}
            />
            <p>Total deaths</p>
          </div>
          <div className='total_open_cases'>
            <CountUp
              className='CountUp'
              end={this.state.total_open_cases}
              delay={9}
            />
            <p>Total open cases</p>
          </div>
          <div className='total_recovered'>
            <CountUp
              className='CountUp'
              end={this.state.total_recovered}
              delay={3}
            />
            <p>Total recovered</p>
          </div>
        </div>
      </article>
    );
  }
}

//npm i react-countup
