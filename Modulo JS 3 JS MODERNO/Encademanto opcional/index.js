const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
        name: "mary",
        address:{
           street: "Some Street",
           number: 89
        }
    }],
    age: 42,
    phone:{
        coutryCode: "+55",
        ddd: "22",
        number: "998765432"
    }

}

//console.log(user.friends[0].phone.ddd)
console.log(user?.friends[0]?.phone?.ddd)

console.log(user.brothers?.[5].name)