import { Router } from "express";
import { addNewVisit } from "../controllers/Visits/addNewVisit";
import { deleteVisit } from "../controllers/Visits/deleteVisit";
import getAllVisits from "../controllers/Visits/getAllVisits";
import { updateVisit } from "../controllers/Visits/updateVisit";
const app = Router()


app.post('/',addNewVisit)

app.delete('/',deleteVisit)

app.get('/',getAllVisits)

app.put('/',updateVisit)


export default app
