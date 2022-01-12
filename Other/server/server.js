const express = require("express");
const faker = require("faker");
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}));
//C:Create=POST
//R:Read=GET
//U:UPDATE=PUT
//D:DESTROY=DELETE
//routes
//logic for routes


// app.get("/api/welcome", (request, response)=>{
//     console.log(request);
//     console.log("Welcome to the Welcome API Route!")
// })

app.get("/api/welcome", (request, response)=>{
    console.log("This is our post!");
    response.json({message: "Welcome to the API! This is the response!"})
})

app.post("/api/welcome", (request, response)=>{
    console.log("This is our post!");
    response.json(request.body)
})

app.get("/api/faker", (request, response)=>{

    const name = faker.name.firstName();
    const email = faker.internet.email();

    response.json({
        firstName: name,
        userEmail: email
    })
})

app.listen(8000, ()=>console.log("Welcome to Port 8000!"))