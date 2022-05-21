const express = require("express");
const createHomeCareService = require("../controllers/HomeCareService/createHomeCareService");
const deleteHomeCareService = require("../controllers/HomeCareService/deleteHomeCareService");
const getAllServices = require("../controllers/HomeCareService/getAllServices");
const updateHomeCareService = require("../controllers/HomeCareService/updateHomeCareById");

const app = express.Router();





app.post("/",createHomeCareService);

app.get("/services",getAllServices);

app.delete("/",deleteHomeCareService);

app.put("/",updateHomeCareService);

module.exports =  app;
