import { Router } from "express";
import { patientController } from "../controllers/Patient";
const app = Router()


app.post('/', patientController.createPatient)

app.get('/',patientController.getAllByUserId)

app.delete('/',patientController.deletePatient)

app.put('/',patientController.updatePatient)

export default app


