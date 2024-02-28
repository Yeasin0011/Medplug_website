import  express  from "express";

import  {registerController, loginController, testController}  from "../controller/authController.js";

import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router()

// routing 

// Register ||  Post
router.post('/register', registerController)

// LOGIN || POST
router.post('/login', loginController)

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router
