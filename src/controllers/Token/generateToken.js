import jwt from 'jsonwebtoken'
import { User } from '../../models/User'
import bcryptjs from 'bcryptjs'

const generateToken = async (req, res) => {
  const { email, password } = req.body

  if(!email || !password){
    return res.status(401).json({errors: ['Invalid credentials']})
  }

  const user = await User.findOne({email}).select('password').exec()

  if(!user){
    return res.status(404).json({errors: ['User not found']})
  }

  if(!(await bcryptjs.compare(password, user.password))){
    return res.status(400).json({ errors: ["Email or password is invalid"] })
  }

  const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token });

}


export { generateToken }
