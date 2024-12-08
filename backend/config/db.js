import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(`mongodb+srv://ayushnikhara2002:Ayush2002@e-commerce.t7veb.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce`).then(() => console.log("DB connected"));
    //yaha pr `` iske andar apna monogodburl dal deS
}