const mongoose = require("mongoose")
const { MONGO_DB_URI } = require('./config-env')
exports.ConnectDB = async () => {
    try {
        await mongoose.connect(MONGO_DB_URI)
        console.log(`the db is connect with ${mongoose.connection.host}`);
    } catch (error) {
        await mongoose.disconnect()
        process.exit(1)
    }
}