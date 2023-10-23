const mongoose = require("mongoose")

const dbConnection = async () => {
    console.log('Connecting to database')
    try {
        await mongoose.connect(process.env.MONGODB_CNN);
       // console.log('Database is Online'.green)
    } catch (error) {
        console.clear();
        console.log(error)
        throw new Error('Database is Offline');
    }
}

module.exports = {
    dbConnection,
}