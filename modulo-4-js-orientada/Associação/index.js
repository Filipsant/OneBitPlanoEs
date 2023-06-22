const Address = require("./Address");
const Person = require("./Person");

const addr = new Address ("7 de setembro", 9,  "centro", "Suzano","São Paulo")
const jhon = new Person ("Jhon Doe", addr)

console.log(jhon)
console.log(jhon.address.fullAddress())