const { Patient } = require("../../models/Patient");

module.exports = async function createPatient(req, res){

	const { id } = req.user;

	try {
		const patient = await Patient.create({...req.body, user_id: id});

		return res.status(201).json(patient);

	} catch (err) {
		return res.status(400).json({errors: ["Something went wrong"]});
	}



};


