const { Patient } = require("../../models/Patient");

module.exports = async function getAllVisits(req, res){
	const { patient_id } = req.body;
	const { id } = req.user;

	try {
		const patient = await Patient.findOne({_id: patient_id ,user_id: id, isDeleted: false});

		if(!patient){
			return res.status(404).json({errors: ["Patient not found"]});
		}

		return res.status(200).json(patient.visits);

	} catch (err) {
		return res.status(400).json({errors: ["Something went wrong"]});
	}



};


