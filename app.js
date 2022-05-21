import dotenv from 'dotenv'
import express from 'express'
dotenv.config()
import homeRoutes from './src/routes/homeRoutes'
import userRoutes from './src/routes/userRoutes'
import patientRoutes from './src/routes/patientRoutes'
import tokenRoutes from './src/routes/tokenRoutes'
import visitsRoutes from './src/routes/visitsRoutes'
import homeCareServicesRoutes from './src/routes/homeCareServicesRoutes'
import './src/database/database'
import bodyParser from 'body-parser'
import { loginRequired } from './src/middlewares/loginRequired'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(homeRoutes)

app.use('/user',userRoutes)

app.use('/token',tokenRoutes)

app.use('/homecareservices',loginRequired,homeCareServicesRoutes)

app.use('/patients',loginRequired,patientRoutes)

app.use('/visits',loginRequired,visitsRoutes)

export default app


