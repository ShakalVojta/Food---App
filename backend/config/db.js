import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://vojtatynavsky:Vojtomil123@cluster0.oxhlorj.mongodb.net/food-del').then(()=> console.log("DB is ready"))
}