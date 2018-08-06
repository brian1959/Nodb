import React, {Component} from 'react';
import axios from 'axios';
import Button from './Button';
import './forecast.css';


class Forecast extends Component {
    
    state = {
        forecast:[],
        zip:''
    }

   

    componentDidMount(){
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=84081&appid=${process.env.REACT_APP_WEATHER_KEY}`)
        .then( response => { 
         
            this.setState({forecast:response.data.list})
        })
    }
 
    ChangeZip(zip) {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${process.env.REACT_APP_WEATHER_KEY}`)
        .then( response => { 
           console.log(response)
            this.setState({forecast:response.data.list})
        }) 
    }
        
    
    render() {
        
        let neaw= this.state.forecast.filter( (e, i) => i ===2 || i===3 || i===4 || i===5 || i===6 || i===7  )
        .map(weatherObj => {
         
            let convertedTemp = Math.round(weatherObj.main.temp*9/5-459.67)
	
            return(
                <div key={weatherObj.dt} className="forecast_box" >
                    <h2>Temp: {convertedTemp} F</h2>
                    <h2>Description: {weatherObj.weather[0].description}</h2>
                </div>
            )
        })
        
        return (
             <div>
                <div className='for_input'>
                    <input placeholder="zip code" onChange={(e) => this.setState({zip:e.target.value})} value={this.state.zip} />
                </div>
                <div className="forecast_button">
                    <Button action={e => this.ChangeZip(this.state.zip)} >Update Area</Button>
                  
                </div>
                <div  className="forecast_header" >Tomorrow's Forecast</div>
                <div className="forecast_subheader" >Every 3 hrs from 6am - 9pm</div>
                <div className="forecast_parent">    
                    {neaw}
                </div>

             </div>

        )

    }
}

export default Forecast