import { Router } from "express";
import { userController } from "../controllers/User";
import { loginRequired } from "../middlewares/loginRequired";
const app = Router()

// app.get('/', userController.findAll)

app.get('/',loginRequired,userController.findUserById)

app.post('/', userController.createUser)


app.delete('/',loginRequired, userController.deleteUser)

app.put('/',loginRequired,userController.updateUser)




export default app


