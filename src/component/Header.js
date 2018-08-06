import React, { Component } from 'react';
import img from '../images/racewalker.jpg';

import './header.css';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *APP* COMPONENT

export default class Header extends Component {
  render() {
    return (
      <section className="Header__parent">
        <section className="Header__content">

          <div className="Header__company-info">
            <img src={img} height='80px' alt='logo' />
            <span>Brian's Workout Log</span>
          </div>

        </section>
      </section>
    )
  }
}