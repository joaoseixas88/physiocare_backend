const { User } = require("../../models/User");

module.exports = async function(req, res) {
	const  { id }  = req.user;

	if(!id){
		return res.status(404).json({errors:["User not found"]});
	}
	try {
		const user = await User.findByIdAndUpdate(id,{
			isDeleted: true
		},
		{returnDocument: "after"});

		return res.status(201).json(user);

	} catch (error) {
		return res.json("Something went wrong");
	}
};

