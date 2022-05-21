const  createPatient  = require("./createPatient");
const  getAllByUserId  = require("./getAllByUserId");
const  deletePatient  = require("./deletePatient");
const  updatePatient  = require("./updatePatient");



const patientController = {
	createPatient,
	getAllByUserId,
	deletePatient,
	updatePatient
};

module.exports =  {patientController};
