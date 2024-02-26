import { hashPassword, } from "../helper/authHelper.js";
import  userModel  from "../models/userModel.js";

export const registerController = async (req, res) => {
    try{
        const {name, email, password, phone, address} = req.body
        // Valdition
        if(!name){
            return res.send({error:"Name is reqruied"})}
        if(!email){
            return res.send({error:"Email is reqruied"})}    
        if(!password){
            return res.send({error:"Password is reqruied"})}            
        if(!phone){
            return res.send({error:"Phone is reqruied"})}
        if(!address){
            return res.send({error:"Address is reqruied"})}
        // check for existing user
        const existingUser = await userModel.findOne({email})
        // existing user
        if (existingUser){
            return res.status(200).send({
                message:'Already egistered please proceed to login',
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