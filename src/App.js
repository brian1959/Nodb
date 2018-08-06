import React, { Component } from 'react';
import './App.css';
import Forecast from './component/Forecast';
import Header from './component/Header';
import Workouts from './component/Workouts';


class App extends Component {


  render() {


    return (
      <div className="App">
        <Header />
          <div className="app_forecast">
            <Forecast />
          </div>
          <div className="app_parent">
            <div className="app_workouts" ><Workouts /></div>
          </div>
      </div>
    );
  }
}

export default App;
