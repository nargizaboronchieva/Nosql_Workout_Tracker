const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
      {
        type: {
            type:String,
            trim: true,
            required:"Enter your exercise type"
        },
        name:{
            type: String,
            trim: true,
            required: true
        },
        duration:{
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
      }
  ]
});

workoutSchema.virtual("totalDuration").get(function () {
return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
    }, 0);
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
