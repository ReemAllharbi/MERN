const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;


//create user class
class User {
  constructor() {
    this._id = faker.datatype.number();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.number();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}
const newUser = new User();
console.log(newUser);


//create adress class
class Address {
  constructor() {
    this.street = faker.address.streetAddress();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.zipCode = faker.address.zipCode();
    this.country = faker.address.country();
  }
}
const newAdd = new Address();


//create company class
class Company {
  constructor() {
    this._id = faker.datatype.number();
    this.name = faker.company.name();
    this.address = newAdd;
  }
}
const newComp = new Company();
console.log(newComp);


//Create an api route
app.get("/api/users/new", (req, res) => {
  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  res.json(newComp);
});

app.get("/api/user/company", (req, res) => {
  res.json(newComp);
  res.json(newUser);
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );
