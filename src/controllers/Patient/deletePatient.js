const { Patient } = require("../../models/Patient");

module.exports = async function deletePatient(req, res){

	const { id } = req.user;
	const { patient_id } = req.body;

	try {
		const patient = await Patient.findOneAndUpdate(
			{_id: patient_id, user_id: id, isDeleted: false },
			{ isDeleted: true},
			{returnDocument: "after"});

		if(!patient){
			return res.status(404).json({errors: ["Patient not found"]});
		}

		return res.status(201).json(patient);

	} catch (err) {
		return res.status(400).json({errors: ["Something went wrong"]});
	}



};


