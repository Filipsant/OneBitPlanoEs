class User {
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password){
       if(this.email === email && this.password === password) {
        console.log("Login realizado com sucesso!")
       }else{
        console.log("Email ou senha incorreta")
       }
    }
}

const jhon = new User ("jhon doe", "jhon@email.com", "1234")

console.log(jhon)
jhon.login("jhon@email.com", "1234")
