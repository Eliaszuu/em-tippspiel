const {MongoClient} = require("mongodb");


async function connectToDb() {
    const uri = "mongodb://localhost:27017/em-tippspiel";

    try {
        const mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
        const db = mongoClient.db("em-tippspiel")

        return db;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
}

module.exports = {connectToDb};