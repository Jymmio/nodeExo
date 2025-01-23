import mongoose from "mongoose"
const MONGO_URI = 'mongodb+srv://nbouzidi:XmbTH6QNQzbjH2QR@cluster0.yujln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

export async function connectToDB() {
    await mongoose.connect(MONGO_URI);
}