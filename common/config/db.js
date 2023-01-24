const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"

const connect = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(uri);
        console.log("Successfully connected to Mongo DB")
    } catch (error) {
        throw new Error(error);
    }
}

exports.connect = connect;