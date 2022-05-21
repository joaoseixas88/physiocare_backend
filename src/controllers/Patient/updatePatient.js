
import { Patient } from "../../models/Patient"

export default async function updatePatient(req, res){
  const {
    name,
    price,
    diagnosis,
    age,
    weekDays,
    patient_id,
  } = req.body
    const { id } = req.user

    try {
      const patient = await Patient.findOneAndUpdate(
        {_id: patient_id, user_id: id, isDeleted: false},
        {
          name,
          price,
          diagnosis,
          age,
          weekDays,
          updated_at: Date.now()
        },{returnDocument: 'after'})

       if(!patient){
        return res.status(404).json({errors: ['Patient not found']})
      }

      return res.status(201).json(patient)

    } catch (err) {
      return res.status(400).json({errors: ['Something went wrong']})
    }



}


