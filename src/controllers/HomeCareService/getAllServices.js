const { User } = require("../../models/User");

module.exports = async function getAllServices(req, res){
	const { id } = req.user;

	try {
		const user = await User.findById(id);

		const { homeCareServices } = user;

		return res.status(200).json(homeCareServices);

	} catch (error) {
		return res.status(400).json({errors: ["Something went wrong"]});
	}
};
