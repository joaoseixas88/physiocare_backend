import { Patient } from "../../models/Patient";

export async function updateVisit(req, res){
  const { id } = req.user
  const { patient_id, visit_id } = req.body

  if(!patient_id){
    return res.status(400).json({errors: ['Invalid data']})
  }
  try {
    const patient = await Patient.findOneAndUpdate(
      {_id: patient_id, user_id: id,"visits._id": visit_id},
      {$set: { "visits.$.updated_at": Date.now() }},
      {returnDocument: 'after'})


    if(!patient){
      return res.status(404).json({errors: ['Patient not found']})
    }

    const filteredVisits = patient.visits.filter(visit => visit.id === visit_id)

    return res.status(201).json(filteredVisits)
  } catch (err) {
    return res.json(err)
  }
}
