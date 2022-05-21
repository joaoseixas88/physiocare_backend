const { User } = require("../../models/User");

module.exports = async function deleteHomeCareService(req, res){
	const  { id }  = req.user;

	try {
		const { serviceId } = req.body;

		if(!serviceId){
			return res.status(400).json({errors: ["Invalid data"]});
		}

		const user = await User.findByIdAndUpdate(id, {$pull : { homeCareServices: {_id: serviceId } } },{returnDocument: "before",   });

		if(!user){
			return res.status(404).json({errors: ["User not found"]});
		}

		const homeCareServiceExists = user.homeCareServices.some(service => service.id === serviceId);

		const filteredServices = user.homeCareServices.filter(service => service.id !== serviceId);

		if(filteredServices === 0){
			return res.status(201).json(user.homeCareServices);
		}

		if(!homeCareServiceExists){
			return res.status(404).json({errors: ["Service not found"]});
		}
		return res.status(201).json(filteredServices);
	} catch (error) {
		return res.status(400).json({errors: ["Something went wrong"]});
	}



};
