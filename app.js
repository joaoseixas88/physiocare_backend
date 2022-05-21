const dotenv = require("dotenv");
const express = require("express");
dotenv.config();
const userRoutes = require("./src/routes/userRoutes");
const patientRoutes = require("./src/routes/patientRoutes");
const tokenRoutes = require("./src/routes/tokenRoutes");
const visitsRoutes = require("./src/routes/visitsRoutes");
const homeCareServicesRoutes = require("./src/routes/homeCareServicesRoutes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { loginRequired } = require("./src/middlewares/loginRequired");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGO_URL);


app.use("/user",userRoutes);

app.use("/token",tokenRoutes);

app.use("/homecareservices",loginRequired,homeCareServicesRoutes);

app.use("/patients",loginRequired,patientRoutes);

app.use("/visits",loginRequired,visitsRoutes);

module.exports = app;


