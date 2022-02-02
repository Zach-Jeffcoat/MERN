const mongoose= require("mongoose");
const dbName = "roducts4";
mongoose.connect(`mongodb:/localhost/${dbName}`, {
    useNewUrlParser: true,
    udeUnifiedTypology: true,
})
    .then(()=>console.log(`Connected to ${dbName} database`))
    .catch((err)=> console.log(err))