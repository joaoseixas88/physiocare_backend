const { User } = require("../../models/User");

async function updateUser(req, res){
	const { id } = req.user;
	const { name, email } = req.body;

	try {

		const user = await User.findByIdAndUpdate(id,
			{ name, email },
			{returnDocument: "after"});


		return res.json(user);

	} catch (error) {
		if(error.code === 11000){
			return res.status(400).json({errors: ["Email already in use"]});
		}
		return res.status(400).json({error: "Something went wrong"});
	}
}

module.exports = updateUser;
