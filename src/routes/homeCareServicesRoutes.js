import { Router } from "express";
import { createHomeCareService } from "../controllers/HomeCareService/createHomeCareService";
import { deleteHomeCareService } from "../controllers/HomeCareService/deleteHomeCareService";
import { getAllServices } from "../controllers/HomeCareService/getAllServices";
import { updateHomeCareService } from "../controllers/HomeCareService/updateHomeCareById";

const app = Router()


app.post('/',createHomeCareService)

app.get('/services',getAllServices)

app.delete('/',deleteHomeCareService)

app.put('/',updateHomeCareService)

export default app
