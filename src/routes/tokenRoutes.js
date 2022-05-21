const express = require("express");

const { generateToken } = require("../controllers/Token/generateToken");

const app = express.Router();


app.post("/",generateToken);

module.exports =  app;
