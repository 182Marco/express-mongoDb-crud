const mongoose = require('mongoose')

const connectDb = async () =>{
    try {
        // mongodb connection str
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mondoDB connected: ${con.connection.host}`);
    } catch (er) {
        console.log(er);
        process.exit(true)
    }
}

module.exports = connectDb