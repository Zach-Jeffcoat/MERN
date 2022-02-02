const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
setup: {
    type: String,
},
punchline: {
    type:String
}
}, {timestamps: true})


const joke = mongoose.model("joke", jokeSchema);


module.exports = joke;