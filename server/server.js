const express = require('express');
const bodyParser =require('body-parser')


const wc = require('./workout_controller');
const app = express();
app.use(bodyParser.json());

app.get( '/api/workouts', wc.getWorkouts);
app.post( '/api/workouts', wc.addWorkout);
app.put( '/api/workouts/:id', wc.updateWorkout);
app.delete('/api/workouts/:id', wc.deleteWorkout);



let PORT = 3045;
app.listen( PORT, () => {
    console.log(`evesdropping on port ${PORT}.`);
});
