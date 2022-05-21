import { Patient } from "../../models/Patient";

export async function deleteVisit(req, res){
  const { id } = req.user
  const { patient_id, visit_id } = req.body

  if(!patient_id || !visit_id){
    return res.status(400).json({errors: ['Invalid data']})
  }
  try {
    const patient = await Patient.findByIdAndUpdate(patient_id, {$pull: { visits: { _id: visit_id}}},{returnDocument: 'after'})

    if(!patient){
      return res.status(400).json({errors: ['Patient not found']})
    }

    if(patient.user_id !== id){
      return res.status(400).json({errors: ['This patient is not from this user']})
    }

    return res.status(201).json(patient)
  } catch (err) {

  }
}
