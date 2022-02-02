const express=require("express");
const cors = require("cors");
const app=express();
//Middleware!
app.use(express.json);
app.use(express.json(express.urlencoded({extended: true})));

app.use(
    cors({
        origin: "http://localhost:3000"
    })
)
require("./config/mongoose.config.js");
require("./routes/product.routes.js")(app);
app.listen(port, ()=>{
    console.log("Listening on port 8000!")});