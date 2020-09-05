const express = require("express");

const mongoose = require("mongoose");

const morgan = require("morgan");

const PORT =process.env.PORT || 3005;

const app =express();

app.use(morgan("dev"));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(express.static("public"));
require("./routes/htmlroutes")(app);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser:true,
    useFindAndModify: false
});
//Here are we are setting up routes

// app.use(require("./routes/api.js"));
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})

