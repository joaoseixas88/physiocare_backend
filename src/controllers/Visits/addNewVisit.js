import { Patient } from "../../models/Patient";

export async function addNewVisit(req, res){
  const { id } = req.user
  const { patient_id } = req.body

  if(!patient_id){
    return res.status(400).json({errors: ['Invalid data']})
  }
  try {
    const patient = await Patient.findOneAndUpdate({_id: patient_id, user_id: id}, {$push: { visits: {updated_at: Date.now()}}},{returnDocument: 'after'})

    if(!patient){
      return res.status(400).json({errors: ['Patient not found']})
    }

    return res.status(201).json(patient.visits)
  } catch (err) {

  }
}
