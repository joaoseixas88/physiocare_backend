const { User } = require("../../models/User");

module.exports = async function createHomeCareService(req, res){
	const  { id }  = req.user;

	try {
		const { name, price } = req.body;

		if(!name || !price){
			return res.status(400).json({errors: ["Invalid data"]});
		}

		const user = await User.findByIdAndUpdate(id, {$push : { homeCareServices: { name, price } } },{returnDocument: "after"});
		if(!user){
			return res.status(404).json({errors: ["User not found"]});
		}



		return res.status(201).json(user.homeCareServices);
	} catch (error) {
		return res.status(400).json({errors: ["Something went wrong"]});
	}

};
