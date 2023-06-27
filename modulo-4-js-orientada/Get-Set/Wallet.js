class Wallet {
    #ammout
    #username

    constructor(){
        this.#ammout = 100.99 *100
    }

    get ammout(){
        return this.#ammout / 100
    }

    set username(newUsername){
        if(typeof newUsername === 'string'){
       this.#username = newUsername
     }else{
        console.log('Username must be of type string')
     }
    }

    get username(){
        return this.#username    }
}

const myWallet = new Wallet()

console.log(myWallet.ammout)

myWallet.username = 'Filipe'
console.log(myWallet.username)

myWallet.username = true
