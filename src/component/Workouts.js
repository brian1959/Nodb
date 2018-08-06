import React, { Component } from 'react';
import axios from 'axios';
import './workouts.css';
import Button from './Button';

export default class Workouts extends Component {
    constructor(props){
        super(props)

        this.state = {
            workoutsToDisplay:[],
            date:'',
            distance:'',
            time:''
        } 

        this.getWorkouts=this.getWorkouts.bind(this);
        this.addWorkout=this.addWorkout.bind(this);
    } 
    componentDidMount(){
        axios.get('/api/workouts')
        .then( response => { 
           console.log(response)
            this.setState({workoutsToDisplay:response.data})
        })
    }

    getWorkouts() {
        axios.get('/api/workouts')
                .then( (response) =>{this.setState({workoutsToDisplay:response.data})
            })
    }
    addWorkout(){
        let newWorkout = {
            date: this.state.date,
            distance: this.state.distance,
            time: this.state.time
        };
       
        axios
            .post('/api/workouts', newWorkout)
            .then( (response) => {
                console.log(response)
            this.setState({workoutsToDisplay:response.data,date:'',distance:'',time:''})
            
        })
            .catch((err) => {
                console.log(err);
            })

    }
    updateWorkout(id,){
        axios
            .put(`/api/workouts/${id}`,{date:this.state.date, distance:this.state.distance, time:this.state.time})
            .then(response =>{this.setState({workoutsToDisplay:response.data})

        })

    }

    
    deleteWorkout(id){
        console.log('hello')
        axios
            .delete(`/api/workouts/${id}`)
            .then( (response) => {
            
                this.setState({workoutsToDisplay:response.data})
        });
        
    }



    render(){
        const mappedWorkouts = this.state.workoutsToDisplay.map(wo => {

            return (
                <div key={wo.id} className="wo_info_container" >
                    <div className="wo_info">{wo.date}</div>
                    <div className="wo_info" >{wo.distance} miles</div>
                    <div className="wo_info">{wo.time} minutes</div>
                    <Button action={() => this.updateWorkout(wo.id)}>Update a Workout</Button>
                    <Button action={() =>this.deleteWorkout(wo.id)}>Delete a Workout</Button>
                </div>
            )
        }

        )

        return(
            <div>
                <div className="workout_box">
                    <div className="workout_info_container">
                        <div className="column_header_container">
                            <div className="column_header">Date</div>
                            <div className="column_header">Distance</div>
                            <div className="column_header">Time</div>
                            <div className="column_header">Update</div>
                            <div className="column_header">Delete</div>
                            
                        </div>
                        <div className="workout_info">
                            {mappedWorkouts}
                        </div>
                        <div className="wo_input">
                            <input onChange={e => this.setState({date:e.target.value})} placeholder="date" value={this.state.date}/>
                            <input onChange={e => this.setState({distance:e.target.value})} placeholder="distance" value={this.state.distance}/>
                            <input onChange={e => this.setState({time:e.target.value})} placeholder="time" value={this.state.time}/>
                        </div>
                        <div className="wo_button">
                            <Button action={this.addWorkout}>Add a Workout</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }  

   
}


