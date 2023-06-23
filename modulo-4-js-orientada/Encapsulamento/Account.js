class Account {
    #password
    #balance
   constructor (user){
    this.email = user.email
    this.#password = user.password
    this.#balance = 0
   }
}

const user ={
    email: "filipe@email.com",
    password: "1234"
}

const myAccount = new Account(user)

console.log(myAccount)

myAccount.password = "12345"
myAccount.balance = 99999

