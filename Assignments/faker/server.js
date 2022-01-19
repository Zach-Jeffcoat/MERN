const faker = require("faker");
const express1 = require("express");


const app = express1();
const port = 8000;

const createUser = (res) => {
    const newUser = {
        firstName: faker.commerce.firstName(),
        lastName: faker.commerce.lastName(),
        phoneNumber: faker.commerce.phoneNumber(),
        email: faker.commerce.email(),
        password: faker.commerce.password()
    };
    res.json(newUser);
    return newUser;
};

const createCompany = (res) => {
    const newCompany = {
        name: faker.commerce.name(),
        address: {
            street: faker.commerce.street(),
            city: faker.commerce.city(),
            state: faker.commerce.state(),
            zipCode: faker.commerce.zipCode(),
            country: faker.commerce.country()
        },
    };
    res.json(newCompany);
    return newCompany;
};

app.get("app.api",(req, res)=>{
    res.json({message:"Hello!"});
});
app.listen(port, ()=>console.log("The fires of " + {port} + " are lit!"));

app.use(express1.json());
app.use(express1.urlencoded({extended: true}));

    
const newFakeUser = createUser();
console.log(newFakeUser);

    
const newFakeCompany = createCompany();
console.log(newFakeCompany);

app.get("/api/users/new", createUser);
app.get("/api/companies/new", createCompany)
app.get("api/user/company", createUser, createCompany)