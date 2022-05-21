
import { User } from "../../models/User"

export default async function createNewUser(req, res){
  const { name, email, password } = req.body

  try {

    const user = await User.create({ name, email, password })


    return res.status(201).json(user)

  } catch (error) {
    if(error.code === 11000){
      return res.status(400).json({errors: ['Email already in use']})
    }
    return res.status(400).json({error: 'Something went wrong'})
  }
}
