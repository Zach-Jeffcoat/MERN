const mongoose = require("mongoose");

const dbName = "authorsDB";

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`You are connected to the database called ${dbName}`)
    })
    .catch((err)=>{
        console.log(`you had a problem connectiing the the${dbName}. Here is your error:`, err)
    })