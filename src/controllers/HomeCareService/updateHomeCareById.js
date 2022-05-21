const { User } = require("../../models/User");

module.exports = async function updateHomeCareService(req, res){
	const  { id }  = req.user;

	try {
		const { name, price, homeCare_id } = req.body;

		if(!name || !price){
			return res.status(400).json({errors: ["Invalid data"]});
		}

		const user = await User.findOneAndUpdate(
			{_id: id, "homeCareServices._id": homeCare_id},
			{$set: { "homeCareServices.$": { ...req.body, _id: homeCare_id , updated_at: Date.now() } } },
			{returnDocument: "after"});

		if(!user){
			return res.status(404).json({errors: ["User not found"]});
		}

		return res.status(201).json(user.homeCareServices);
	} catch (error) {
		return res.status(400).json({errors: ["Something went wrong"]});
	}



};
