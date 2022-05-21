const express = require("express");
const { userController } = require("../controllers/User");
const  { loginRequired }  = require("../middlewares/loginRequired");

const app = express.Router();



app.get("/",loginRequired,userController.findUserById);

app.post("/", userController.createUser);


app.delete("/",loginRequired, userController.deleteUser);

app.put("/",loginRequired,userController.updateUser);



module.exports = app;


