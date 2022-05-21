import createPatient from './createPatient'
import getAllByUserId from './getAllByUserId'
import deletePatient from './deletePatient'
import updatePatient from './updatePatient'



const patientController = {
  createPatient,
  getAllByUserId,
  deletePatient,
  updatePatient
}

export {patientController}
