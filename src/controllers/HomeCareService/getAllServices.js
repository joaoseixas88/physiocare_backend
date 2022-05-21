import { User } from "../../models/User";

export const getAllServices = async (req, res) =>{
  const { id } = req.user

  try {
    const user = await User.findById(id)

    const { homeCareServices } = user

    return res.status(200).json(homeCareServices)

  } catch (error) {
    return res.status(400).json({errors: ['Something went wrong']})
  }
}
