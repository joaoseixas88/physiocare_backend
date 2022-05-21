
import { Patient } from "../../models/Patient"

export default async function createPatient(req, res){
  const {
    name,
    price ,
    diagnosis,
    age,
    weekDays,
    visits,
    user_id } = req.body
    const { id } = req.user

    try {
      const patient = await Patient.create({...req.body, user_id: id})

      return res.status(201).json(patient)

    } catch (err) {
      return res.status(400).json({errors: ['Something went wrong']})
    }



}


