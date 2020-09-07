const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  duration: 
    {
    type: Number,
  },
  distance: {
    type: Number,
  },
});

const WorkoutSchema = new Schema({
  day: {
    type: Date, 
    default: Date.now,
  },
  exercises: [ExerciseSchema],
}, { toJSON: {
    virtuals: true
} }
);
WorkoutSchema.virtual('totalDuration').get(function() {
    return this.exercises.reduce((total, exerecise) => {
        return total + exerecise.duration
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
//reduce