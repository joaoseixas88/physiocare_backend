import { Router } from "express";
const app = Router()

app.get('/', (req, res) => {
  return res.json({message: 'HelloWorld'})
})


export default app
