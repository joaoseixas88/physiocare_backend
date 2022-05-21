const { User } = require("../../models/User");

module.exports = async function(req, res) {
	const  { id }  = req.user;

	try {
		const user = await User.findById(id);
		return res.status(200).json(user);
	} catch (error) {
		return res.status(400).json("Something went wrong");
	}
};

