import  express  from "express";

import  {registerController, loginController, testController, forgotPasswordController, getOrdersController}  from "../controller/authController.js";

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


// Auth Route / Protected Route (User)
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok:true }); 
});

// Auth Route / Protected Route (Admin)
router.get('/admin-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok:true }); 
});

//orders 
router.get('/orders', requireSignIn, getOrdersController)

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router
