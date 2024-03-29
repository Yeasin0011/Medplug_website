import { comparePassword, hashPassword, } from "../helper/authHelper.js";

import  userModel  from "../models/userModel.js";

import JWT from "jsonwebtoken"; 


export const registerController = async (req, res) => {
    try{
        const {name, email, password, phone, address, answer} = req.body
        // Valdition
        if(!name){
            return res.send({message:"Name is reqruied"})}
        if(!email){
            return res.send({message:"Email is reqruied"})}    
        if(!password){
            return res.send({message:"Password is reqruied"})}            
        if(!phone){
            return res.send({message:"Phone is reqruied"})}
        if(!address){
            return res.send({message:"Address is reqruied"})}
        if(!answer){
            return res.send({message:"Keyword is reqruied"})}
        // check for existing user
        const existingUser = await userModel.findOne({email})
        // existing user
        if (existingUser){
            return res.status(200).send({
                success:false,
                message:'Already Registered please proceed to login',
            })
        }
        // register user
        const hashedPassword = await hashPassword(password)
        //save
        const user = await new userModel({name, email, phone, address, answer, password:hashedPassword}).save()

        res.status(201).send({
            success : true,
            message: "User Register Successfully!!",
            user,
        });
    }catch (error){
        console.log(error)
        res.status(500).send({
            status: false,
            message:"Error in registration form",
            error
        })
    }
};


// POST LOGIN
export const loginController = async (req, res) => {
    try{
        const {email, password} = req.body
        if (!email || !password){
            return res.status(404).send({
                sucess:false,
                message: "Invalid Password or Email, Please Try Again"
            })
        }
        // Check User
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not rergistered, please Signup"
            })
        }
        const match = await comparePassword(password, user.password);
        if(!match){
            return res.status(200).send({
                success:false,
                message:'Invalid Password'
            });
        }
        // Token
        const token = await JWT.sign({ _id: user._id}, process.env.JWT_SECRET,{
            expiresIn: '7d',
        });
        res.status(200).send({
            success: true, 
            message: 'Login Successfully!',
            user:{
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
            },
            token,
        }); 
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Login',
            error
        })
    }
};
// Forgot Password.
export const forgotPasswordController = async(req, res) =>{
    try{
        const {email, answer, newPassword} = req.body
        if(!email){
            res.status(400).send({
                messsage:'Email is required'
            })
        }
        if(!answer){
            res.status(400).send({
                messsage:'Answer is required'
            })
        }
        if(!newPassword){
            res.status(400).send({
                messsage:'New Password is required'
            })
        }
        // checking process:
        const user = await userModel.findOne({email, answer})
        // validation
        if(!user){
            return res.status(404).send({
                sucess:false,
                message:'Wrong Email or Answer'
            })
        }
        const hashed = await hashPassword(newPassword)
        await userModel.findByIdAndUpdate(user._id, {password:hashed})
        res.status(200).send({
           success: true,
           message: 'Password Updated Successfully'
        })
    }catch (error){
        res.status(500).send({
            success:false,
            message:'Something went wrong',
            error
        })
    }
}



//orders
export const getOrdersController = async (req, res) => {
    try {
        const orders = await orderModel.find({buyer:req.user.__id}).populate('products', '-photo').populate("buyer","name")
        res.json(orders); 
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message:'Error while getting orders',
            error
        })
    }
};

//all orders
export const getAllOrdersController = async (req, res) => {
    try {
        const orders = await orderModel.find
        ({}).populate('products', '-photo').populate("buyer","name");
        sort({createdAt: "-1"})
        res.json(orders); 
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message:'Error while getting orders',
            error
        })
    }
};

// order Status
export const orderStatusController = async (req, res) =>{
    try {
        const { orderId } = req.params
        const { status } = req.body
        const orders = await orderModel.findByIdAndUpdate(orderId, {status}.{new:true});
        res.json(orders); 
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: 'Error while updateing order',
            error
        })
    }
}
// test controller
export const testController = (req, res) => {
    try {
      res.send("Protected Routes");
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
};


//update profile 
export const updateProfileController = async (req, res) => {
    try {
        const{name,email,password,address,phone} = req.body
        const user = await userModel.findById(req.user._id)
        //password
        if (password && password.length < 6){
            return res.json({ error: 'Password is required and 6 character long'});
        }
        const hashedPassword = password ? await hashPassword(password) : undefined
        const updatedUser= await userModel.findByIdAndUpdate(req.user._id,{
            name: name || user.name,
            password: hashedPassword || user.password,
            phone: phone || user.phone,
            address: address || user.address,
        },
        {new:true})
res.status(200).send({
    success: true,
    message: 'Profile updated successfully',
    updatedUser,
});

        
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success:false,
            message:'Error While Updating Profile',
            error
        })   
    }
};