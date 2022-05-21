import { Router } from 'express'
import { generateToken } from '../controllers/Token/generateToken'


const app = new Router()

app.post('/',generateToken)

export default app
