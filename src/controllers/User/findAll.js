const { User } = require("../../models/User");

module.exports = async function(req, res){

	try {
		const users = await User.find();
		return res.json(users);
	} catch (error) {
		return res.json("Something went wrong");
	}

};
