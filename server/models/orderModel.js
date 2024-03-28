import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        products : [{
            type:mongoose.ObjectId,
            ref: "Products"
        },
        ],
        payment:{},
        buyer:{
            typer:mongoose.ObjectId,
            ref: "user",
        },
        status:{
            type:String,
            default:'Not Process',
            enum:["Not Process", "Processing", "Shipped","Delivered","Cancel"],
        },
    },
    {timestamps:true}
);

export default mongoose.model("Order", orderSchema);