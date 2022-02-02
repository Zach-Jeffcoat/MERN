const express = require("express");
const cors = require("cors");
const app = express();

//Middleware!
app.use(express.json()); //JSON payloads
app.use(express.urlencoded({extended: true})); //JSON arrays/strings
app.use(cors({
    origin: "localhost: 3000" //React port by default
}))

//Need to require config, need torequire routes
require("./routes/game.routes")(app);


require("./config/mongoose.config");


app.listen(8000, ()=> console.log("You're connected to Port 8000!"))
