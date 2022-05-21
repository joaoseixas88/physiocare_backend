const express = require("express");
const addNewVisit = require("../controllers/Visits/addNewVisit");
const deleteVisit = require("../controllers/Visits/deleteVisit");
const getAllVisits = require("../controllers/Visits/getAllVisits");
const updateVisit = require("../controllers/Visits/updateVisit");
const app = express.Router();


app.post("/",addNewVisit);

app.delete("/",deleteVisit);

app.get("/",getAllVisits);

app.put("/",updateVisit);


module.exports =  app;
