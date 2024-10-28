import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name: String,
    jobRole:String,
    gender:String,
    email: String,
    password: String,

})

export default mongoose.model("Employee", EmployeeSchema);