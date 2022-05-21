const  createUser  = require("./createUser");
const  findUserById  = require("./findUserById");
const  updateUser  = require("./updateUser");
const  deleteUser  = require("./deleteUser");



const userController = {
	createUser,
	findUserById,
	updateUser,
	deleteUser
};

module.exports = { userController };
