import mongoose from "mongoose";


const quoteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }

})

mongoose.model("Quote", quoteSchema);