const faker = require("faker");
const express1 = require("express");


const app = express1();
const port = 8000;

const createUser = (res) => {
    const newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
};

const createCompany = (res) => {
    const newCompany = {
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        },
    };
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