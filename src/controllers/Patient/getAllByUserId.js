
import { Patient } from "../../models/Patient"

export default async function getAllByUserId(req, res){
  const {
    name,
    price ,
    diagnosis,
    age,
    weekDays,
    user_id } = req.body
    const { id } = req.user

    try {
      const patients = await Patient.find({user_id: id})

      return res.status(200).json(patients)

    } catch (err) {
      return res.status(400).json({errors: ['Something went wrong']})
    }



}


