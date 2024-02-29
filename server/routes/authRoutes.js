import  express  from "express";

import  {registerController, loginController, testController, forgotPasswordController}  from "../controller/authController.js";

import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router()

// routing 

// Register ||  Post
router.post('/register', registerController)

// LOGIN || POST
router.post('/login', loginController)

// Forgot Password || POST
router.post ('/forgot-password', forgotPasswordController)


// Auth Route / Protected Route
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok:true }); 
});

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router
