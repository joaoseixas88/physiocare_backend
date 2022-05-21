const { Patient } = require("../../models/Patient");

module.exports = async function getAllByUserId(req, res){

	const { id } = req.user;

	try {
		const patients = await Patient.find({user_id: id});

		return res.status(200).json(patients);

	} catch (err) {
		return res.status(400).json({errors: ["Something went wrong"]});
	}



};


