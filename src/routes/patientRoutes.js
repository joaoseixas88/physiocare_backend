const express = require("express");

const { patientController } = require("../controllers/Patient");

const app = express.Router();


app.post("/", patientController.createPatient);

app.get("/",patientController.getAllByUserId);

app.delete("/",patientController.deletePatient);

app.put("/",patientController.updatePatient);

module.exports =  app;


