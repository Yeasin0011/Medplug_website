import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true,
        trim:true,
    },
    email:{
        type: String,
        require: true, 
        unique: true
    },
    password:{
        type: String,
        required:true,        
    },
    phone:{
        type: String,
        required: true,
    },
    address:{
        type:String,
        required: true,
    },
    role:{
        type:Boolean,
        default: false,
    }
},{timestamps:true})

export default mongoose.model('user', userSchema)