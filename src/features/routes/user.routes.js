// import express from express-module
import express from 'express'

// import employeeController and create instance
import UserController from '../controllers/userController.js'
const userController = new UserController()

// import authentication middlewares
import { adminAuth } from '../../middleware/auth.middleware.js';

// create router using express router
const userRouter = express.Router()

userRouter.get('/', userController.homePage) 

// list required user routes
userRouter.get('/register', userController.getRegisterForm)
userRouter.get('/login', userController.getloginForm)
userRouter.post('/register', userController.create)
userRouter.post('/login', userController.login)
userRouter.get('/logout', userController.logout)

userRouter.get("/employeeList",adminAuth, userController.employeeList)
userRouter.get("/addEmployee",adminAuth, userController.getAddEmployeeForm)
userRouter.get("/updateEmployee/:id",adminAuth, userController.getUpdateEmployeeForm)
userRouter.delete("/removeEmployee/:id",adminAuth, userController.removeEmployee)
userRouter.post("/update/:id",adminAuth, userController.updateEmployee)
userRouter.post("/toggleRole/:id",adminAuth, userController.updateRole)

// export router 
export default userRouter