import { comparePassword, hashPassword, } from "../helper/authHelper.js";

import  userModel  from "../models/userModel.js";

import JWT from "jsonwebtoken"; 


export const registerController = async (req, res) => {
    try{
        const {name, email, password, phone, address} = req.body
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
        const user = await new userModel({name, email, phone, address, password:hashedPassword}).save()

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
                phone: user.phone
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

// test controller
export const testController = (req, res) => {
    try {
      res.send("Protected Routes");
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
};