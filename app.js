const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// My routes
const allRoutes = require("./routes/all");

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + "/public")))
app.set("view engine", "ejs");

// My routes
app.use("/", allRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App is running ${port}`);
});