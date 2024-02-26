import  express  from "express";

import  {registerController}  from "../controller/authController.js";

// router object
const router = express.Router()

// routing 

// Register || Method Post
router.post('/register', registerController)

export default router
