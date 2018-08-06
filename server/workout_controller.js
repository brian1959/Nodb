let workouts = [{id:1,date:'7/25/18 ',distance:6.5,time:'84:30'},{id:2,date:'7/28/18' ,distance:5.85,time:'74:42'}];
let id = 3


module.exports = {

    getWorkouts:(req,res) => {
            res.status(200).send( workouts);
    },
    
    addWorkout: (req , res) => {
       const {date, distance, time} =req.body
        workouts.push({date, distance, time, id})
        id++
        res.status(200).send(workouts);
    },

   

    updateWorkout:(req, res) => {
        const updateID = req.params.id;
        const {date, distance, time} = req.body;
        const workoutIndex = workouts.findIndex(workout=> workout.id == updateID);
        console.log(date)
        let workout = workouts[workoutIndex];

        workouts[ workoutIndex ] = {
            id: workout.id,
            date: date || workout.date,
            time: time || workout.time,
            distance: distance || workout.distance
        };
        console.log(workouts)
        res.status(200).send(workouts);
     },

       
    deleteWorkout:(req, res) => {
        const deleteID = req.params.id;
        workoutIndex = workouts.findIndex(workout=> workout.id == deleteID);
        workouts.splice(workoutIndex, 1);
        res.status(200).send(workouts);
    }
}